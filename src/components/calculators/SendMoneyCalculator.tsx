"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  PAYOUT_COUNTRIES,
  PAYOUT_METHODS,
  type PayoutMethodKey,
  estimateFee,
  estimateDeliveryTime,
} from "@/config/payoutPartners";

interface SendMoneyCalculatorProps {
  /** Anchor target for the Send Money CTA button */
  ctaHref?: string;
  /** Additional class names applied to the outer card */
  className?: string;
}

export default function SendMoneyCalculator({
  ctaHref = "#cta",
  className = "",
}: SendMoneyCalculatorProps) {
  const [sendAmount, setSendAmount] = useState<string>("1000");
  const [countryCode, setCountryCode] = useState<string>(PAYOUT_COUNTRIES[0].code);
  const [method, setMethod] = useState<PayoutMethodKey>("bank");

  const country = useMemo(
    () =>
      PAYOUT_COUNTRIES.find((c) => c.code === countryCode) ??
      PAYOUT_COUNTRIES[0],
    [countryCode],
  );

  const parsedSend = parseFloat(sendAmount) || 0;
  const receiveAmount = country.exchangeRate
    ? parsedSend / country.exchangeRate
    : 0;

  const partners = country.partners[method] ?? [];
  const fee = estimateFee(parsedSend);
  const delivery = estimateDeliveryTime(method);

  return (
    <div
      className={`w-full max-w-lg lg:max-w-md rounded-2xl border border-white/15 bg-[#003973]/90 p-5 md:p-6 text-white shadow-2xl ${className}`}
      data-brand="imali"
    >
      {/* You send */}
      <label className="block rounded-xl border border-white/15 bg-white/5 px-4 py-3 mb-3">
        <span className="block text-[11px] uppercase tracking-[0.15em] text-white/60 mb-1">
          You send
        </span>
        <div className="flex items-center justify-between gap-3">
          <input
            type="text"
            inputMode="decimal"
            value={sendAmount}
            onChange={(e) =>
              setSendAmount(e.target.value.replace(/[^0-9.]/g, ""))
            }
            className="w-full bg-transparent text-2xl font-extrabold tracking-tight text-white outline-none"
            aria-label="Send amount in ZAR"
          />
          <div className="flex items-center gap-2 border-l border-white/15 pl-3 pr-7">
            <span className="text-xl leading-none" aria-hidden>
              🇿🇦
            </span>
            <span className="text-sm font-bold text-white">ZAR</span>
          </div>
        </div>
      </label>

      {/* Exchange rate pill */}
      <div className="inline-flex items-center rounded-full bg-[var(--color-red)]/15 border border-[var(--color-red)]/30 px-3 py-1 text-xs font-semibold text-white mb-3">
        1 {country.currency} = {country.exchangeRate.toFixed(2)} ZAR
      </div>

      {/* Recipient gets */}
      <div className="block rounded-xl border border-white/15 bg-white/5 px-4 py-3 mb-3">
        <span className="block text-[11px] uppercase tracking-[0.15em] text-white/60 mb-1">
          Recipient gets
        </span>
        <div className="flex items-center justify-between gap-3">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            {country.symbol ? `${country.symbol} ` : ""}
            {receiveAmount.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </span>
          <div className="relative">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="appearance-none bg-transparent border-l border-white/15 pl-3 pr-7 py-1 text-sm font-bold text-white outline-none cursor-pointer"
              aria-label="Destination country"
            >
              {PAYOUT_COUNTRIES.map((c) => (
                <option
                  key={c.code}
                  value={c.code}
                  className="bg-[#1a0f18] text-white"
                >
                  {c.flag} {c.currency}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-white/60 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Payout method */}
      <label className="block rounded-xl border border-white/15 bg-white/5 px-4 py-3 mb-3">
        <span className="block text-[11px] uppercase tracking-[0.15em] text-white/60 mb-1">
          How will they receive the funds?
        </span>
        <div className="relative">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value as PayoutMethodKey)}
            className="appearance-none w-full bg-transparent pr-7 text-base font-semibold text-white outline-none cursor-pointer"
            aria-label="Payout method"
          >
            {PAYOUT_METHODS.map((m) => (
              <option
                key={m.key}
                value={m.key}
                className="bg-[#1a0f18] text-white"
              >
                {m.label}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-white/60 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </label>

      {/* Payout partners — logo strip */}
      <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 mb-3">
        <span className="block text-[11px] uppercase tracking-[0.15em] text-white/60 mb-2">
          Where will the recipient receive funds?
        </span>
        {partners.length === 0 ? (
          <p className="text-xs text-white/60 italic">
            No partners listed yet for {country.name} ·{" "}
            {PAYOUT_METHODS.find((m) => m.key === method)?.label}.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {partners.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-center rounded-md bg-white/90 text-[#1a0f18] text-[11px] font-semibold px-2 py-2 text-center leading-tight min-h-[36px]"
                title={p.name}
              >
                {/* Placeholder: text chip until real logos are supplied */}
                {p.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fee + time */}
      <div className="flex items-center justify-between rounded-xl bg-black/30 border border-white/10 px-4 py-2.5 mb-4 text-xs">
        <div>
          <div className="uppercase tracking-[0.15em] text-white/60 text-[10px]">
            Fee
          </div>
          <div className="font-bold text-white text-sm">
            {fee.toLocaleString()} ZAR
          </div>
        </div>
        <div className="text-right">
          <div className="uppercase tracking-[0.15em] text-white/60 text-[10px]">
            Time
          </div>
          <div className="font-bold text-white text-sm">{delivery}</div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-[11px] text-white/50 text-center leading-snug mb-4">
        * Amount to receive is an estimate. Exchange rates are dynamic and may
        change.
      </p>

      {/* CTAs — half-width each, side by side */}
      <div className="flex gap-3">
        <Link
          href={ctaHref}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-finex-green hover:bg-finex-green-dark text-white font-semibold py-3 px-4 text-base transition-colors shadow-lg"
        >
          Send Money
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href={ctaHref}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-finex-red hover:bg-finex-red-dark text-white font-semibold py-3 px-4 text-base transition-colors shadow-lg"
        >
          Open an Account
        </Link>
      </div>
    </div>
  );
}
