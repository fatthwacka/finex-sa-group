import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import { BRANDS } from "@/config/brands";
import {
  Code,
  Shield,
  Server,
  Wallet,
  Cpu,
  Zap,
  Lock,
  Database,
  Globe,
  Layers,
  RefreshCw,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Finex Technologies | Proprietary Fintech Infrastructure",
  description:
    "Finex Technologies develops, deploys, and maintains the proprietary software backbone behind the Finex SA Group ecosystem. Pioneering alternative payments and digital asset integration.",
  keywords: [
    "fintech infrastructure South Africa",
    "proprietary fintech software",
    "alternative payment gateway",
    "digital asset integration",
    "fintech software Africa",
  ],
};

export default function TechnologyPage() {
  const brand = BRANDS.finexTech;

  return (
    <div data-brand={brand.dataBrand}>
      {/* =============================================
          HERO: dark navy-charcoal gradient with teal accent
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[75vh]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-tech-navy) 0%, #0a1928 55%, var(--color-tech-charcoal) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-tech-teal)]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-tech-navy)]/40 to-transparent" />
        </div>

        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-2xl">
              <Image
                src="/images/logos/finex-technologies-v2.png"
                alt="Finex Technologies"
                width={440}
                height={192}
                className="h-24 md:h-28 w-auto mb-8"
                priority
              />
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-white/85">
                Finex Technologies
              </p>
              <h1 className="text-white mb-6">
                <span className="italic font-light">The</span>{" "}
                <span className="font-extrabold">Infrastructure</span>
                <br />
                <span className="font-light">of Tomorrow.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
                To lead the financial sector, you must{" "}
                <span className="font-bold text-white">own the technology</span>{" "}
                that drives it.
              </p>
              <CTAButton
                label="Speak to Our Technology Team"
                href="/contact"
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
          src="/images/heroes/africa-glowing-circuit-boards.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, transparent 0%, rgba(13, 59, 112, 0.45) 50%, rgba(10, 25, 40, 0.92) 100%)",
          }}
        />
        <div className="container-max relative z-10">
          <div className="flex justify-start">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Powering the</span>{" "}
                <span className="font-extrabold">entire</span>
                <br />
                <span className="font-light">ecosystem.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Finex Technologies{" "}
                <span className="font-bold text-white">
                  develops, deploys, and maintains
                </span>{" "}
                the sophisticated software architecture that powers our digital
                wallets, remittance platforms, and high-volume payroll systems.
                This dedicated technology division ensures{" "}
                <span className="font-bold text-white">
                  absolute data security
                </span>
                , real-time execution capabilities, and the agility to adapt to
                evolving market demands.
              </p>
              <CTAButton
                label="Visit Finex Technologies"
                href="https://finextechnologies.co.za"
                variant="secondary"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 1: PROPRIETARY PLATFORM — split image LEFT + bullets
          ============================================= */}
      <section className="section-padding section-dark-tech relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <ScrollReveal
              type="slide"
              direction="left"
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/backgrounds/Smartphone_and_luxury_card.jpg"
                  alt="Finex Technologies proprietary platform"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <h2 className="text-white mb-4">
                <span className="italic font-light">The Proprietary</span>
                <br />
                <span className="font-extrabold text-[var(--color-tech-teal)]">
                  Backbone.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Every product in the Finex SA Group runs on{" "}
                <span className="font-bold text-white">
                  technology we built ourselves
                </span>
                . No third-party dependencies. No inherited limitations.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    Icon: Code,
                    title: "In-House Development",
                    body: "every line of code written and maintained by our team.",
                  },
                  {
                    Icon: Shield,
                    title: "Enterprise-Grade Security",
                    body: "protecting all client data and transactions end to end.",
                  },
                  {
                    Icon: Server,
                    title: "Real-Time Processing",
                    body: "high-performance systems executing transactions at scale.",
                  },
                  {
                    Icon: Database,
                    title: "Scalable Architecture",
                    body: "built to grow with millions of users across the continent.",
                  },
                  {
                    Icon: Lock,
                    title: "Regulatory Compliance",
                    body: "SARB, SARS, and FICA requirements baked into every layer.",
                  },
                  {
                    Icon: RefreshCw,
                    title: "Continuous Deployment",
                    body: "rapid iteration without downtime for end users.",
                  },
                ].map(({ Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-tech-teal)]/20 backdrop-blur flex items-center justify-center border border-white/20">
                      <Icon className="w-5 h-5 text-[var(--color-tech-teal)]" />
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
          SECTION 2: FINEX PAY — full-bleed bg + cards
          ============================================= */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/backgrounds/Imali-Remit-image00012.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13, 59, 112, 0.85) 0%, rgba(10, 20, 35, 0.75) 50%, rgba(57, 64, 77, 0.85) 100%)",
          }}
        />
        <div className="container-max relative z-10 py-20 md:py-24">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-tech-teal)] mb-4">
                Finex Pay
              </p>
              <h2 className="text-white mb-4">
                <span className="italic font-light">Pioneering</span>{" "}
                <span className="font-extrabold">
                  Alternative Payments.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                With over{" "}
                <span className="font-bold text-white">
                  5.8 million cryptocurrency users
                </span>{" "}
                in South Africa, the landscape of value exchange is shifting
                rapidly. Finex Pay is focused on{" "}
                <span className="font-bold text-white">
                  alternative payment gateways
                </span>{" "}
                and crypto integrations, providing the bridge between
                traditional fiat environments and the future of digital
                currency.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                {
                  Icon: Wallet,
                  title: "Payment Gateways",
                  body: "The bridge between traditional fiat environments and the future of digital currency.",
                },
                {
                  Icon: Cpu,
                  title: "Crypto Integrations",
                  body: "Building for the future of value exchange with secure digital asset support.",
                },
                {
                  Icon: Zap,
                  title: "Digital Assets",
                  body: "Seamlessly connecting traditional financial systems with emerging ecosystems.",
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-black/40 backdrop-blur-md rounded-xl p-5 border border-white/10 text-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-tech-teal)]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-tech-teal)]" />
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
          SECTION 3: WHAT WE BUILD — centered cards on dark-tech
          ============================================= */}
      <section className="section-padding section-dark-tech relative overflow-hidden min-h-[75vh] flex items-center">
        <div className="container-max w-full">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">What we</span>{" "}
                <span className="font-extrabold text-[var(--color-tech-teal)]">
                  build.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                From{" "}
                <span className="font-bold text-white">
                  digital wallets to remittance rails
                </span>
                , every product in the ecosystem runs on our platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  Icon: Wallet,
                  title: "Digital Wallets",
                  body: "The Finex Money app and its entire transactional engine, built from scratch.",
                },
                {
                  Icon: Globe,
                  title: "Remittance Rails",
                  body: "The iMali Remit platform, processing cross-border transfers to 40+ countries.",
                },
                {
                  Icon: BarChart3,
                  title: "Payroll Systems",
                  body: "FINEXflow's high-volume disbursement engine for farms, factories, and construction sites.",
                },
                {
                  Icon: Shield,
                  title: "Compliance Layer",
                  body: "Automated KYC, FICA, and SARB reporting integrated across all products.",
                },
                {
                  Icon: Layers,
                  title: "API Gateway",
                  body: "Unified integration layer connecting internal products and external banking partners.",
                },
                {
                  Icon: Lock,
                  title: "Security Stack",
                  body: "End-to-end encryption, fraud detection, and real-time transaction monitoring.",
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-tech-teal)]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-tech-teal)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/80 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          SECTION 4: SECURITY & SCALE — split bullets LEFT + image RIGHT
          ============================================= */}
      <section className="section-padding section-dark-tech relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            <ScrollReveal
              type="slide"
              direction="right"
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="/images/backgrounds/Premium_advertising_sunset.jpg"
                  alt="Finex Technologies secure infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Secure.</span>{" "}
                <span className="font-extrabold text-[var(--color-tech-teal)]">
                  Scalable.
                </span>{" "}
                <span className="italic font-light">Always On.</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Our infrastructure is designed for{" "}
                <span className="font-bold text-white">
                  zero-downtime operation
                </span>{" "}
                and the agility to adapt to evolving market demands instantly.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    Icon: Shield,
                    title: "Absolute Data Security",
                    body: "enterprise-grade encryption protecting every transaction.",
                  },
                  {
                    Icon: Server,
                    title: "24/7 Uptime",
                    body: "always-on systems with automated failover and monitoring.",
                  },
                  {
                    Icon: RefreshCw,
                    title: "Instant Adaptability",
                    body: "rapid deployment of updates without service interruption.",
                  },
                  {
                    Icon: Globe,
                    title: "Multi-Country Ready",
                    body: "infrastructure designed for pan-African expansion.",
                  },
                ].map(({ Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-tech-teal)]/20 backdrop-blur flex items-center justify-center border border-white/20">
                      <Icon className="w-5 h-5 text-[var(--color-tech-teal)]" />
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
          STATS: tech stats on teal-navy gradient
          ============================================= */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(135deg, var(--color-tech-teal) 0%, #0a8a87 50%, var(--color-tech-navy) 100%)",
        }}
      >
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  5.8M+
                </div>
                <div className="text-white/80">Crypto Users in SA</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  24/7
                </div>
                <div className="text-white/80">System Uptime</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  100%
                </div>
                <div className="text-white/80">In-House Development</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  Real
                </div>
                <div className="text-white/80">Time Processing</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          CTA: dark navy-charcoal bookend
          ============================================= */}
      <section className="relative section-padding overflow-hidden min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-tech-navy) 0%, #0a1928 55%, var(--color-tech-charcoal) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-tech-teal)]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-tech-navy)]/40 to-transparent" />
        </div>

        <div className="container-max relative z-10">
          <div className="text-center">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
                Get in Touch
              </p>
              <h2 className="text-white mb-3">
                <span className="italic font-light">Interested in our</span>{" "}
                <span className="font-extrabold">technology?</span>
              </h2>
              <p className="text-white/85 text-base mb-8 max-w-xl mx-auto">
                Whether you are looking to integrate our payment solutions or
                explore partnership opportunities, our technology team is ready
                to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <CTAButton
                  label="Contact Us"
                  href="/contact"
                  variant="white"
                  size="lg"
                />
                <CTAButton
                  label="Explore Finex Technologies"
                  href="https://finextechnologies.co.za"
                  variant="secondary"
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
