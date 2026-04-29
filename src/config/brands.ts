export type CTAType = "app" | "contact" | "website";

export interface BrandSupport {
  phone: string;
  email: string;
}

export interface BrandCTA {
  label: string;
  type: CTAType;
}

export interface Brand {
  name: string;
  tagline: string;
  slug: string;
  dataBrand: string;
  logo?: string;
  website: string | null;
  appStore: string | null;
  playStore: string | null;
  support: BrandSupport;
  cta: BrandCTA;
  branches?: string[];
}

export const BRANDS = {
  finexMoney: {
    name: "Finex Money",
    tagline: "Banking that welcomes you.",
    slug: "finex-money",
    dataBrand: "finex-money",
    logo: "/images/logos/finex-money-logo.png",
    website: "https://finexmoney.com",
    appStore: "https://apps.apple.com/us/app/finex-money/id6456408372",
    playStore:
      "https://play.google.com/store/apps/details?id=com.finexmoney.wallet",
    support: {
      phone: "060 019 8966",
      email: "support@finexmoney.com",
    },
    cta: { label: "Download the App", type: "app" as const },
  },
  finexflow: {
    name: "FINEXflow",
    tagline: "Stop the friction. Start the flow.",
    slug: "finexflow",
    dataBrand: "finexflow",
    logo: "/images/logos/finexflow-logo.png",
    website: "https://finexflow.co.za",
    appStore: null,
    playStore: null,
    support: {
      phone: "",
      email: "",
    },
    cta: { label: "Speak to Us", type: "contact" as const },
  },
  imaliRemit: {
    name: "iMali Remit",
    tagline: "Keep families connected.",
    slug: "imali-express",
    dataBrand: "imali",
    logo: "/images/logos/imali_express.png",
    website: "https://imaliexpress.co.za",
    appStore: "https://apps.apple.com/za/app/imali-express-remit/id6504567814",
    playStore:
      "https://play.google.com/store/apps/details?id=za.co.cloudworks.imali",
    support: {
      phone: "060 049 2952",
      email: "support@imaliexpress.co.za",
    },
    cta: { label: "Download the App", type: "app" as const },
  },
  imaliForex: {
    name: "iMali Forex",
    tagline: "Your trusted currency exchange partner.",
    slug: "imali-express",
    dataBrand: "imali",
    website: "", // TODO
    appStore: null,
    playStore: null,
    support: {
      phone: "",
      email: "",
    },
    cta: { label: "Speak to iMali Forex", type: "contact" as const },
    branches: [
      "V&A Waterfront",
      "Cape Town Harbour Cruise Terminal Kiosk",
      "Rosebank Mall",
      "Boardwalk Mall, Summerstrand",
      "Kruger International Airport",
      "Stellenbosch",
      "Paarl Head Office",
      "PE International Airport Arrival Hall",
    ],
  },
  treasury: {
    name: "Finex SA Treasury",
    tagline: "Master global cash flow.",
    slug: "finex-sa-treasury",
    dataBrand: "treasury",
    logo: "/images/logos/Finex-SA-treasury-logo-sml.png",
    website: null,
    appStore: null,
    playStore: null,
    support: {
      phone: "072 904 9912",
      email: "georgina@finex.co.za",
    },
    cta: { label: "Speak to a Treasury Advisor", type: "contact" as const },
  },
  global: {
    name: "Finex SA Global",
    tagline: "Scale without borders.",
    slug: "finex-sa-global",
    dataBrand: "global",
    logo: "/images/logos/Finex-Global-logo-sml.png",
    website: null,
    appStore: null,
    playStore: null,
    support: {
      phone: "",
      email: "",
    },
    cta: { label: "Speak to Our Global Experts", type: "contact" as const },
  },
  finexPay: {
    name: "Finex Pay",
    tagline: "Pioneering alternative payments.",
    slug: "finex-technologies",
    dataBrand: "tech",
    website: null,
    appStore: null,
    playStore: null,
    support: { phone: "", email: "" },
    cta: { label: "Speak to Our Technology Team", type: "contact" as const },
  },
  finexTech: {
    name: "Finex Technologies",
    tagline: "The proprietary backbone.",
    slug: "finex-technologies",
    dataBrand: "tech",
    logo: "/images/logos/finex-technologies-v2.png",
    website: "https://finextechnologies.co.za",
    appStore: null,
    playStore: null,
    support: { phone: "", email: "" },
    cta: { label: "Speak to Our Technology Team", type: "contact" as const },
  },
} as const;

export const GROUP = {
  name: "Finex SA Group (Pty) Ltd",
  phone: ["0861 111 842", "0861 222 760"],
  email: "info@finex.co.za",
  address: "27 Bergrivier Boulevard, Paarl, 7646, Western Cape",
  founded: 2013,
  fsp: "FSP 45242",
  sarb: "Forex Exchange Intermediary No. 2264",
  category:
    "Category Two Authorised Dealer in Foreign Exchange with Limited Authority",
} as const;

export type BrandKey = keyof typeof BRANDS;
