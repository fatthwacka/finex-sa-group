import Image from "next/image";
import Link from "next/link";
import { Shield, Info } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import AccentBand, {
  StatDisplay,
  StatRow,
} from "@/components/sections/AccentBand";
import SplitSection, {
  SectionHeading,
} from "@/components/sections/SplitSection";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { BRANDS, GROUP } from "@/config/brands";

export default function HomePage() {
  return (
    <>
      {/* Hero - Pattern A Centred, gradient background */}
      <HeroSection
        variant="gradient-centred"
        heightClass="min-h-[75vh]"
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
        <CTAButton
          label="Explore Our Ecosystem"
          href="#ecosystem"
          variant="white"
          size="lg"
        />
        <CTAButton
          label="Open an Account"
          href="#cta"
          variant="red"
          size="lg"
        />
      </HeroSection>

      {/* =============================================
          ATMOSPHERIC IMAGE BREAK — centred body paragraph
          City-street image, 60vh, gradient overlay
          ============================================= */}
      <section className="relative flex items-center h-[90vh] overflow-hidden">
        <Image
          src="/images/heroes/guy-walking-in-the-street.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Tri-stop overlay: opaque left → medium centre → fully transparent right (pulled in so the right side shows full image) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.35) 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 pl-8 md:pl-20 lg:pl-32">
          <div className="max-w-[480px]">
            <h2 className="text-white mb-6">
              <span className="italic font-light">Step</span> into{" "}
              <span className="font-normal">the</span>
              <br />
              <span className="font-extrabold">digital economy.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              The global cross-border payments market moves{" "}
              <span className="font-bold text-white">
                trillions every year
              </span>{" "}
              — and is{" "}
              <span className="font-bold text-white">growing fast</span>. The
              Finex SA Group sits at the forefront of this evolution — a{" "}
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
            <div className="mt-14">
              <CTAButton
                label="Open an Account Today"
                href="#cta"
                variant="red"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          BRAND FLIP CARDS
          5 hover-to-flip cards (front: logo + tagline, back: description + link)
          Click anywhere to navigate to brand page
          ============================================= */}
      <section id="ecosystem" className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Our</span>{" "}
                <span className="font-extrabold">Ecosystem.</span>
              </h2>
              <p className="text-lg text-white/75 max-w-2xl mx-auto">
                <span className="font-bold text-white">Five solutions.</span>{" "}
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
                slug: "/finex-pay-and-technologies",
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
        </div>
      </section>

      {/* Trust & Regulation - Pattern B Split (flipped to dark-warm) */}
      <SplitSection
        bgVariant="dark-warm"
        imagePosition="right"
        visualContent={
          <div className="flex flex-col gap-4 w-full">
            {/* FSP Badge — full width */}
            <div className="flex items-center gap-3 w-full p-4 bg-white rounded-xl border border-[var(--color-border)]">
              <Shield className="w-5 h-5 text-[var(--color-cyan)] flex-shrink-0" />
              <div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  Financial Service Provider
                </div>
                <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {GROUP.fsp}
                </div>
              </div>
            </div>
            {/* SARB Badge — full width */}
            <div className="flex items-center gap-3 w-full p-4 bg-white rounded-xl border border-[var(--color-border)]">
              <Shield className="w-5 h-5 text-[var(--color-cyan)] flex-shrink-0" />
              <div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  SARB Authorised
                </div>
                <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {GROUP.sarb}
                </div>
              </div>
            </div>
            {/* SARB Badge — full width */}
            <div className="flex items-center gap-3 w-full p-4 bg-white rounded-xl border border-[var(--color-border)]">
              <Shield className="w-5 h-5 text-[var(--color-cyan)] flex-shrink-0" />
              <div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  Authorised Dealer
                </div>
                <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {GROUP.category}
                </div>
              </div>
            </div>
            {/* Category description — full width, dark translucent to match section bg */}
            {/* <div className="w-full p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-white/75">{GROUP.category}</p>
            </div> */}
          </div>
        }
      >
        <SectionHeading
          light
          title={
            <>
              <span className="italic font-light">Safe,</span>{" "}
              <span className="font-extrabold">Regulated,</span>{" "}
              <span className="font-normal">and</span>
              <br />
              <span className="font-light">Fully Licensed.</span>
            </>
          }
          description="We operate with absolute transparency and rigorous compliance."
        />
        <p className="text-white/75 mt-4">
          As a{" "}
          <span className="font-bold text-white">
            Category Two Authorised Dealer
          </span>{" "}
          in Foreign Exchange with Limited Authority, we are regulated by the{" "}
          <span className="font-bold text-white">
            Financial Sector Conduct Authority
          </span>{" "}
          as a financial service provider, and by the{" "}
          <span className="font-bold text-white">
            South African Reserve Bank
          </span>{" "}
          as a forex exchange intermediary. Your trust is our foundation.
        </p>
      </SplitSection>

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
      <section className="relative w-full">
        <Image
          src="/images/backgrounds/Premium_advertising_sunset.jpg"
          alt=""
          width={2440}
          height={1204}
          className="w-full h-auto"
        />
        {/* Right-darkening overlay for text legibility on the right side */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />

        {/* Text content — right column */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-max w-full">
            <div className="flex justify-end">
              <div className="w-full md:w-1/2 lg:w-5/12 pr-4 md:pr-8">
                <h2 className="text-white mb-4">
                  <span className="italic font-light">Integrated</span>{" "}
                  <span className="font-extrabold">
                    Fintech Banking Ecosystem
                  </span>
                  <br />
                  <span className="italic font-light">for Africa.</span>
                </h2>
                <p className="text-sm md:text-base text-white/85 leading-relaxed">
                  A{" "}
                  <span className="font-bold text-white">
                    fully integrated fintech banking ecosystem
                  </span>{" "}
                  for Africa — digital wallets, workforce payments, remittance,
                  forex, and treasury solutions for{" "}
                  <span className="font-bold text-white">
                    individuals and corporations
                  </span>
                  .
                </p>
                <div className="mt-10">
                  <CTAButton
                    label="Open an Account"
                    href="#cta"
                    variant="red"
                    size="lg"
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
        {/* Twin mini-CTA cards — Finex Money + iMali Express */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16 text-left md:text-center">
          {/* Finex Money mini-CTA */}
          <div
            data-brand="finex-money"
            className="relative flex flex-col h-full rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm p-6 md:p-8"
          >
            <Link
              href="/finex-money"
              title="Learn more about Finex Money"
              aria-label="Learn more about Finex Money"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:bg-white/15 hover:border-white/30 transition-colors"
            >
              <Info className="w-4 h-4" />
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-3">
              Finex Money
            </p>
            <h3 className="text-white text-xl md:text-2xl mb-2 leading-tight">
              <span className="italic font-light">Open</span> your account in{" "}
              <span className="font-extrabold">3 mins.</span>
            </h3>
            <p className="text-white/90 text-sm md:text-base font-medium mb-3">
              <span className="font-bold">No branch visits.</span>{" "}
              <span className="italic font-light">No paperwork.</span>{" "}
              <span className="font-bold">No waiting.</span>
            </p>
            <p className="text-white/70 text-sm mb-5">
              Download the Finex Money app and complete a{" "}
              <span className="font-bold text-white">
                quick selfie verification
              </span>{" "}
              to start transacting immediately.
            </p>
            <div className="mt-auto flex flex-wrap md:justify-center items-center gap-3">
              <AppStoreBadges
                appStoreUrl={BRANDS.finexMoney.appStore}
                playStoreUrl={BRANDS.finexMoney.playStore}
                size="md"
              />
            </div>
          </div>

          {/* iMali Express mini-CTA */}
          <div
            data-brand="imali"
            className="relative flex flex-col h-full rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm p-6 md:p-8"
          >
            <Link
              href="/imali-express"
              title="Learn more about iMali"
              aria-label="Learn more about iMali"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:bg-white/15 hover:border-white/30 transition-colors"
            >
              <Info className="w-4 h-4" />
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-3">
              iMali Express
            </p>
            <h3 className="text-white text-xl md:text-2xl mb-2 leading-tight">
              <span className="italic font-light">Start</span>{" "}
              <span className="font-extrabold">Sending Money</span>{" "}
              <span className="font-light">Today.</span>
            </h3>
            <p className="text-white/90 text-sm md:text-base font-medium mb-3">
              <span className="font-bold">40+ countries.</span>{" "}
              <span className="italic font-light">Instant.</span>{" "}
              <span className="font-bold">Secure.</span>
            </p>
            <p className="text-white/70 text-sm mb-5">
              Download the iMali Remit app or visit one of our{" "}
              <span className="font-bold text-white">
                forex branches nationwide
              </span>
              .
            </p>
            <div className="mt-auto flex flex-wrap md:justify-center items-center gap-3">
              <AppStoreBadges
                appStoreUrl={BRANDS.imaliRemit.appStore}
                playStoreUrl={BRANDS.imaliRemit.playStore}
                size="md"
              />
            </div>
          </div>
        </div>

        {/* Divider between mini-CTA cards and ecosystem CTA */}
        <div className="w-24 h-px mx-auto mb-12 bg-white/20" />

        <h2 className="text-white mb-4">Explore More</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Discover how the Finex SA Group can transform the way you move and
          manage capital.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {[
            { label: "Finex Money", href: "/finex-money" },
            { label: "iMali Express", href: "/imali-express" },
            { label: "SA Treasury", href: "/finex-sa-treasury" },
            { label: "Global", href: "/finex-sa-global" },
            { label: "Technologies", href: "/finex-pay-and-technologies" },
          ].map((brand) => (
            <Link
              key={brand.href}
              href={brand.href}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs md:text-sm font-medium transition-colors"
            >
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
