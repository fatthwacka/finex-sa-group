import type { Metadata } from 'next';
import Image from 'next/image';
import { Building2, Users, CreditCard } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import { BRANDS } from '@/config/brands';

export const metadata: Metadata = {
  title: 'FINEXFlow | Workforce Payment Platform for Employers South Africa',
  description:
    'FINEXFlow is an enterprise-grade workforce payment ecosystem. Eliminate cash risk, verify worker identities in real time, and guarantee 100% on-time payment for your entire workforce.',
  keywords: [
    'workforce payment platform South Africa',
    'employer payroll solution',
    'ghost worker prevention',
    'cashless wage payment',
    'digital workforce identity',
    'batch payment South Africa',
  ],
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

      {/* =============================================
          HERO — gradient (no image) + left-aligned text
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[65vh]">
        {/* FINEXflow brand sunset gradient — cyan top-left → purple → red → orange bottom-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, var(--color-cyan) 0%, var(--color-purple) 35%, var(--color-red) 65%, var(--color-orange) 100%)',
          }}
        />
        {/* Subtle dark wash on the lower-left to lift text legibility */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent pointer-events-none" />

        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-2xl">
              {/* FINEXflow icon mark — pure white */}
              <Image
                src="/images/logos/finexflow-logo-no-word.png"
                alt="FINEXflow"
                width={120}
                height={120}
                className="h-14 md:h-16 w-auto mb-8 brightness-0 invert"
                priority
              />
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-white/85">
                FINEXflow
              </p>
              <h1 className="text-white mb-8">
                <span className="italic font-light">Employer Payments</span> <span className="font-extrabold">Reimagined.</span>
              </h1>
              <CTAButton label="Speak to a FINEXflow Expert" type="contact" href="/contact" variant="white" size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          ATMOSPHERIC IMAGE BREAK — executive image + paragraph overlay
          ============================================= */}
      <section className="relative flex items-center h-[60vh] overflow-hidden">
        <Image
          src="/images/heroes/finexflow-hero-02.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Tri-stop overlay: transparent left → dark grey centre → dark blue-grey right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, transparent 0%, rgba(15, 18, 26, 0.4) 50%, rgba(20, 45, 75, 0.7) 100%)',
          }}
        />

        {/* Headline + paragraph in right column */}
        <div className="container-max relative z-10">
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Stop</span> the <span className="font-extrabold">Friction.</span> <span className="italic font-light">Start</span> the <span className="font-extrabold">Flow.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Your workforce is your <span className="font-bold text-white">greatest asset</span>. Your payment system should not be your <span className="font-bold text-white">greatest risk</span>. FINEXFlow is the <span className="font-bold text-white">seamless payment ecosystem</span> for employers who mean business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge — 2-column text + image */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal type="slide" direction="left">
              <div>
                <h2 className="text-white mb-6">
                  <span className="italic font-light">The</span> <span className="font-extrabold">Challenge.</span>
                </h2>
                <p className="text-lg text-white/85 leading-relaxed mb-6">
                  The friction high-volume employers experience is <span className="font-bold text-white">expensive and invisible</span> — until it becomes <span className="font-bold text-white">catastrophic</span>:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex gap-3"><span className="text-[var(--color-red)] font-bold">•</span><span><span className="font-bold text-white">Security exposure</span> from cash wage runs</span></li>
                  <li className="flex gap-3"><span className="text-[var(--color-red)] font-bold">•</span><span><span className="font-bold text-white">Legislative risks</span> from unverified worker identities</span></li>
                  <li className="flex gap-3"><span className="text-[var(--color-red)] font-bold">•</span><span><span className="font-bold text-white">Batch payment failures</span> that only surface after the fact</span></li>
                  <li className="flex gap-3"><span className="text-[var(--color-red)] font-bold">•</span><span><span className="font-bold text-white">Ghost workers</span> and identity fraud eroding margins</span></li>
                  <li className="flex gap-3"><span className="text-[var(--color-red)] font-bold">•</span><span>Growing <span className="font-bold text-white">administrative burden</span> with every new hire</span></li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal type="slide" direction="right">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/backgrounds/finexflow-challenge.jpg"
                  alt="FINEXflow challenge — workforce payment risks"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Seamless Solution — flipped to dark-warm */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">The</span> <span className="font-extrabold">Seamless</span> <span className="font-light">Solution.</span>
              </h2>
              <p className="text-lg text-white/75 max-w-3xl mx-auto">
                FINEXFlow acts as the <span className="font-bold text-white">secure final layer</span> between your payroll and the bank. <span className="font-bold text-white">Enterprise-grade infrastructure</span> that keeps your business in total control, around the clock — real time, at scale, with <span className="font-bold text-white">full compliance</span> built in from day one.
              </p>
            </div>
          </ScrollReveal>

          {/* Three Components — translucent cards on dark */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { Icon: Building2, title: 'The Employer Dashboard', body: 'Real-time payment management, worker profiles, compliance records, and business intelligence — all in one secure portal.' },
              { Icon: Users, title: 'The Worker App & Wallet', body: 'Instant payment notifications, account balance visibility, and financial tools built for every worker — regardless of banking history.' },
              { Icon: CreditCard, title: 'The Branded Debit Card', body: 'A physical Mastercard linked directly to the worker profile, allowing immediate access to funds at any ATM or point of sale.' },
            ].map((card, i) => {
              const { Icon } = card;
              return (
                <ScrollReveal key={card.title} delay={i * 2}>
                  <div className="h-full bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[var(--color-red)]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                    <p className="text-white/70 leading-relaxed">{card.body}</p>
                  </div>
                </ScrollReveal>
              );
            })}
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

      {/* Core Features — flipped to dark-warm */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Core</span> <span className="font-extrabold">Features</span> <span className="font-light">&amp; Benefits.</span>
              </h2>
              <p className="text-lg text-white/75">
                Built to solve the problems that <span className="font-bold text-white">keep you up at night</span>.
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

      {/* Industries — flipped to dark-warm */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Engineered</span> for <span className="font-extrabold">Universal Application.</span>
              </h2>
              <p className="text-lg text-white/75 max-w-2xl mx-auto">
                FINEXFlow is a <span className="font-bold text-white">universal engine</span> built for any industry that relies on a wage-based or shift-based workforce.
              </p>
            </div>
          </ScrollReveal>
          <FeatureGrid features={industries} columns={4} variant="on-dark" />
        </div>
      </section>

      {/* CTA — flipped to sunset spectrum */}
      <section className="section-padding section-sunset">
        <div className="container-max">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-white mb-4">
                <span className="italic font-light">Ready to</span> <span className="font-extrabold">Transform</span> <span className="font-light">Your Payroll?</span>
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Book a demonstration and see <span className="font-bold text-white">FINEXFlow working with your own workforce data</span>.
              </p>
              <CTAButton label="Speak to a FINEXflow Expert" type="contact" href="/contact" variant="white" size="lg" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
