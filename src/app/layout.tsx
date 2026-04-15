import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import BrandTabs from '@/components/ui/BrandTabs';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'Finex SA Group | Integrated Fintech Banking Ecosystem for Africa',
    template: '%s | Finex SA Group',
  },
  description:
    'A fully integrated fintech banking ecosystem for Africa - digital wallets, workforce payments, remittance, forex, and treasury solutions for individuals and corporations.',
  keywords: [
    'fintech banking ecosystem South Africa',
    'digital wallet South Africa',
    'cross border payments Africa',
    'corporate treasury',
    'mobile banking Africa',
  ],
  authors: [{ name: 'Finex SA Group' }],
  creator: 'Finex SA Group',
  publisher: 'Finex SA Group',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://finex.co.za',
    siteName: 'Finex SA Group',
    title: 'Finex SA Group | Integrated Fintech Banking Ecosystem for Africa',
    description:
      'A fully integrated fintech banking ecosystem for Africa - digital wallets, workforce payments, remittance, forex, and treasury solutions for individuals and corporations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finex SA Group | Integrated Fintech Banking Ecosystem for Africa',
    description:
      'A fully integrated fintech banking ecosystem for Africa - digital wallets, workforce payments, remittance, forex, and treasury solutions for individuals and corporations.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logos/finexsa-group-logo-only-no-text.png',
    apple: '/images/logos/finexsa-group-logo-only-no-text.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <BrandTabs />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
