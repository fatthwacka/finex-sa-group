import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import { Handshake, PieChart, Ship, Gem } from 'lucide-react';
import { BRANDS } from '@/config/brands';

export const metadata: Metadata = {
  title: 'Finex SA Global | International Expansion & Wealth Protection for Mid-Cap Companies',
  description:
    'Strategic global partnerships, equity stakes, import/export facilitation, and precious metals wealth protection for mid-cap companies. Scale your business without borders.',
  keywords: [
    'international business expansion South Africa',
    'Krugerrand investment',
    'precious metals South Africa',
    'import export facilitation',
    'joint venture Africa',
    'wealth protection',
  ],
};

const pillars = [
  {
    Icon: Handshake,
    title: 'Global Partnerships',
    description:
      'We facilitate critical global partnerships, identifying and establishing joint ventures and cross-border SME collaborations that drive international growth.',
  },
  {
    Icon: PieChart,
    title: 'Equity Stakes',
    description:
      'We assist clients in forming and acquiring strategic equity stakes to solidify their presence in foreign markets and secure long-term commercial interests.',
  },
  {
    Icon: Ship,
    title: 'Import and Export Facilitation',
    description:
      'We smooth the path for international trade by handling the complex logistics, regulatory requirements, and financial structuring required for seamless import and export operations.',
  },
  {
    Icon: Gem,
    title: 'Brokerage and Wealth Protection',
    description:
      'We broker high-value deals and offer secure corporate investment opportunities in responsibly sourced precious metals. Protect your wealth against currency volatility.',
  },
];

export default function GlobalPage() {
  const brand = BRANDS.global;

  return (
    <div data-brand={brand.dataBrand}>

      {/* =============================================
          HERO
          ============================================= */}
      <section className="relative flex items-center overflow-hidden min-h-[75vh] section-exec-hero">
        <div className="container-max relative z-10 py-20 md:py-28">
          <ScrollReveal type="slide" direction="up">
            <div className="max-w-3xl mx-auto text-center">
              {brand.logo && (
                <Image
                  src={brand.logo}
                  alt="Finex SA Global"
                  width={320}
                  height={120}
                  className="h-20 md:h-28 w-auto mx-auto mb-8"
                  priority
                />
              )}
              <p className="text-sm md:text-base tracking-[0.3em] uppercase font-semibold mb-6 text-exec-accent">
                Finex SA Global
              </p>
              <h1 className="text-white mb-6">
                <span className="italic font-light">Strategic Expansion</span> and <span className="font-extrabold">Wealth Protection.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
                Finex SA Global provides <span className="font-bold text-white">comprehensive tactical and operational outsourcing</span> solutions — structured to help <span className="font-bold text-white">mid-cap companies</span> expand their markets, secure supply chains, and protect their wealth far beyond South Africa. Built on <span className="font-bold text-white">four distinct pillars of expertise</span>.
              </p>
              <CTAButton
                label="Speak to Our Global Experts"
                type="contact"
                href="/contact"
                variant="gold"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =============================================
          FOUR PILLARS
          ============================================= */}
      <section className="section-padding section-exec-ribbon">
        <div className="container-max">
          <ScrollReveal type="slide" direction="up">
            <div className="text-center mb-16">
              <h2 className="text-exec-accent mb-4">Our Four Pillars of Expertise</h2>
              <p className="text-lg text-white/75 max-w-2xl mx-auto">
                Scale without borders with our comprehensive suite of global services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => {
              const { Icon } = pillar;
              return (
                <ScrollReveal key={pillar.title} type="slide" direction="up" delay={i * 2}>
                  <div
                    className="h-full p-8 rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.05]"
                    style={{
                      backgroundImage:
                        'radial-gradient(ellipse 80% 60% at top right, rgba(200, 138, 61, 0.1), transparent 70%)',
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-[color-mix(in_srgb,var(--color-exec-accent)_18%,transparent)] flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-exec-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-white/70 leading-relaxed">{pillar.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================
          COMPETITIVE ADVANTAGE + VALUES (two-column)
          ============================================= */}
      <section className="section-padding section-exec">
        <div className="container-max">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <ScrollReveal type="slide" direction="left">
              <div>
                <h2 className="text-exec-accent mb-6">Competitive Advantage</h2>
                <div className="space-y-4 text-white/85 text-lg leading-relaxed">
                  <p>
                    Our unique approach combines <span className="font-bold text-white">expert advice</span> in cash flow management and
                    foreign exchange with <span className="font-bold text-white">operational excellence</span>.
                  </p>
                  <p>
                    The outsourcing of treasury management functions allows organisations to focus
                    on strategy while benefiting from our comprehensive service offering. Finex SA
                    Global's close integration with Finex SA Treasury provides our clients with
                    <span className="font-bold text-white"> unparalleled access to financial insights</span> and customised solutions.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal type="slide" direction="right">
              <div>
                <h2 className="text-exec-accent mb-6">Values</h2>
                <div className="space-y-4 text-white/85 text-lg leading-relaxed">
                  <p>
                    At Finex SA Global, we believe that <span className="font-bold text-white">people are the key to success</span>. Our
                    primary focus is on achieving <span className="font-bold text-white">unconditional client satisfaction</span>, fostering
                    relationships built on trust.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          PRECIOUS METALS
          ============================================= */}
      <section className="section-padding section-exec-ribbon">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal type="slide" direction="up">
              <div className="text-center mb-12">
                <h2 className="text-exec-accent mb-4">Precious Metals Investment</h2>
                <p className="text-lg text-white/75">
                  Protect your wealth against currency volatility.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal type="slide" direction="up" delay={3}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className="p-8 rounded-2xl border border-[color-mix(in_srgb,var(--color-exec-accent)_35%,transparent)] bg-white/[0.02]"
                  style={{
                    backgroundImage:
                      'radial-gradient(ellipse 90% 60% at top left, rgba(228, 162, 78, 0.18), transparent 70%)',
                  }}
                >
                  <h3 className="text-2xl font-extrabold text-exec-accent mb-3">Krugerrands</h3>
                  <p className="text-white/80 leading-relaxed">
                    Invest in globally liquid Krugerrands, which hold legal tender status, for
                    secure wealth protection with <span className="font-bold text-white">guaranteed buyback</span>.
                  </p>
                </div>
                <div
                  className="p-8 rounded-2xl border border-white/20 bg-white/[0.02]"
                  style={{
                    backgroundImage:
                      'radial-gradient(ellipse 90% 60% at top left, rgba(200, 200, 200, 0.12), transparent 70%)',
                  }}
                >
                  <h3 className="text-2xl font-extrabold text-white mb-3">Gold &amp; Silver Bars</h3>
                  <p className="text-white/80 leading-relaxed">
                    <span className="font-bold text-white">Guaranteed buyback</span> gold and silver bars in various weights to enable flexible
                    investment strategies.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =============================================
          FINAL CTA — "Secure your future with Finex SA Global"
          ============================================= */}
      <section className="section-padding section-exec">
        <div className="container-max">
          <ScrollReveal type="slide" direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-white mb-6">
                <span className="font-light italic">Secure</span> your future with <span className="text-exec-accent font-extrabold">Finex SA Global.</span>
              </h2>
              <p className="text-lg text-white/80 mb-4">
                Join us in building <span className="font-bold text-white">profitable synergies</span> and expanding your market reach.
              </p>
              <p className="text-base text-white/70 mb-10">
                Contact us today to explore how our tailored solutions can enhance your business
                growth and secure your financial future.
              </p>
              <CTAButton
                label="Speak to Our Global Experts"
                type="contact"
                href="/contact"
                variant="gold"
                size="lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
