'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';

interface SplitSectionProps {
  children: React.ReactNode;
  /** Image source path from public/ */
  image?: string;
  /** Alt text for image */
  imageAlt?: string;
  /** Position of the image */
  imagePosition?: 'left' | 'right';
  /** Custom content for right/left side instead of image */
  visualContent?: React.ReactNode;
  /** Background variant - uses gradient section classes */
  bgVariant?: 'light' | 'light-warm' | 'light-cool' | 'alt' | 'navy' | 'cyan-navy' | 'purple-navy' | 'sunset' | 'dark-tech' | 'dark';
  /** Additional class names */
  className?: string;
  /** Vertical alignment */
  align?: 'top' | 'center' | 'bottom';
}

/**
 * Pattern B — Content + Image Split
 * Two columns at desktop (text left, image/visual right, or vice versa).
 * Stacks to single column on mobile (image on top).
 */
export default function SplitSection({
  children,
  image,
  imageAlt = 'Section image',
  imagePosition = 'right',
  visualContent,
  bgVariant = 'light',
  className = '',
  align = 'center',
}: SplitSectionProps) {
  // Map bgVariant to gradient section class
  const bgStyles: Record<string, string> = {
    'light': 'section-light',
    'light-warm': 'section-light-warm',
    'light-cool': 'section-light-cool',
    'alt': 'section-alt',
    'navy': 'section-navy',
    'cyan-navy': 'section-cyan-navy',
    'purple-navy': 'section-purple-navy',
    'sunset': 'section-sunset',
    'dark-tech': 'section-dark-tech',
    'dark': 'section-dark',
  };

  const alignStyles: Record<string, string> = {
    top: 'items-start',
    center: 'items-center',
    bottom: 'items-end',
  };

  // Dark variants that need light text
  const darkVariants = ['navy', 'cyan-navy', 'purple-navy', 'sunset', 'dark-tech', 'dark'];
  const textOnDark = darkVariants.includes(bgVariant);

  // Determine content order based on image position
  const contentFirst = imagePosition === 'right';

  return (
    <section className={`section-padding ${bgStyles[bgVariant] || 'section-light'} ${className}`}>
      <div className="container-max">
        <div className={`flex flex-col lg:flex-row ${alignStyles[align]} gap-12 lg:gap-16`}>
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 ${contentFirst ? 'order-1' : 'order-1 lg:order-2'}`}>
            <ScrollReveal>
              <div className={textOnDark ? 'text-white' : ''}>
                {children}
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Content */}
          <div className={`w-full lg:w-1/2 ${contentFirst ? 'order-2' : 'order-2 lg:order-1'}`}>
            <ScrollReveal delay={0.2}>
              {visualContent ? (
                visualContent
              ) : image ? (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle gradient overlay for brand feel */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-primary)]/10 via-transparent to-[var(--brand-accent)]/10 pointer-events-none" />
                </div>
              ) : (
                /* Placeholder when no image or visual provided */
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-light-grey)] flex items-center justify-center">
                  <span className="text-[var(--color-mid-grey)]">Visual placeholder</span>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Helper component for section headings within SplitSection
 */
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  /** Whether text should be light (for dark backgrounds) */
  light?: boolean;
}

export function SectionHeading({ title, subtitle, description, light = false }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      {subtitle && (
        <p className={`text-sm uppercase tracking-wider font-semibold mb-2 ${
          light ? 'text-white/60' : 'text-[var(--brand-primary)]'
        }`}>
          {subtitle}
        </p>
      )}
      <h2 className={`mb-4 ${light ? 'text-white' : ''}`}>{title}</h2>
      {description && (
        <p className={`text-lg leading-relaxed ${
          light ? 'text-white/80' : 'text-[var(--color-text-secondary)]'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
