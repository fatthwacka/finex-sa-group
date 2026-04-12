'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface BrandTab {
  name: string;
  slug: string;
  dataBrand: string;
}

const BRAND_TABS: BrandTab[] = [
  { name: 'Finex Money', slug: '/finex-money', dataBrand: 'finex-money' },
  { name: 'FINEXflow', slug: '/finexflow', dataBrand: 'finexflow' },
  { name: 'iMali Express', slug: '/imali-express', dataBrand: 'imali' },
  { name: 'Treasury', slug: '/treasury', dataBrand: 'treasury' },
  { name: 'Global', slug: '/global', dataBrand: 'global' },
];

export default function BrandTabs() {
  const pathname = usePathname();

  // Only show on brand pages
  const isBrandPage = BRAND_TABS.some((tab) => pathname === tab.slug);

  if (!isBrandPage) return null;

  return (
    <nav className="sticky top-[72px] z-40 bg-[var(--color-navy)]/95 backdrop-blur-md border-b border-white/10">
      <div className="container-max">
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
          {BRAND_TABS.map((tab) => {
            const isActive = pathname === tab.slug;

            return (
              <Link
                key={tab.slug}
                href={tab.slug}
                data-brand={tab.dataBrand}
                className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="brand-tab-indicator"
                    className="absolute inset-0 bg-white/15 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
