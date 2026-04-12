import HeroSection from '@/components/sections/HeroSection';
import EcosystemNav from '@/components/sections/EcosystemNav';
import BrandCard from '@/components/sections/BrandCard';
import AccentBand, { StatDisplay, StatRow } from '@/components/sections/AccentBand';
import SplitSection, { SectionHeading } from '@/components/sections/SplitSection';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import RegulatoryBadge from '@/components/ui/RegulatoryBadge';
import { BRANDS, GROUP } from '@/config/brands';

const BRAND_DESCRIPTIONS = {
  finexMoney:
    'Open an account instantly with just your ID or passport. Digital banking for everyone.',
  finexflow:
    'Real-time workforce payments. Zero cash risk. 100% compliance.',
  imaliRemit:
    'Send money to 40+ countries or exchange currency at our nationwide branches.',
  treasury:
    'Elite FX solutions and currency risk management for multinational corporations.',
  global:
    'Strategic partnerships and outsourcing for companies expanding internationally.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero - Pattern A Centred, gradient background */}
      <HeroSection
        variant="gradient-centred"
        eyebrow="Finex SA Group"
        headline="Financial Power at Every Level."
        subline="We believe everyone deserves a seat at the financial table."
        body="The Finex SA Group is a fully integrated fintech banking ecosystem bringing sophisticated technology and financial inclusion to the African market."
      >
        <CTAButton
          label="Explore Our Brands"
          type="contact"
          href="#ecosystem"
          variant="white"
          size="lg"
        />
      </HeroSection>

      {/* Ecosystem Logo Navigation - Interactive brand selector with summaries */}
      <div id="ecosystem">
        <EcosystemNav />
      </div>

      {/* Brand Cards Section - Detailed cards with full descriptions */}
      <section className="section-padding section-navy">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
                Our Ecosystem
              </p>
              <h2 className="text-white mb-4">Five Brands. One Vision.</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                A comprehensive suite of financial solutions designed to serve every level of the
                market, from individuals to multinational corporations.
              </p>
            </div>
          </ScrollReveal>

          {/* 5 cards: 3+2 on desktop, 2+2+1 on tablet, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <BrandCard
              brand={BRANDS.finexMoney}
              description={BRAND_DESCRIPTIONS.finexMoney}
              index={0}
            />
            <BrandCard
              brand={BRANDS.finexflow}
              description={BRAND_DESCRIPTIONS.finexflow}
              index={1}
            />
            <BrandCard
              brand={BRANDS.imaliRemit}
              description={BRAND_DESCRIPTIONS.imaliRemit}
              index={2}
            />
            <BrandCard
              brand={BRANDS.treasury}
              description={BRAND_DESCRIPTIONS.treasury}
              index={3}
            />
            <BrandCard
              brand={BRANDS.global}
              description={BRAND_DESCRIPTIONS.global}
              index={4}
            />
          </div>
        </div>
      </section>

      {/* Market Positioning - Pattern D Accent Band */}
      <AccentBand variant="navy">
        <div className="mb-8">
          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text mb-4">
            $320 Trillion
          </p>
          <p className="text-lg md:text-xl text-white/80">
            Global cross-border payments market by 2032
          </p>
        </div>

        <StatRow columns={4}>
          <StatDisplay value="40+" label="Countries Served" />
          <StatDisplay value="2013" label="Founded" />
          <StatDisplay value="8" label="Brands" />
          <StatDisplay value="45242" label="FSP Licensed" />
        </StatRow>
      </AccentBand>

      {/* Trust & Regulation - Pattern B Split */}
      <SplitSection
        bgVariant="alt"
        imagePosition="right"
        visualContent={
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <RegulatoryBadge type="fsp" value={GROUP.fsp} />
            <RegulatoryBadge type="sarb" value={GROUP.sarb} />
            <div className="p-4 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] max-w-sm">
              <p className="text-sm text-[var(--color-text-secondary)]">
                {GROUP.category}
              </p>
            </div>
          </div>
        }
      >
        <SectionHeading
          title="Safe, Regulated, and Fully Licensed"
          description="We operate with absolute transparency and rigorous compliance."
        />
        <p className="text-[var(--color-text-secondary)] mt-4">
          As a Category Two Authorised Dealer in Foreign Exchange with Limited Authority, we are regulated by the Financial Sector Conduct Authority as a financial service provider, and by the South African Reserve Bank as a forex exchange intermediary. Your trust is our foundation.
        </p>
      </SplitSection>

      {/* Final CTA - Pattern F */}
      <AccentBand variant="gradient">
        <h2 className="text-white mb-4">Ready to Explore?</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Discover how the Finex SA Group can transform the way you move and manage capital.
        </p>
        <CTAButton
          label="Contact Us"
          type="contact"
          href="/contact"
          variant="white"
          size="lg"
        />
      </AccentBand>
    </>
  );
}
