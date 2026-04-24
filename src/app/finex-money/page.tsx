import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import AccentBand from "@/components/sections/AccentBand";
import SteppedTiers from "@/components/sections/SteppedTiers";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ScrollReveal from "@/components/effects/ScrollReveal";
import EnergySwoosh from "@/components/effects/EnergySwoosh";
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
  Building2,
  Shield,
  FileCheck,
  MessageSquare,
  Factory,
  Wheat,
  HardHat,
  ShieldAlert,
  Scale,
  AlertTriangle,
  UserX,
  Files,
  Clock,
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
    description: "Digital stokvels — pool and save as a community.",
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

/* ============================================================
   FINEXflow content — appended from /finexflow page.
   Pending: merge/cull with finex-money content above.
   ============================================================ */
const strategicPillars = [
  {
    icon: "Shield",
    title: "Guaranteed Stability",
    description:
      "100% uptime and ZERO downtime. This performance metric is completely verifiable for enterprise clients.",
  },
  {
    icon: "Zap",
    title: "Speed of Execution",
    description:
      "We facilitate real-time transactions, specialising in paying people in real time to maintain project momentum at any scale.",
  },
  {
    icon: "FileCheck",
    title: "Efficiencies and Compliance",
    description:
      "We bulletproof the business by ensuring strict regulatory adherence while removing the manual administrative burden.",
  },
  {
    icon: "MessageSquare",
    title: "The Communication Loop",
    description:
      "The end user receives an SMS the moment funds are distributed, acting as a payslip alternative and eliminating frantic HR queries.",
  },
];

const coreFeatures = [
  {
    icon: "Users",
    title: "On-Site Onboarding",
    description:
      "We come to you. Workers are verified, enrolled and payment-ready within days with zero disruption to your operations.",
  },
  {
    icon: "ShieldCheck",
    title: "Compliance Embedded",
    description:
      "Every worker is verified through automated KYC, digital identity checks, and real-time liveness checks with selfie matching at enrolment.",
  },
  {
    icon: "Zap",
    title: "100% Real-Time Success Rate",
    description:
      "Every payment instruction is executed instantly. No batch delays. No failed transactions.",
  },
  {
    icon: "Building2",
    title: "Self-Service Dashboard",
    description:
      "Total geographic freedom. Execute payments and manage compliance from anywhere in the world.",
  },
];

