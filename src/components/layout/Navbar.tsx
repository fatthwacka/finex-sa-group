'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { MAIN_NAV } from '@/config/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(
    null,
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/finexsa-group-logo-web-navbar.png"
              alt="Finex SA Group"
              width={180}
              height={40}
              className="h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {MAIN_NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubmenu(null);
                }}
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
                    <div className="bg-[var(--color-surface)] rounded-lg shadow-lg border border-[var(--color-border)] py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <div
                          key={child.label}
                          className="relative"
                          onMouseEnter={() =>
                            child.children && setActiveSubmenu(child.label)
                          }
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          <Link
                            href={child.href}
                            className="flex items-center justify-between gap-3 px-4 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)] transition-colors"
                          >
                            <span>{child.label}</span>
                            {child.children && (
                              <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-secondary)]" />
                            )}
                          </Link>
                          {/* 2nd-level submenu — flies out to the right */}
                          {child.children && activeSubmenu === child.label && (
                            <div className="absolute left-full top-0 pl-1">
                              <div className="bg-[var(--color-surface)] rounded-lg shadow-lg border border-[var(--color-border)] py-2 min-w-[200px]">
                                {child.children.map((grandchild) => (
                                  <Link
                                    key={grandchild.label}
                                    href={grandchild.href}
                                    className="block px-4 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-alt)] transition-colors"
                                  >
                                    {grandchild.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
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
                          <div key={child.label}>
                            {child.children ? (
                              <>
                                <button
                                  className="flex items-center justify-between w-full py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                                  onClick={() =>
                                    setActiveMobileSubmenu(
                                      activeMobileSubmenu === child.label
                                        ? null
                                        : child.label,
                                    )
                                  }
                                >
                                  <span>{child.label}</span>
                                  <ChevronDown
                                    className={cn(
                                      'w-4 h-4 transition-transform',
                                      activeMobileSubmenu === child.label &&
                                        'rotate-180',
                                    )}
                                  />
                                </button>
                                {activeMobileSubmenu === child.label && (
                                  <div className="pl-4 py-1 space-y-1">
                                    <Link
                                      href={child.href}
                                      className="block py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      Overview
                                    </Link>
                                    {child.children.map((grandchild) => (
                                      <Link
                                        key={grandchild.label}
                                        href={grandchild.href}
                                        className="block py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {grandchild.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                href={child.href}
                                className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            )}
                          </div>
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
