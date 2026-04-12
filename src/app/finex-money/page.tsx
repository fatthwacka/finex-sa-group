import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import SplitSection, { SectionHeading } from '@/components/sections/SplitSection';
import AccentBand from '@/components/sections/AccentBand';
import SteppedTiers from '@/components/sections/SteppedTiers';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import AppStoreBadges from '@/components/ui/AppStoreBadges';
import { CreditCard, Banknote, Smartphone, Zap, ArrowRightLeft, ShoppingCart } from 'lucide-react';
import { BRANDS } from '@/config/brands';

export const metadata: Metadata = {
  title: 'Finex Money | Digital Wallet for Everyone',
  description:
    'Open up a world full of digital banking possibilities. Finex Money is an inclusive digital wallet built to empower your everyday hustle.',
};

// Everyday utility features with icons
const everydayFeatures = [
  { label: 'Tap to Pay', icon: CreditCard },
  { label: 'ATM Access', icon: Banknote },
  { label: 'Airtime & Data', icon: Smartphone },
  { label: 'Electricity', icon: Zap },
  { label: 'EFT Transfers', icon: ArrowRightLeft },
  { label: 'Online Shopping', icon: ShoppingCart },
];

// FICA tier data
const ficaTiers = [
  {
    level: 1,
    name: 'Entry FICA',
    limit: 'Up to R25,000',
    description: 'Get started quickly with minimal documentation',
    requirements: [
      'SA ID, Foreign Passport, or Asylum Seeker document',
      'Selfie verification',
      'No proof of address required',
    ],
  },
  {
    level: 2,
    name: 'Mid FICA',
    limit: 'Up to R100,000',
    description: 'Unlock higher limits with additional verification',
    requirements: [
      'All Level 1 requirements',
      'Proof of residence (utility bill or bank statement)',
    ],
  },
  {
    level: 3,
    name: 'Full FICA',
    limit: 'Up to R500,000',
    description: 'Complete verification for maximum flexibility',
    requirements: [
      'All Level 2 requirements',
      'Proof of income',
      'Enhanced due diligence',
    ],
    highlight: true,
  },
];

// Accepted document types
const acceptedDocs = [
  { label: 'SA ID', description: 'South African ID book or smart card' },
  { label: 'Foreign Passport', description: 'Valid passport from any country' },
  { label: 'Asylum Seeker Permit', description: 'Section 22 or Section 24 permit' },
];

export default function FinexMoneyPage() {
  const brand = BRANDS.finexMoney;

  return (
    <div data-brand={brand.dataBrand}>
      {/* Hero - Full-width background image */}
      <HeroSection
        variant="image-background"
        eyebrow="Finex Money"
        headline="The Finance Solution."
        subline="Open up a world full of digital banking possibilities."
        body="Finex Money is an inclusive digital wallet built to empower your everyday hustle. Open an account instantly and step into the digital economy with financial dignity."
        heroImage="/images/heroes/finex-money-hero-woman.webp"
        heroImageAlt="Young South African person using Finex Money app"
      >
        <CTAButton
          label="Download the App"
          type="app"
          href="#download"
          variant="white"
          size="lg"
        />
      </HeroSection>

      {/* Everyday Utility - Navy section with warm cards */}
      <section className="section-padding section-navy">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Everyday Utility. Zero Hassle.</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                From airtime top-ups to online shopping, your Finex Money wallet is your all-in-one financial companion.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {everydayFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.label} delay={index}>
                  <div className="card-warm text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-white">{feature.label}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* You Belong Here - Gradient accent band */}
      <AccentBand variant="gradient">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          You Belong Here.
        </h2>
        <p className="text-white/90 text-xl font-medium mb-4">
          We believe in zero exclusion.
        </p>
        <p className="text-white/70 text-base max-w-2xl mx-auto mb-8">
          Whether you&apos;re a South African citizen, a foreign national, or an asylum seeker — if you&apos;re here, you deserve financial access.
        </p>

        {/* Accepted documents */}
        <div className="flex flex-wrap justify-center gap-6">
          {acceptedDocs.map((doc, index) => (
            <ScrollReveal key={doc.label} delay={index}>
              <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/10 rounded-xl backdrop-blur-sm min-w-[160px]">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <span className="text-white font-semibold">{doc.label}</span>
                <span className="text-white/60 text-xs text-center">{doc.description}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </AccentBand>

      {/* FICA Tiers - Light section for contrast */}
      <SteppedTiers
        tiers={ficaTiers}
        title="Three Levels. Endless Possibilities."
        subtitle="Start with Entry FICA and upgrade as your needs grow. No proof of address required to get started."
      />

      {/* App Download CTA - Cyan-Navy gradient */}
      <section id="download" className="section-padding section-cyan-navy">
        <div className="container-max">
          <div className="text-center">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
                Get Started
              </p>
              <h2 className="text-white mb-2">Open Your Account in 3 Minutes</h2>
              <p className="text-white/90 text-xl font-medium mb-4">
                No branch visits. No paperwork. No waiting.
              </p>
              <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
                Download the Finex Money app and complete a quick selfie verification to start transacting immediately.
              </p>
              <div className="flex flex-col items-center gap-6">
                <AppStoreBadges
                  appStoreUrl={brand.appStore}
                  playStoreUrl={brand.playStore}
                  size="lg"
                />
                {brand.website && (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Or visit finexmoney.com →
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
