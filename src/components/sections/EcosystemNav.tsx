'use client';

import { useState } from 'react';
import Link from 'next/link';
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
    logo: '/images/logos/FinexMoneyLogo.png',
    heroImage: '/images/heroes/finex-money-hero-woman.webp',
  },
  {
    key: 'finexflow',
    name: 'FINEXflow',
    slug: 'finexflow',
    dataBrand: 'finexflow',
    logo: '/images/logos/Finex Flow 1.png',
    heroImage: '/images/heroes/finexflow-hero-executive.webp',
  },
  {
    key: 'imaliExpress',
    name: 'iMali Express',
    slug: 'imali-express',
    dataBrand: 'imali',
    logo: '/images/logos/imali_express.png',
    heroImage: '/images/heroes/imali-hero-mama.webp',
  },
  {
    key: 'treasury',
    name: 'Treasury',
    slug: 'treasury',
    dataBrand: 'treasury',
    logo: '/images/logos/Finex Flow 2.png',
    heroImage: '/images/lifestyle/finexflow-collateral-spread.webp',
  },
  {
    key: 'global',
    name: 'Global',
    slug: 'global',
    dataBrand: 'global',
    logo: '/images/logos/Finex Flow 3.png',
    heroImage: '/images/gradients/brand-gradient-cover.webp',
  },
];

export default function EcosystemNav() {
  const [activeBrand, setActiveBrand] = useState<string>(BRAND_ITEMS[0].key);

  const currentBrand = BRAND_ITEMS.find((b) => b.key === activeBrand) || BRAND_ITEMS[0];

  return (
    <section className="py-16 md:py-24 section-purple-navy">
      <div className="container-max">
        {/* Logo Navigation Row */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14 mb-12">
            {BRAND_ITEMS.map((brand) => (
              <button
                key={brand.key}
                onClick={() => setActiveBrand(brand.key)}
                className={`relative p-3 rounded-xl transition-all duration-300 ${
                  activeBrand === brand.key
                    ? 'bg-white/15 scale-110'
                    : 'bg-white/5 hover:bg-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20">
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

        {/* Large Image Display */}
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
                <Link
                  href={`/${currentBrand.slug}`}
                  className="block group"
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
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
