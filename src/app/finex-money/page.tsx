import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { BRANDS } from "@/config/brands";

export const metadata: Metadata = {
  title: "Finex Money | Banking for Individuals & Workforces",
  description:
    "Two solutions, one ecosystem. The Finex Money digital wallet for individuals, and FINEXflow for businesses paying high-volume workforces.",
};

export default function FinexMoneyLandingPage() {
  return (
    <>
      {/* =============================================
          HERO: clean intro setting up the two paths
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[60vh] section-dark-warm">
        {/* Subtle red wash bottom-right */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[var(--color-red)]/15 via-transparent to-transparent pointer-events-none" />

        <div className="container-max relative z-10 py-20 md:py-28 text-center">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-10 md:gap-16 max-w-md mx-auto mb-10">
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/images/logos/Finex-Money-red-white-icon.png"
                  alt="Finex Money"
                  width={200}
                  height={200}
                  className="h-14 md:h-16 w-auto object-contain"
                  priority
                />
                <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold text-white/85">
                  Finex Money
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/images/logos/finexflow-logo-no-word.png"
                  alt="FINEXflow"
                  width={200}
                  height={200}
                  className="h-14 md:h-16 w-auto object-contain"
                  priority
                />
                <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold text-white/85">
                  Finex Flow
                </p>
              </div>
            </div>
            <h1 className="text-white mb-6 max-w-3xl mx-auto">
              <span className="italic font-light">Banking,</span>{" "}
              <span className="font-extrabold">designed</span>{" "}
              <span className="italic font-light">for</span>{" "}
              <span className="font-extrabold">everyone.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              Two solutions. One ecosystem. Whether you&apos;re banking for
              yourself or paying a workforce, Finex Money has the tools to move
              money your way.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/finex-money/individual"
                className="inline-flex items-center justify-center min-w-[14rem] px-8 py-4 text-lg font-semibold rounded-full bg-finex-red hover:bg-finex-red-dark text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                For Individuals
              </Link>
              <Link
                href="/finex-money/finexflow"
                className="inline-flex items-center justify-center min-w-[14rem] px-8 py-4 text-lg font-semibold rounded-full text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-90 transition-all duration-300"
                style={{ background: "var(--gradient-sunset)" }}
              >
                For Employers
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          16:9 KEY VISUAL BANNER
          Locked aspect ratio so the entire image stays
          visible at every viewport width.
          ============================================= */}
      <section className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src="/images/backgrounds/finexflow-into-finexmoney-flow.jpg"
          alt="FINEXflow flowing into Finex Money"
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* =============================================
          TWO PATHS: Individuals | Business
          Cards use brand terminology in body copy that
          flips the button labels (employee/employer copy
          under "Individual"/"Business" buttons).
          ============================================= */}
      <section className="section-padding section-dark-warm pt-0 md:pt-0">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Explore</span>{" "}
                <span className="font-extrabold">further.</span>
              </h2>
              <p className="text-lg text-white/75">
                Better <span className="font-bold text-white">banking.</span>{" "}
                Smoother <span className="font-bold text-white">payments.</span>{" "}
                <span className="italic font-light">Built for you.</span>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Card 1: Finex Money — for individuals/employees */}
            <ScrollReveal>
              <div
                data-brand="finex-money"
                className="relative flex flex-col h-full rounded-2xl border border-white/10 bg-[#E32626]/90 p-6 md:p-7"
              >
                <Image
                  src={BRANDS.finexMoney.logo!}
                  alt="Finex Money"
                  width={240}
                  height={80}
                  className="self-start h-8 md:h-9 w-auto object-contain mb-5 brightness-0 invert"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-5">
                  For Individuals
                </p>
                <h3 className="text-white text-xl md:text-2xl mb-3 leading-tight">
                  <span className="italic font-light">Digital wallet</span>{" "}
                  <span className="font-extrabold">for individuals.</span>
                </h3>
                <p className="text-white text-sm font-medium leading-relaxed mb-2">
                  <span className="font-bold">Sign up in 3 minutes.</span>{" "}
                  <span className="italic font-light">No proof of address required.</span>{" "}
                  <span className="font-bold">Mastercard included.</span>
                </p>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  Send, shop, and withdraw at any ATM nationwide.
                </p>
                <div className="card-actions">
                  <Link
                    href="/finex-money/individual"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-white/90 text-[#B51818] font-semibold py-2.5 px-5 text-sm transition-colors shadow-lg"
                  >
                    Explore Finex Money
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: FINEXflow — for business/employers */}
            <ScrollReveal delay={0.1}>
              <div
                data-brand="finexflow"
                className="relative flex flex-col h-full rounded-2xl border border-white/10 p-6 md:p-7 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-cyan) 0%, var(--color-purple) 50%, var(--color-red) 100%)",
                }}
              >
                <Image
                  src={BRANDS.finexflow.logo!}
                  alt="FINEXflow"
                  width={240}
                  height={80}
                  className="self-start h-8 md:h-9 w-auto object-contain mb-5 brightness-0 invert"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85 mb-5">
                  For Business
                </p>
                <h3 className="text-white text-xl md:text-2xl mb-3 leading-tight">
                  <span className="italic font-light">Payment solution</span>{" "}
                  <span className="font-extrabold">for employers.</span>
                </h3>
                <p className="text-white text-sm font-medium leading-relaxed mb-2">
                  <span className="font-bold">Real-time payments.</span>{" "}
                  <span className="italic font-light">Full compliance.</span>{" "}
                  <span className="font-bold">Enterprise-grade.</span>
                </p>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  Built for workforces, factories, farms, construction, and
                  high-volume teams.
                </p>
                <div className="card-actions">
                  <Link
                    href="/finex-money/finexflow"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-white/90 text-[#0f4761] font-semibold py-2.5 px-5 text-sm transition-colors shadow-lg"
                  >
                    Explore FINEXflow
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          HOW IT FITS TOGETHER
          Terminology flips back to individual/corporate
          to satisfy both internal naming preferences.
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-white mb-6">
                <span className="italic font-light">How it</span>{" "}
                <span className="font-extrabold">all connects.</span>
              </h2>
              <p className="text-base md:text-lg text-white/85 leading-relaxed mb-4">
                FINEXflow is a{" "}
                <span className="font-bold text-white">
                  paid corporate service
                </span>{" "}
                built on top of the Finex Money platform. Every worker paid
                through FINEXflow automatically receives a Finex Money digital
                wallet.
              </p>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">
                That means individuals always have access to their money the
                moment it lands, and businesses get the secure, compliant
                infrastructure to power it. One ecosystem,{" "}
                <span className="font-bold text-white">
                  serving both ends of the wage cycle
                </span>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
