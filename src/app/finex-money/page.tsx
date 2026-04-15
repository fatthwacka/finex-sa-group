import type { Metadata } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import AccentBand from '@/components/sections/AccentBand';
import SteppedTiers from '@/components/sections/SteppedTiers';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import AppStoreBadges from '@/components/ui/AppStoreBadges';
import {
  CreditCard,
  Banknote,
  Smartphone,
  Zap,
  ArrowRightLeft,
  ShoppingCart,
  Send,
  Globe,
  Wallet,
  QrCode,
  Users,
  Truck,
  ShoppingBag,
  Wrench,
  Store,
} from 'lucide-react';
import { BRANDS } from '@/config/brands';

export const metadata: Metadata = {
  title: 'Finex Money | Digital Wallet for Everyone',
  description:
    'Open up a world full of digital banking possibilities. Finex Money is an inclusive digital wallet built to empower your everyday hustle.',
};

// Feature cards for "Everything You Need" section
const pocketFeatures = [
  {
    icon: Send,
    title: 'Send Money',
    description: 'Instant transfers to anyone, anywhere in South Africa.',
  },
  {
    icon: Globe,
    title: 'Cross-Border Payments',
    description: 'Send money across SADC borders with low fees.',
  },
  {
    icon: CreditCard,
    title: 'Finex Money Card',
    description: 'A global Mastercard accepted everywhere.',
  },
  {
    icon: Wallet,
    title: 'Digital Wallet',
    description: 'Secure wallet with zero daily costs on the app.',
  },
  {
    icon: QrCode,
    title: 'Pay by QR',
    description: 'Scan and pay merchants instantly with QR codes.',
  },
  {
    icon: Users,
    title: 'Group Wallets',
    description: 'Digital stokvels — pool and save as a community.',
  },
];

// Vision cards for "Moving Beyond Bank-Poor" section
const visionCards = [
  {
    title: 'Ziyakhale!',
    subtitle: "It's happening now!",
    description: 'Breaking down barriers for the unbanked.',
    color: 'bg-[var(--color-red)]',
  },
  {
    title: 'Vuka',
    subtitle: 'Wake up / Rise',
    description: 'Professionalising the hustle with digital tools.',
    color: 'bg-[var(--color-navy)]',
  },
  {
    title: 'Kunjalo',
    subtitle: 'That\'s it',
    description: 'A Digital Safe Haven against cash risk.',
    color: 'bg-[var(--color-purple)]',
  },
  {
    title: 'Kopanin',
    subtitle: 'Unite',
    description: 'Collective financial power through community.',
    color: 'bg-[var(--color-orange)]',
  },
];

// Persona cards for "Built for Real People" section
const personaCards = [
  {
    icon: Truck,
    title: 'The Bakkie Boss',
    subtitle: 'Your Money, Your Rules.',
    challenge: 'Manages high-risk site teams, pays wages in cash.',
    solution: 'Automates payroll & SARB/SARS compliance.',
  },
  {
    icon: Store,
    title: 'The Kasi Anchor',
    subtitle: 'Bank on Yourself.',
    challenge: 'Spaza owner facing protection and cash handling risk.',
    solution: 'Digital Safe Haven secures savings against physical risk.',
  },
  {
    icon: Wrench,
    title: 'The Road Warrior',
    subtitle: 'Your Money, Your Border.',
    challenge: 'SADC trucker facing exploitative service borders.',
    solution: 'Receive pay & Digital Rand savings from theft.',
  },
  {
    icon: ShoppingBag,
    title: 'The Mall Assistant',
    subtitle: 'Finance, Made Fair.',
    challenge: 'Dignity counts but also retail workers.',
    solution: 'Gets a free app and a low-fee transactional account.',
  },
];

