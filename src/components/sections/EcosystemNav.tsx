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
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image layer — crossfades on brand change */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBrand.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              src={currentBrand.heroImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Purple-navy gradient overlay */}
      <div className="absolute inset-0 section-purple-navy opacity-75" aria-hidden="true" />

      {/* Content */}
      <div className="container-max relative z-10">
        {/* Logo Navigation Row - always single row, scaled down on mobile */}
        <ScrollReveal>
          <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-10 lg:gap-14 overflow-x-auto scrollbar-hide">
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
                    : 'bg-white/5 hover:bg-white/10 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="relative w-16 h-8 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-40 lg:h-20">
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
      </div>
    </section>
  );
}
