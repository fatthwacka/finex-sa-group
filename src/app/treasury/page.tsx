import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import { BRANDS, GROUP } from '@/config/brands';

export const metadata: Metadata = {
  title: 'Finex SA Treasury | Corporate Treasury Services',
  description:
    'Master global cash flow with tailor-made treasury management and advisory services for multinational corporations.',
};

const services = [
  {
    icon: 'TrendingUp',
    title: 'Currency Risk Management',
    description:
      'Our treasury specialists conduct collaborative assessments of your projected currency inflows and outflows to build bulletproof hedging strategies.',
  },
  {
    icon: 'Calculator',
    title: 'Forward Cover Contracts',
    description:
      'We assist in implementing appropriate currency risk management tools, including facilitating Forward Cover Contracts, Stop and Limit orders.',
  },
  {
    icon: 'FileCheck',
    title: 'Balance of Payments',
    description:
      'We expertly guide clients through the completion of complex Balance of Payments forms.',
  },
  {
    icon: 'Clock',
    title: 'SPOT & NEXT Day Payments',
    description:
      'Enjoy the best rates with no hidden margins or fees, processing all transactions from your own account in your own name.',
  },
  {
    icon: 'Globe',
    title: 'Multi-Currency Cash Flows',
    description:
      'From managing exchange control regulations to optimising multi-currency cash flows, we bring a 360-degree approach to treasury management.',
  },
  {
    icon: 'Shield',
    title: 'Regulatory Compliance',
    description:
      'Full compliance with SARB regulations and exchange control requirements for all your international transactions.',
  },
];

export default function TreasuryPage() {
  const brand = BRANDS.treasury;

  return (
    <div data-brand={brand.dataBrand}>
      <HeroSection
        variant="image-background"
        eyebrow="Finex SA Treasury"
        headline="Timing Is Everything."
        subline="Master global cash flow with tailor-made treasury management."
        body="We apply a merchant bank approach, designing treasury systems built exactly around your operational realities for multinational corporations and high-volume importers and exporters."
        heroImage="/images/lifestyle/finexflow-collateral-spread.webp"
        heroImageAlt="Treasury and financial documents"
      >
        <CTAButton label="Speak to a Treasury Advisor" type="contact" href="/contact" variant="white" />
      </HeroSection>

      {/* Services */}
      <section className="section-padding section-navy">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Corporate Foreign Exchange and Risk Management</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                We offer specialised foreign currency risk management services to help clients
                navigate currency fluctuations with absolute confidence.
              </p>
            </div>
          </ScrollReveal>
          <FeatureGrid features={services} columns={3} variant="on-dark" />
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding section-light-cool">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <h2 className="mb-6">Our Approach</h2>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
                  Our treasury specialists conduct collaborative assessments of your projected
                  currency inflows and outflows to build bulletproof hedging strategies. From
                  managing exchange control regulations to optimising multi-currency cash flows, we
                  bring a 360-degree approach to treasury management that aligns with your strategic
                  goals.
                </p>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
                  We assist in implementing the appropriate currency risk management tools,
                  including facilitating Forward Cover Contracts, and Stop and Limit orders. We also
                  expertly guide clients through the completion of complex Balance of Payments
                  forms.
                </p>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                  Enjoy the best rates with no hidden margins or fees, processing all transactions
                  from your own account in your own name with SPOT and NEXT Day payments.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Regulatory Section */}
      <section className="section-padding section-sunset">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-white mb-6">Safe, Regulated, and Fully Licensed</h2>
              <p className="text-white/80 text-lg mb-8">
                Finex SA Treasury operates as an expert, solutions-oriented intermediary. We are a
                registered financial service provider regulated by the Financial Sector Conduct
                Authority, and authorised by the South African Reserve Bank as a forex exchange
                intermediary.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="card-glass-dark inline-block">
                  <div className="text-sm text-white/70">FSP License</div>
                  <div className="font-semibold text-white">{GROUP.fsp}</div>
                </div>
                <div className="card-glass-dark inline-block">
                  <div className="text-sm text-white/70">SARB Intermediary</div>
                  <div className="font-semibold text-white">{GROUP.sarb}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-cyan-navy">
        <div className="container-max">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-white mb-4">Ready to Optimise Your Treasury?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Speak with our treasury specialists today and discover how we can help you master
                global cash flow.
              </p>
              <CTAButton
                label="Speak to a Treasury Advisor"
                type="contact"
                href="/contact"
                size="lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
