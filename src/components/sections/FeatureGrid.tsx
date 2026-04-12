'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  CreditCard,
  Shield,
  Zap,
  Users,
  Globe,
  Clock,
  FileCheck,
  MessageSquare,
  Building2,
  Factory,
  Wheat,
  HardHat,
  ShieldCheck,
  TrendingUp,
  Calculator,
  Send,
  MapPin,
  Briefcase,
  Code,
  Server,
  Cpu,
  Wallet,
  Handshake,
  PieChart,
  Ship,
  Gem,
  type LucideIcon,
} from 'lucide-react';

// Icon registry for string-based icon lookup
const iconRegistry: Record<string, LucideIcon> = {
  Smartphone,
  CreditCard,
  Shield,
  Zap,
  Users,
  Globe,
  Clock,
  FileCheck,
  MessageSquare,
  Building2,
  Factory,
  Wheat,
  HardHat,
  ShieldCheck,
  TrendingUp,
  Calculator,
  Send,
  MapPin,
  Briefcase,
  Code,
  Server,
  Cpu,
  Wallet,
  Handshake,
  PieChart,
  Ship,
  Gem,
};

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  /** Card variant for different background contexts */
  variant?: 'default' | 'on-dark' | 'on-warm' | 'glass-dark' | 'glass-light';
}

export default function FeatureGrid({ features, columns = 3, variant = 'default' }: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  // Card styling based on variant - uses new gradient card classes
  const cardClasses: Record<string, string> = {
    'default': 'card-cool', // Cool gradient cards on light backgrounds
    'on-dark': 'card-warm', // Warm gradient cards on dark backgrounds
    'on-warm': 'card-cool', // Cool gradient cards on warm backgrounds
    'glass-dark': 'card-glass-dark', // Glass effect on gradient backgrounds
    'glass-light': 'card-glass-light', // Glass effect on light gradient backgrounds
  };
  const cardClass = cardClasses[variant] || 'card-cool';

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 md:gap-8`}>
      {features.map((feature, index) => {
        const IconComponent = iconRegistry[feature.icon] || Shield;
        return (
          <motion.div
            key={feature.title}
            initial={{ scale: 0.3 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 15, mass: 1.5, delay: index * 0.05 }}
            className={cardClass}
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-white/80 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
