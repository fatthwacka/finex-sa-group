'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { BRANDS } from '@/config/brands';

interface BrandItem {
  key: string;
  name: string;
  slug: string;
  dataBrand: string;
  logo: string;
  heroImage: string;
}

const BRAND_ITEMS: BrandItem[] = [
  {
    key: 'finexMoney',
    name: 'Finex Money',
    slug: 'finex-money',
    dataBrand: 'finex-money',
    logo: '/images/logos/finex-money-logo.png',
    heroImage: '/images/heroes/finex-money-hero-woman.webp',
  },
  {
    key: 'finexflow',
    name: 'FINEXflow',
    slug: 'finexflow',
    dataBrand: 'finexflow',
    logo: '/images/logos/finexflow-logo.png',
    heroImage: '/images/heroes/finexflow-hero-executive.webp',
  },
  {
    key: 'imaliExpress',
    name: 'iMali Express',
    slug: 'imali-express',
    dataBrand: 'imali',
    logo: '/images/logos/imali-express-logo.png',
    heroImage: '/images/heroes/imali-hero-mama.webp',
  },
  {
    key: 'treasury',
    name: 'Treasury',
    slug: 'treasury',
    dataBrand: 'treasury',
    logo: '/images/logos/Finex-SA-treasury-logo-sml.png',
    heroImage: '/images/lifestyle/finexflow-collateral-spread.webp',
  },
  {
    key: 'global',
    name: 'Global',
    slug: 'global',
    dataBrand: 'global',
    logo: '/images/logos/Finex-Global-logo-sml.png',
    heroImage: '/images/gradients/brand-gradient-cover.webp',
  },
];

export default function EcosystemNav() {
  const [activeBrand, setActiveBrand] = useState<string>(BRAND_ITEMS[0].key);

  const currentBrand = BRAND_ITEMS.find((b) => b.key === activeBrand) || BRAND_ITEMS[0];

  const scrollToBrands = () => {
    const el = document.getElementById('brands');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 section-purple-navy">
      <div className="container-max">
        {/* Logo Navigation Row - always single row, scaled down on mobile */}
        <ScrollReveal>
          <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-10 lg:gap-14 mb-12 overflow-x-auto scrollbar-hide">
            {BRAND_ITEMS.map((brand) => (
              <button
                key={brand.key}
                onClick={() => {
                  setActiveBrand(brand.key);
                  scrollToBrands();
                }}
                className={`relative p-2 sm:p-3 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  activeBrand === brand.key
                    ? 'bg-white/15 scale-110'
                    : 'bg-white/5 hover:bg-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
                {activeBrand === brand.key && (
                  <motion.div
                    layoutId="activeBrandIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Large Image Display - clicks scroll to brands section */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBrand.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <button
                  onClick={scrollToBrands}
                  className="block group w-full text-left"
                  data-brand={currentBrand.dataBrand}
                >
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <Image
                      src={currentBrand.heroImage}
                      alt={currentBrand.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    {/* Overlay with brand name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                        {currentBrand.name}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base">
                        Click to learn more
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
