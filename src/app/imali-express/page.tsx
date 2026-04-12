import type { Metadata } from 'next';
import { Send, Globe, MapPin, Shield, Briefcase, Building2 } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import BranchLocations from '@/components/sections/BranchLocations';
import ScrollReveal from '@/components/effects/ScrollReveal';
import CTAButton from '@/components/ui/CTAButton';
import AppStoreBadges from '@/components/ui/AppStoreBadges';
import { BRANDS } from '@/config/brands';

export const metadata: Metadata = {
  title: 'iMali Express | Remittance & Forex',
  description:
    'iMali Express provides fast, safe, and low-cost cross-border financial solutions. Send money to 40+ countries or exchange currency at our nationwide branches.',
};

const remitFeatures = [
  {
    icon: Send,
    title: 'Send to 40+ Countries',
    description:
      'Move your funds fast to over 40 countries worldwide. When you need it and where you need it.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description:
      'Fully authorised by the South African Reserve Bank as a Category Two ADLA for forex transactions.',
  },
  {
    icon: Globe,
    title: 'Competitive Rates',
    description:
      'Enjoy zero percent fees on your first transaction alongside highly competitive exchange rates.',
  },
];

export default function ImaliExpressPage() {
  const remitBrand = BRANDS.imaliRemit;
  const forexBrand = BRANDS.imaliForex;

  return (
    <div data-brand={remitBrand.dataBrand}>
      {/* Intro Hero */}
      <HeroSection
        headline="Global Reach and Local Presence."
        subline="Mali Yami means taking care of your family and your future."
        body="iMali Express provides fast, safe, and low-cost cross-border financial solutions through two dedicated brands. Fully authorised by the South African Reserve Bank as a Category Two ADLA."
      />

      {/* iMali Remit Section */}
      <section className="section-padding section-light-warm">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="mb-4">iMali Remit</h2>
                <p className="text-2xl font-medium text-[var(--brand-primary)] mb-4">
                  Keep Families Connected.
                </p>
                <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                  Send money securely to over 40 countries with the iMali Remit app. When you need
                  it and where you need it, we move your funds fast. Enjoy zero percent fees on
                  your first transaction alongside highly competitive exchange rates and real-time
                  tracking.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  We believe in zero exclusion. For South African residents, getting your account
                  ready is simple with just a valid SA ID. For foreign nationals working in Mzansi,
                  all you need is a valid foreign passport and work permit. No proof of address is
                  required to get started.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-8">
                  Let our expert support team review your profile so you can get approved from the
                  comfort of your home and start sending money safely.
                </p>
                <div className="flex flex-wrap gap-4">
                  <CTAButton
                    label="Visit iMali Remit Website"
                    type="website"
                    href={remitBrand.website || '#'}
                    variant="primary"
                  />
                  <AppStoreBadges
                    appStoreUrl={remitBrand.appStore}
                    playStoreUrl={remitBrand.playStore}
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 gap-6">
                {remitFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 card-cool"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">{feature.title}</h4>
                      <p className="text-sm text-white/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* iMali Forex Section */}
      <section className="section-padding section-cyan-navy">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">iMali Forex</h2>
              <p className="text-2xl font-medium text-white/90 mb-4">
                Nationwide Bureau de Change Branches.
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Your trusted currency exchange partner is always close by. We offer reliable and
                highly competitive foreign currency exchange services for tourists and locals.
                Secure the best rates and friendly face-to-face service at our premium physical
                branches nationwide.
              </p>
            </div>
          </ScrollReveal>

          {/* Branch Locations */}
          {forexBrand.branches && (
            <BranchLocations branches={forexBrand.branches} title="Our Branch Locations" />
          )}
        </div>
      </section>

      {/* Omnibus Corporate Section */}
      <section className="section-padding section-purple-navy">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-start gap-6 card-warm">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Omnibus Corporate Travel Facilities</h3>
                  <p className="text-white/80 mb-4">
                    Unlock seamless business travel allowances with our free Omnibus services. South
                    African companies can utilise a Business Travel Facility of up to R20 million
                    per calendar year for their delegates.
                  </p>
                  <p className="text-white/80 mb-6">
                    We secure your forex under the company allowance and manage the regulatory
                    requirements so you can pay for accommodation and car hire before delegates
                    leave the country. Furthermore, iMali Forex can facilitate applications for
                    exceptional approvals from the South African Reserve Bank to secure limits
                    exceeding the R20 million threshold for high-volume corporate requirements.
                  </p>
                  <CTAButton label="Speak to iMali Forex" type="contact" href="/contact" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-sunset">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-white mb-4">Start Sending Money Today</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Download the iMali Remit app or visit one of our forex branches nationwide.
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
