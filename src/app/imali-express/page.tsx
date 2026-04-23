import type { Metadata } from "next";
import Image from "next/image";
import { Send, Globe, Shield, Briefcase } from "lucide-react";
import BranchLocations from "@/components/sections/BranchLocations";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { BRANDS } from "@/config/brands";

export const metadata: Metadata = {
  title:
    "iMali Express | International Remittance & Forex Exchange South Africa",
  description:
    "Send money to over 40 countries with iMali Remit, or exchange foreign currency at our Bureau de Change branches nationwide. Fast, safe, low-cost - SARB-approved ADLA.",
  keywords: [
    "international money transfer South Africa",
    "Bureau de Change South Africa",
    "send money abroad",
    "forex exchange Cape Town",
    "remittance app",
    "ADLA South Africa",
  ],
};

const remitFeatures = [
  {
    Icon: Send,
    title: "Send to 40+ Countries",
    description:
      "Move your funds fast to over 40 countries worldwide. When you need it and where you need it.",
  },
  {
    Icon: Shield,
    title: "Safe & Secure",
    description:
      "Fully authorised by the South African Reserve Bank as a Category Two ADLA for forex transactions.",
  },
  {
    Icon: Globe,
    title: "Competitive Rates",
    description:
      "Enjoy zero percent fees on your first transaction alongside highly competitive exchange rates.",
  },
];

