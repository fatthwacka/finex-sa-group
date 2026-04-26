import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/effects/ScrollReveal";
import EnergySwoosh from "@/components/effects/EnergySwoosh";
import CTAButton from "@/components/ui/CTAButton";
import {
  CreditCard,
  Zap,
  Users,
  Building2,
  Shield,
  FileCheck,
  Factory,
  HardHat,
  ShieldAlert,
  Scale,
  AlertTriangle,
  UserX,
  Files,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FINEXflow | Workforce Payments Reimagined",
  description:
    "FINEXflow is the secure final layer between payroll and the bank. Real-time worker payments, automated compliance, and a worker app baked in. Built for employers running high-volume workforces.",
  keywords: [
    "workforce payments",
    "payroll automation",
    "real-time payments",
    "employer compliance",
    "worker wallet",
    "FINEXflow",
  ],
};

const coreFeatures = [
  {
    title: "On-Site Onboarding",
    description:
      "We come to you. Workers are verified, enrolled and payment-ready within days with zero disruption to your operations.",
  },
  {
    title: "Compliance Embedded",
    description:
      "Every worker is verified through automated KYC, digital identity checks, and real-time liveness checks with selfie matching at enrolment.",
  },
  {
    title: "100% Real-Time Success Rate",
    description:
      "Every payment instruction is executed instantly. No batch delays. No failed transactions.",
  },
  {
    title: "Self-Service Dashboard",
    description:
      "Total geographic freedom. Execute payments and manage compliance from anywhere in the world.",
  },
];

export default function FinexFlowPage() {
  return (
    <div data-brand="finexflow">
      {/* =============================================
          HERO: gradient (no image) + left-aligned text
          ============================================= */}
      <section
        id="finexflow"
        className="relative flex items-center overflow-hidden min-h-[65vh]"
      >
        {/* FINEXflow brand sunset gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cyan) 0%, var(--color-purple) 35%, var(--color-red) 65%, var(--color-orange) 100%)",
          }}
        />
        {/* Subtle dark wash on the lower-left to lift text legibility */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent pointer-events-none" />

        {/* Energy swoosh ribbons */}
        <div className="absolute inset-0 pointer-events-none">
          <EnergySwoosh variant="background" brightness="bright" />
        </div>

        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-2xl">
              {/* FINEXflow wordmark */}
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
          ATMOSPHERIC IMAGE BREAK: executive image + paragraph overlay
          ============================================= */}
      <section className="relative flex items-center h-[69vh] overflow-hidden">
        <Image
          src="/images/heroes/finexflow-farm-worker-02.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Tri-stop overlay: transparent left, dark grey centre, dark blue-grey right */}
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
          MEGA SECTION (SUNSET):
          Challenge + Seamless Solution + Strategic Pillars + Universal Application
          ============================================= */}
      <section className="section-padding section-sunset">
        <div className="container-max">
          {/* Sub-group 1: The Challenge */}
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
                  </span>
                  , until it becomes{" "}
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

          {/* Sub-group 2: The Seamless Solution */}
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
                  between your payroll and the bank:{" "}
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

          {/* Sub-group 3: The Strategic Pillars */}
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
                  body: "100% uptime, zero downtime: verifiable for enterprise clients.",
                },
                {
                  Icon: Zap,
                  title: "Speed of Execution",
                  body: "Real-time payments at any scale to maintain project momentum.",
                },
                {
                  Icon: FileCheck,
                  title: "Efficiencies & Compliance",
                  body: "Regulatory adherence without the manual burden: SMS payslips silence HR queries.",
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

          {/* Sub-group 4: Engineered for Universal Application */}
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

      {/* Core Features: 2x2 cards + image */}
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
            {/* 2x2 compact cards */}
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

      {/* CTA: sunset spectrum */}
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
  );
}
