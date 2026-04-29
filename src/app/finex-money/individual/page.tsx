import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import SteppedTiers from "@/components/sections/SteppedTiers";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
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
} from "lucide-react";
import { BRANDS } from "@/config/brands";

export const metadata: Metadata = {
  title: "Finex Money | Digital Wallet South Africa",
  description:
    "Open a Finex Money digital wallet instantly - no proof of address required. Get your Mastercard, shop online, withdraw at any ATM. Financial dignity for everyone.",
  keywords: [
    "digital wallet South Africa",
    "mobile banking South Africa",
    "no proof of address bank account",
    "inclusive banking",
    "FICA digital wallet",
  ],
};

// Feature cards for "Everything You Need" section
const pocketFeatures = [
  {
    icon: Send,
    title: "Send Money",
    description: "Instant transfers to anyone, anywhere in South Africa.",
  },
  {
    icon: Globe,
    title: "Cross-Border Payments",
    description: "Send money across SADC borders with low fees.",
  },
  {
    icon: CreditCard,
    title: "Finex Money Card",
    description: "A global Mastercard accepted everywhere.",
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "Secure wallet with zero daily costs on the app.",
  },
  {
    icon: QrCode,
    title: "Pay by QR",
    description: "Scan and pay merchants instantly with QR codes.",
  },
  {
    icon: Users,
    title: "Group Wallets",
    description: "Digital stokvels: pool and save as a community.",
  },
];

// Vision cards for "Moving Beyond Bank-Poor" section
const visionCards = [
  {
    title: "Ziyakhale!",
    subtitle: "It's happening now!",
    description: "Breaking down barriers for the unbanked.",
    color: "bg-[var(--color-red)]",
  },
  {
    title: "Vuka",
    subtitle: "Wake up / Rise",
    description: "Professionalising the hustle with digital tools.",
    color: "bg-[var(--color-navy)]",
  },
  {
    title: "Kunjalo",
    subtitle: "That's it",
    description: "A Digital Safe Haven against cash risk.",
    color: "bg-[var(--color-purple)]",
  },
  {
    title: "Kopanin",
    subtitle: "Unite",
    description: "Collective financial power through community.",
    color: "bg-[var(--color-orange)]",
  },
];

// Persona cards for "Built for Real People" section
const personaCards = [
  {
    icon: Truck,
    title: "The Bakkie Boss",
    subtitle: "Your Money, Your Rules.",
    challenge: "Manages high-risk site teams, pays wages in cash.",
    solution: "Automates payroll & SARB/SARS compliance.",
  },
  {
    icon: Store,
    title: "The Kasi Anchor",
    subtitle: "Bank on Yourself.",
    challenge: "Spaza owner facing protection and cash handling risk.",
    solution: "Digital Safe Haven secures savings against physical risk.",
  },
  {
    icon: Wrench,
    title: "The Road Warrior",
    subtitle: "Your Money, Your Border.",
    challenge: "SADC trucker facing exploitative service borders.",
    solution: "Receive pay & Digital Rand savings from theft.",
  },
  {
    icon: ShoppingBag,
    title: "The Mall Assistant",
    subtitle: "Finance, Made Fair.",
    challenge: "Dignity counts but also retail workers.",
    solution: "Gets a free app and a low-fee transactional account.",
  },
];

// Everyday utility features with icons
const everydayFeatures = [
  {
    label: "Tap to Pay",
    icon: CreditCard,
    description: "Use your Finex Money card at any Mastercard terminal.",
  },
  {
    label: "ATM Access",
    icon: Banknote,
    description: "Withdraw cash at any ATM nationwide.",
  },
  {
    label: "Airtime & Data",
    icon: Smartphone,
    description: "Top up any network directly from the app.",
  },
  {
    label: "Electricity",
    icon: Zap,
    description: "Buy prepaid electricity tokens instantly.",
  },
  {
    label: "EFT Transfers",
    icon: ArrowRightLeft,
    description: "Send money to any South African bank account.",
  },
  {
    label: "Online Shopping",
    icon: ShoppingCart,
    description: "Shop online with your virtual or physical card.",
  },
];