export default function ImaliExpressPage() {
  const remitBrand = BRANDS.imaliRemit;
  const forexBrand = BRANDS.imaliForex;

  return (
    <div data-brand={remitBrand.dataBrand}>
      {/* =============================================
          HERO — warm brand gradient (no image)
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[65vh]">
        {/* iMali brand gradient — darkened red and navy with purple diagonal bridge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #c4202d 0%, #c4202d 30%, var(--color-purple) 50%, #0c3a50 70%, #0c3a50 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />

        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-2xl">
              {/* iMali Express logo — pure white, large */}
              <Image
                src="/images/logos/imali-express-logo.png"
                alt="iMali Express"
                width={440}
                height={192}
                className="h-32 md:h-40 w-auto mb-8 brightness-0 invert"
                priority
              />
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-white/85">
                iMali Express
              </p>
              <h1 className="text-white mb-6">
                <span className="italic font-light">Fast,</span>{" "}
                <span className="font-extrabold">Safe,</span>{" "}
                <span className="font-normal">and</span>
                <br />
                <span className="font-extrabold">Low-Cost</span>{" "}
                <span className="font-normal">Cross-Border Finance.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
                <span className="italic font-light">Mali Yami</span> means
                taking care of your <span className="font-bold">family</span>{" "}
                and your <span className="font-bold">future.</span>
              </p>
              <CTAButton
                label="Start Sending Money"
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
          ATMOSPHERIC IMAGE BREAK — hero image + paragraph overlay
          ============================================= */}
      <section className="relative flex items-center h-[60vh] overflow-hidden">
        <Image
          src="/images/heroes/mali-yami-girl-in-rural-area.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Tri-stop overlay: transparent left → dark grey centre → warm dark right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(40, 10, 25, 0.45) 50%, rgba(25, 8, 20, 0.8) 100%)",
          }}
        />

        <div className="container-max relative z-10">
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Move</span> your{" "}
                <span className="font-extrabold">funds,</span>{" "}
                <span className="italic font-light">fast.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                iMali Express provides{" "}
                <span className="font-bold text-white">
                  fast, safe, and low-cost
                </span>{" "}
                cross-border financial solutions through{" "}
                <span className="font-bold text-white">
                  two dedicated brands
                </span>
                . As a South African Reserve Bank-approved{" "}
                <span className="font-bold text-white">Category Two ADLA</span>,
                we are fully authorised to deal in foreign exchange and
                international remittances.
              </p>
              <CTAButton
                label="Get Started"
                type="app"
                href="#download"
                variant="red"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          iMALI REMIT — flipped to dark-warm
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal type="slide" direction="left">
              <div>
                <h2 className="text-white mb-4">
                  <span className="italic font-light">iMali</span>{" "}
                  <span className="font-extrabold">Remit.</span>
                </h2>
                <p className="text-2xl font-medium text-[var(--color-red)] mb-4">
                  Keep Families Connected.
                </p>
                <p className="text-lg text-white/80 mb-6">
                  Send money securely to{" "}
                  <span className="font-bold text-white">
                    over 40 countries
                  </span>{" "}
                  with the iMali Remit app. When you need it and where you need
                  it, we move your funds fast. Enjoy{" "}
                  <span className="font-bold text-white">
                    zero percent fees
                  </span>{" "}
                  on your first transaction alongside highly competitive
                  exchange rates and{" "}
                  <span className="font-bold text-white">
                    real-time tracking
                  </span>
                  .
                </p>
                <p className="text-white/75 mb-6">
                  We believe in{" "}
                  <span className="font-bold text-white">zero exclusion</span>.
                  For South African residents, getting your account ready is
                  simple with just a valid SA ID. For foreign nationals working
                  in Mzansi, all you need is a valid foreign passport and work
                  permit.{" "}
                  <span className="italic font-light">
                    No proof of address required to get started.
                  </span>
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  {remitBrand.website && (
                    <CTAButton
                      label="Visit iMali Remit Website"
                      type="website"
                      href={remitBrand.website}
                      variant="red"
                    />
                  )}
                  <AppStoreBadges
                    appStoreUrl={remitBrand.appStore}
                    playStoreUrl={remitBrand.playStore}
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal type="slide" direction="right">
              <div className="grid grid-cols-1 gap-4">
                {remitFeatures.map((feature, i) => {
                  const { Icon } = feature;
                  return (
                    <div
                      key={feature.title}
                      className="flex gap-4 bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[var(--color-red)]" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-white">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-white/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          iMALI FOREX — flipped to dark-warm
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">iMali</span>{" "}
                <span className="font-extrabold">Forex.</span>
              </h2>
              <p className="text-2xl font-medium text-[var(--color-red)] mb-4">
                Nationwide Bureau de Change Branches.
              </p>
              <p className="text-lg text-white/75 max-w-3xl mx-auto">
                Your{" "}
                <span className="font-bold text-white">
                  trusted currency exchange partner
                </span>{" "}
                is always close by. We offer reliable and highly competitive
                foreign currency exchange services for tourists and locals.
                Secure the best rates and friendly face-to-face service at our{" "}
                <span className="font-bold text-white">
                  premium physical branches
                </span>{" "}
                nationwide.
              </p>
            </div>
          </ScrollReveal>

          {forexBrand.branches && (
            <BranchLocations
              branches={forexBrand.branches}
              title="Our Branch Locations"
            />
          )}

          <div className="mt-12 text-center">
            <CTAButton
              label="Start Sending Money"
              type="app"
              href="#download"
              variant="red"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* =============================================
          OMNIBUS CORPORATE — flipped to dark-warm + 2-col text+image
          ============================================= */}
      <section className="section-padding section-dark-warm">
        <div className="container-max">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal type="slide" direction="left">
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Briefcase className="w-7 h-7 text-[var(--color-red)]" />
                </div>
                <h2 className="text-white mb-6">
                  <span className="italic font-light">Omnibus</span>{" "}
                  <span className="font-extrabold">Corporate Travel.</span>
                </h2>
                <p className="text-white/85 text-lg leading-relaxed mb-4">
                  Unlock{" "}
                  <span className="font-bold text-white">
                    seamless business travel allowances
                  </span>{" "}
                  with our free Omnibus services. South African companies can
                  utilise a{" "}
                  <span className="font-bold text-white">
                    Business Travel Facility of up to R20 million
                  </span>{" "}
                  per calendar year for their delegates.
                </p>
                <p className="text-white/75 leading-relaxed mb-8">
                  We secure your forex under the company allowance and manage
                  the regulatory requirements so you can pay for accommodation
                  and car hire before delegates leave the country. iMali Forex
                  can also facilitate applications for{" "}
                  <span className="font-bold text-white">
                    exceptional SARB approvals
                  </span>{" "}
                  to secure limits exceeding the R20 million threshold.
                </p>
                <CTAButton
                  label="Speak to iMali Forex"
                  href="/contact"
                  variant="red"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal type="slide" direction="right">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/lifestyle/imali-market-woman-p1.webp"
                  alt="iMali corporate forex services"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          CLEAN IMAGE BANNER — 16:9, second-to-last
          ============================================= */}
      <section className="w-full">
        <Image
          src="/images/backgrounds/imali-remit-website-banner.jpg"
          alt="iMali Remit banner"
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
      </section>

      {/* =============================================
          CTA — colourful sunset (kept as-is)
          ============================================= */}
      <section id="download" className="section-padding section-sunset">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-white mb-4">
              <span className="italic font-light">Start</span>{" "}
              <span className="font-extrabold">Sending Money</span>{" "}
              <span className="font-light">Today.</span>
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Download the iMali Remit app or visit one of our{" "}
              <span className="font-bold text-white">
                forex branches nationwide
              </span>
              .
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AppStoreBadges
                appStoreUrl={remitBrand.appStore}
                playStoreUrl={remitBrand.playStore}
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
