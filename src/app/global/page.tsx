import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import { BRANDS } from '@/config/brands';

export const metadata: Metadata = {
  title: 'Finex SA Global | Strategic Expansion',
  description:
    'Comprehensive tactical and operational outsourcing solutions for mid-cap companies seeking international expansion.',
};

const pillars = [
  {
    icon: 'Handshake',
    title: 'Global Partnerships',
    description:
      'We facilitate critical global partnerships, identifying and establishing joint ventures and cross-border SME collaborations that drive international growth.',
  },
  {
    icon: 'PieChart',
    title: 'Equity Stakes',
    description:
      'We assist clients in forming and acquiring strategic equity stakes to solidify their presence in foreign markets and secure long-term commercial interests.',
  },
  {
    icon: 'Ship',
    title: 'Import and Export Facilitation',
    description:
      'We smooth the path for international trade by handling the complex logistics, regulatory requirements, and financial structuring required for seamless import and export operations.',
  },
  {
    icon: 'Gem',
    title: 'Brokerage and Wealth Protection',
    description:
      'We broker high-value deals and offer secure corporate investment opportunities in responsibly sourced precious metals. Protect your wealth against currency volatility.',
  },
];

export default function GlobalPage() {
  const brand = BRANDS.global;

  return (
    <div data-brand={brand.dataBrand}>
      <HeroSection
        variant="image-background"
        eyebrow="Finex SA Global"
        headline="Strategic Expansion and Wealth Protection."
        subline="Scale without borders."
        body="Finex SA Global provides comprehensive tactical outsourcing for mid-cap companies seeking international expansion, supply chain security, and wealth protection."
        heroImage="/images/lifestyle/imali-construction-workers.webp"
        heroImageAlt="Global business expansion"
      >
        <CTAButton label="Speak to Our Global Experts" type="contact" href="/contact" variant="white" />
      </HeroSection>

      {/* Four Pillars */}
      <section className="section-padding section-purple-navy">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Our Four Pillars of Expertise</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Scale without borders with our comprehensive suite of global services.
              </p>
            </div>
          </ScrollReveal>

          <FeatureGrid features={pillars} columns={2} variant="on-dark" />
        </div>
      </section>

      {/* Precious Metals Section */}
      <section className="section-padding section-light-warm">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="mb-4">Precious Metals Investment</h2>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  Protect your wealth against currency volatility
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold-mid)] border border-[var(--color-gold-border)]">
                  <h4 className="text-xl font-semibold text-[var(--color-gold-text-dark)] mb-3">Krugerrands</h4>
                  <p className="text-[var(--color-gold-text)]">
                    Invest in globally liquid Krugerrands, which hold legal tender status, for
                    secure wealth protection with guaranteed buyback.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-silver-light)] to-[var(--color-silver-mid)] border border-[var(--color-silver-border)]">
                  <h4 className="text-xl font-semibold text-[var(--color-silver-text-dark)] mb-3">Gold & Silver Bars</h4>
                  <p className="text-[var(--color-silver-text)]">
                    Guaranteed buyback Gold and Silver bars in various weights to enable flexible
                    investment strategies.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-sunset">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-white mb-4">Ready to Scale Globally?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Speak with our global experts today and discover how we can help you expand your
              markets and protect your wealth.
            </p>
            <CTAButton
              label="Speak to Our Global Experts"
              type="contact"
              href="/contact"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
