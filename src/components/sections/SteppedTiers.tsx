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
}

/**
 * Pattern E — Stepped/Tiered Display
 * Horizontal progression showing levels, tiers, or steps.
 * Cards increase in visual weight left to right.
 * Used for FICA levels, pricing tiers, etc.
 */
export default function SteppedTiers({ tiers, title, subtitle }: SteppedTiersProps) {
  return (
    <section className="section-padding section-light-cool">
      <div className="container-max">
        {(title || subtitle) && (
          <ScrollReveal>
            <div className="text-center mb-12">
              {title && <h2 className="mb-4">{title}</h2>}
              {subtitle && (
                <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
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
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical stack with connecting line */}
        <div className="lg:hidden relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-light-grey)] via-[var(--brand-primary)] to-[var(--brand-primary)]" />

          <div className="space-y-6">
            {tiers.map((tier, index) => (
              <ScrollReveal key={tier.level} delay={index * 0.1}>
                <TierCard
                  tier={tier}
                  index={index}
                  total={tiers.length}
                  layout="vertical"
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
}

function TierCard({ tier, index, total, layout }: TierCardProps) {
  const isLast = index === total - 1;
  const intensity = (index + 1) / total; // 0.33, 0.66, 1.0 for 3 tiers

  // Progressive styling based on tier level
  const bgIntensity = tier.highlight
    ? 'bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] text-white'
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
        <TierCardContent tier={tier} isHighlighted={tier.highlight} />
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
          ${tier.highlight ? 'bg-[var(--brand-primary)]' : 'bg-[var(--color-mid-grey)]'}
        `}
      />

      <div className={`p-6 rounded-2xl ${bgIntensity} ${shadowIntensity}`}>
        <TierCardContent tier={tier} isHighlighted={tier.highlight} />
      </div>
    </div>
  );
}

function TierCardContent({ tier, isHighlighted }: { tier: Tier; isHighlighted?: boolean }) {
  return (
    <>
      {/* Level badge */}
      <div
        className={`
          inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4
          ${isHighlighted ? 'bg-white/20 text-white' : 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]'}
        `}
      >
        Level {tier.level}
      </div>

      {/* Tier name */}
      <h3
        className={`text-xl font-semibold mb-2 ${
          isHighlighted ? 'text-white' : 'text-[var(--color-text-primary)]'
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
            isHighlighted ? 'text-white/80' : 'text-[var(--color-text-secondary)]'
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
              isHighlighted ? 'text-white/90' : 'text-[var(--color-text-secondary)]'
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
