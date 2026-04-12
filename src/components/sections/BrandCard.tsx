'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Workflow, Globe, TrendingUp, Network } from 'lucide-react';
import type { Brand } from '@/config/brands';

interface BrandCardProps {
  brand: Brand;
  description: string;
  index?: number;
}

// Map brand slugs to appropriate Lucide icons
const BRAND_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'finex-money': Wallet,
  'finexflow': Workflow,
  'imali-express': Globe,
  'treasury': TrendingUp,
  'global': Network,
};

export default function BrandCard({ brand, description, index = 0 }: BrandCardProps) {
  const Icon = BRAND_ICONS[brand.slug] || Wallet;

  return (
    <Link href={`/${brand.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        data-brand={brand.dataBrand}
        className="group relative card-warm h-full flex flex-col cursor-pointer"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Brand Header with Icon */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white mb-0.5">
                {brand.name}
              </h3>
              <p className="text-xs font-medium text-white/60">{brand.tagline}</p>
            </div>
          </div>
          <div
            className="p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors flex-shrink-0"
            aria-label={`Learn more about ${brand.name}`}
          >
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Description - compact, single focus */}
        <p className="text-white/80 text-sm leading-relaxed flex-grow mb-4">
          {description}
        </p>

        {/* CTA Button */}
        <div className="mt-auto">
          <span className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-semibold rounded-full bg-white text-[var(--color-navy)] shadow-md group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all duration-300">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
