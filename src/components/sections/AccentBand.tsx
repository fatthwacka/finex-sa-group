"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/effects/ScrollReveal";

interface AccentBandProps {
  children: React.ReactNode;
  /** Background variant - uses gradient section classes */
  variant?:
    | "gradient"
    | "navy"
    | "dark"
    | "cyan-navy"
    | "purple-navy"
    | "sunset"
    | "red-orange"
    | "orange-blue"
    | "blue-red"
    | "blue-grey-cyan"
    | "dark-warm";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Pattern D — Full-Width Accent Band
 * Full viewport width, uses gradient or dark background.
 * Contains centred text, stats, or a single powerful statement.
 * Used to break up white sections with brand energy.
 */
export default function AccentBand({
  children,
  variant = "gradient",
  className = "",
}: AccentBandProps) {
  // Map variants to gradient section classes
  const bgStyles: Record<string, string> = {
    gradient: "section-sunset",
    navy: "section-navy",
    dark: "section-dark",
    "cyan-navy": "section-cyan-navy",
    "purple-navy": "section-purple-navy",
    sunset: "section-sunset",
    "red-orange": "section-red-orange",
    "orange-blue": "section-orange-blue",
    "blue-red": "section-blue-red",
    "blue-grey-cyan": "section-blue-grey-cyan",
    "dark-warm": "section-dark-warm",
  };

  return (
    <section className={`section-padding ${bgStyles[variant]} ${className}`}>
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center text-white">{children}</div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/**
 * Stat display for use within AccentBand
 */
interface StatDisplayProps {
  value: string;
  label: string;
  /** Use gradient text for the value */
  gradientValue?: boolean;
}

export function StatDisplay({
  value,
  label,
  gradientValue = false,
}: StatDisplayProps) {
  return (
    <div className="text-center">
      <div
        className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 ${
          gradientValue ? "gradient-text" : "text-white"
        }`}
      >
        {value}
      </div>
      <div className="text-white/80 text-sm md:text-base">{label}</div>
    </div>
  );
}

/**
 * Horizontal stat row for multiple stats
 */
interface StatRowProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4 | 5;
}

export function StatRow({ children, columns = 4 }: StatRowProps) {
  const gridCols: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-5",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8 mt-12`}>{children}</div>
  );
}
