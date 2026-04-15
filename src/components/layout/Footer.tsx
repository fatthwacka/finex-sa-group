import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { GROUP } from '@/config/brands';
import { FOOTER_NAV } from '@/config/navigation';
import { getPhoneHref, getEmailHref } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-black)] text-[var(--color-text-on-dark)]">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logos/finexsa-group-logo-web-navbar.png"
                alt="Finex SA Group"
                width={180}
                height={40}
                className="h-10 lg:h-12 w-auto"
              />
            </Link>
            <p className="text-[var(--color-mid-grey)] mb-6 text-sm leading-relaxed">
              Financial Power at Every Level. A fully integrated fintech banking ecosystem bringing
              sophisticated technology and financial inclusion to the African market.
            </p>
            {/* Regulatory Badges */}
            <div className="space-y-2 text-xs text-[var(--color-mid-grey)]">
              <p>{GROUP.fsp}</p>
              <p>{GROUP.sarb}</p>
            </div>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Our Brands</h4>
            <ul className="space-y-3">
              {FOOTER_NAV.brands.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-mid-grey)] hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {FOOTER_NAV.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-mid-grey)] hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={getPhoneHref(GROUP.phone[0])}
                  className="flex items-start gap-3 text-[var(--color-mid-grey)] hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    {GROUP.phone[0]}
                    <br />
                    {GROUP.phone[1]}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={getEmailHref(GROUP.email)}
                  className="flex items-center gap-3 text-[var(--color-mid-grey)] hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {GROUP.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[var(--color-mid-grey)] text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{GROUP.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bank Zero Partnership */}
      <div className="border-t border-[var(--color-dark-grey)]">
        <div className="container-max py-4">
          <p className="text-[var(--color-mid-grey)] text-xs text-center">
            Finex Money (PTY) LTD is a registered credit provider NCRCP27865 — powered by{' '}
            <span className="text-white font-medium">Bank Zero</span> mutual bank.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-dark-grey)]">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-mid-grey)] text-sm">
              &copy; {currentYear} {GROUP.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {FOOTER_NAV.legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[var(--color-mid-grey)] hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
