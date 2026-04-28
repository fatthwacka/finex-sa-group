export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Solutions",
    href: "#",
    children: [
      {
        label: "Finex Money",
        href: "/finex-money",
        children: [
          { label: "Finex Money", href: "/finex-money/individual" },
          { label: "Finex Flow", href: "/finex-money/finexflow" },
        ],
      },
      {
        label: "iMali Express",
        href: "/imali-express",
        children: [
          { label: "iMali Remit", href: "/imali-express/remit" },
          { label: "iMali Forex", href: "/imali-express/forex" },
        ],
      },
      { label: "Finex SA Treasury", href: "/finex-sa-treasury" },
      { label: "Finex SA Global", href: "/finex-sa-global" },
      { label: "Finex Technologies", href: "/finex-pay-and-technologies" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  brands: [
    { label: "Finex Money", href: "/finex-money" },
    { label: "iMali Express", href: "/imali-express" },
    { label: "Finex SA Treasury", href: "/finex-sa-treasury" },
    { label: "Finex SA Global", href: "/finex-sa-global" },
    { label: "Finex Technologies", href: "/finex-pay-and-technologies" },
  ],
  company: [
    { label: "Homepage", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
