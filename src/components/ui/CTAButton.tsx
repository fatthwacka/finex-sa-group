import Link from "next/link";
import { ArrowRight, Download, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CTAType } from "@/config/brands";

interface CTAButtonProps {
  label: string;
  type?: CTAType;
  href?: string;
  /**
   * Button variants:
   * - primary: Brand colored button (use on light backgrounds)
   * - secondary: Accent colored button (use on light backgrounds)
   * - white: Pure white button with dark text (use on gradient/dark backgrounds)
   * - outline: Transparent with border (use sparingly, mainly on light backgrounds)
   */
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "white"
    | "gradient"
    | "bronze"
    | "gold"
    | "red";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  label,
  type,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: CTAButtonProps) {
  const Icon =
    type === "app" ? Download : type === "contact" ? Phone : ArrowRight;

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-[var(--brand-primary)] text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-[var(--brand-accent)] text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5",
    white:
      "bg-white text-[var(--color-navy)] hover:shadow-xl hover:-translate-y-1 shadow-md",
    outline:
      "border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white",
    gradient:
      "bg-gradient-to-r from-[var(--color-cyan)] via-[var(--color-purple)] to-[var(--color-orange)] text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 shadow-md",
    bronze:
      "bg-gradient-to-r from-[#8B5E28] via-[#C88A3D] to-[#E4A24E] text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 shadow-md",
    gold: "bg-gradient-to-r from-[#9C7A2E] via-[#D4A844] to-[#F0C76B] text-[#1a0f05] hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 shadow-md",
    red: "bg-gradient-to-r from-[var(--color-red)] via-[var(--color-red)] to-[var(--color-orange)] text-white hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 shadow-md",
  };

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  );

  if (href) {
    // External URLs open in a new tab with secure rel attribute
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <Link
        href={href}
        className={combinedClassName}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {label}
        {type && <Icon className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {label}
      <Icon className="w-4 h-4" />
    </button>
  );
}
