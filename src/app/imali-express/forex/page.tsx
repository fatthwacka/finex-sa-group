import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import BranchLocations from "@/components/sections/BranchLocations";
import { BRANDS } from "@/config/brands";
import {
  MapPin,
  Banknote,
  Plane,
  Briefcase,
  Shield,
  Users,
  Building2,
  Globe,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "iMali Forex | Bureau de Change Branches Across South Africa",
  description:
    "Premium Bureau de Change branches nationwide. Best forex rates for tourists, locals, and business travel. SARB-approved Category Two ADLA. Omnibus Corporate Travel facility up to R20m.",
  keywords: [
    "iMali Forex",
    "Bureau de Change South Africa",
    "forex exchange",
    "Cape Town forex",
    "Omnibus corporate travel",
    "ADLA South Africa",
  ],
};

export default function ImaliForexPage() {
  const brand = BRANDS.imaliForex;

  return (
    <div data-brand={brand.dataBrand}>
      {/* =============================================
          HERO: dark navy-red gradient
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[65vh]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-imali-navy) 0%, #1a0820 55%, var(--color-black) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-imali-red)]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-imali-navy)]/40 to-transparent" />
        </div>

        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-2xl">
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-white/85">
                iMali Forex
              </p>
              <h1 className="text-white mb-6">
                <span className="italic font-light">Your trusted</span>{" "}
                <span className="font-extrabold">currency exchange</span>{" "}
                <span className="italic font-light">partner.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
                <span className="font-bold">Premium Bureau de Change</span>{" "}
                branches nationwide. Best rates, friendly{" "}
                <span className="italic font-light">face-to-face service</span>.
              </p>
              <CTAButton
                label="Speak to iMali Forex"
                href="/contact"
                variant="white"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          ATMOSPHERIC BREAK: travel image + paragraph overlay
          ============================================= */}
      <section className="relative flex items-center h-[60vh] overflow-hidden">
        <Image
          src="/images/backgrounds/Premium_advertising_sunset.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(15, 10, 30, 0.5) 50%, rgba(10, 8, 25, 0.85) 100%)",
          }}
        />
        <div className="container-max relative z-10">
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Travel-ready</span>{" "}
                <span className="font-extrabold">forex,</span>{" "}
                <span className="italic font-light">always close by.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                A nationwide footprint of{" "}
                <span className="font-bold text-white">
                  premium physical branches
                </span>{" "}
                gives tourists, locals, and corporates a{" "}
                <span className="font-bold text-white">
                  trusted face-to-face partner
                </span>{" "}
                for foreign exchange — backed by full SARB authorisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 1: WHY iMALI FOREX — split image LEFT + bullets
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
                  src="/images/backgrounds/imali-forex-where-and-when-square.jpg"
                  alt="iMali Forex done right"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Forex,</span>{" "}
                <span className="font-extrabold text-[var(--color-red)]">
                  done right.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Reliable, competitive currency exchange with the kind of{" "}
                <span className="font-bold text-white">
                  friendly, in-person service
                </span>{" "}
                that&apos;s become rare.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    Icon: TrendingUp,
                    title: "Competitive Rates",
                    body: "highly competitive forex rates across major currencies.",
                  },
                  {
                    Icon: MapPin,
                    title: "Nationwide Branches",
                    body: "premium locations from the Waterfront to Kruger.",
                  },
                  {
                    Icon: Users,
                    title: "Face-to-Face Service",
                    body: "trained staff, real conversations, no chatbots.",
                  },
                  {
                    Icon: Plane,
                    title: "Tourists & Locals",
                    body: "purpose-built for travellers in both directions.",
                  },
                  {
                    Icon: Shield,
                    title: "SARB Authorised",
                    body: "fully approved Category Two ADLA.",
                  },
                  {
                    Icon: Briefcase,
                    title: "Corporate Allowances",
                    body: "Omnibus business travel facility up to R20m a year.",
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
          SECTION 2: BRANCHES — full-bleed bg + BranchLocations
          ============================================= */}
      <section className="relative overflow-hidden">
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
              "linear-gradient(135deg, rgba(15, 10, 30, 0.9) 0%, rgba(10, 5, 8, 0.85) 50%, rgba(42, 8, 16, 0.9) 100%)",
          }}
        />
        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-red)] mb-4">
                Where to find us
              </p>
              <h2 className="text-white mb-4">
                <span className="italic font-light">A premium branch,</span>{" "}
                <span className="font-extrabold">close to you.</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                From the V&amp;A Waterfront to Kruger International, our
                branches sit in{" "}
                <span className="font-bold text-white">
                  the places people travel through
                </span>
                .
              </p>
            </div>
          </ScrollReveal>
          {brand.branches && (
            <BranchLocations branches={brand.branches} title="" />
          )}
        </div>
      </section>

      {/* =============================================
          SECTION 3: OMNIBUS CORPORATE TRAVEL — split content LEFT + image RIGHT
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
                  src="/images/backgrounds/omnibus-travel-allowance.jpg"
                  alt="iMali Forex Omnibus Corporate Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-red)] mb-4">
                For Corporates
              </p>
              <h2 className="text-white mb-4">
                <span className="italic font-light">Omnibus</span>{" "}
                <span className="font-extrabold text-[var(--color-red)]">
                  Corporate Travel.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Unlock seamless business travel allowances with our{" "}
                <span className="font-bold text-white">free Omnibus services</span>.
                South African companies can utilise a{" "}
                <span className="font-bold text-white">
                  Business Travel Facility of up to R20 million
                </span>{" "}
                per calendar year for their delegates.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  {
                    Icon: Briefcase,
                    title: "R20m Annual Facility",
                    body: "company-wide allowance for business travel forex.",
                  },
                  {
                    Icon: Building2,
                    title: "Pre-Trip Settlement",
                    body: "pay accommodation and car hire before delegates leave.",
                  },
                  {
                    Icon: Globe,
                    title: "Exceptional SARB Approvals",
                    body: "we facilitate applications above the R20m threshold.",
                  },
                  {
                    Icon: Banknote,
                    title: "Regulatory Cover",
                    body: "we manage the compliance, you manage the trip.",
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
              <CTAButton
                label="Speak to iMali Forex"
                href="/contact"
                variant="red"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 4: WHO WE SERVE — centered cards on dark-accent-red
          ============================================= */}
      <section className="section-padding section-dark-accent-red relative overflow-hidden">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Built for</span>{" "}
                <span className="font-extrabold">everyone who moves.</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                Whether you&apos;re passing through, heading abroad, or sending
                a delegation — we have you covered.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  Icon: Plane,
                  title: "Tourists",
                  body: "Walk-in forex at premium South African travel hubs and tourist destinations.",
                },
                {
                  Icon: MapPin,
                  title: "Local Travellers",
                  body: "Lock in competitive rates before you fly, with same-day cash availability.",
                },
                {
                  Icon: Briefcase,
                  title: "Business Travel",
                  body: "Omnibus corporate facility for delegations, conferences, and overseas work.",
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 text-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-red)]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-red)]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/80 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          CTA: dark gradient bookend
          ============================================= */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-imali-navy) 0%, #1a0820 55%, var(--color-black) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-imali-red)]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-imali-navy)]/40 to-transparent" />
        </div>

        <div className="container-max relative z-10">
          <div className="text-center">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
                Get in Touch
              </p>
              <h2 className="text-white mb-3">
                <span className="italic font-light">Plan your</span>{" "}
                <span className="font-extrabold">forex,</span>{" "}
                <span className="italic font-light">your way.</span>
              </h2>
              <p className="text-white/85 text-base mb-8 max-w-xl mx-auto">
                Speak to a forex specialist about{" "}
                <span className="font-bold text-white">
                  travel allowances, corporate facilities, or branch services
                </span>
                .
              </p>
              <CTAButton
                label="Speak to iMali Forex"
                href="/contact"
                variant="white"
                size="lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
