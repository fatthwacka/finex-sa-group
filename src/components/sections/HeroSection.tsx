'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import EnergySwoosh from '@/components/effects/EnergySwoosh';

interface HeroSectionProps {
  /** Main headline text */
  headline: string;
  /** Optional eyebrow text above headline (small caps style) */
  eyebrow?: string;
  /** Optional subline below headline (gradient or accent styled) */
  subline?: string;
  /** Body paragraph text */
  body: string;
  /** CTA buttons or other children */
  children?: React.ReactNode;
  /** Visual variant controlling background and layout */
  variant?: 'gradient-centred' | 'split-image' | 'dark' | 'dark-tech' | 'compact' | 'brand-page';
  /** Hero image for split-image and brand-page variants (path from public/) */
  heroImage?: string;
  /** Alt text for hero image */
  heroImageAlt?: string;
  /** Position of image in split layout */
  imagePosition?: 'left' | 'right';
  /** Whether to show energy swooshes */
  showSwoosh?: boolean;
  /** Custom height class override */
  heightClass?: string;
  /** Swoosh brightness level */
  swooshBrightness?: 'normal' | 'bright' | 'ultra';
}

export default function HeroSection({
  headline,
  eyebrow,
  subline,
  body,
  children,
  variant = 'gradient-centred',
  heroImage,
  heroImageAlt = 'Hero image',
  imagePosition = 'right',
  showSwoosh = true,
  heightClass,
  swooshBrightness = 'bright',
}: HeroSectionProps) {
  // Background styles per variant - using gradient section classes
  const bgStyles: Record<string, string> = {
    'gradient-centred': 'section-hero-mesh',
    'split-image': 'section-light',
    'dark': 'section-navy',
    'dark-tech': 'section-dark-tech',
    'compact': 'section-sunset',
    'brand-page': 'section-sunset',
  };

  // Text colour styles per variant
  const textOnDark = variant !== 'split-image';

  // Height styles per variant
  const defaultHeights: Record<string, string> = {
    'gradient-centred': 'min-h-[90vh]',
    'split-image': 'min-h-[80vh]',
    'dark': 'min-h-[85vh]',
    'dark-tech': 'min-h-[85vh]',
    'compact': 'min-h-[50vh] max-h-[60vh]',
    'brand-page': 'min-h-[60vh] max-h-[70vh]',
  };

  // Alignment per variant
  const isCentred = variant === 'gradient-centred' || variant === 'compact';
  const isSplit = variant === 'split-image';
  const isBrandPage = variant === 'brand-page';

  return (
    <section
      className={`relative flex items-center overflow-hidden ${bgStyles[variant]} ${heightClass || defaultHeights[variant]}`}
    >
      {/* Background Swoosh - on gradient and brand-page variants */}
      {showSwoosh && (variant === 'gradient-centred' || variant === 'dark' || variant === 'brand-page') && (
        <div className="absolute inset-0 pointer-events-none">
          <EnergySwoosh variant="background" brightness={swooshBrightness} />
        </div>
      )}

      {/* Tech grid pattern for dark-tech variant */}
      {variant === 'dark-tech' && (
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-cyan) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-cyan) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      )}

      {/* Radial vignette for gradient-centred */}
      {variant === 'gradient-centred' && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
          }}
        />
      )}

      {/* Main Content Container */}
      <div className={`container-max relative z-10 py-16 md:py-24 ${isSplit || isBrandPage ? 'flex flex-col lg:flex-row items-center gap-12' : ''}`}>

        {/* Image for split layout - left position */}
        {isSplit && heroImage && imagePosition === 'left' && (
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                className="object-cover"
                priority
              />
              {/* Energy swoosh overlay on image */}
              <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-60">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-cyan)]/20 via-transparent to-[var(--color-orange)]/20" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Text Content */}
        <div className={`
          ${isSplit || isBrandPage ? 'w-full lg:w-3/5' : 'max-w-4xl'}
          ${isCentred ? 'mx-auto text-center' : ''}
        `}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            {eyebrow && (
              <p className={`
                text-sm tracking-[0.2em] uppercase font-semibold mb-4
                ${textOnDark ? 'text-white/80' : 'text-[var(--brand-primary)]'}
              `}>
                {eyebrow}
              </p>
            )}

            {/* Headline */}
            <h1 className={`mb-4 ${textOnDark ? 'text-white' : 'text-[var(--color-text-primary)]'}`}>
              {headline}
            </h1>

            {/* Subline */}
            {subline && (
              <p className={`
                text-lg md:text-xl font-medium mb-8
                ${isCentred ? 'max-w-xl mx-auto' : 'max-w-lg'}
                ${textOnDark ? 'text-white/85' : 'text-[var(--brand-accent)]'}
              `}>
                {subline}
              </p>
            )}
          </motion.div>

          {/* Body */}
          <motion.p
            className={`
              text-base md:text-lg leading-relaxed mb-8
              ${isCentred ? 'max-w-xl mx-auto' : 'max-w-lg'}
              ${textOnDark ? 'text-white/65 font-light' : 'text-[var(--color-text-secondary)]'}
            `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {body}
          </motion.p>

          {/* CTAs */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`flex flex-wrap gap-4 ${isCentred ? 'justify-center' : ''}`}
            >
              {children}
            </motion.div>
          )}
        </div>

        {/* Image for split layout - right position */}
        {isSplit && heroImage && imagePosition === 'right' && (
          <motion.div
            className="w-full lg:w-1/2 relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                className="object-cover"
                priority
              />
              {/* Energy swoosh overlay on image */}
              <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-60">
                <div className="absolute inset-0 bg-gradient-to-tl from-[var(--color-cyan)]/20 via-transparent to-[var(--color-orange)]/20" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Image for brand-page variant - compact circular/rounded image */}
        {isBrandPage && heroImage && (
          <motion.div
            className="w-full lg:w-2/5 relative order-first lg:order-last flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-[320px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-black/20" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Swoosh Divider - not on compact */}
      {showSwoosh && variant !== 'compact' && (
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
          <EnergySwoosh variant="divider" />
        </div>
      )}
    </section>
  );
}
