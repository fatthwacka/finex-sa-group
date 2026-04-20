'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import EnergySwoosh from '@/components/effects/EnergySwoosh';

interface HeroSectionProps {
  /** Main headline — string or JSX for inline formatting */
  headline: React.ReactNode;
  /** Optional logo rendered above eyebrow/headline (transparent, no container) */
  logoSrc?: string;
  /** Alt text for the logo */
  logoAlt?: string;
  /** Additional Tailwind classes for the logo (e.g. "brightness-0 invert" for pure white) */
  logoClassName?: string;
  /** Optional eyebrow text above headline (small caps style) */
  eyebrow?: string;
  /** Optional subline below headline — string or JSX */
  subline?: React.ReactNode;
  /** Body paragraph — string or JSX */
  body?: React.ReactNode;
  /** CTA buttons or other children */
  children?: React.ReactNode;
  /** Visual variant controlling background and layout */
  variant?: 'gradient-centred' | 'split-image' | 'dark' | 'dark-tech' | 'compact' | 'brand-page' | 'image-background';
  /** Hero image for split-image, brand-page, and image-background variants (path from public/) */
  heroImage?: string;
  /** Alt text for hero image */
  heroImageAlt?: string;
  /** Position of image in split layout */
  imagePosition?: 'left' | 'right';
  /** Whether to show energy swooshes (background + bottom divider) */
  showSwoosh?: boolean;
  /** Whether to show the bottom divider swoosh (thin static ribbons) — defaults to true */
  showBottomDivider?: boolean;
  /** Custom height class override */
  heightClass?: string;
  /** Swoosh brightness level */
  swooshBrightness?: 'normal' | 'bright' | 'ultra';
  /** Text alignment for image-background variant */
  textAlign?: 'left' | 'center';
}

export default function HeroSection({
  headline,
  logoSrc,
  logoAlt = 'Brand logo',
  logoClassName = '',
  eyebrow,
  subline,
  body,
  children,
  variant = 'gradient-centred',
  heroImage,
  heroImageAlt = 'Hero image',
  imagePosition = 'right',
  showSwoosh = true,
  showBottomDivider = true,
  heightClass,
  swooshBrightness = 'bright',
  textAlign = 'left',
}: HeroSectionProps) {
  // Background styles per variant - using gradient section classes
  const bgStyles: Record<string, string> = {
    'gradient-centred': 'section-hero-sunset-radial',
    'split-image': 'section-light',
    'dark': 'section-navy',
    'dark-tech': 'section-dark-tech',
    'compact': 'section-sunset',
    'brand-page': 'section-sunset',
    'image-background': '', // No background class - image handles it
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
    'image-background': 'min-h-[70vh]',
  };

  // Alignment per variant
  const isCentred = variant === 'gradient-centred' || variant === 'compact' || (variant === 'image-background' && textAlign === 'center');
  const isSplit = variant === 'split-image';
  const isBrandPage = variant === 'brand-page';
  const isImageBg = variant === 'image-background';

  return (
    <section
      className={`relative flex items-center overflow-hidden ${
        /* When gradient-centred has a heroImage, skip the solid bg class — the gradient becomes an overlay */
        variant === 'gradient-centred' && heroImage ? '' : bgStyles[variant]
      } ${heightClass || defaultHeights[variant]}`}
      style={variant === 'gradient-centred' && heroImage ? { backgroundColor: '#2a1022' } : undefined}
    >
      {/* Full-width background image for gradient-centred variant (e.g. homepage Africa map) */}
      {variant === 'gradient-centred' && heroImage && (
        <>
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover"
            priority
          />
          {/* Sunset-radial overlay — matches section-hero-sunset-radial but semi-transparent to let image show */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 55% 50% at 50% 50%, rgba(201, 32, 48, 0.55) 0%, rgba(201, 32, 48, 0.35) 35%, transparent 75%),
                radial-gradient(circle at 0% 0%, rgba(122, 16, 32, 0.7) 0%, transparent 18%),
                radial-gradient(circle at 100% 0%, rgba(122, 16, 32, 0.7) 0%, transparent 18%),
                radial-gradient(circle at 0% 100%, rgba(122, 16, 32, 0.7) 0%, transparent 18%),
                radial-gradient(circle at 100% 100%, rgba(122, 16, 32, 0.7) 0%, transparent 18%),
                rgba(42, 16, 34, 0.45)
              `,
            }}
          />
        </>
      )}

      {/* Full-width background image for image-background variant */}
      {isImageBg && heroImage && (
        <>
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </>
      )}

      {/* Background Swoosh - only on gradient-centred variant without heroImage */}
      {showSwoosh && variant === 'gradient-centred' && !heroImage && (
        <div className="absolute inset-0 pointer-events-none">
          <EnergySwoosh variant="background" brightness={swooshBrightness} />
        </div>
      )}

      {/* Background Swoosh for dark and brand-page variants */}
      {showSwoosh && (variant === 'dark' || variant === 'brand-page') && (
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
            {/* Logo — transparent, no container */}
            {logoSrc && (
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={200}
                height={200}
                priority
                className={`h-20 md:h-24 w-auto mb-6 ${isCentred ? 'mx-auto' : ''} ${logoClassName}`}
              />
            )}

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
          {body && (
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
          )}

          {/* CTAs */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`flex flex-wrap gap-4 pt-4 md:pt-6 ${isCentred ? 'justify-center' : ''}`}
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

      {/* Bottom Swoosh Divider - not on compact or image-background */}
      {showSwoosh && showBottomDivider && variant !== 'compact' && variant !== 'image-background' && (
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
          <EnergySwoosh variant="divider" />
        </div>
      )}
    </section>
  );
}
