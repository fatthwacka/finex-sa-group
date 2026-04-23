import type { Metadata } from "next";
import { Building, TrendingUp, Shield, Target } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { GROUP, BRANDS } from "@/config/brands";

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
  { name: "Finex Money", dataBrand: "finex-money" },
  { name: "FINEXflow SaaS", dataBrand: "finexflow" },
  { name: "iMali Express Remit", dataBrand: "imali" },
  { name: "iMali Express Forex", dataBrand: "imali" },
  { name: "Finex SA Treasury", dataBrand: "treasury" },
  { name: "Finex SA Global", dataBrand: "global" },
  { name: "Finex Pay", dataBrand: "tech" },
  { name: "Finex Technologies", dataBrand: "tech" },
] as const;

export default function AboutPage() {
  return (
    <>
      <HeroSection
        variant="image-background"
        eyebrow="About Us"
        headline={
          <>
            <span className="italic font-light">Trusted Heritage.</span>
            <br />
            <span className="font-extrabold">Inclusive Future.</span>
          </>
        }
        body={
          <>
            The Finex SA Group unites a{" "}
            <span className="font-bold text-white">
              powerhouse of specialised companies
            </span>{" "}
            — merging decades of trusted financial heritage with{" "}
            <span className="font-bold text-white">
              cutting-edge digital payment technology
            </span>
            . We provide the robust, forward-thinking infrastructure required to
            thrive in a global market that demands{" "}
            <span className="font-bold text-white">
              absolute sophistication
            </span>
            .
          </>
        }
        heroImage="/images/gradients/brand-gradient-cover.webp"
        heroImageAlt="Finex SA Group brand"
      />

      {/* Strategic Objectives */}
      <section className="section-padding section-purple-navy">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-[var(--color-cyan)]" />
                  <h2 className="text-white">Our Strategic Objectives</h2>
                </div>
                <p className="text-lg text-white/80 mb-6">
                  We are not just participating in the market. We are actively
                  shaping its future.
                </p>
                <p className="text-white/80 leading-relaxed mb-6">
                  Our strategic growth focus for 2025 and 2026 is anchored in
                  expanding our regulatory and operational footprint. We are
                  actively pursuing a Category 4 Licence Application while
                  advancing our core objective to secure our own Third Party
                  Payment Provider status and direct Bank Sponsorship.
                </p>
                <p className="text-white/80 leading-relaxed">
                  This will solidify our independence and enhance our capacity
                  to deliver unparalleled financial solutions and drive
                  financial dignity across the continent.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="card-warm text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    Cat 4
                  </div>
                  <div className="text-sm text-white/80">
                    Licence Application
                  </div>
                </div>
                <div className="card-cool text-center">
                  <div className="text-3xl font-bold text-white mb-2">TPP</div>
                  <div className="text-sm text-white/80">Provider Status</div>
                </div>
                <div className="card-sunset text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    Direct
                  </div>
                  <div className="text-sm text-white/80">Bank Sponsorship</div>
                </div>
                <div className="card-navy text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    Pan-African
                  </div>
                  <div className="text-sm text-white/80">Expansion</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="section-padding section-light-warm">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-[var(--color-orange)]" />
                <h2>A Track Record of Growth</h2>
              </div>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Since our inception in {GROUP.founded}, we have continuously
                expanded, marked by our strategic acquisition of iMali Express
                Forex in 2018.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                We are bringing a layer of sophistication and financial
                inclusion to the market in a way never seen before. Our goal is
                to build strong interpersonal relationships that provide
                individual and corporate clients with a partner they can
                approach, knowing they will be heard, understood, and powerfully
                supported.
              </p>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal delay={0.2}>
              <div className="mt-12 relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--gradient-sunset-v)]" />
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-cyan)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <Building className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">{GROUP.founded}</div>
                      <div className="text-[var(--color-text-secondary)]">
                        Finex SA Group founded
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-purple)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">2018</div>
                      <div className="text-[var(--color-text-secondary)]">
                        Strategic acquisition of iMali Express Forex
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-orange)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold">2025-2026</div>
                      <div className="text-[var(--color-text-secondary)]">
                        Category 4 Licence & TPP Status pursuit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Group Structure */}
      <section className="section-padding section-red-orange">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Our Group Structure</h2>
              <p className="text-lg text-white/80">
                A powerhouse of specialised companies working together
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {subsidiaries.map((sub, index) => (
              <ScrollReveal key={sub.name} delay={index * 0.05}>
                <div
                  data-brand={sub.dataBrand}
                  className="card-glass-dark text-center"
                >
                  <span className="font-medium text-sm text-white">
                    {sub.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory */}
      <section className="section-padding section-sunset">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-white" />
                <h2 className="text-white">
                  Safe, Regulated, and Fully Licensed
                </h2>
              </div>
              <p className="text-white/80 text-lg mb-8">
                We operate with absolute transparency and rigorous compliance.
                We are a {GROUP.category}. As an Accountable Institution, we are
                regulated by the Financial Sector Conduct Authority as a
                financial service provider under {GROUP.fsp}, and by the South
                African Reserve Bank as a forex exchange intermediary under
                number 2264.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="card-glass-dark inline-block">
                  <div className="text-sm text-white/70">FSP License</div>
                  <div className="font-semibold text-white">{GROUP.fsp}</div>
                </div>
                <div className="card-glass-dark inline-block">
                  <div className="text-sm text-white/70">SARB Intermediary</div>
                  <div className="font-semibold text-white">{GROUP.sarb}</div>
                </div>
              </div>

              {/* Bank Zero Partnership */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-white/70 text-sm">
                  Finex Money (PTY) LTD is a registered credit provider
                  NCRCP27865
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
