'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MAIN_NAV } from '@/config/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="font-semibold text-lg text-[var(--color-text-primary)]">
              Finex SA Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {MAIN_NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    className="flex items-center gap-1 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-2"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        activeDropdown === item.label && 'rotate-180'
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-[var(--color-surface)] rounded-lg shadow-lg border border-[var(--color-border)] py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[var(--brand-primary)] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--color-text-primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--color-border)] py-4">
            {MAIN_NAV.map((item) => (
              <div key={item.label} className="py-2">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-2 text-[var(--color-text-primary)] font-medium"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 py-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-[var(--color-text-primary)] font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-[var(--brand-primary)] text-white font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
