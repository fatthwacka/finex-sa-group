'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation type: 'grow' scales up, 'slide' moves in from direction */
  type?: 'grow' | 'slide';
  /** Direction for slide animations */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** Delay before animation starts (stagger cards with 0.1 increments) */
  delay?: number;
  /** Animation duration in seconds (default 0.5) */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
  /** Animation timing: 'linear' for smooth constant speed, 'ease' for subtle ease-out */
  timing?: 'linear' | 'ease';
}

export default function ScrollReveal({
  children,
  type = 'grow',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  timing = 'linear',
}: ScrollRevealProps) {
  // Slide direction offsets
  const slideOffsets = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  };

  // Initial state based on animation type
  // Grow: starts at scale 0.5 for a subtler effect
  // Includes slight opacity for smoother appearance
  const initial = type === 'grow'
    ? {
        scale: 0.5,
        opacity: 0.3,
      }
    : {
        opacity: 0,
        ...slideOffsets[direction],
      };

  // Final animated state
  const animate = type === 'grow'
    ? {
        scale: 1,
        opacity: 1,
      }
    : {
        opacity: 1,
        x: 0,
        y: 0,
      };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{
        once: true,
        // Trigger at 15% visibility
        amount: 0.15,
      }}
      transition={{
        duration,
        delay: delay * 0.03,
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier
      }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