const industries = [
  {
    icon: "Building2",
    title: "Corporate & Enterprise",
    description:
      "24/7 payment capability matching operational pace, with seamless integration into existing structures.",
  },
  {
    icon: "Factory",
    title: "Factory & Manufacturing",
    description:
      "Precision at any speed so factory workers are paid instantly without leaving the production line.",
  },
  {
    icon: "Wheat",
    title: "Agriculture",
    description:
      "A completely cashless harvest, removing the physical threat of holding cash on site for seasonal wages.",
  },
  {
    icon: "HardHat",
    title: "Builders & Construction",
    description:
      "Rapid digital onboarding and ad-hoc payments for transient workers who require immediate settlement.",
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
                <CTAButton
                  label="FINEXflow"
                  href="#finexflow"
                  variant="gradient"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTIONS 2 / 4 / 5 (MERGED): POCKET + VISION + PERSONAS
          Single dark-warm section containing three sub-groups:
            1. Everything You Need, In Your Pocket (feature cards)
            2. Moving Beyond "Bank-Poor" (vision cards)
            3. Built for Real People (persona cards)
          Sub-groups separated by mt-24 md:mt-32 for vertical breathing room.
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          {/* Sub-group 1: Everything You Need, In Your Pocket — title LEFT, cards RIGHT */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <ScrollReveal className="w-full lg:w-5/12">
              <div className="text-center lg:text-left">
                <h2 className="mb-4">
                  Everything You Need,
                  <br />
                  <span className="text-[var(--color-red)]">In Your Pocket</span>
                </h2>
                <p className="text-lg text-white/70 max-w-md mx-auto lg:mx-0">
                  A complete digital finance ecosystem built for the way Africa
                  moves money.
                </p>
              </div>
            </ScrollReveal>
            <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pocketFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <ScrollReveal key={feature.title} delay={index}>
                    <div className="h-full bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                      <div className="w-8 h-8 rounded-lg bg-[var(--color-red)]/15 flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4 text-[var(--color-red)]" />
                      </div>
                      <h4 className="font-bold mb-1 text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-white/70 leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Sub-group 2: Moving Beyond "Bank-Poor" — title RIGHT, cards LEFT */}
          <div className="mt-32 md:mt-48 flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            <ScrollReveal className="w-full lg:w-5/12">
              <div className="text-center lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-red)] mb-4">
                  Our Vision
                </p>
                <h2 className="text-white mb-6">
                  Moving Beyond{" "}
                  <span className="text-[var(--color-red)]">
                    &ldquo;Bank-Poor&rdquo;
                  </span>
                </h2>
                <p className="text-base text-white/70 max-w-md mx-auto lg:mx-0">
                  From &lsquo;Cash-Rich but Bank-Poor&rsquo; to Digital Dignity.
                  We&apos;re building South Africa&apos;s premier unified fintech
                  ecosystem — a trusted, reliable Digital Safe Haven for every
                  South African.
                </p>
              </div>
            </ScrollReveal>
            <div className="w-full lg:w-7/12 grid grid-cols-2 gap-3">
              {visionCards.map((card, index) => (
                <ScrollReveal key={card.title} delay={index}>
                  <div
                    className={`${card.color} rounded-xl p-4 text-white min-h-[130px] flex flex-col h-full`}
                  >
                    <h3 className="text-base md:text-lg font-extrabold text-white mb-0.5">
                      {card.title}
                    </h3>
                    <p className="text-xs font-medium text-white/80 mb-2 italic">
                      {card.subtitle}
                    </p>
                    <p className="text-xs text-white/70 leading-snug mt-auto">
                      {card.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Sub-group 3: Built for Real People — title LEFT, cards RIGHT */}
          <div className="mt-32 md:mt-48 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <ScrollReveal className="w-full lg:w-5/12">
              <div className="text-center lg:text-left">
                <h2 className="text-white mb-4">
                  Built for{" "}
                  <span className="text-[var(--color-red)]">Real People</span>
                </h2>
                <p className="text-base text-white/80 max-w-md mx-auto lg:mx-0">
                  We solve the daily realities of South Africans — from
                  construction sites to taxi ranks.
                </p>
              </div>
            </ScrollReveal>
            <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {personaCards.map((persona, index) => {
                const Icon = persona.icon;
                return (
                  <ScrollReveal key={persona.title} delay={index}>
                    <div className="h-full bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-red)]/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[var(--color-red)]" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold mb-1 text-white">
                            {persona.title}
                          </h3>
                          <p className="text-xs font-medium text-[var(--color-red)] mb-2">
                            {persona.subtitle}
                          </p>
                          <p className="text-xs text-white/70 mb-1">
                            <span className="font-semibold text-white">
                              Challenge:
                            </span>{" "}
                            {persona.challenge}
                          </p>
                          <p className="text-xs text-white/70">
                            <span className="font-semibold text-white">
                              Solution:
                            </span>{" "}
                            {persona.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
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
          UTILITY + BELONGING + FICA TIERS (MERGED)
          Single dark-warm section containing three sub-groups:
            1. Everyday Utility. Zero Hassle. (6 icon cards)
            2. You Belong Here. (accepted docs row)
            3. Three Levels. Endless Possibilities. (FICA tier cards)
          Sub-groups separated by mt-32 md:mt-48 for vertical breathing room.
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          {/* Sub-group 1: Everyday Utility. Zero Hassle. — title LEFT, cards RIGHT */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <ScrollReveal className="w-full lg:w-5/12">
              <div className="text-center lg:text-left">
                <h2 className="text-white mb-4">
                  <span className="italic font-light">Everyday</span>{" "}
                  <span className="font-extrabold">Utility.</span>
                  <br />
                  <span className="font-light">Zero Hassle.</span>
                </h2>
                <p className="text-lg text-white/70 max-w-md mx-auto lg:mx-0">
                  From{" "}
                  <span className="font-bold text-white">airtime top-ups</span>{" "}
                  to{" "}
                  <span className="font-bold text-white">online shopping</span>,
                  your Finex Money wallet is your all-in-one financial
                  companion.
                </p>
              </div>
            </ScrollReveal>
            <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-3">
              {everydayFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <ScrollReveal
                    key={feature.label}
                    delay={index}
                    className="flex"
                  >
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-center flex flex-col items-center flex-1 hover:bg-white/10 transition-colors duration-300">
                      <div className="w-10 h-10 mx-auto mb-1.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[var(--color-red)]" />
                      </div>
                      <p className="text-xs font-bold text-white mb-0.5">
                        {feature.label}
                      </p>
                      <p className="text-[11px] text-white/70 leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Sub-group 2: Three Levels. Endless Possibilities. — title LEFT, compact tier cards RIGHT */}
          <div className="mt-32 md:mt-48 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <ScrollReveal className="w-full lg:w-5/12">
              <div className="text-center lg:text-left">
                <h2 className="text-white mb-4">
                  <span className="italic font-light">Three</span>{" "}
                  <span className="font-extrabold">Levels.</span>
                  <br />
                  <span className="font-light">Endless Possibilities.</span>
                </h2>
                <p className="text-base text-white/70 max-w-md mx-auto lg:mx-0">
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
            <div className="w-full lg:w-7/12">
              <SteppedTiers
                bare
                compact
                tiers={ficaTiers}
                variant="dark-warm"
              />
            </div>
          </div>

          {/* Sub-group 3: You Belong Here. — title LEFT, cards RIGHT (aligned with Utility) */}
          <div className="mt-32 md:mt-48 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <ScrollReveal className="w-full lg:w-5/12">
              <div className="text-center lg:text-left text-white">
                <h2 className="text-white mb-4">
                  <span className="font-extrabold">You Belong</span>{" "}
                  <span className="font-light">Here.</span>
                </h2>
                <p className="text-white/90 text-lg font-medium mb-3">
                  We believe in{" "}
                  <span className="text-[var(--color-red)]">
                    zero exclusion
                  </span>
                  .
                </p>
                <p className="text-white/70 text-base max-w-md mx-auto lg:mx-0">
                  Whether you&apos;re a South African citizen, a foreign
                  national, or an asylum seeker — if you&apos;re here, you
                  deserve financial access.
                </p>
              </div>
            </ScrollReveal>
            <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-3">
              {acceptedDocs.map((doc, index) => (
                <ScrollReveal
                  key={doc.label}
                  delay={index}
                  className="flex"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/15 text-center flex flex-col items-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1.5">
                      <span className="text-white text-base">✓</span>
                    </div>
                    <p className="text-xs font-bold text-white mb-0.5">
                      {doc.label}
                    </p>
                    <p className="text-[11px] text-white/70 leading-snug">
                      {doc.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
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
        heroImageAlt="Finex Money — digital banking for everyone"
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

      {/* ================================================================
          APPENDED: entire former /finexflow page content below.
          Wrapped in data-brand="finexflow" so the appended block inherits
          FINEXflow brand palette. To be merged/culled in a later pass.
          ================================================================ */}
      <div data-brand="finexflow">
        {/* =============================================
            FINEXflow HERO — gradient (no image) + left-aligned text
            ============================================= */}
        <section
          id="finexflow"
          className="relative flex items-center overflow-hidden min-h-[65vh]"
        >
          {/* FINEXflow brand sunset gradient — cyan top-left → purple → red → orange bottom-right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--color-cyan) 0%, var(--color-purple) 35%, var(--color-red) 65%, var(--color-orange) 100%)",
            }}
          />
          {/* Subtle dark wash on the lower-left to lift text legibility */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent pointer-events-none" />

          {/* Energy swoosh ribbons — background layer */}
          <div className="absolute inset-0 pointer-events-none">
            <EnergySwoosh variant="background" brightness="bright" />
          </div>

          <div className="container-max relative z-10 py-20 md:py-28">
            <ScrollReveal type="slide" direction="up">
              <div className="max-w-2xl">
                {/* FINEXflow wordmark — pure white, large */}
                <Image
                  src="/images/logos/finex-flow-1.png"
                  alt="FINEXflow"
                  width={480}
                  height={240}
                  className="h-24 md:h-32 w-auto mb-8 brightness-0 invert"
                  priority
                />
                <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-white/85">
                  Introducing FINEXflow
                </p>
                <h1 className="text-white mb-8">
                  <span className="italic font-light">Employer Payments</span>{" "}
                  <span className="font-extrabold">Reimagined.</span>
                </h1>
                <CTAButton
                  label="Speak to a FINEXflow Expert"
                  href="/contact"
                  variant="white"
                  size="lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =============================================
            ATMOSPHERIC IMAGE BREAK — executive image + paragraph overlay
            ============================================= */}
        <section className="relative flex items-center h-[69vh] overflow-hidden">
          <Image
            src="/images/heroes/finexflow-farm-worker-02.jpg"
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
                "linear-gradient(to right, transparent 0%, rgba(15, 18, 26, 0.4) 50%, rgba(20, 45, 75, 0.7) 100%)",
            }}
          />

          {/* Headline + paragraph in right column */}
          <div className="container-max relative z-10">
            <div className="flex justify-end">
              <div className="w-full md:w-1/2 lg:w-5/12">
                <h2 className="text-white mb-4">
                  <span className="italic font-light">Stop</span> the{" "}
                  <span className="font-extrabold">Friction.</span>{" "}
                  <span className="italic font-light">Start</span> the{" "}
                  <span className="font-extrabold">Flow.</span>
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Your workforce is your{" "}
                  <span className="font-bold text-white">greatest asset</span>.
                  Your payment system should not be your{" "}
                  <span className="font-bold text-white">greatest risk</span>.
                  FINEXFlow is the{" "}
                  <span className="font-bold text-white">
                    seamless payment ecosystem
                  </span>{" "}
                  for employers who mean business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================
            FINEXFLOW MEGA SECTION (SUNSET):
            Challenge + Seamless Solution + Strategic Pillars
            Three sub-groups in split-column layout matching the finex-money
            mega sections above. Uses section-sunset rainbow bg with dark
            translucent cards for contrast.
            ============================================= */}
        <section className="section-padding section-sunset">
          <div className="container-max">
            {/* Sub-group 1: The Challenge. — title LEFT, 6 cards RIGHT */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <ScrollReveal className="w-full lg:w-5/12">
                <div className="text-center lg:text-left text-white">
                  <h2 className="text-white mb-4">
                    <span className="italic font-light">The</span>{" "}
                    <span className="font-extrabold">Challenge.</span>
                  </h2>
                  <p className="text-base text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0">
                    The friction high-volume employers experience is{" "}
                    <span className="font-bold text-white">
                      expensive and invisible
                    </span>{" "}
                    — until it becomes{" "}
                    <span className="font-bold text-white">catastrophic</span>.
                  </p>
                </div>
              </ScrollReveal>
              <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  {
                    Icon: ShieldAlert,
                    title: "Security Exposure",
                    body: "from cash wage runs.",
                  },
                  {
                    Icon: Scale,
                    title: "Legislative Risks",
                    body: "from unverified worker identities.",
                  },
                  {
                    Icon: AlertTriangle,
                    title: "Batch Payment Failures",
                    body: "that only surface after the fact.",
                  },
                  {
                    Icon: UserX,
                    title: "Ghost Workers",
                    body: "and identity fraud eroding margins.",
                  },
                  {
                    Icon: Files,
                    title: "Administrative Burden",
                    body: "growing with every new hire.",
                  },
                  {
                    Icon: Clock,
                    title: "Late Payments",
                    body: "eroding worker trust and retention.",
                  },
                ].map((card, i) => {
                  const { Icon } = card;
                  return (
                    <ScrollReveal key={card.title} delay={i} className="flex">
                      <div className="rainbow-card">
                        <div className="rainbow-card-body">
                          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-2">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1">
                            {card.title}
                          </h4>
                          <p className="text-xs text-white/80 leading-snug">
                            {card.body}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* Sub-group 2: The Seamless Solution. — title LEFT, 3 cards RIGHT */}
            <div className="mt-32 md:mt-48 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <ScrollReveal className="w-full lg:w-5/12">
                <div className="text-center lg:text-left text-white">
                  <h2 className="text-white mb-4">
                    <span className="italic font-light">The</span>{" "}
                    <span className="font-extrabold">Seamless</span>{" "}
                    <span className="font-light">Solution.</span>
                  </h2>
                  <p className="text-base text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0">
                    FINEXflow acts as the{" "}
                    <span className="font-bold text-white">
                      secure final layer
                    </span>{" "}
                    between your payroll and the bank —{" "}
                    <span className="font-bold text-white">
                      enterprise-grade
                    </span>{" "}
                    infrastructure with{" "}
                    <span className="font-bold text-white">full compliance</span>{" "}
                    built in from day one.
                  </p>
                </div>
              </ScrollReveal>
              <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  {
                    Icon: Building2,
                    title: "Employer Dashboard",
                    body: "Real-time payment management in one secure portal.",
                  },
                  {
                    Icon: Users,
                    title: "Worker App & Wallet",
                    body: "Instant notifications and financial tools for every worker.",
                  },
                  {
                    Icon: CreditCard,
                    title: "Branded Debit Card",
                    body: "Physical Mastercard for ATM and point-of-sale access.",
                  },
                ].map((card, i) => {
                  const { Icon } = card;
                  return (
                    <ScrollReveal key={card.title} delay={i} className="flex">
                      <div className="rainbow-card">
                        <div className="rainbow-card-body">
                          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-2">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1">
                            {card.title}
                          </h4>
                          <p className="text-xs text-white/80 leading-snug">
                            {card.body}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* Sub-group 3: The Strategic Pillars. — title LEFT, 4 cards RIGHT */}
            <div className="mt-32 md:mt-48 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <ScrollReveal className="w-full lg:w-5/12">
                <div className="text-center lg:text-left text-white">
                  <h2 className="text-white mb-4">
                    <span className="italic font-light">The</span>{" "}
                    <span className="font-extrabold">Strategic Pillars.</span>
                  </h2>
                  <p className="text-base text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0">
                    Engineered for{" "}
                    <span className="font-bold text-white">
                      absolute operational flow
                    </span>
                    .
                  </p>
                </div>
              </ScrollReveal>
              <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  {
                    Icon: Shield,
                    title: "Guaranteed Stability",
                    body: "100% uptime, zero downtime — verifiable for enterprise clients.",
                  },
                  {
                    Icon: Zap,
                    title: "Speed of Execution",
                    body: "Real-time payments at any scale to maintain project momentum.",
                  },
                  {
                    Icon: FileCheck,
                    title: "Efficiencies & Compliance",
                    body: "Regulatory adherence without the manual burden — SMS payslips silence HR queries.",
                  },
                ].map((card, i) => {
                  const { Icon } = card;
                  return (
                    <ScrollReveal key={card.title} delay={i} className="flex">
                      <div className="rainbow-card">
                        <div className="rainbow-card-body">
                          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-2">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1">
                            {card.title}
                          </h4>
                          <p className="text-xs text-white/80 leading-snug">
                            {card.body}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>

            {/* Sub-group 4: Engineered for Universal Application. — title LEFT, 4 cards RIGHT */}
            <div className="mt-32 md:mt-48 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <ScrollReveal className="w-full lg:w-5/12">
                <div className="text-center lg:text-left text-white">
                  <h2 className="text-white mb-4">
                    <span className="italic font-light">Engineered for</span>{" "}
                    <span className="font-extrabold">
                      Universal Application.
                    </span>
                  </h2>
                  <p className="text-base text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0">
                    FINEXflow is a{" "}
                    <span className="font-bold text-white">
                      universal engine
                    </span>{" "}
                    built for any industry that relies on a wage-based or
                    shift-based workforce.
                  </p>
                </div>
              </ScrollReveal>
              <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  {
                    Icon: Building2,
                    title: "Corporate & Enterprise",
                    body: "24/7 payments and seamless integration.",
                  },
                  {
                    Icon: Factory,
                    title: "Factory & Manufacturing",
                    body: "Instant pay without leaving the line.",
                  },
                  {
                    Icon: HardHat,
                    title: "Agriculture & Construction",
                    body: "Cashless pay for harvests, sites, and ad-hoc workers.",
                  },
                ].map((card, i) => {
                  const { Icon } = card;
                  return (
                    <ScrollReveal key={card.title} delay={i} className="flex">
                      <div className="rainbow-card">
                        <div className="rainbow-card-body">
                          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-2">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1">
                            {card.title}
                          </h4>
                          <p className="text-xs text-white/80 leading-snug">
                            {card.body}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Core Features — 2×2 cards + image */}
        <section className="section-padding section-dark-warm">
          <div className="container-max">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-white mb-4">
                  <span className="italic font-light">Core</span>{" "}
                  <span className="font-extrabold">Features</span>{" "}
                  <span className="font-light">&amp; Benefits.</span>
                </h2>
                <p className="text-lg text-white/75">
                  Built to solve the problems that{" "}
                  <span className="font-bold text-white">
                    keep you up at night
                  </span>
                  .
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* 2×2 compact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreFeatures.map((feature, i) => (
                  <ScrollReveal key={feature.title} delay={i * 1.5}>
                    <div className="h-full bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                      <h3 className="text-base font-bold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Image */}
              <ScrollReveal type="slide" direction="right">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/backgrounds/finexflow-collaborative.jpeg"
                    alt="FINEXflow collaborative workforce solution"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
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
                    Your business protected from compliance failures and ghost
                    workers.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA — flipped to sunset spectrum */}
        <section className="section-padding section-sunset">
          <div className="container-max">
            <div className="text-center">
              <ScrollReveal>
                <h2 className="text-white mb-4">
                  <span className="italic font-light">Ready to</span>{" "}
                  <span className="font-extrabold">Transform</span>{" "}
                  <span className="font-light">Your Payroll?</span>
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Book a demonstration and see{" "}
                  <span className="font-bold text-white">
                    FINEXFlow working with your own workforce data
                  </span>
                  .
                </p>
                <CTAButton
                  label="Speak to a FINEXflow Expert"
                  type="contact"
                  href="/contact"
                  variant="white"
                  size="lg"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
