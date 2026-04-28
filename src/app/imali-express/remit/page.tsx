import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { BRANDS } from "@/config/brands";
import {
  Send,
  Globe,
  Shield,
  Clock,
  Users,
  Smartphone,
  IdCard,
  BadgeCheck,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "iMali Remit | Send Money to 40+ Countries",
  description:
    "Send money home with iMali Remit. SARB-approved Category Two ADLA. Zero fees on your first transaction, real-time tracking, and inclusive onboarding.",
  keywords: [
    "iMali Remit",
    "international money transfer",
    "remittance South Africa",
    "send money home",
    "ADLA South Africa",
  ],
};

export default function ImaliRemitPage() {
  const brand = BRANDS.imaliRemit;

  return (
    <div data-brand={brand.dataBrand}>
      {/* =============================================
          HERO: dark gradient with red accent
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[75vh]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-imali-red) 0%, #1a0a12 55%, var(--color-black) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-imali-red)]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-imali-red)]/30 to-transparent" />
        </div>

        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-2xl">
              <Image
                src="/images/logos/Imali-Remit-White-logo.png"
                alt="iMali Remit"
                width={440}
                height={192}
                className="h-24 md:h-28 w-auto mb-8"
                priority
              />
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-white/85">
                iMali Remit
              </p>
              <h1 className="text-white mb-6">
                <span className="italic font-light">Send money</span>{" "}
                <span className="font-extrabold">home,</span>{" "}
                <span className="italic font-light">fast.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
                <span className="italic font-light">Mali Yami</span> means
                taking care of your{" "}
                <span className="font-bold">family</span> and your{" "}
                <span className="font-bold">future</span>.
              </p>
              <CTAButton
                label="Download the App"
                type="app"
                href="#download"
                variant="white"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          ATMOSPHERIC BREAK: hero image + paragraph overlay
          ============================================= */}
      <section className="relative flex items-center min-h-[75vh] overflow-hidden">
        <Image
          src="/images/heroes/mali-yami-girl-in-rural-area.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(40, 10, 25, 0.45) 50%, rgba(25, 8, 20, 0.85) 100%)",
          }}
        />
        <div className="container-max relative z-10">
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Move your</span>{" "}
                <span className="font-extrabold">funds,</span>{" "}
                <span className="italic font-light">fast.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                iMali Remit is a{" "}
                <span className="font-bold text-white">
                  fast, safe, and low-cost
                </span>{" "}
                cross-border remittance service. As a South African Reserve
                Bank-approved{" "}
                <span className="font-bold text-white">
                  Category Two ADLA
                </span>
                , we are fully authorised to deal in foreign exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 1: FEATURES — split image LEFT + bullets
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
                  src="/images/backgrounds/imali-hero-mama-gets-it-all.jpg"
                  alt="iMali Remit — Mama gets it all"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Built for the way</span>
                <br />
                <span className="font-extrabold text-[var(--color-red)]">
                  Africa sends money.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                <span className="font-bold text-white">Zero percent fees</span>{" "}
                on your first transaction, highly competitive rates, and{" "}
                <span className="font-bold text-white">real-time tracking</span>{" "}
                from send to receive.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    Icon: Send,
                    title: "40+ Countries",
                    body: "instant remittances to family across the continent and beyond.",
                  },
                  {
                    Icon: Globe,
                    title: "Competitive Rates",
                    body: "zero percent fees on your first transaction.",
                  },
                  {
                    Icon: Clock,
                    title: "Real-Time Tracking",
                    body: "follow every transfer from send to receive.",
                  },
                  {
                    Icon: Shield,
                    title: "SARB Approved",
                    body: "fully authorised Category Two ADLA.",
                  },
                  {
                    Icon: Smartphone,
                    title: "Mobile-First",
                    body: "the full service in your pocket — no branch visit needed.",
                  },
                  {
                    Icon: Users,
                    title: "Zero Exclusion",
                    body: "built for SA residents, foreign nationals, and asylum seekers.",
                  },
                ].map(({ Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-red)]/20 backdrop-blur flex items-center justify-center border border-white/20">
                      <Icon className="w-5 h-5 text-[var(--color-red)]" />
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-bold text-white">{title}</span>
                      <span className="text-white/85"> {body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 2: ZERO EXCLUSION — full-bleed bg + cards
          ============================================= */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/backgrounds/finex-flow-farm-worker-01.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(42, 8, 16, 0.51) 0%, rgba(10, 5, 8, 0.42) 50%, rgba(42, 8, 16, 0.51) 100%)",
          }}
        />
        <div className="container-max relative z-10 py-20 md:py-24">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-red)] mb-4">
                Zero Exclusion
              </p>
              <h2 className="text-white mb-4">
                <span className="italic font-light">If you&apos;re here,</span>{" "}
                <span className="font-extrabold">
                  you deserve financial access.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                Whether you&apos;re a South African citizen, a foreign national
                working in Mzansi, or an asylum seeker — getting started is
                simple. <span className="font-bold text-white">No proof of address required</span>.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                {
                  Icon: IdCard,
                  title: "SA Residents",
                  body: "Open your account with a valid SA ID.",
                },
                {
                  Icon: BadgeCheck,
                  title: "Foreign Nationals",
                  body: "Valid foreign passport plus a work permit.",
                },
                {
                  Icon: FileCheck,
                  title: "Asylum Seekers",
                  body: "Section 22 or Section 24 permit accepted.",
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-black/40 backdrop-blur-md rounded-xl p-5 border border-white/10 text-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-red)]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-red)]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1.5">
                    {title}
                  </h4>
                  <p className="text-sm text-white/85 leading-snug">{body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          SECTION 3: HOW IT WORKS — centered cards on dark-warm
          ============================================= */}
      <section className="section-padding section-dark-warm relative overflow-hidden min-h-[75vh] flex items-center">
        <div className="container-max w-full">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Three simple</span>{" "}
                <span className="font-extrabold text-[var(--color-red)]">
                  steps.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                From{" "}
                <span className="font-bold text-white">
                  download to delivery
                </span>{" "}
                in minutes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Sign Up",
                  body: "Download the app and verify your identity in minutes — no proof of address.",
                },
                {
                  step: "02",
                  title: "Add Recipient",
                  body: "Save anyone in 40+ supported countries to your trusted contacts list.",
                },
                {
                  step: "03",
                  title: "Send",
                  body: "Lock in the rate, tap send, and track in real time until it lands.",
                },
              ].map(({ step, title, body }) => (
                <div
                  key={step}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <p className="text-3xl font-extrabold text-[var(--color-red)] mb-3">
                    {step}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/80 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          SECTION 4: TRUST & COMPLIANCE — split bullets LEFT + image RIGHT
          ============================================= */}
      <section className="section-padding section-dark-warm relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            <ScrollReveal
              type="slide"
              direction="right"
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/heroes/imali-hero-woman-transit.webp"
                  alt="iMali Remit user on the move"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Regulated.</span>{" "}
                <span className="font-extrabold text-[var(--color-red)]">
                  Secure.
                </span>{" "}
                <span className="italic font-light">Trusted.</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Every transfer is protected by{" "}
                <span className="font-bold text-white">
                  enterprise-grade security
                </span>{" "}
                and full SARB regulatory compliance.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    Icon: Shield,
                    title: "Category Two ADLA",
                    body: "fully authorised by the South African Reserve Bank.",
                  },
                  {
                    Icon: FileCheck,
                    title: "KYC & FICA Compliant",
                    body: "every account verified at onboarding.",
                  },
                  {
                    Icon: Clock,
                    title: "Real-Time Tracking",
                    body: "transparency from the moment you tap send.",
                  },
                  {
                    Icon: Globe,
                    title: "Cross-Border Cover",
                    body: "40+ corridors, all under one regulated rail.",
                  },
                ].map(({ Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-red)]/20 backdrop-blur flex items-center justify-center border border-white/20">
                      <Icon className="w-5 h-5 text-[var(--color-red)]" />
                    </span>
                    <span className="leading-relaxed">
                      <span className="font-bold text-white">{title}</span>
                      <span className="text-white/85"> {body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          CTA: dark gradient app download bookend
          ============================================= */}
      <section
        id="download"
        className="relative section-padding overflow-hidden min-h-[70vh] flex items-center"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-imali-red) 0%, #1a0a12 55%, var(--color-black) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-imali-red)]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-imali-red)]/30 to-transparent" />
        </div>

        <div className="container-max relative z-10">
          <div className="text-center">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
                Get Started
              </p>
              <h2 className="text-white mb-3">
                <span className="italic font-light">Send your first</span>{" "}
                <span className="font-extrabold">transfer free.</span>
              </h2>
              <p className="text-white/85 text-base mb-8 max-w-xl mx-auto">
                Download the iMali Remit app and lock in{" "}
                <span className="font-bold text-white">
                  zero percent fees
                </span>{" "}
                on your first transaction.
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
