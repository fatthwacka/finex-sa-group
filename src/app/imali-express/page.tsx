import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "iMali Express | Cross-Border Finance for South Africa",
  description:
    "Two services, one ecosystem. iMali Remit for instant remittances to 40+ countries, and iMali Forex Bureau de Change branches nationwide. SARB-approved Category Two ADLA.",
};

export default function ImaliExpressLandingPage() {
  return (
    <div data-brand="imali">
      {/* =============================================
          HERO: dark warm with subtle red wash
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[60vh] section-dark-warm">
        <div className="absolute inset-0 bg-gradient-to-tl from-[var(--color-imali-red)]/15 via-transparent to-transparent pointer-events-none" />

        <div className="container-max relative z-10 py-20 md:py-28 text-center">
          <ScrollReveal>
            <Image
              src="/images/logos/imali_express.png"
              alt="iMali Express"
              width={440}
              height={192}
              className="h-20 md:h-24 w-auto mx-auto mb-10 brightness-0 invert"
              priority
            />
            <h1 className="text-white mb-6 max-w-3xl mx-auto">
              <span className="italic font-light">Cross-border,</span>{" "}
              <span className="font-extrabold">made simple.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              Two services. One ecosystem. Send money home through{" "}
              <span className="font-bold text-white">iMali Remit</span>, or
              exchange currency at our{" "}
              <span className="font-bold text-white">iMali Forex</span>{" "}
              Bureau de Change branches nationwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/imali-express/remit"
                className="inline-flex items-center justify-center min-w-[14rem] px-8 py-4 text-lg font-semibold rounded-full text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-90 transition-all duration-300"
                style={{ background: "var(--color-imali-red)" }}
              >
                Send Money
              </Link>
              <Link
                href="/imali-express/forex"
                className="inline-flex items-center justify-center min-w-[14rem] px-8 py-4 text-lg font-semibold rounded-full text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-90 transition-all duration-300"
                style={{ background: "var(--color-imali-navy)" }}
              >
                Find a Branch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          16:9 KEY VISUAL BANNER
          ============================================= */}
      <section className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src="/images/backgrounds/imali-remit-website-banner-16-9.jpg"
          alt="iMali Express — Mali Yami campaign"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* =============================================
          TWO PATHS: Remit | Forex
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
                Move money <span className="font-bold text-white">home</span>.
                Exchange currency{" "}
                <span className="font-bold text-white">in person</span>.{" "}
                <span className="italic font-light">Built for both.</span>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Card 1: iMali Remit — digital remittance */}
            <ScrollReveal>
              <div
                data-brand="imali"
                className="relative flex flex-col h-full rounded-2xl border border-white/10 p-6 md:p-7"
                style={{ background: "var(--color-imali-red)" }}
              >
                <Image
                  src="/images/logos/Imali-Remit-White-logo.png"
                  alt="iMali Remit"
                  width={240}
                  height={80}
                  className="self-start h-9 md:h-10 w-auto object-contain mb-5"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85 mb-5">
                  Send Money Home
                </p>
                <h3 className="text-white text-xl md:text-2xl mb-3 leading-tight">
                  <span className="italic font-light">Instant remittance</span>{" "}
                  <span className="font-extrabold">to 40+ countries.</span>
                </h3>
                <p className="text-white text-sm font-medium leading-relaxed mb-2">
                  <span className="font-bold">Zero percent fees</span>{" "}
                  <span className="italic font-light">on your first send.</span>{" "}
                  <span className="font-bold">Real-time tracking.</span>
                </p>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  No proof of address required. Built for residents, foreign
                  nationals, and asylum seekers alike.
                </p>
                <div className="card-actions">
                  <Link
                    href="/imali-express/remit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-white/90 text-[var(--color-imali-red)] font-semibold py-2.5 px-5 text-sm transition-colors shadow-lg"
                  >
                    Explore iMali Remit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: iMali Forex — Bureau de Change branches */}
            <ScrollReveal delay={0.1}>
              <div
                data-brand="imali"
                className="relative flex flex-col h-full rounded-2xl border border-white/10 p-6 md:p-7 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-imali-navy) 0%, #2a1a5e 50%, var(--color-imali-navy) 100%)",
                }}
              >
                <p className="text-xl md:text-2xl font-extrabold text-white mb-1">
                  iMali <span className="text-[var(--color-imali-red)]">Forex</span>
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85 mb-5">
                  Bureau de Change
                </p>
                <h3 className="text-white text-xl md:text-2xl mb-3 leading-tight">
                  <span className="italic font-light">Premium branches</span>{" "}
                  <span className="font-extrabold">across South Africa.</span>
                </h3>
                <p className="text-white text-sm font-medium leading-relaxed mb-2">
                  <span className="font-bold">Best rates.</span>{" "}
                  <span className="italic font-light">Face-to-face service.</span>{" "}
                  <span className="font-bold">SARB authorised.</span>
                </p>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  For tourists, locals, and corporates — including the Omnibus
                  business travel facility up to R20m a year.
                </p>
                <div className="card-actions">
                  <Link
                    href="/imali-express/forex"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-white/90 text-[var(--color-imali-navy)] font-semibold py-2.5 px-5 text-sm transition-colors shadow-lg"
                  >
                    Explore iMali Forex
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
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-white mb-6">
                <span className="italic font-light">One ecosystem,</span>{" "}
                <span className="font-extrabold">two ways to move money.</span>
              </h2>
              <p className="text-base md:text-lg text-white/85 leading-relaxed mb-4">
                iMali Express is a South African Reserve Bank-approved{" "}
                <span className="font-bold text-white">
                  Category Two ADLA
                </span>{" "}
                — fully authorised to deal in foreign exchange and
                international remittances.
              </p>
              <p className="text-sm md:text-base text-white/75 leading-relaxed">
                Whether you&apos;re sending money home through the Remit app or
                exchanging cash at a Forex branch, every transaction sits on
                the same{" "}
                <span className="font-bold text-white">
                  trusted regulated rail
                </span>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
