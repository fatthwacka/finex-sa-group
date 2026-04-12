'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface EnergySwooshProps {
  variant?: 'divider' | 'background' | 'accent';
  className?: string;
  /** Brightness level - higher = more visible */
  brightness?: 'normal' | 'bright' | 'ultra';
}

export default function EnergySwoosh({
  variant = 'divider',
  className = '',
  brightness = 'bright'
}: EnergySwooshProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [colors, setColors] = useState({
    cyan: '#00A9E0',
    purple: '#892890',
    red: '#EE2737',
    orange: '#ff7a1a',
  });

  // Brightness multipliers
  const opacityMultiplier = brightness === 'ultra' ? 1 : brightness === 'bright' ? 0.85 : 0.5;
  const strokeMultiplier = brightness === 'ultra' ? 2.5 : brightness === 'bright' ? 2 : 1;

  // Resolve CSS custom properties to actual color values for SVG compatibility
  useEffect(() => {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);

    setColors({
      cyan: computedStyle.getPropertyValue('--color-cyan').trim() || '#00A9E0',
      purple: computedStyle.getPropertyValue('--color-purple').trim() || '#892890',
      red: computedStyle.getPropertyValue('--color-red').trim() || '#EE2737',
      orange: computedStyle.getPropertyValue('--color-orange').trim() || '#ff7a1a',
    });
  }, []);

  const gradientId = `swoosh-gradient-${variant}-${Math.random().toString(36).substr(2, 9)}`;

  if (variant === 'divider') {
    return (
      <div ref={containerRef} className={`w-full h-full ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.cyan} />
              <stop offset="30%" stopColor={colors.purple} />
              <stop offset="60%" stopColor={colors.red} />
              <stop offset="100%" stopColor={colors.orange} />
            </linearGradient>
            <linearGradient id={`${gradientId}-2`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.purple} />
              <stop offset="40%" stopColor={colors.red} />
              <stop offset="100%" stopColor={colors.orange} />
            </linearGradient>
            <linearGradient id={`${gradientId}-3`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.cyan} />
              <stop offset="60%" stopColor={colors.purple} />
              <stop offset="100%" stopColor={colors.red} />
            </linearGradient>
          </defs>
          {/* Primary swoosh - thick and bright */}
          <motion.path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60"
            stroke={`url(#${gradientId})`}
            strokeWidth={8 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            opacity={opacityMultiplier}
          />
          {/* Secondary swoosh - overlapping */}
          <motion.path
            d="M0,70 C300,10 600,130 900,70 C1200,10 1350,100 1440,55"
            stroke={`url(#${gradientId}-2)`}
            strokeWidth={6 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            opacity={opacityMultiplier * 0.8}
          />
          {/* Tertiary swoosh - subtle overlap */}
          <motion.path
            d="M0,50 C200,100 500,-10 800,60 C1100,130 1300,30 1440,65"
            stroke={`url(#${gradientId}-3)`}
            strokeWidth={4 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            opacity={opacityMultiplier * 0.6}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'background') {
    return (
      <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Primary gradient - full spectrum */}
            <linearGradient id={`${gradientId}-1`} x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor={colors.cyan} stopOpacity={opacityMultiplier} />
              <stop offset="30%" stopColor={colors.purple} stopOpacity={opacityMultiplier * 0.9} />
              <stop offset="60%" stopColor={colors.red} stopOpacity={opacityMultiplier * 0.9} />
              <stop offset="100%" stopColor={colors.orange} stopOpacity={opacityMultiplier} />
            </linearGradient>
            {/* Secondary gradient - warm end */}
            <linearGradient id={`${gradientId}-2`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.purple} stopOpacity={opacityMultiplier * 0.9} />
              <stop offset="50%" stopColor={colors.red} stopOpacity={opacityMultiplier * 0.85} />
              <stop offset="100%" stopColor={colors.orange} stopOpacity={opacityMultiplier * 0.9} />
            </linearGradient>
            {/* Tertiary gradient - cool end */}
            <linearGradient id={`${gradientId}-3`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.cyan} stopOpacity={opacityMultiplier * 0.9} />
              <stop offset="50%" stopColor={colors.purple} stopOpacity={opacityMultiplier * 0.85} />
              <stop offset="100%" stopColor={colors.red} stopOpacity={opacityMultiplier * 0.8} />
            </linearGradient>
          </defs>

          {/* Swoosh 1 - Primary large wave */}
          <motion.path
            d="M-200,400 Q400,50 800,400 T1640,350"
            stroke={`url(#${gradientId}-1)`}
            strokeWidth={12 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                'M-200,400 Q400,50 800,400 T1640,350',
                'M-200,380 Q400,700 800,380 T1640,420',
                'M-200,400 Q400,50 800,400 T1640,350',
              ],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Swoosh 2 - Secondary overlapping wave */}
          <motion.path
            d="M-200,300 Q500,550 1000,280 T1640,320"
            stroke={`url(#${gradientId}-2)`}
            strokeWidth={10 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                'M-200,300 Q500,550 1000,280 T1640,320',
                'M-200,320 Q500,50 1000,340 T1640,280',
                'M-200,300 Q500,550 1000,280 T1640,320',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              delay: 3,
            }}
          />

          {/* Swoosh 3 - Tertiary wave lower */}
          <motion.path
            d="M-200,550 Q600,200 1100,520 T1640,480"
            stroke={`url(#${gradientId}-3)`}
            strokeWidth={8 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                'M-200,550 Q600,200 1100,520 T1640,480',
                'M-200,520 Q600,750 1100,550 T1640,530',
                'M-200,550 Q600,200 1100,520 T1640,480',
              ],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
              delay: 6,
            }}
          />

          {/* Swoosh 4 - Additional upper accent */}
          <motion.path
            d="M-200,180 Q350,400 700,160 T1640,200"
            stroke={`url(#${gradientId}-1)`}
            strokeWidth={6 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            opacity={0.7}
            animate={{
              d: [
                'M-200,180 Q350,400 700,160 T1640,200',
                'M-200,200 Q350,50 700,220 T1640,180',
                'M-200,180 Q350,400 700,160 T1640,200',
              ],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
              delay: 8,
            }}
          />

          {/* Swoosh 5 - Lower accent for depth */}
          <motion.path
            d="M-200,650 Q450,450 900,680 T1640,620"
            stroke={`url(#${gradientId}-2)`}
            strokeWidth={5 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            opacity={0.6}
            animate={{
              d: [
                'M-200,650 Q450,450 900,680 T1640,620',
                'M-200,680 Q450,800 900,650 T1640,680',
                'M-200,650 Q450,450 900,680 T1640,620',
              ],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'linear',
              delay: 4,
            }}
          />
        </svg>
      </div>
    );
  }

  // Accent variant - smaller decorative swoosh
  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.cyan} />
            <stop offset="30%" stopColor={colors.purple} />
            <stop offset="60%" stopColor={colors.red} />
            <stop offset="100%" stopColor={colors.orange} />
          </linearGradient>
        </defs>
        <motion.path
          d="M20,100 Q60,20 100,100 T180,100"
          stroke={`url(#${gradientId})`}
          strokeWidth={6 * strokeMultiplier}
          fill="none"
          strokeLinecap="round"
          opacity={opacityMultiplier}
          animate={{
            d: [
              'M20,100 Q60,20 100,100 T180,100',
              'M20,100 Q60,180 100,100 T180,100',
              'M20,100 Q60,20 100,100 T180,100',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.path
          d="M30,90 Q70,150 110,90 T170,95"
          stroke={`url(#${gradientId})`}
          strokeWidth={4 * strokeMultiplier}
          fill="none"
          strokeLinecap="round"
          opacity={opacityMultiplier * 0.7}
          animate={{
            d: [
              'M30,90 Q70,150 110,90 T170,95',
              'M30,110 Q70,50 110,110 T170,105',
              'M30,90 Q70,150 110,90 T170,95',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
            delay: 1,
          }}
        />
      </svg>
    </div>
  );
}
