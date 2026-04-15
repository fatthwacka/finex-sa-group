'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';

interface Tier {
  level: number;
  name: string;
  limit: string;
  description?: string;
  requirements: string[];
  highlight?: boolean;
}

interface SteppedTiersProps {
  tiers: Tier[];
  title?: string;
  subtitle?: string;
  /** Background variant — 'light' (default) or 'dark-warm' */
  variant?: 'light' | 'dark-warm';
  /** Render title with inline JSX for italic/bold formatting (overrides `title`) */
  titleContent?: React.ReactNode;
}

/**
 * Pattern E — Stepped/Tiered Display
 * Horizontal progression showing levels, tiers, or steps.
 * Cards increase in visual weight left to right.
 * Used for FICA levels, pricing tiers, etc.
 */
export default function SteppedTiers({ tiers, title, subtitle, variant = 'light', titleContent }: SteppedTiersProps) {
  const isDark = variant === 'dark-warm';
  return (
    <section className={`section-padding ${isDark ? 'section-dark-warm' : 'section-light-cool'}`}>
      <div className="container-max">
        {(title || titleContent || subtitle) && (
          <ScrollReveal>
            <div className="text-center mb-12">
              {(titleContent || title) && (
                <h2 className={`mb-4 ${isDark ? 'text-white' : ''}`}>
                  {titleContent || title}
                </h2>
              )}
              {subtitle && (
                <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-white/70' : 'text-[var(--color-text-secondary)]'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </ScrollReveal>
        )}

        {/* Desktop: Horizontal stepped layout with proper spacing */}
        <div className="hidden lg:flex items-stretch gap-6 justify-center">
          {tiers.map((tier, index) => (
            <ScrollReveal key={tier.level} delay={index * 0.15} className="flex">
              <TierCard
                tier={tier}
                index={index}
                total={tiers.length}
                layout="horizontal"
                isDark={isDark}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical stack with connecting line */}
        <div className="lg:hidden relative">
          {/* Connecting line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b ${isDark ? 'from-white/20 via-[var(--brand-primary)] to-[var(--brand-primary)]' : 'from-[var(--color-light-grey)] via-[var(--brand-primary)] to-[var(--brand-primary)]'}`} />

          <div className="space-y-6">
            {tiers.map((tier, index) => (
              <ScrollReveal key={tier.level} delay={index * 0.1}>
                <TierCard
                  tier={tier}
                  index={index}
                  total={tiers.length}
                  layout="vertical"
                  isDark={isDark}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TierCardProps {
  tier: Tier;
  index: number;
  total: number;
  layout: 'horizontal' | 'vertical';
  isDark?: boolean;
}

function TierCard({ tier, index, total, layout, isDark = false }: TierCardProps) {
  const intensity = (index + 1) / total; // 0.33, 0.66, 1.0 for 3 tiers

  // Progressive styling based on tier level + variant
  const bgIntensity = tier.highlight
    ? 'bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] text-white'
    : isDark
    ? intensity > 0.7
      ? 'bg-white/10 border-2 border-[var(--brand-primary)]'
      : intensity > 0.4
      ? 'bg-white/5 border border-white/15'
      : 'bg-white/5 border border-white/10'
    : intensity > 0.7
    ? 'bg-[var(--color-surface-alt)] border-2 border-[var(--brand-primary)]'
    : intensity > 0.4
    ? 'bg-[var(--color-surface)] border border-[var(--color-border)]'
    : 'bg-[var(--color-surface)] border border-[var(--color-light-grey)]';

  const shadowIntensity = tier.highlight
    ? 'shadow-xl'
    : intensity > 0.7
    ? 'shadow-lg'
    : intensity > 0.4
    ? 'shadow-md'
    : 'shadow-sm';

  // Height scaling for horizontal layout (stepped effect)
  const heightScale = layout === 'horizontal' ? `min-h-[${280 + index * 40}px]` : '';

  if (layout === 'horizontal') {
    return (
      <motion.div
        className={`
          relative w-72 p-6 rounded-2xl ${bgIntensity} ${shadowIntensity} flex flex-col
        `}
        style={{
          zIndex: index + 1,
        }}
        whileHover={{ y: -8, zIndex: 10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <TierCardContent tier={tier} isHighlighted={tier.highlight} isDark={isDark} />
      </motion.div>
    );
  }

  // Vertical layout
  return (
    <div className="relative pl-16">
      {/* Level indicator dot */}
      <div
        className={`
          absolute left-6 top-6 w-4 h-4 rounded-full -translate-x-1/2
          ${tier.highlight ? 'bg-[var(--brand-primary)]' : isDark ? 'bg-white/40' : 'bg-[var(--color-mid-grey)]'}
        `}
      />

      <div className={`p-6 rounded-2xl ${bgIntensity} ${shadowIntensity}`}>
        <TierCardContent tier={tier} isHighlighted={tier.highlight} isDark={isDark} />
      </div>
    </div>
  );
}

function TierCardContent({ tier, isHighlighted, isDark = false }: { tier: Tier; isHighlighted?: boolean; isDark?: boolean }) {
  const onDark = isDark && !isHighlighted;
  return (
    <>
      {/* Level badge */}
      <div
        className={`
          inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4
          ${isHighlighted ? 'bg-white/20 text-white' : onDark ? 'bg-white/10 text-white' : 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]'}
        `}
      >
        Level {tier.level}
      </div>

      {/* Tier name */}
      <h3
        className={`text-xl font-semibold mb-2 ${
          isHighlighted ? 'text-white' : onDark ? 'text-white' : 'text-[var(--color-text-primary)]'
        }`}
      >
        {tier.name}
      </h3>

      {/* Limit */}
      <div
        className={`text-2xl font-bold mb-4 ${
          isHighlighted ? 'text-white' : 'text-[var(--brand-primary)]'
        }`}
      >
        {tier.limit}
      </div>

      {/* Description */}
      {tier.description && (
        <p
          className={`text-sm mb-4 ${
            isHighlighted ? 'text-white/80' : onDark ? 'text-white/70' : 'text-[var(--color-text-secondary)]'
          }`}
        >
          {tier.description}
        </p>
      )}

      {/* Requirements list */}
      <ul className="space-y-2">
        {tier.requirements.map((req, i) => (
          <li
            key={i}
            className={`text-sm flex items-start gap-2 ${
              isHighlighted ? 'text-white/90' : onDark ? 'text-white/70' : 'text-[var(--color-text-secondary)]'
            }`}
          >
            <span className={isHighlighted ? 'text-white' : 'text-[var(--brand-primary)]'}>
              ✓
            </span>
            {req}
          </li>
        ))}
      </ul>
    </>
  );
}
