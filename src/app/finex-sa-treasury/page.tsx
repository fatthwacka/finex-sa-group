import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import {
  TrendingUp,
  Calculator,
  FileCheck,
  Clock,
  Globe,
  Shield,
} from "lucide-react";
import { BRANDS, GROUP } from "@/config/brands";

export const metadata: Metadata = {
  title:
    "Finex SA Treasury | Corporate Forex & Treasury Management South Africa",
  description:
    "Bespoke currency risk management, forward cover contracts, and full regulatory compliance for multinationals and high-volume importers/exporters. FSP 45242 | SARB No. 2264.",
  keywords: [
    "corporate treasury management South Africa",
    "currency risk management",
    "forward cover contract",
    "hedging strategy South Africa",
    "forex intermediary",
    "multinational treasury",
  ],
};

const services = [
  {
    Icon: TrendingUp,
    title: "Currency Risk Management",
    description:
      "Our treasury specialists conduct collaborative assessments of your projected currency inflows and outflows to build bulletproof hedging strategies.",
  },
  {
    Icon: Calculator,
    title: "Forward Cover Contracts",
    description:
      "We assist in implementing appropriate currency risk management tools, including facilitating Forward Cover Contracts, Stop and Limit orders.",
  },
  {
    Icon: FileCheck,
    title: "Balance of Payments",
    description:
      "We expertly guide clients through the completion of complex Balance of Payments forms.",
  },
  {
    Icon: Clock,
    title: "SPOT & NEXT Day Payments",
    description:
      "Enjoy the best rates with no hidden margins or fees, processing all transactions from your own account in your own name.",
  },
  {
    Icon: Globe,
    title: "Multi-Currency Cash Flows",
    description:
      "From managing exchange control regulations to optimising multi-currency cash flows, we bring a 360-degree approach to treasury management.",
  },
  {
    Icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Full compliance with SARB regulations and exchange control requirements for all your international transactions.",
  },
];

