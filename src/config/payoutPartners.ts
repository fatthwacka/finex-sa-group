/**
 * iMali Express / Finex Money send-money calculator data.
 *
 * PLACEHOLDER DATA — replace with real exchange rates, real payout partners,
 * and real partner logos once supplied.
 *
 * Shape:
 *   countries[].exchangeRate is expressed as "1 unit of destination currency
 *   equals this many ZAR". i.e. sendZAR / exchangeRate = receiveAmount.
 *
 *   Each country has a list of PayoutMethods (e.g. Bank Account, Cash Pickup,
 *   Mobile Money). Each method lists the partners available for that method
 *   in that country.
 */

export type PayoutMethodKey = "bank" | "cash" | "mobile";

export interface PayoutMethod {
  key: PayoutMethodKey;
  label: string;
}

export const PAYOUT_METHODS: PayoutMethod[] = [
  { key: "bank", label: "Bank Account" },
  { key: "cash", label: "Cash Pickup" },
  { key: "mobile", label: "Mobile Money" },
];

export interface PayoutPartner {
  /** Internal id */
  id: string;
  /** Display name shown under the logo as fallback */
  name: string;
  /** Path to the partner's logo (placeholder for now) */
  logo?: string;
}

export interface PayoutCountry {
  /** ISO 3166-1 alpha-2 */
  code: string;
  /** Display name */
  name: string;
  /** Currency code, e.g. "USD", "ZMW" */
  currency: string;
  /** Currency symbol used in receive field */
  symbol?: string;
  /** Flag emoji (quick stand-in — replace with SVG/PNG if you want pixel-perfect flags) */
  flag: string;
  /**
   * 1 unit of destination currency = this many ZAR.
   * So receiveAmount = sendZAR / exchangeRate.
   * Placeholder values — swap for live rates or a daily feed.
   */
  exchangeRate: number;
  /** Partners available per method */
  partners: Partial<Record<PayoutMethodKey, PayoutPartner[]>>;
}

export const PAYOUT_COUNTRIES: PayoutCountry[] = [
  {
    code: "ZW",
    name: "Zimbabwe",
    currency: "USD",
    symbol: "$",
    flag: "🇿🇼",
    exchangeRate: 18.5,
    partners: {
      bank: [
        { id: "zw-cabs", name: "CABS" },
        { id: "zw-steward", name: "Steward Bank" },
        { id: "zw-cbz", name: "CBZ Bank" },
      ],
      cash: [
        { id: "zw-zimpost", name: "ZimPost" },
        { id: "zw-ecocash", name: "EcoCash Agent" },
      ],
      mobile: [
        { id: "zw-ecocash-mobile", name: "EcoCash" },
        { id: "zw-onemoney", name: "OneMoney" },
      ],
    },
  },
  {
    code: "ZM",
    name: "Zambia",
    currency: "ZMW",
    symbol: "K",
    flag: "🇿🇲",
    exchangeRate: 0.71,
    partners: {
      bank: [
        { id: "zm-zanaco", name: "Zanaco" },
        { id: "zm-stanbic", name: "Stanbic Zambia" },
        { id: "zm-fnb", name: "FNB Zambia" },
      ],
      cash: [
        { id: "zm-zampost", name: "ZamPost" },
        { id: "zm-shoprite", name: "Shoprite Money Market" },
      ],
      mobile: [
        { id: "zm-airtel", name: "Airtel Money" },
        { id: "zm-mtn", name: "MTN Mobile Money" },
      ],
    },
  },
  {
    code: "MW",
    name: "Malawi",
    currency: "MWK",
    symbol: "MK",
    flag: "🇲🇼",
    exchangeRate: 0.011,
    partners: {
      bank: [
        { id: "mw-nbm", name: "National Bank of Malawi" },
        { id: "mw-standard", name: "Standard Bank Malawi" },
        { id: "mw-fdh", name: "FDH Bank" },
      ],
      cash: [{ id: "mw-malswitch", name: "Malswitch Agent" }],
      mobile: [
        { id: "mw-airtel", name: "Airtel Money" },
        { id: "mw-tnm", name: "TNM Mpamba" },
      ],
    },
  },
  {
    code: "MZ",
    name: "Mozambique",
    currency: "MZN",
    symbol: "MT",
    flag: "🇲🇿",
    exchangeRate: 0.29,
    partners: {
      bank: [
        { id: "mz-bci", name: "BCI" },
        { id: "mz-millennium", name: "Millennium BIM" },
        { id: "mz-standard", name: "Standard Bank Mozambique" },
      ],
      cash: [{ id: "mz-correios", name: "Correios de Moçambique" }],
      mobile: [
        { id: "mz-mpesa", name: "M-Pesa" },
        { id: "mz-emola", name: "e-Mola" },
      ],
    },
  },
  {
    code: "KE",
    name: "Kenya",
    currency: "KES",
    symbol: "KSh",
    flag: "🇰🇪",
    exchangeRate: 0.14,
    partners: {
      bank: [
        { id: "ke-kcb", name: "KCB Bank" },
        { id: "ke-equity", name: "Equity Bank" },
        { id: "ke-cooperative", name: "Co-operative Bank" },
        { id: "ke-absa", name: "Absa Kenya" },
      ],
      cash: [{ id: "ke-postbank", name: "Postbank Kenya" }],
      mobile: [
        { id: "ke-mpesa", name: "M-Pesa" },
        { id: "ke-airtel", name: "Airtel Money" },
      ],
    },
  },
];

/** Utility — fee estimate (placeholder flat percentage). */
export function estimateFee(sendZAR: number): number {
  if (!sendZAR || sendZAR <= 0) return 0;
  return Math.max(25, Math.round(sendZAR * 0.035));
}

/** Utility — rough delivery time (placeholder, by method). */
export function estimateDeliveryTime(method: PayoutMethodKey): string {
  switch (method) {
    case "mobile":
      return "Minutes";
    case "cash":
      return "Same day";
    case "bank":
    default:
      return "1–2 business days";
  }
}