// Everyday utility features with icons
const everydayFeatures = [
  { label: 'Tap to Pay', icon: CreditCard, description: 'Use your Finex Money card at any Mastercard terminal.' },
  { label: 'ATM Access', icon: Banknote, description: 'Withdraw cash at any ATM nationwide.' },
  { label: 'Airtime & Data', icon: Smartphone, description: 'Top up any network directly from the app.' },
  { label: 'Electricity', icon: Zap, description: 'Buy prepaid electricity tokens instantly.' },
  { label: 'EFT Transfers', icon: ArrowRightLeft, description: 'Send money to any South African bank account.' },
  { label: 'Online Shopping', icon: ShoppingCart, description: 'Shop online with your virtual or physical card.' },
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

      {/* =============================================
          SECTION 1: HERO
          Red-tinted hero with placeholder background
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[65vh]">
        {/* Red-black gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-red)] via-[#1a0a12] to-[var(--color-black)]" />
        {/* Red energy overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-red)]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-red)]/30 to-transparent" />
        </div>

        <div className="container-max relative z-10 py-20 md:py-32">
          <ScrollReveal>
            <div className="max-w-2xl">
              {/* Finex Money logo — transparent, no background container */}
              <Image
                src="/images/logos/finex-money-logo-white.png"
                alt="Finex Money"
                width={320}
                height={96}
                className="h-20 md:h-24 w-auto mb-14 md:mb-20"
                priority
              />
              <h1 className="text-white mb-6">
                <span className="italic font-light">A</span> world of <span className="font-extrabold">digital banking</span><br />
                <span className="font-light">possibilities.</span>
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          SECTION 1B: ATMOSPHERIC IMAGE BREAK
          City-sunset image with subtitle paragraph overlay
          ============================================= */}
      <section className="relative flex items-center h-[50vh] overflow-hidden">
        <Image
          src="/images/heroes/guy-walking-sideways-across-city-sunset.jpg"
          alt=""
          fill
          className="object-cover opacity-90"
        />
        {/* Colour overlay — bridges hero (red) to section below (purple/black/red) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-red)]/40 via-[var(--color-black)]/40 to-[var(--color-purple)]/40" />

        {/* Subtitle paragraph — aligned to hero text above */}
        <div className="container-max relative z-10">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-white/90 max-w-lg">
              From <span className="font-bold text-white">airtime top-ups</span> to <span className="font-bold text-white">money transfers</span> and <span className="font-bold text-white">online shopping</span>, your Finex Money wallet is your all-in-one financial companion.
            </p>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 2: EVERYTHING YOU NEED, IN YOUR POCKET
          Light section with 6 white feature cards
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="mb-4">
                Everything You Need,<br />
                <span className="gradient-text-dark">In Your Pocket</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                A complete digital finance ecosystem built for the way Africa moves money.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pocketFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} delay={index}>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-red)]/15 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[var(--color-red)]" />
                    </div>
                    <h4 className="font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 3: SPLIT — HERO IMAGE + PHONE OVERLAY
          Truck background image with phone layered on top
          ============================================= */}
      <section className="relative overflow-hidden min-h-[70vh]">
        {/* Background: truck image */}
        <Image
          src="/images/heroes/finex-money-guy-in-front-truck.jpg"
          alt="Finex Money user standing in front of a delivery truck"
          fill
          className="object-cover"
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/10" />
        {/* Red accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-red)]/10 via-transparent to-transparent" />

        {/* Content container — fills section, positions title top-left and phone bottom-left */}
        <div className="absolute inset-0 z-10">
          <div className="container-max h-full flex flex-col justify-between">
            {/* Title — top left */}
            <div className="pt-12 md:pt-16">
              <ScrollReveal>
                <div className="max-w-lg">
                  <h2 className="text-white mb-4">
                    <span className="italic font-light">Simple,</span> Secure Digital<br />
                    <span className="font-extrabold">Payments</span> <span className="font-light">for Africa</span>
                  </h2>
                  <p className="text-lg text-white/90 max-w-md">
                    To <span className="font-bold text-white">empower individuals</span> and <span className="font-bold text-white">small businesses</span> with accessible <span className="font-bold text-white">digital finance.</span>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Phone image — left, vertically centred — delayed slower entrance */}
            <div className="flex-1 flex items-center py-8">
              <ScrollReveal type="slide" direction="up" delay={25} duration={1.4}>
                <div className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px]">
                  <Image
                    src="/images/app-screenshots/finex-money-phone-screenshot-and-card.png"
                    alt="Finex Money app screenshot with Mastercard"
                    width={380}
                    height={760}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 4: MOVING BEYOND "BANK-POOR"
          Dark section with vision cards
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-red)] mb-4">
                Our Vision
              </p>
              <h2 className="text-white mb-6">
                Moving Beyond <span className="gradient-text">&ldquo;Bank-Poor&rdquo;</span>
              </h2>
              <p className="text-base text-white/70 max-w-3xl mx-auto mb-12">
                From &lsquo;Cash-Rich but Bank-Poor&rsquo; to Digital Dignity. We&apos;re building South Africa&apos;s premier unified fintech ecosystem — a trusted, reliable Digital Safe Haven for every South African.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {visionCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index}>
                <div className={`${card.color} rounded-xl p-5 md:p-6 text-white min-h-[160px] flex flex-col`}>
                  <h3 className="text-lg md:text-xl font-extrabold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-white/80 mb-3 italic">
                    {card.subtitle}
                  </p>
                  <p className="text-xs md:text-sm text-white/70 mt-auto">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 5: FULL-WIDTH TRUCK IMAGE
          Atmospheric image break
          ============================================= */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/backgrounds/finex-money-key-visual.jpg"
          alt="Finex Money key visual"
          fill
          className="object-cover"
        />
        {/* Subtle red gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/60 via-transparent to-[var(--color-red)]/10" />
      </section>

      {/* =============================================
          SECTION 6: BUILT FOR REAL PEOPLE
          Light section with persona cards
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-white mb-4">
                Built for <span className="gradient-text-dark">Real People</span>
              </h2>
              <p className="text-base text-white/80 max-w-2xl mx-auto">
                We solve the daily realities of South Africans — from construction sites to taxi ranks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personaCards.map((persona, index) => {
              const Icon = persona.icon;
              return (
                <ScrollReveal key={persona.title} delay={index}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-red)]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[var(--color-red)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-white">{persona.title}</h3>
                        <p className="text-sm font-medium text-[var(--color-red)] mb-3">
                          {persona.subtitle}
                        </p>
                        <p className="text-sm text-white/70 mb-1">
                          <span className="font-semibold text-white">Challenge:</span> {persona.challenge}
                        </p>
                        <p className="text-sm text-white/70">
                          <span className="font-semibold text-white">Solution:</span> {persona.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 7: APP SCREENSHOTS
          Dark section with phone mockups
          ============================================= */}
      <section className="section-padding section-dark-warm overflow-hidden">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Phone mockups - using the screenshot we have + placeholders */}
            <ScrollReveal type="slide" direction="left">
              <div className="relative w-[200px] md:w-[240px]">
                {/* TODO: Replace with real app screenshot */}
                <div className="aspect-[9/19] rounded-3xl bg-gradient-to-b from-[var(--color-navy)] to-[var(--color-black)] border-2 border-white/10 flex items-center justify-center">
                  <p className="text-white/30 text-xs text-center px-4">App Screen Placeholder</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative w-[220px] md:w-[280px]">
                <Image
                  src="/images/app-screenshots/finex-money-phone-screenshot-and-card.png"
                  alt="Finex Money app with Mastercard"
                  width={280}
                  height={560}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal type="slide" direction="right">
              <div className="relative w-[200px] md:w-[240px]">
                {/* TODO: Replace with real app screenshot */}
                <div className="aspect-[9/19] rounded-3xl bg-gradient-to-b from-[var(--color-red)] to-[var(--color-black)] border-2 border-white/10 flex items-center justify-center">
                  <p className="text-white/30 text-xs text-center px-4">App Screen Placeholder</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 8: READY FOR DIGITAL DIGNITY? CTA
          Dark CTA section
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-white mb-4">
                Ready for Digital Dignity?
              </h2>
              <p className="text-base text-white/70 max-w-xl mx-auto mb-8">
                Join thousands of South Africans who trust FinexMoney for simple, secure digital payments. Open your account in minutes.
              </p>
              <CTAButton
                label="Get Started Today"
                type="app"
                href="#download"
                variant="primary"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          EXISTING SECTIONS BELOW
          (Original page content preserved)
          ============================================= */}

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
                <ScrollReveal key={feature.label} delay={index} className="flex">
                  <div className="card-warm text-center p-4 flex flex-col items-center flex-1">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-base font-bold text-white mb-1">{feature.label}</p>
                    <p className="text-xs text-white/70">{feature.description}</p>
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
              <div className="flex flex-wrap justify-center items-center gap-4">
                {brand.website && (
                  <CTAButton
                    label="Visit Finex Money Website"
                    type="website"
                    href={brand.website}
                    variant="gradient"
                  />
                )}
                <AppStoreBadges
                  appStoreUrl={brand.appStore}
                  playStoreUrl={brand.playStore}
                  size="lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