// FICA tier data
const ficaTiers = [
  {
    level: 1,
    name: "Entry FICA",
    limit: "Up to R25,000",
    description: "Get started quickly with minimal documentation",
    requirements: [
      "SA ID, Foreign Passport, or Asylum Seeker document",
      "Selfie verification",
      "No proof of address required",
    ],
  },
  {
    level: 2,
    name: "Mid FICA",
    limit: "Up to R100,000",
    description: "Unlock higher limits with additional verification",
    requirements: [
      "All Level 1 requirements",
      "Proof of residence (utility bill or bank statement)",
    ],
  },
  {
    level: 3,
    name: "Full FICA",
    limit: "Up to R500,000",
    description: "Complete verification for maximum flexibility",
    requirements: [
      "All Level 2 requirements",
      "Proof of income",
      "Enhanced due diligence",
    ],
    highlight: true,
  },
];

// Accepted document types
const acceptedDocs = [
  { label: "SA ID", description: "South African ID book or smart card" },
  { label: "Foreign Passport", description: "Valid passport from any country" },
  {
    label: "Asylum Seeker Permit",
    description: "Section 22 or Section 24 permit",
  },
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
            <div className="max-w-3xl mx-auto text-center">
              {/* Finex Money icon logo — transparent, centred */}
              <Image
                src="/images/logos/Finex-Money-red-white-icon.png"
                alt="Finex Money"
                width={200}
                height={200}
                className="h-14 md:h-16 w-auto mx-auto mb-10 md:mb-14"
                priority
              />
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-white/85">
                Finex Money
              </p>
              <h1 className="text-white mb-10">
                <span className="italic font-light">The</span>{" "}
                <span className="font-extrabold">Digital Finance</span>
                <br />
                <span className="font-light">Solution.</span>
              </h1>
              <CTAButton
                label="Open an Account Now"
                href="#download"
                variant="red"
                size="lg"
              />
              <p className="italic font-light text-white/75 text-sm md:text-base mt-4">
                No proof required (level 1)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          SECTION 1B: ATMOSPHERIC IMAGE BREAK
          City-sunset image with subtitle paragraph overlay
          ============================================= */}
      <section className="relative flex items-center h-[65vh] overflow-hidden">
        <Image
          src="/images/heroes/guy-in-coffee-shop.jpg"
          alt=""
          fill
          className="object-cover"
        />
        {/* Gentle tri-tone overlay — red → navy → black (deepens into the right where text sits) */}
        {/* Tri-stop overlay: transparent left → 50% dark purple center → near-solid dark purple right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(12, 6, 20, 0.5) 50%, rgba(12, 6, 20, 0.95) 100%)",
          }}
        />

        {/* Heading + paragraph in right column */}
        <div className="container-max relative z-10">
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Simple,</span>{" "}
                <span className="font-extrabold">secure digital</span>
                <br />
                <span className="font-light">payments.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Say goodbye to{" "}
                <span className="font-bold text-white">
                  traditional banking hassles
                </span>{" "}
                and embrace the convenience of a{" "}
                <span className="font-bold text-white">
                  true mobile wallet solution
                </span>
                . Finex Money is a{" "}
                <span className="font-bold text-white">
                  secure digital ecosystem
                </span>{" "}
                built to serve the individual seeking{" "}
                <span className="font-bold text-white">financial dignity</span>.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton
                  label="Open an Account"
                  href="#download"
                  variant="red"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          POCKET FEATURES: split — image left + bullet list
          ============================================= */}
      <section className="section-padding section-dark-warm relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <ScrollReveal
              type="slide"
              direction="left"
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/backgrounds/finex-everyting-in-your-pocket.jpg"
                  alt="Everything you need in your pocket"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Everything You Need,</span>
                <br />
                <span className="font-extrabold text-[var(--color-red)]">
                  In Your Pocket.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                A complete{" "}
                <span className="font-bold text-white">
                  digital finance ecosystem
                </span>{" "}
                built for the way Africa moves money.
              </p>
              <ul className="space-y-4">
                {pocketFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li key={feature.title} className="flex items-start gap-4">
                      <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-red)]/20 backdrop-blur flex items-center justify-center border border-white/20">
                        <Icon className="w-5 h-5 text-[var(--color-red)]" />
                      </span>
                      <span className="leading-relaxed">
                        <span className="font-bold text-white">
                          {feature.title}
                        </span>
                        <span className="text-white/85">
                          {" "}
                          — {feature.description}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          VISION: full-bleed image background + cards on top
          ============================================= */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/backgrounds/african-cityscape-01.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(42, 8, 16, 0.85) 0%, rgba(10, 5, 8, 0.7) 50%, rgba(42, 8, 16, 0.85) 100%)",
          }}
        />
        <div className="container-max relative z-10 py-20 md:py-24">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-red)] mb-4">
                Our Vision
              </p>
              <h2 className="text-white mb-4">
                Moving Beyond{" "}
                <span className="text-[var(--color-red)]">
                  &ldquo;Bank-Poor&rdquo;
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                From{" "}
                <span className="italic">
                  &lsquo;Cash-Rich but Bank-Poor&rsquo;
                </span>{" "}
                to{" "}
                <span className="font-bold text-white">Digital Dignity</span>:
                building South Africa&apos;s premier unified fintech ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {visionCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-black/40 backdrop-blur-md rounded-xl p-5 border border-white/10 text-white"
                >
                  <h3 className="text-lg md:text-xl font-extrabold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-red)] mb-3 italic">
                    {card.subtitle}
                  </p>
                  <p className="text-sm text-white/80 leading-snug">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          PERSONAS: centered card grid on dark-warm
          ============================================= */}
      <section className="section-padding section-dark-warm relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-white mb-4">
                Built for{" "}
                <span className="text-[var(--color-red)]">Real People.</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                We solve the daily realities of South Africans, from{" "}
                <span className="font-bold text-white">construction sites</span>{" "}
                to <span className="font-bold text-white">taxi ranks</span>.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {personaCards.map((persona) => {
                const Icon = persona.icon;
                return (
                  <div
                    key={persona.title}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-red)]/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[var(--color-red)]" />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-white">
                      {persona.title}
                    </h3>
                    <p className="text-sm font-medium text-[var(--color-red)] mb-3 italic">
                      {persona.subtitle}
                    </p>
                    <p className="text-sm text-white/75 mb-1">
                      <span className="font-semibold text-white">
                        Challenge:
                      </span>{" "}
                      {persona.challenge}
                    </p>
                    <p className="text-sm text-white/75">
                      <span className="font-semibold text-white">
                        Solution:
                      </span>{" "}
                      {persona.solution}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          SECTION 6: SPLIT — HERO IMAGE + PHONE OVERLAY
          Truck background image with phone layered on top
          ============================================= */}
      <section className="relative overflow-hidden min-h-[70vh]">
        {/* Background: truck image */}
        <Image
          src="/images/backgrounds/finex-money-guy-in-front-truck.jpg"
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
                    <span className="italic font-light">Simple,</span> Secure
                    Digital
                    <br />
                    <span className="font-extrabold">Payments</span>{" "}
                    <span className="font-light">for Africa</span>
                  </h2>
                  <p className="text-lg text-white/90 max-w-md">
                    To{" "}
                    <span className="font-bold text-white">
                      empower individuals
                    </span>{" "}
                    and{" "}
                    <span className="font-bold text-white">
                      small businesses
                    </span>{" "}
                    with accessible{" "}
                    <span className="font-bold text-white">
                      digital finance.
                    </span>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Phone image — left, vertically centred — delayed slower entrance */}
            <div className="flex-1 flex items-center py-8">
              <ScrollReveal
                type="slide"
                direction="up"
                delay={25}
                duration={1.4}
              >
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
          EXISTING SECTIONS BELOW
          (Original page content preserved)
          ============================================= */}

      {/* =============================================
          EVERYDAY UTILITY: split — bullets left + image right
          ============================================= */}
      <section className="section-padding section-dark-warm relative overflow-hidden min-h-[95vh] flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            <ScrollReveal
              type="slide"
              direction="right"
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/backgrounds/finexmoney-card-in-hand-01.jpg"
                  alt="Finex Money card in hand"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Everyday</span>{" "}
                <span className="font-extrabold text-[var(--color-red)]">
                  Utility.
                </span>
                <br />
                <span className="font-light">Zero Hassle.</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                From{" "}
                <span className="font-bold text-white">airtime top-ups</span> to{" "}
                <span className="font-bold text-white">online shopping</span>,
                your Finex Money wallet is your all-in-one financial companion.
              </p>
              <ul className="space-y-4">
                {everydayFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li key={feature.label} className="flex items-start gap-4">
                      <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-red)]/20 backdrop-blur flex items-center justify-center border border-white/20">
                        <Icon className="w-5 h-5 text-[var(--color-red)]" />
                      </span>
                      <span className="leading-relaxed">
                        <span className="font-bold text-white">
                          {feature.label}
                        </span>
                        <span className="text-white/85">
                          {" "}
                          — {feature.description}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          FICA TIERS: full-bleed image background + tiers on top
          ============================================= */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <Image
          src="/images/heroes/mali-yami-geting-paid-on-construction-site.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(42, 8, 16, 0.9) 0%, rgba(10, 5, 8, 0.85) 50%, rgba(42, 8, 16, 0.9) 100%)",
          }}
        />
        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Three</span>{" "}
                <span className="font-extrabold text-[var(--color-red)]">
                  Levels.
                </span>
                <br />
                <span className="font-light">Endless Possibilities.</span>
              </h2>
              <p className="text-base text-white/85 leading-relaxed">
                Start with{" "}
                <span className="font-bold text-white">Entry FICA</span> and
                upgrade as your needs grow.{" "}
                <span className="font-bold text-white">
                  No proof of address
                </span>{" "}
                required to get started.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <SteppedTiers
              bare
              compact
              tiers={ficaTiers}
              variant="dark-warm"
            />
          </div>
        </div>
      </section>

      {/* =============================================
          BELONGING: centered cards on dark-accent-red wash
          ============================================= */}
      <section className="section-padding section-dark-accent-red relative overflow-hidden">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-white mb-4">
                <span className="font-extrabold text-[var(--color-red)]">
                  You Belong
                </span>{" "}
                <span className="font-light">Here.</span>
              </h2>
              <p className="text-white/90 text-lg font-medium mb-3">
                We believe in{" "}
                <span className="text-[var(--color-red)]">zero exclusion</span>.
              </p>
              <p className="text-white/85 text-base leading-relaxed">
                Whether you&apos;re a South African citizen, a foreign national,
                or an asylum seeker: if you&apos;re here, you deserve financial
                access.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {acceptedDocs.map((doc) => (
                <div
                  key={doc.label}
                  className="bg-black/40 backdrop-blur-md rounded-xl p-5 border border-white/15 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-red)]/20 flex items-center justify-center mb-3">
                    <span className="text-[var(--color-red)] text-xl font-bold">
                      ✓
                    </span>
                  </div>
                  <p className="text-base font-bold text-white mb-1">
                    {doc.label}
                  </p>
                  <p className="text-sm text-white/80 leading-snug">
                    {doc.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Finance Solution - Full-width background image hero */}
      <HeroSection
        variant="image-background"
        eyebrow="Finex Money"
        headline={
          <>
            <span className="italic font-light">The</span>{" "}
            <span className="font-extrabold">Finance</span>{" "}
            <span className="font-light">Solution.</span>
          </>
        }
        subline={
          <>
            <span className="font-bold">Open up</span>{" "}
            <span className="italic font-light">a world full of</span>{" "}
            <span className="font-bold">digital banking possibilities.</span>
          </>
        }
        body={
          <>
            Finex Money is an{" "}
            <span className="font-bold text-white">
              inclusive digital wallet
            </span>{" "}
            built to empower your everyday hustle. Open an account instantly and
            step into the{" "}
            <span className="font-bold text-white">digital economy</span> with{" "}
            <span className="font-bold text-white">financial dignity</span>.
          </>
        }
        heroImage="/images/heroes/Hero-2440.jpg"
        heroImageAlt="Finex Money: digital banking for everyone"
      >
        <CTAButton
          label="Get the App"
          href="#download"
          variant="white"
          size="lg"
        />
      </HeroSection>

      {/* App Download CTA — heavy red-black bookend matching the hero */}
      <section
        id="download"
        className="relative section-padding overflow-hidden"
      >
        {/* Red → black gradient (same as hero) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-red)] via-[#1a0a12] to-[var(--color-black)]" />
        {/* Red energy overlays */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-red)]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-red)]/30 to-transparent" />
        </div>

        <div className="container-max relative z-10">
          <div className="text-center">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
                Get Started
              </p>
              <h2 className="text-white mb-2">
                <span className="italic font-light">Open</span> your account in{" "}
                <span className="font-extrabold">3 minutes.</span>
              </h2>
              <p className="text-white/90 text-xl font-medium mb-4">
                <span className="font-bold">No branch visits.</span>{" "}
                <span className="italic font-light">No paperwork.</span>{" "}
                <span className="font-bold">No waiting.</span>
              </p>
              <p className="text-white/75 text-base mb-8 max-w-xl mx-auto">
                Download the Finex Money app and complete a{" "}
                <span className="font-bold text-white">
                  quick selfie verification
                </span>{" "}
                to start transacting immediately.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4">
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
