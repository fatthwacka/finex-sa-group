import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import AccentBand, { StatDisplay, StatRow } from '@/components/sections/AccentBand';
import SplitSection, { SectionHeading } from '@/components/sections/SplitSection';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import AppStoreBadges from '@/components/ui/AppStoreBadges';
import RegulatoryBadge from '@/components/ui/RegulatoryBadge';
import { BRANDS, GROUP } from '@/config/brands';

export default function HomePage() {
  return (
    <>
      {/* Hero - Pattern A Centred, gradient background */}
      <HeroSection
        variant="gradient-centred"
        heightClass="min-h-[75vh]"
        showBottomDivider={false}
        logoSrc="/images/logos/finexsa-group-logo-only-no-text.png"
        logoAlt="Finex SA Group"
        logoClassName="brightness-0 invert"
        eyebrow="Finex SA Group"
        headline={
          <>
            <span className="italic font-light">Financial</span> <span className="font-extrabold">Power</span><br />
            <span className="font-light">at Every Level.</span>
          </>
        }
        subline={
          <>
            We believe <span className="font-bold">everyone</span> deserves a <span className="font-bold">seat</span> at the <span className="font-bold">financial table</span>.
          </>
        }
      >
        <CTAButton
          label="Explore Our Brands"
          type="contact"
          href="#brand-ecosystem"
          variant="white"
          size="lg"
        />
      </HeroSection>

      {/* =============================================
          ATMOSPHERIC IMAGE BREAK — centred body paragraph
          City-street image, 60vh, gradient overlay
          ============================================= */}
      <section className="relative flex items-center h-[60vh] overflow-hidden">
        <Image
          src="/images/heroes/guy-walking-in-the-street.jpg"
          alt=""
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Colour overlay — matches finex-money image-break */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-red)]/40 via-[var(--color-black)]/40 to-[var(--color-purple)]/40" />

        <div className="container-max relative z-10 text-center">
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            The Finex SA Group is a <span className="font-bold text-white">fully integrated fintech banking ecosystem</span> bringing <span className="font-bold text-white">sophisticated technology</span> and <span className="font-bold text-white">financial inclusion</span> to the African market.
          </p>
        </div>
      </section>

      {/* =============================================
          BRAND DETAIL SHOWCASE
          5 alternating logo/text blocks, one per brand
          ============================================= */}
      <section id="brand-ecosystem" className="section-padding section-dark-warm">
        <div className="container-max">
          <div className="space-y-8 md:space-y-10">

            {/* Finex Money — logo left */}
            <div
              data-brand="finex-money"
              className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 overflow-hidden"
              style={{ backgroundImage: 'radial-gradient(ellipse 75% 60% at top left, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)' }}
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
                  <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">Finex Money</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                    <span className="italic font-light">Banking</span> that <span className="font-bold text-white">welcomes you.</span> Open up a world full of <span className="font-bold text-white">digital banking possibilities</span>. Finex Money is an <span className="font-bold text-white">inclusive digital wallet</span> built to empower your everyday hustle. Open an account instantly, keep your money secure, and step into the <span className="font-bold text-white">digital economy</span> with absolute <span className="font-bold text-white">financial dignity.</span>
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
              style={{ backgroundImage: 'radial-gradient(ellipse 75% 60% at top right, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)' }}
            >
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <ScrollReveal type="slide" direction="right" className="md:order-2">
                <div className="flex justify-center">
                  <Image
                    src={BRANDS.finexflow.logo!}
                    alt="FINEXflow"
                    width={400}
                    height={160}
                    className="h-[120px] md:h-[180px] w-auto"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal type="slide" direction="up" className="md:order-1">
                <div>
                  <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">FINEXflow</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                    <span className="italic font-light">Employer payments</span> <span className="font-bold text-white">reimagined.</span> Stop the friction and <span className="font-bold text-white">start the flow.</span> Discover the premier <span className="font-bold text-white">modular workforce identity and payment platform</span>. FINEXflow is an <span className="font-bold text-white">enterprise-grade executive command centre</span> that enables seamless payment distribution, eradicating <span className="font-bold text-white">cash risks</span> and <span className="font-bold text-white">compliance failures</span>.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <CTAButton label="Speak to Us" type="contact" href="/contact" variant="gradient" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
            </div>

            {/* iMali Express — logo left */}
            <div
              data-brand="imali"
              className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 overflow-hidden"
              style={{ backgroundImage: 'radial-gradient(ellipse 75% 60% at top left, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)' }}
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
                  <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">iMali Express</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                    <span className="italic font-light">Global reach</span> and <span className="font-bold text-white">local presence.</span> iMali Express moves your <span className="font-bold text-white">capital securely</span> through two dedicated brands. Use <span className="font-bold text-white">iMali Remit</span> for seamless international transfers to <span className="font-bold text-white">over 40 countries</span>, and visit <span className="font-bold text-white">iMali Forex</span> at our nationwide Bureau de Change branches for <span className="font-bold text-white">premium physical currency exchange</span> and corporate travel allowances.
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
              style={{ backgroundImage: 'radial-gradient(ellipse 75% 60% at top right, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)' }}
            >
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <ScrollReveal type="slide" direction="right" className="md:order-2">
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
              <ScrollReveal type="slide" direction="up" className="md:order-1">
                <div>
                  <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">Finex SA Treasury</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                    <span className="italic font-light">Master</span> <span className="font-bold text-white">global cash flow.</span> We apply a <span className="font-bold text-white">merchant bank approach</span> to corporate treasury, providing multinational corporations with <span className="font-bold text-white">elite foreign exchange solutions</span>, <span className="font-bold text-white">currency risk management</span>, and <span className="font-bold text-white">regulatory compliance</span>.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <CTAButton label="Speak to Us" type="contact" href="/contact" variant="gradient" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
            </div>

            {/* Finex SA Global — logo left */}
            <div
              data-brand="global"
              className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-12 overflow-hidden"
              style={{ backgroundImage: 'radial-gradient(ellipse 75% 60% at top left, color-mix(in srgb, var(--brand-primary) 22%, transparent), transparent 70%)' }}
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
                  <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">Finex SA Global</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                    <span className="italic font-light">Scale</span> <span className="font-bold text-white">without borders.</span> We provide <span className="font-bold text-white">comprehensive tactical outsourcing</span> and <span className="font-bold text-white">strategic global partnerships</span> tailored to the specific needs of <span className="font-bold text-white">mid-cap companies</span> seeking <span className="font-bold text-white">international expansion</span>.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <CTAButton label="Speak to Us" type="contact" href="/contact" variant="gradient" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
            </div>

          </div>
        </div>
      </section>

      {/* Market Positioning - Pattern D Accent Band */}
      <AccentBand variant="navy">
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
      </AccentBand>

      {/* Trust & Regulation - Pattern B Split */}
      <SplitSection
        bgVariant="alt"
        imagePosition="right"
        visualContent={
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            <RegulatoryBadge type="fsp" value={GROUP.fsp} />
            <RegulatoryBadge type="sarb" value={GROUP.sarb} />
            <div className="col-span-2 lg:col-span-1 p-4 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-text-secondary)]">
                {GROUP.category}
              </p>
            </div>
          </div>
        }
      >
        <SectionHeading
          title="Safe, Regulated, and Fully Licensed"
          description="We operate with absolute transparency and rigorous compliance."
        />
        <p className="text-[var(--color-text-secondary)] mt-4">
          As a Category Two Authorised Dealer in Foreign Exchange with Limited Authority, we are regulated by the Financial Sector Conduct Authority as a financial service provider, and by the South African Reserve Bank as a forex exchange intermediary. Your trust is our foundation.
        </p>
      </SplitSection>

      {/* Final CTA - Pattern F */}
      <AccentBand variant="gradient">
        <h2 className="text-white mb-4">Ready to Explore?</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Discover how the Finex SA Group can transform the way you move and manage capital.
        </p>
        <CTAButton
          label="Contact Us"
          type="contact"
          href="/contact"
          variant="white"
          size="lg"
        />
      </AccentBand>
    </>
  );
}
