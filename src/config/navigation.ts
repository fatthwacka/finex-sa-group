export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Our Brands',
    href: '#',
    children: [
      { label: 'Finex Money', href: '/finex-money' },
      { label: 'FINEXflow', href: '/finexflow' },
      { label: 'iMali Express', href: '/imali-express' },
      { label: 'Finex SA Treasury', href: '/finex-sa-treasury' },
      { label: 'Finex SA Global', href: '/finex-sa-global' },
    ],
  },
  { label: 'Technology', href: '/finex-pay-and-technologies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV = {
  brands: [
    { label: 'Finex Money', href: '/finex-money' },
    { label: 'FINEXflow', href: '/finexflow' },
    { label: 'iMali Express', href: '/imali-express' },
    { label: 'Finex SA Treasury', href: '/finex-sa-treasury' },
    { label: 'Finex SA Global', href: '/finex-sa-global' },
  ],
  company: [
    { label: 'Homepage', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Technology', href: '/finex-pay-and-technologies' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
