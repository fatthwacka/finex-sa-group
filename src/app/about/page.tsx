import type { Metadata } from "next";
import Image from "next/image";
import {
  Building,
  TrendingUp,
  Shield,
  Target,
  Award,
  Globe,
  Users,
  Landmark,
} from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import { GROUP } from "@/config/brands";

export const metadata: Metadata = {
  title: "About Finex SA Group | Trusted African Fintech Since 2013",
  description:
    "Since 2013, Finex SA Group has united specialised financial companies to deliver inclusion, dignity, and elite corporate solutions across Africa. Regulated, licensed, and growing.",
  keywords: [
    "about Finex SA Group",
    "African fintech company",
    "regulated fintech South Africa",
    "FSCA registered",
    "financial services since 2013",
  ],
};

const subsidiaries = [
  { name: "Finex Money", description: "Inclusive digital wallet", dataBrand: "finex-money" },
  { name: "FINEXflow", description: "Payroll disbursement SaaS", dataBrand: "finexflow" },
  { name: "iMali Remit", description: "Cross-border remittance", dataBrand: "imali" },
  { name: "iMali Forex", description: "Retail currency exchange", dataBrand: "imali" },
  { name: "Finex SA Treasury", description: "Corporate cash management", dataBrand: "treasury" },
  { name: "Finex SA Global", description: "International expansion", dataBrand: "global" },
  { name: "Finex Pay", description: "Alternative payment gateways", dataBrand: "tech" },
  { name: "Finex Technologies", description: "Proprietary tech backbone", dataBrand: "tech" },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* =============================================
          HERO: dark gradient with sunset accent
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[75vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple)] via-[#1a0a20] to-[var(--color-black)]" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-cyan)]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-purple)]/30 to-transparent" />
        </div>

        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <Image
                src="/images/logos/finexsa-group-logo-only-no-text.png"
                alt="Finex SA Group"
                width={200}
                height={200}
                className="h-16 md:h-20 w-auto mx-auto mb-10"
                priority
              />
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-white/85">
                About Us
              </p>
              <h1 className="text-white mb-6">
                <span className="italic font-light">Trusted Heritage.</span>
                <br />
                <span className="font-extrabold">Inclusive Future.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                The Finex SA Group unites a{" "}
                <span className="font-bold text-white">
                  powerhouse of specialised companies
                </span>
                , merging decades of trusted financial heritage with{" "}
                <span className="font-bold text-white">
                  cutting-edge digital payment technology
                </span>
                .
              </p>
              <CTAButton
                label="Get in Touch"
                href="/contact"
                variant="white"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          ATMOSPHERIC BREAK: city image + right-side overlay
          ============================================= */}
      <section className="relative flex items-center min-h-[75vh] overflow-hidden">
        <Image
          src="/images/backgrounds/african-cityscape-01.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(12, 6, 20, 0.25) 50%, rgba(12, 6, 20, 0.88) 100%)",
          }}
        />
        <div className="container-max relative z-10">
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Shaping the</span>{" "}
                <span className="font-extrabold">future</span>
                <br />
                <span className="font-light">of African finance.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                We provide the robust, forward-thinking infrastructure required
                to thrive in a global market that demands{" "}
                <span className="font-bold text-white">
                  absolute sophistication
                </span>
                . We are bringing a layer of{" "}
                <span className="font-bold text-white">
                  financial inclusion
                </span>{" "}
                to the market in a way never seen before.
              </p>
              <CTAButton
                label="Contact Us"
                href="/contact"
                variant="white"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 1: STRATEGIC OBJECTIVES — split image LEFT + bullets
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
                  src="/images/backgrounds/guy-walking-in-the-street-sunset.jpg"
                  alt="Finex SA Group — building the future of African fintech"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Our Strategic</span>
                <br />
                <span className="font-extrabold text-[var(--color-cyan)]">
                  Objectives.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                We are not just participating in the market. We are{" "}
                <span className="font-bold text-white">
                  actively shaping its future
                </span>
                .
              </p>
              <ul className="space-y-4">
                {[
                  {
                    Icon: Landmark,
                    title: "Category 4 Licence",
                    body: "expanding our regulatory footprint for 2025 and 2026.",
                  },
                  {
                    Icon: Shield,
                    title: "Third Party Payment Provider",
                    body: "securing our own TPP status and direct bank sponsorship.",
                  },
                  {
                    Icon: Globe,
                    title: "Pan-African Expansion",
                    body: "scaling our ecosystem across the continent.",
                  },
                  {
                    Icon: Award,
                    title: "Full Independence",
                    body: "solidifying our capacity to deliver unparalleled financial solutions.",
                  },
                  {
                    Icon: Users,
                    title: "Financial Dignity",
                    body: "driving inclusion for individuals and small businesses across Africa.",
                  },
                ].map(({ Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-cyan)]/20 backdrop-blur flex items-center justify-center border border-white/20">
                      <Icon className="w-5 h-5 text-[var(--color-cyan)]" />
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
          SECTION 2: TRACK RECORD — full-bleed bg + timeline cards
          ============================================= */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/heroes/guy-walking-sideways-across-city-sunset.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(42, 8, 32, 0.55) 0%, rgba(10, 5, 8, 0.45) 50%, rgba(42, 8, 16, 0.55) 100%)",
          }}
        />
        <div className="container-max relative z-10 py-20 md:py-24">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-cyan)] mb-4">
                Our Journey
              </p>
              <h2 className="text-white mb-4">
                <span className="italic font-light">A Track Record of</span>{" "}
                <span className="font-extrabold">Growth.</span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                Since our inception in {GROUP.founded}, we have continuously
                expanded, building strong interpersonal relationships that
                provide clients with a partner they can{" "}
                <span className="font-bold text-white">
                  approach, knowing they will be heard
                </span>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                {
                  Icon: Building,
                  year: `${GROUP.founded}`,
                  title: "Founded",
                  body: "Finex SA Group established in Paarl, Western Cape, with a vision for inclusive African fintech.",
                  color: "var(--color-cyan)",
                },
                {
                  Icon: TrendingUp,
                  year: "2018",
                  title: "Strategic Acquisition",
                  body: "Acquisition of iMali Express Forex, expanding our foreign exchange and remittance capabilities.",
                  color: "var(--color-purple)",
                },
                {
                  Icon: Target,
                  year: "2025+",
                  title: "Next Frontier",
                  body: "Category 4 Licence application, TPP status pursuit, and pan-African expansion.",
                  color: "var(--color-orange)",
                },
              ].map(({ Icon, year, title, body, color }) => (
                <div
                  key={year}
                  className="bg-black/50 backdrop-blur-md rounded-xl p-6 border border-white/15 text-white"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `color-mix(in srgb, ${color} 20%, transparent)`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <p
                    className="text-2xl font-extrabold mb-1"
                    style={{ color }}
                  >
                    {year}
                  </p>
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
          SECTION 3: GROUP STRUCTURE — split bullets LEFT + image RIGHT
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
                  src="/images/backgrounds/finex-sa-group-overview-structure.jpg"
                  alt="Finex SA Group corporate structure"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="w-full lg:w-1/2 text-white">
              <h2 className="text-white mb-4">
                <span className="italic font-light">Our Group</span>{" "}
                <span className="font-extrabold text-[var(--color-orange)]">
                  Structure.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                A{" "}
                <span className="font-bold text-white">
                  powerhouse of specialised companies
                </span>{" "}
                working together under one group.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {subsidiaries.map((sub) => (
                  <div
                    key={sub.name}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <p className="font-bold text-white text-sm mb-1">{sub.name}</p>
                    <p className="text-xs text-white/60">{sub.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          STATS: sunset gradient stats bar
          ============================================= */}
      <section className="section-padding section-sunset">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <div className="text-center text-white">
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">
                  {GROUP.founded}
                </div>
                <div className="text-white/80 text-base md:text-lg">Founded</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-center text-white">
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">
                  8
                </div>
                <div className="text-white/80 text-base md:text-lg">Subsidiaries</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center text-white">
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">
                  40+
                </div>
                <div className="text-white/80 text-base md:text-lg">Countries Served</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center text-white">
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2">
                  100%
                </div>
                <div className="text-white/80 text-base md:text-lg">Regulated</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          SECTION 4: REGULATORY — dark section with compliance cards
          ============================================= */}
      <section className="section-padding section-dark-warm relative overflow-hidden min-h-[75vh] flex items-center">
        <div className="container-max w-full">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-white mb-4">
                <span className="italic font-light">
                  Safe, Regulated, and
                </span>{" "}
                <span className="font-extrabold text-[var(--color-cyan)]">
                  Fully Licensed.
                </span>
              </h2>
              <p className="text-lg text-white/85 leading-relaxed">
                We operate with{" "}
                <span className="font-bold text-white">
                  absolute transparency
                </span>{" "}
                and rigorous compliance. We are a {GROUP.category}. As an
                Accountable Institution, we are regulated by the Financial
                Sector Conduct Authority as a financial service provider under{" "}
                <span className="font-bold text-white">{GROUP.fsp}</span>, and
                by the South African Reserve Bank as a forex exchange
                intermediary under number 2264.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                {
                  Icon: Shield,
                  title: GROUP.fsp,
                  body: "Financial Services Provider, registered with the FSCA.",
                },
                {
                  Icon: Landmark,
                  title: "SARB No. 2264",
                  body: "Forex Exchange Intermediary, regulated by the South African Reserve Bank.",
                },
                {
                  Icon: Award,
                  title: "NCRCP27865",
                  body: "Finex Money (PTY) LTD is a registered credit provider.",
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[var(--color-cyan)]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-cyan)]" />
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
          CTA: purple-navy bookend
          ============================================= */}
      <section className="relative section-padding overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple)] via-[#1a0a20] to-[var(--color-black)]" />
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[var(--color-cyan)]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-purple)]/30 to-transparent" />
        </div>

        <div className="container-max relative z-10">
          <div className="text-center">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">
                Partner with Us
              </p>
              <h2 className="text-white mb-3">
                <span className="italic font-light">Ready to work with</span>{" "}
                <span className="font-extrabold">Finex SA Group?</span>
              </h2>
              <p className="text-white/85 text-base mb-8 max-w-xl mx-auto">
                Whether you are an individual seeking{" "}
                <span className="font-bold text-white">financial dignity</span>{" "}
                or a corporation looking for{" "}
                <span className="font-bold text-white">
                  elite financial solutions
                </span>
                , we are here for you.
              </p>
              <CTAButton label="Contact Us" href="/contact" size="lg" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