export default function TreasuryPage() {
  const brand = BRANDS.treasury;

  return (
    <div data-brand={brand.dataBrand}>
      {/* =============================================
          HERO — exec black + copper accents
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[75vh] section-exec-hero">
        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-3xl mx-auto text-center">
              {/* Treasury logo */}
              {brand.logo && (
                <Image
                  src={brand.logo}
                  alt="Finex SA Treasury"
                  width={320}
                  height={120}
                  className="h-20 md:h-28 w-auto mx-auto mb-8"
                  priority
                />
              )}
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-exec-accent">
                Finex SA Treasury
              </p>
              <h1 className="text-white mb-6">
                <span className="italic font-light">Master</span>{" "}
                <span className="font-extrabold">Global Cash Flow.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
                <span className="italic font-light">Timing is everything.</span>{" "}
                Every missed payment window, unhedged currency risk, or
                regulatory misstep can cost you opportunity. We apply a{" "}
                <span className="font-bold text-white">
                  merchant bank approach
                </span>
                , designing treasury systems built exactly around your
                operational realities for multinational corporations and
                high-volume importers and exporters.
              </p>
              <CTAButton
                label="Speak to a Treasury Advisor"
                href="/contact"
                variant="bronze"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          ATMOSPHERIC IMAGE BREAK — treasury master key visual, 60vh
          ============================================= */}
      <section className="relative flex items-start h-[60vh] overflow-hidden">
        <Image
          src="/images/heroes/treasury-master-key-visual.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Subtle amber wash overlay to integrate with page palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050302]/70 via-[#050302]/30 to-[#050302]/75" />

        {/* Overlay title — aligned to page body content */}
        <div className="container-max relative z-10 pt-12 md:pt-16">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-2xl">
              <h2 className="text-white">
                <span className="italic font-light">Discover</span>{" "}
                <span className="font-extrabold">tailor-made</span>
                <br />
                <span className="font-light">Treasury solutions.</span>
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          INTRO STATEMENT — two-column: text | square image
          ============================================= */}
      <section className="section-padding section-exec-ribbon">
        <div className="container-max">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal type="slide" direction="left">
              <div>
                <h2 className="mb-6 text-exec-accent">
                  Specialised foreign currency risk management.
                </h2>
                <p className="text-white/85 text-lg leading-relaxed">
                  Finex SA offers specialised foreign currency risk management
                  services to help clients{" "}
                  <span className="font-bold text-white">
                    navigate currency fluctuations effectively
                  </span>
                  . Each quarter, our treasury team collaborates with clients to
                  assess projected currency inflows and outflows for the
                  upcoming quarter. Based on this analysis, we develop{" "}
                  <span className="font-bold text-white">
                    tailored currency risk management strategies
                  </span>{" "}
                  that align with each client's unique needs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal type="slide" direction="right">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[color-mix(in_srgb,var(--color-exec-accent)_25%,transparent)]">
                <Image
                  src="/images/backgrounds/treasury-master-key-visual-square.jpg"
                  alt="Treasury master key visual"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          SERVICES GRID — copper-accented cards on black
          ============================================= */}
      <section className="section-padding section-exec">
        <div className="container-max">
          <ScrollReveal type="slide" direction="up">
            <div className="text-center mb-16">
              <h2 className="text-exec-accent mb-4">
                Corporate Foreign Exchange and Risk Management
              </h2>
              <p className="text-lg text-white/75 max-w-3xl mx-auto">
                We offer specialised foreign currency risk management services
                to help clients navigate currency fluctuations with absolute
                confidence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const { Icon } = service;
              return (
                <ScrollReveal
                  key={service.title}
                  type="slide"
                  direction="up"
                  delay={i * 2}
                >
                  <div
                    className="h-full p-8 rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.05]"
                    style={{
                      backgroundImage:
                        "radial-gradient(ellipse 80% 60% at top right, rgba(200, 138, 61, 0.1), transparent 70%)",
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-[color-mix(in_srgb,var(--color-exec-accent)_18%,transparent)] flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-exec-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================
          APPROACH — body copy with merchant-bank framing
          ============================================= */}
      <section className="section-padding section-exec-ribbon">
        <div className="container-max">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal type="slide" direction="left" className="md:order-2">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[color-mix(in_srgb,var(--color-exec-accent)_25%,transparent)]">
                <Image
                  src="/images/backgrounds/treasury-master-key-visual-square-02.jpg"
                  alt="Treasury approach visual"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal type="slide" direction="right" className="md:order-1">
              <div>
                <h2 className="text-exec-accent mb-8">Our Approach</h2>
                <div className="space-y-6 text-white/85 text-lg leading-relaxed">
                  <p>
                    Our treasury specialists conduct collaborative assessments
                    of your projected currency inflows and outflows to build{" "}
                    <span className="font-bold text-white">
                      bulletproof hedging strategies
                    </span>
                    . From managing exchange control regulations to optimising
                    multi-currency cash flows, we bring a{" "}
                    <span className="font-bold text-white">
                      360-degree approach
                    </span>{" "}
                    to treasury management that aligns with your strategic
                    goals.
                  </p>
                  <p>
                    We assist in implementing the appropriate currency risk
                    management tools, including facilitating{" "}
                    <span className="font-bold text-white">
                      Forward Cover Contracts
                    </span>
                    , and Stop and Limit orders. We also expertly guide clients
                    through the completion of complex{" "}
                    <span className="font-bold text-white">
                      Balance of Payments
                    </span>{" "}
                    forms.
                  </p>
                  <p>
                    Enjoy the best rates with no hidden margins or fees,
                    processing all transactions from your own account in your
                    own name with{" "}
                    <span className="font-bold text-white">
                      SPOT and NEXT Day payments
                    </span>
                    .
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          REGULATORY — FSP + SARB emphasis
          ============================================= */}
      <section className="section-padding section-exec">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal type="slide" direction="up">
              <h2 className="text-exec-accent mb-6">
                Safe, Regulated, and Fully Licensed
              </h2>
              <p className="text-white/85 text-lg mb-10 max-w-3xl mx-auto">
                Finex SA (Pty) Ltd, a registered financial service provider
                follows a
                <span className="font-bold text-white">
                  {" "}
                  merchant bank approach
                </span>
                . Our aim is to be an expert solutions-oriented company, dealing
                with multinational corporations in international trade.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-4 rounded-xl border border-[color-mix(in_srgb,var(--color-exec-accent)_35%,transparent)] bg-white/[0.03]">
                  <div className="text-xs tracking-[0.2em] uppercase text-exec-accent mb-1">
                    FSP License
                  </div>
                  <div className="font-bold text-white text-lg">
                    {GROUP.fsp}
                  </div>
                </div>
                <div className="px-6 py-4 rounded-xl border border-[color-mix(in_srgb,var(--color-exec-accent)_35%,transparent)] bg-white/[0.03]">
                  <div className="text-xs tracking-[0.2em] uppercase text-exec-accent mb-1">
                    SARB Intermediary
                  </div>
                  <div className="font-bold text-white text-lg">
                    {GROUP.sarb}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          FINAL CTA
          ============================================= */}
      <section className="section-padding section-exec-ribbon">
        <div className="container-max">
          <ScrollReveal type="slide" direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-white mb-4">
                Ready to{" "}
                <span className="text-exec-accent font-extrabold">
                  optimise
                </span>{" "}
                your treasury?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Speak with our treasury specialists today and discover how we
                can help you master global cash flow.
              </p>
              <CTAButton
                label="Speak to a Treasury Advisor"
                href="/contact"
                variant="bronze"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
