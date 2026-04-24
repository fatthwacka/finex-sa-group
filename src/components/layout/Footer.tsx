import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { GROUP } from "@/config/brands";
import { FOOTER_NAV } from "@/config/navigation";
import { getPhoneHref, getEmailHref } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-black)] text-[var(--color-text-on-dark)]">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Column — full width on mobile, 1 col at lg */}
          <div className="col-span-2 lg:col-span-1">
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
              Financial Power at Every Level. A fully integrated fintech banking
              ecosystem bringing sophisticated technology and financial
              inclusion to the African market.
            </p>
            <p className="text-[var(--color-mid-grey)] mb-5 text-xs leading-relaxed italic">
              We operate with absolute transparency and rigorous compliance.
            </p>
            {/* Regulatory badges — compact bordered stack */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 rounded-lg border border-white/10 px-3 py-2">
                <Shield className="w-4 h-4 text-[var(--color-cyan)] flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--color-mid-grey)]">
                    Financial Service Provider
                  </div>
                  <div className="text-white/80 font-semibold">{GROUP.fsp}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 rounded-lg border border-white/10 px-3 py-2">
                <Shield className="w-4 h-4 text-[var(--color-cyan)] flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--color-mid-grey)]">
                    SARB Authorised
                  </div>
                  <div className="text-white/80 font-semibold">{GROUP.sarb}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 rounded-lg border border-white/10 px-3 py-2">
                <Shield className="w-4 h-4 text-[var(--color-cyan)] flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--color-mid-grey)]">
                    Authorised Dealer
                  </div>
                  <div className="text-white/80 font-semibold">
                    {GROUP.category}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Brands */}
          <div className="text-center">
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
          <div className="text-center">
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

          {/* Contact — full width on mobile, 1 col at lg */}
          <div className="col-span-2 lg:col-span-1">
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

      {/* Credit Provider notice */}
      <div className="border-t border-[var(--color-dark-grey)]">
        <div className="container-max py-4">
          <p className="text-[var(--color-mid-grey)] text-xs text-center">
            Finex Money (PTY) LTD is a registered credit provider NCRCP27865
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
