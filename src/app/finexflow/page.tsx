import type { Metadata } from 'next';
import { Building2, Users, CreditCard } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import { BRANDS } from '@/config/brands';

export const metadata: Metadata = {
  title: 'FINEXflow | Employer Payments Reimagined',
  description:
    'FINEXflow is an enterprise-grade payment platform enabling seamless workforce payment distribution, eradicating cash risks and compliance failures.',
};

const strategicPillars = [
  {
    icon: 'Shield',
    title: 'Guaranteed Stability',
    description:
      '100% uptime and ZERO downtime. This performance metric is completely verifiable for enterprise clients.',
  },
  {
    icon: 'Zap',
    title: 'Speed of Execution',
    description:
      'We facilitate real-time transactions, specialising in paying people in real time to maintain project momentum at any scale.',
  },
  {
    icon: 'FileCheck',
    title: 'Efficiencies and Compliance',
    description:
      'We bulletproof the business by ensuring strict regulatory adherence while removing the manual administrative burden.',
  },
  {
    icon: 'MessageSquare',
    title: 'The Communication Loop',
    description:
      'The end user receives an SMS the moment funds are distributed, acting as a payslip alternative and eliminating frantic HR queries.',
  },
];

const coreFeatures = [
  {
    icon: 'Users',
    title: 'On-Site Onboarding',
    description:
      'We come to you. Workers are verified, enrolled and payment-ready within days with zero disruption to your operations.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Compliance Embedded',
    description:
      'Every worker is verified through automated KYC, digital identity checks, and real-time liveness checks with selfie matching at enrolment.',
  },
  {
    icon: 'Zap',
    title: '100% Real-Time Success Rate',
    description:
      'Every payment instruction is executed instantly. No batch delays. No failed transactions.',
  },
  {
    icon: 'Building2',
    title: 'Self-Service Dashboard',
    description:
      'Total geographic freedom. Execute payments and manage compliance from anywhere in the world.',
  },
];

const industries = [
  {
    icon: 'Building2',
    title: 'Corporate & Enterprise',
    description:
      '24/7 payment capability matching operational pace, with seamless integration into existing structures.',
  },
  {
    icon: 'Factory',
    title: 'Factory & Manufacturing',
    description:
      'Precision at any speed so factory workers are paid instantly without leaving the production line.',
  },
  {
    icon: 'Wheat',
    title: 'Agriculture',
    description:
      'A completely cashless harvest, removing the physical threat of holding cash on site for seasonal wages.',
  },
  {
    icon: 'HardHat',
    title: 'Builders & Construction',
    description:
      'Rapid digital onboarding and ad-hoc payments for transient workers who require immediate settlement.',
  },
];

export default function FinexflowPage() {
  const brand = BRANDS.finexflow;

  return (
    <div data-brand={brand.dataBrand}>
      <HeroSection
        variant="image-background"
        eyebrow="FINEXflow"
        headline="Employer Payments Reimagined."
        subline="Stop the Friction. Start the Flow."
        body="Your workforce is your greatest asset. FINEXflow is the seamless payment ecosystem for employers who mean business."
        heroImage="/images/heroes/finexflow-hero-executive.webp"
        heroImageAlt="Business executive using FINEXflow"
      >
        <CTAButton label="Speak to a FINEXflow Expert" type="contact" href="/contact" variant="white" />
      </HeroSection>

      {/* The Challenge */}
      <section className="section-padding section-purple-navy">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-white mb-6">The Challenge</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                The friction high-volume employers experience is expensive and invisible until it
                becomes catastrophic. Operations are plagued by security exposure from cash wage
                runs, legislative risks from unverified worker identities, and batch payment
                failures that only surface after the fact. Ghost workers and identity fraud erode
                margins, while the administrative burden grows with every new hire.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding section-light-cool">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="mb-4">The Seamless Solution</h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                FINEXFlow is an advanced technology that enables seamless payment distribution. It
                acts as the secure final layer between an employer payroll and the bank. This is not
                a basic payment portal. It is a paid, enterprise-grade infrastructure designed to
                keep the business totally in control of finances around the clock.
              </p>
            </div>
          </ScrollReveal>

          {/* Three Components */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal delay={0}>
              <div className="card-cool text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">The Employer Dashboard</h3>
                <p className="text-white/80">
                  Real-time payment management, worker profiles, compliance records, and business
                  intelligence, all housed in one secure portal.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="card-cool text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">The Worker App & Wallet</h3>
                <p className="text-white/80">
                  Instant payment notifications, account balance visibility, and financial tools
                  designed for simplicity and built for every worker.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="card-cool text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">The Branded Debit Card</h3>
                <p className="text-white/80">
                  A physical Mastercard linked directly to the worker profile, allowing immediate
                  access to funds at any ATM or point of sale.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="section-padding section-sunset">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">The Strategic Pillars</h2>
              <p className="text-lg text-white/80">
                Engineered for Absolute Operational Flow
              </p>
            </div>
          </ScrollReveal>
          <FeatureGrid features={strategicPillars} columns={4} variant="glass-dark" />
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding section-navy">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Core Features & Benefits</h2>
              <p className="text-lg text-white/80">
                Built to solve the problems that keep you up at night.
              </p>
            </div>
          </ScrollReveal>
          <FeatureGrid features={coreFeatures} columns={4} variant="on-dark" />
        </div>
      </section>

      {/* The Promise */}
      <section className="section-padding section-red-orange">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">The Promise</h2>
              <p className="text-white/80 text-xl">Pay. Verify. Protect.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="text-center text-white">
                <div className="text-5xl font-extrabold mb-2">PAY</div>
                <p className="text-white/80">
                  Every worker paid instantly, every time. 100% success rate.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-center text-white">
                <div className="text-5xl font-extrabold mb-2">VERIFY</div>
                <p className="text-white/80">
                  Every worker identity automatically verified at onboarding.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center text-white">
                <div className="text-5xl font-extrabold mb-2">PROTECT</div>
                <p className="text-white/80">
                  Your business protected from compliance failures and ghost workers.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding section-light-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="mb-4">Engineered for Universal Application</h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                FINEXFlow is a universal engine built for any industry that relies on a wage-based or
                shift-based workforce.
              </p>
            </div>
          </ScrollReveal>
          <FeatureGrid features={industries} columns={4} variant="on-warm" />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-cyan-navy">
        <div className="container-max">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-white mb-4">Ready to Transform Your Payroll?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Book a demonstration and see FINEXFlow working with your own workforce data.
              </p>
              <CTAButton label="Speak to a FINEXflow Expert" type="contact" href="/contact" size="lg" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
