import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import { BRANDS } from "@/config/brands";

export const metadata: Metadata = {
  title:
    "Finex Pay & Technologies | Digital Payments Infrastructure South Africa",
  description:
    "Finex Pay pioneers alternative payment gateways and crypto integrations. Finex Technologies powers the proprietary software backbone behind our entire fintech ecosystem.",
  keywords: [
    "fintech payment infrastructure South Africa",
    "crypto payments South Africa",
    "alternative payment gateway",
    "digital asset integration",
    "fintech software Africa",
  ],
};

const finexPayFeatures = [
  {
    icon: "Wallet",
    title: "Alternative Payment Gateways",
    description:
      "Providing the bridge between traditional fiat environments and the future of digital currency.",
  },
  {
    icon: "Cpu",
    title: "Crypto Integrations",
    description:
      "With over 5.8 million cryptocurrency users in South Africa, we are building for the future of value exchange.",
  },
  {
    icon: "Zap",
    title: "Digital Asset Integration",
    description:
      "Seamlessly connect traditional financial systems with emerging digital asset ecosystems.",
  },
];

const finexTechFeatures = [
  {
    icon: "Code",
    title: "Proprietary Software",
    description:
      "Develops, deploys, and maintains the sophisticated software architecture that powers our entire ecosystem.",
  },
  {
    icon: "Shield",
    title: "Absolute Data Security",
    description:
      "Enterprise-grade security infrastructure ensuring the protection of all client data and transactions.",
  },
  {
    icon: "Server",
    title: "Real-Time Execution",
    description:
      "High-performance systems capable of processing transactions in real-time at scale.",
  },
];

export default function TechnologyPage() {
  const brand = BRANDS.finexTech;

  return (
    <div data-brand={brand.dataBrand}>
      <HeroSection
        variant="image-background"
        eyebrow="Finex Pay & Technologies"
        headline={
          <>
            <span className="italic font-light">The</span>{" "}
            <span className="font-extrabold">Infrastructure</span>
            <br />
            <span className="font-light">of Tomorrow.</span>
          </>
        }
        subline="To lead the financial sector, you must own the technology that drives it."
        body={
          <>
            Finex Pay and Finex Technologies represent the{" "}
            <span className="font-bold text-white">innovative engine room</span>{" "}
            of the Finex SA Group, ensuring our ecosystem remains{" "}
            <span className="font-bold text-white">
              secure, scalable, and ahead of the curve
            </span>
            .
          </>
        }
        heroImage="/images/heroes/finex-money-card-tap.webp"
        heroImageAlt="Digital payment technology"
      >
        <CTAButton
          label="Speak to Our Technology Team"
          href="/contact"
          variant="white"
        />
      </HeroSection>

      {/* Finex Pay Section */}
      <section className="section-padding section-dark-tech">
        <div className="container-max">
          <div className="max-w-4xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="text-white mb-4">Finex Pay</h2>
              <p className="text-2xl font-medium text-[var(--brand-accent)] mb-4">
                Pioneering Alternative Payments and Digital Asset Integration
              </p>
              <p className="text-lg text-white/80">
                With over 5.8 million cryptocurrency users in South Africa, the
                landscape of value exchange is shifting rapidly. Finex Pay is
                focused on alternative payment gateways and crypto integrations,
                providing the bridge between traditional fiat environments and
                the future of digital currency.
              </p>
            </ScrollReveal>
          </div>
          <FeatureGrid
            features={finexPayFeatures}
            columns={3}
            variant="on-dark"
          />
        </div>
      </section>

      {/* Finex Technologies Section */}
      <section className="section-padding section-light-cool">
        <div className="container-max">
          <div className="max-w-4xl mx-auto mb-12">
            <ScrollReveal>
              <h2 className="mb-4">Finex Technologies</h2>
              <p className="text-2xl font-medium text-[var(--brand-accent)] mb-4">
                The Proprietary Backbone
              </p>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Finex Technologies develops, deploys, and maintains the
                sophisticated software architecture that powers our digital
                wallets, remittance platforms, and high-volume payroll systems.
                This dedicated technology division ensures absolute data
                security, real-time execution capabilities, and the agility to
                adapt to evolving market demands instantly.
              </p>
            </ScrollReveal>
          </div>
          <FeatureGrid
            features={finexTechFeatures}
            columns={3}
            variant="on-warm"
          />
        </div>
      </section>

      {/* Tech Stats */}
      <section className="section-padding section-sunset">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  5.8M+
                </div>
                <div className="text-white/80">Crypto Users in SA</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  24/7
                </div>
                <div className="text-white/80">System Uptime</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  100%
                </div>
                <div className="text-white/80">In-House Development</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                  Real
                </div>
                <div className="text-white/80">Time Processing</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-cyan-navy">
        <div className="container-max">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-white mb-4">Interested in Our Technology?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re looking to integrate our payment solutions
                or explore partnership opportunities, our technology team is
                ready to help.
              </p>
              <CTAButton
                label="Speak to Our Technology Team"
                href="/contact"
                size="lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
