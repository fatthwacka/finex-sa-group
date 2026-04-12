'use client';

import { useRef, useEffect, useState } from 'react';

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
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60"
            stroke={`url(#${gradientId})`}
            strokeWidth={8 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            opacity={opacityMultiplier}
          />
          {/* Secondary swoosh - overlapping */}
          <path
            d="M0,70 C300,10 600,130 900,70 C1200,10 1350,100 1440,55"
            stroke={`url(#${gradientId}-2)`}
            strokeWidth={6 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            opacity={opacityMultiplier * 0.8}
          />
          {/* Tertiary swoosh - subtle overlap */}
          <path
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
    // Static background with CSS-based subtle animation for performance
    return (
      <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 will-change-transform"
          preserveAspectRatio="none"
          style={{ transform: 'translateZ(0)' }}
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

          {/* Static swoosh paths - no animation for performance */}
          <path
            d="M-200,400 Q400,50 800,400 T1640,350"
            stroke={`url(#${gradientId}-1)`}
            strokeWidth={12 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M-200,300 Q500,550 1000,280 T1640,320"
            stroke={`url(#${gradientId}-2)`}
            strokeWidth={10 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M-200,550 Q600,200 1100,520 T1640,480"
            stroke={`url(#${gradientId}-3)`}
            strokeWidth={8 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M-200,180 Q350,400 700,160 T1640,200"
            stroke={`url(#${gradientId}-1)`}
            strokeWidth={6 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            opacity={0.7}
          />

          <path
            d="M-200,650 Q450,450 900,680 T1640,620"
            stroke={`url(#${gradientId}-2)`}
            strokeWidth={5 * strokeMultiplier}
            fill="none"
            strokeLinecap="round"
            opacity={0.6}
          />
        </svg>
      </div>
    );
  }

  // Accent variant - smaller decorative swoosh (static)
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
        <path
          d="M20,100 Q60,20 100,100 T180,100"
          stroke={`url(#${gradientId})`}
          strokeWidth={6 * strokeMultiplier}
          fill="none"
          strokeLinecap="round"
          opacity={opacityMultiplier}
        />
        <path
          d="M30,90 Q70,150 110,90 T170,95"
          stroke={`url(#${gradientId})`}
          strokeWidth={4 * strokeMultiplier}
          fill="none"
          strokeLinecap="round"
          opacity={opacityMultiplier * 0.7}
        />
      </svg>
    </div>
  );
}
