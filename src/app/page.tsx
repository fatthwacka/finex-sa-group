import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import AccentBand, {
  StatDisplay,
  StatRow,
} from "@/components/sections/AccentBand";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import SendMoneyCalculator from "@/components/calculators/SendMoneyCalculator";
import { BRANDS } from "@/config/brands";

export default function HomePage() {
  return (
    <>
      {/* Hero - Pattern A Centred, gradient background */}
      <HeroSection
        variant="gradient-centred"
        heightClass="min-h-[90vh]"
        heroImage="/images/backgrounds/Hero-2440-v3.jpg"
        heroImageAlt="Finex SA Group hero"
        showSwoosh={false}
        showBottomDivider={false}
        logoSrc="/images/logos/finexsa-group-logo-only-no-text.png"
        logoAlt="Finex SA Group"
        logoClassName="brightness-0 invert"
        eyebrow="Finex SA Group"
        headline={
          <>
            <span className="italic font-light">Financial</span>{" "}
            <span className="font-extrabold">Power</span>
            <br />
            <span className="font-light">at Every Level.</span>
          </>
        }
        subline={
          <>
            We believe <span className="font-bold">everyone</span> deserves a{" "}
            <span className="font-bold">seat</span> at the{" "}
            <span className="font-bold">financial table</span>.
          </>
        }
      >
        <Link
          href="#get-started"
          className="inline-flex items-center justify-center min-w-[14rem] px-8 py-4 text-lg font-semibold rounded-full bg-[#E32626] text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 shadow-md transition-all duration-300"
        >
          Open Account
        </Link>
        <Link
          href="#get-started"
          className="inline-flex items-center justify-center min-w-[14rem] px-8 py-4 text-lg font-semibold rounded-full bg-[#003973] text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 shadow-md transition-all duration-300"
        >
          Send Money
        </Link>
      </HeroSection>

      {/* =============================================
          ATMOSPHERIC IMAGE BREAK — centred body paragraph
          City-street image, 60vh, gradient overlay
          ============================================= */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center py-10 md:py-14">
        <Image
          src="/images/backgrounds/guy-walking-in-the-street-sunset.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Directional overlay: heavy on the left for text legibility,
            fading to transparent on the right so the image breathes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/5 to-transparent" />

        <div className="relative z-10 w-full px-8 md:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 w-full max-w-[1440px] mx-auto">
            {/* Left column: title + paragraph */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-white mb-6">
                <span className="italic font-light">Step</span> into{" "}
                <span className="font-normal">the</span>
                <br />
                <span className="font-extrabold">digital economy.</span>
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-md mx-auto lg:mx-0">
                The global cross-border payments market moves{" "}
                <span className="font-bold text-white">
                  trillions every year
                </span>
                , and is{" "}
                <span className="font-bold text-white">growing fast</span>. The
                Finex SA Group sits at the forefront of this evolution: a{" "}
                <span className="font-bold text-white">
                  fully integrated fintech banking ecosystem
                </span>{" "}
                bringing{" "}
                <span className="font-bold text-white">
                  sophisticated technology
                </span>{" "}
                and{" "}
                <span className="font-bold text-white">financial inclusion</span>{" "}
                to the African market.
              </p>
            </div>

            {/* Send Money calculator — right 50% on lg+, centred both horizontally and vertically */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <SendMoneyCalculator ctaHref="#get-started" />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          BRAND FLIP CARDS
          5 hover-to-flip cards (front: logo + tagline, back: description + link)
          Click anywhere to navigate to brand page
          ============================================= */}
      <section
        id="ecosystem"
        className="section-padding section-dark-warm"
        style={{ minHeight: "80vh" }}
      >
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Our</span>{" "}
                <span className="font-extrabold">Ecosystem.</span>
              </h2>
              <p className="text-lg text-white/75 max-w-2xl mx-auto">
                <span className="font-bold text-white">Five divisions.</span>{" "}
                <span className="italic font-light">One vision.</span>
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 auto-rows-[240px] md:auto-rows-[260px]">
            {[
              {
                slug: "/finex-money",
                dataBrand: "finex-money",
                logo: BRANDS.finexMoney.logo!,
                logoClass: "h-[60px] md:h-[72px]", // 90%
                name: "Finex Money",
                tagline: "Digital Wallet",
                description:
                  "An inclusive digital wallet for everyone. Open an account instantly and step into the digital economy with financial dignity.",
              },
              {
                slug: "/imali-express",
                dataBrand: "imali",
                logo: BRANDS.imaliRemit.logo!,
                logoClass: "h-[90px] md:h-[108px]", // 135%
                name: "iMali Express",
                tagline: "Money Transfers",
                description:
                  "Fast, safe international money transfers to 40+ countries. Premium forex branches nationwide for physical currency exchange.",
              },
              {
                slug: "/finex-sa-treasury",
                dataBrand: "treasury",
                logo: BRANDS.treasury.logo!,
                logoClass: "h-[94px] md:h-[112px]", // 140%
                name: "Finex SA Treasury",
                tagline: "Foreign Exchange",
                description:
                  "A merchant bank approach to corporate treasury. Elite foreign exchange solutions and currency risk management for multinationals.",
              },
              {
                slug: "/finex-sa-global",
                dataBrand: "global",
                logo: BRANDS.global.logo!,
                logoClass: "h-[94px] md:h-[112px]", // 140%
                name: "Finex SA Global",
                tagline: "Global Expansion",
                description:
                  "Strategic global partnerships and tactical outsourcing. Scale your business beyond South Africa with confidence.",
              },
              {
                slug: "/finex-technologies",
                dataBrand: "tech",
                logo: "/images/logos/finex-technologies-v2.png",
                logoClass: "h-[88px] md:h-[104px]",
                name: "Finex Technologies",
                tagline: "Proprietary Platform",
                description:
                  "The backbone of the ecosystem. Pioneering alternative payments and proprietary financial technology powering the Finex SA Group.",
              },
            ].map((card) => (
              <Link
                key={card.slug}
                href={card.slug}
                data-brand={card.dataBrand}
                className="flip-card group block h-[240px] md:h-[260px]"
              >
                <div className="flip-card-inner">
                  {/* FRONT — single logo container */}
                  <div className="flip-face rounded-2xl p-2 bg-black/20 overflow-hidden">
                    <div className="w-full h-full bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-3 group-hover:bg-white/10 transition-colors">
                      <Image
                        src={card.logo}
                        alt={card.name}
                        width={240}
                        height={120}
                        className={`w-auto object-contain ${card.logoClass}`}
                      />
                    </div>
                  </div>

                  {/* BACK — single heading + description container */}
                  <div
                    className="flip-face flip-back rounded-2xl p-2 overflow-hidden"
                    style={{
                      backgroundImage:
                        "radial-gradient(ellipse at top, color-mix(in srgb, var(--brand-primary) 35%, transparent) 0%, transparent 70%), rgba(0, 0, 0, 0.35)",
                    }}
                  >
                    <div className="w-full h-full bg-white/5 border border-white/15 rounded-xl flex flex-col items-center justify-center text-center p-4 overflow-hidden">
                      <h3 className="text-white text-base md:text-lg font-extrabold mb-2 leading-tight">
                        {card.name}
                      </h3>
                      <p className="text-white/80 text-xs leading-snug">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Ecosystem summary — heading above descriptive paragraph */}
          <div className="mt-20 md:mt-28 text-center max-w-3xl mx-auto">
            <h3 className="text-white mb-4">
              Integrated Fintech Banking Ecosystem for Africa.
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              A{" "}
              <span className="font-bold text-white">
                fully integrated fintech banking ecosystem
              </span>{" "}
              for Africa: digital wallets, workforce payments, remittance,
              forex, and treasury solutions for{" "}
              <span className="font-bold text-white">
                individuals and corporations
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Market Positioning - Pattern D Accent Band */}
      {/* <AccentBand variant="blue-grey-cyan">
        <div className="mb-8">
          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text mb-4">
            $320 Trillion
          </p>
          <p className="text-lg md:text-xl text-white/80">
            Global cross-border payments market by 2032
          </p>
        </div>

        <StatRow columns={4}>
          <StatDisplay value="40+" label="Countries Served" />
          <StatDisplay value="2013" label="Founded" />
          <StatDisplay value="8" label="Brands" />
          <StatDisplay value="45242" label="FSP Licensed" />
        </StatRow>
      </AccentBand> */}

      {/* =============================================
          16:9 IMAGE BANNER — sunset break, full browser width
          ============================================= */}
      <section
        id="get-started"
        className="relative w-full min-h-[88vh] overflow-hidden flex flex-col justify-center"
      >
        <Image
          src="/images/backgrounds/Premium_advertising_sunset.jpg"
          alt=""
          fill
          className="object-cover"
        />
        {/* Uniform dark overlay so centred text reads across full width */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Centred title + two brand cards side-by-side */}
        <div className="relative z-10 container-max w-full py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
            <h2 className="text-white mb-4">
              <span className="italic font-light">Get</span>{" "}
              <span className="font-extrabold">started today.</span>
            </h2>
            <p className="text-lg text-white/85 max-w-xl mx-auto">
              Open an account or send money home,{" "}
              <span className="font-bold text-white">
                in minutes, not days.
              </span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Finex Money mini-CTA */}
                  <div
                    data-brand="finex-money"
                    className="relative flex flex-col w-full rounded-2xl border border-white/10 bg-[#E32626]/90 p-6 md:p-7"
                  >
                    <Link
                      href="/finex-money"
                      title="Learn more about Finex Money"
                      aria-label="Learn more about Finex Money"
                      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white/80 hover:text-white hover:bg-white/20 hover:border-white/50 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                    </Link>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-3">
                      Finex Money
                    </p>
                    <h3 className="text-white text-xl md:text-2xl mb-2 leading-tight">
                      <span className="italic font-light">Open</span> your
                      account in{" "}
                      <span className="font-extrabold">3 mins.</span>
                    </h3>
                    <p className="text-white text-sm font-medium mb-3">
                      <span className="font-bold">No branch visits.</span>{" "}
                      <span className="italic font-light">No paperwork.</span>{" "}
                      <span className="font-bold">No waiting.</span>
                    </p>
                    <p className="text-white/85 text-sm mb-5">
                      Download the Finex Money app and complete a{" "}
                      <span className="font-bold text-white">
                        quick selfie verification
                      </span>{" "}
                      to start transacting immediately.
                    </p>
                    <div className="card-actions">
                      <CTAButton
                        label="Open an Account Today"
                        href="/finex-money#download"
                        variant="white"
                        size="md"
                      />
                    </div>
                  </div>

                  {/* iMali Express Remit mini-CTA */}
                  <div
                    data-brand="imali"
                    className="relative flex flex-col w-full rounded-2xl border border-white/10 bg-[#003973]/90 p-6 md:p-7"
                  >
                    <Link
                      href="/imali-express"
                      title="Learn more about iMali"
                      aria-label="Learn more about iMali"
                      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white/80 hover:text-white hover:bg-white/20 hover:border-white/50 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                    </Link>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-3">
                      iMali Express Remit
                    </p>
                    <h3 className="text-white text-xl md:text-2xl mb-2 leading-tight">
                      <span className="italic font-light">Start</span>{" "}
                      <span className="font-extrabold">Sending Money</span>{" "}
                      <span className="font-light">Today.</span>
                    </h3>
                    <p className="text-white text-sm font-medium mb-3">
                      <span className="font-bold">40+ countries.</span>{" "}
                      <span className="italic font-light">Instant.</span>{" "}
                      <span className="font-bold">Secure.</span>
                    </p>
                    <p className="text-white/85 text-sm mb-5">
                      Download the iMali Remit app or visit one of our{" "}
                      <span className="font-bold text-white">
                        forex branches nationwide
                      </span>
                      .
                    </p>
                    <div className="card-actions">
                      <CTAButton
                        label="Start Sending Money"
                        href="/imali-express#download"
                        variant="white"
                        size="md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
      {/* =============================================
          BRAND DETAIL SHOWCASE — TEMPORARILY HIDDEN
          Wrapped in {false && (...)} to skip rendering.
          Flip to {true && ...} or remove the wrapper to re-enable.
          ============================================= */}
      {false && (
        <section
          id="brand-ecosystem"
          className="pt-4 md:pt-8 pb-24 md:pb-32 section-dark-warm"
        >
          <div className="container-max">
            <div className="space-y-8 md:space-y-10">
              {/* Finex Money — logo left */}
              <div
                data-brand="finex-money"
                className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 overflow-hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 75% 60% at top left, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)",
                }}
              >
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  <ScrollReveal type="slide" direction="left">
                    <div className="flex justify-center">
                      <Image
                        src={BRANDS.finexMoney.logo!}
                        alt="Finex Money"
                        width={400}
                        height={160}
                        className="h-[86px] md:h-[130px] w-auto"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal type="slide" direction="up">
                    <div>
                      <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
                        Finex Money
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                        <span className="italic font-light">Banking</span> that{" "}
                        <span className="font-bold text-white">
                          welcomes you.
                        </span>{" "}
                        Open up a world full of{" "}
                        <span className="font-bold text-white">
                          digital banking possibilities
                        </span>
                        . Finex Money is an{" "}
                        <span className="font-bold text-white">
                          inclusive digital wallet
                        </span>{" "}
                        built to empower your everyday hustle. Open an account
                        instantly, keep your money secure, and step into the{" "}
                        <span className="font-bold text-white">
                          digital economy
                        </span>{" "}
                        with absolute{" "}
                        <span className="font-bold text-white">
                          financial dignity.
                        </span>
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        {BRANDS.finexMoney.website && (
                          <CTAButton
                            label="Visit Brand Website"
                            type="website"
                            href={BRANDS.finexMoney.website}
                            variant="gradient"
                          />
                        )}
                        <AppStoreBadges
                          appStoreUrl={BRANDS.finexMoney.appStore}
                          playStoreUrl={BRANDS.finexMoney.playStore}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* FINEXflow — logo right */}
              <div
                data-brand="finexflow"
                className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 overflow-hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 75% 60% at top right, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)",
                }}
              >
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  <ScrollReveal
                    type="slide"
                    direction="right"
                    className="md:order-2"
                  >
                    <div className="flex justify-center">
                      <Image
                        src={BRANDS.finexflow.logo!}
                        alt="FINEXflow"
                        width={400}
                        height={160}
                        className="h-[108px] md:h-[162px] w-auto"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal
                    type="slide"
                    direction="up"
                    className="md:order-1"
                  >
                    <div>
                      <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
                        FINEXflow
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                        <span className="italic font-light">
                          Employer payments
                        </span>{" "}
                        <span className="font-bold text-white">
                          reimagined.
                        </span>{" "}
                        Stop the friction and{" "}
                        <span className="font-bold text-white">
                          start the flow.
                        </span>{" "}
                        Discover the premier{" "}
                        <span className="font-bold text-white">
                          modular workforce identity and payment platform
                        </span>
                        . FINEXflow is an{" "}
                        <span className="font-bold text-white">
                          enterprise-grade executive command centre
                        </span>{" "}
                        that enables seamless payment distribution, eradicating{" "}
                        <span className="font-bold text-white">cash risks</span>{" "}
                        and{" "}
                        <span className="font-bold text-white">
                          compliance failures
                        </span>
                        .
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <CTAButton
                          label="Speak to Us"
                          type="contact"
                          href="/contact"
                          variant="gradient"
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* iMali Express — logo left */}
              <div
                data-brand="imali"
                className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 overflow-hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 75% 60% at top left, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)",
                }}
              >
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  <ScrollReveal type="slide" direction="left">
                    <div className="flex justify-center">
                      <Image
                        src={BRANDS.imaliRemit.logo!}
                        alt="iMali Express"
                        width={400}
                        height={160}
                        className="h-[130px] md:h-[194px] w-auto"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal type="slide" direction="up">
                    <div>
                      <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
                        iMali Express
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                        <span className="italic font-light">Global reach</span>{" "}
                        and{" "}
                        <span className="font-bold text-white">
                          local presence.
                        </span>{" "}
                        iMali Express moves your{" "}
                        <span className="font-bold text-white">
                          capital securely
                        </span>{" "}
                        through two dedicated brands. Use{" "}
                        <span className="font-bold text-white">
                          iMali Remit
                        </span>{" "}
                        for seamless international transfers to{" "}
                        <span className="font-bold text-white">
                          over 40 countries
                        </span>
                        , and visit{" "}
                        <span className="font-bold text-white">
                          iMali Forex
                        </span>{" "}
                        at our nationwide Bureau de Change branches for{" "}
                        <span className="font-bold text-white">
                          premium physical currency exchange
                        </span>{" "}
                        and corporate travel allowances.
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        {BRANDS.imaliRemit.website && (
                          <CTAButton
                            label="Visit Brand Website"
                            type="website"
                            href={BRANDS.imaliRemit.website}
                            variant="gradient"
                          />
                        )}
                        <AppStoreBadges
                          appStoreUrl={BRANDS.imaliRemit.appStore}
                          playStoreUrl={BRANDS.imaliRemit.playStore}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Finex SA Treasury — logo right */}
              <div
                data-brand="treasury"
                className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 overflow-hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 75% 60% at top right, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)",
                }}
              >
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  <ScrollReveal
                    type="slide"
                    direction="right"
                    className="md:order-2"
                  >
                    <div className="flex justify-center">
                      <Image
                        src={BRANDS.treasury.logo!}
                        alt="Finex SA Treasury"
                        width={400}
                        height={160}
                        className="h-[134px] md:h-[202px] w-auto"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal
                    type="slide"
                    direction="up"
                    className="md:order-1"
                  >
                    <div>
                      <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
                        Finex SA Treasury
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                        <span className="italic font-light">Master</span>{" "}
                        <span className="font-bold text-white">
                          global cash flow.
                        </span>{" "}
                        We apply a{" "}
                        <span className="font-bold text-white">
                          merchant bank approach
                        </span>{" "}
                        to corporate treasury, providing multinational
                        corporations with{" "}
                        <span className="font-bold text-white">
                          elite foreign exchange solutions
                        </span>
                        ,{" "}
                        <span className="font-bold text-white">
                          currency risk management
                        </span>
                        , and{" "}
                        <span className="font-bold text-white">
                          regulatory compliance
                        </span>
                        .
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <CTAButton
                          label="Speak to Us"
                          type="contact"
                          href="/contact"
                          variant="gradient"
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Finex SA Global — logo left */}
              <div
                data-brand="global"
                className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 overflow-hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 75% 60% at top left, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)",
                }}
              >
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                  <ScrollReveal type="slide" direction="left">
                    <div className="flex justify-center">
                      <Image
                        src={BRANDS.global.logo!}
                        alt="Finex SA Global"
                        width={400}
                        height={160}
                        className="h-[134px] md:h-[202px] w-auto"
                      />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal type="slide" direction="up">
                    <div>
                      <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
                        Finex SA Global
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                        <span className="italic font-light">Scale</span>{" "}
                        <span className="font-bold text-white">
                          without borders.
                        </span>{" "}
                        We provide{" "}
                        <span className="font-bold text-white">
                          comprehensive tactical outsourcing
                        </span>{" "}
                        and{" "}
                        <span className="font-bold text-white">
                          strategic global partnerships
                        </span>{" "}
                        tailored to the specific needs of{" "}
                        <span className="font-bold text-white">
                          mid-cap companies
                        </span>{" "}
                        seeking{" "}
                        <span className="font-bold text-white">
                          international expansion
                        </span>
                        .
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <CTAButton
                          label="Speak to Us"
                          type="contact"
                          href="/contact"
                          variant="gradient"
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA - Pattern F */}
      <AccentBand id="cta" variant="dark-accent-red" className="section-center">
        <h2 className="text-white mb-4">Explore More</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Discover how the Finex SA Group can transform the way you move and
          manage capital.
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
          {[
            {
              label: "Finex Money",
              href: "/finex-money",
              logo: BRANDS.finexMoney.logo!,
              logoClass: "h-5 md:h-6",
            },
            {
              label: "iMali Express",
              href: "/imali-express",
              logo: BRANDS.imaliRemit.logo!,
              logoClass: "h-5 md:h-6",
            },
            {
              label: "SA Treasury",
              href: "/finex-sa-treasury",
              logo: BRANDS.treasury.logo!,
              logoClass: "h-[26px] md:h-[32px]",
            },
            {
              label: "Global",
              href: "/finex-sa-global",
              logo: BRANDS.global.logo!,
              logoClass: "h-[26px] md:h-[32px]",
            },
            {
              label: "Technologies",
              href: "/finex-technologies",
              logo: "/images/logos/finex-technologies-v2.png",
              logoClass: "h-[28px] md:h-[33px]",
            },
          ].map((brand) => (
            <Link
              key={brand.href}
              href={brand.href}
              className="inline-flex flex-col items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-br from-zinc-800 via-[#2a0a10] to-[#5a1820] hover:from-zinc-700 hover:via-[#4a1218] hover:to-[#8b1f2a] border border-white/20 text-white text-xs md:text-sm font-medium transition-colors"
            >
              <span className="flex items-center justify-center h-9 md:h-10">
                <Image
                  src={brand.logo}
                  alt=""
                  width={80}
                  height={40}
                  className={`w-auto object-contain ${brand.logoClass}`}
                />
              </span>
              {brand.label}
            </Link>
          ))}
        </div>

        <CTAButton
          label="Contact Us"
          href="/contact"
          variant="white"
          size="lg"
        />
      </AccentBand>
    </>
  );
}
