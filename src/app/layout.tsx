import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import BrandTabs from '@/components/ui/BrandTabs';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'Finex SA Group | Financial Power at Every Level',
    template: '%s | Finex SA Group',
  },
  description:
    'Finex SA Group is a fully integrated fintech banking ecosystem bringing sophisticated technology and financial inclusion to the African market.',
  keywords: [
    'fintech',
    'digital banking',
    'mobile wallet',
    'remittance',
    'forex',
    'treasury',
    'South Africa',
    'financial inclusion',
  ],
  authors: [{ name: 'Finex SA Group' }],
  creator: 'Finex SA Group',
  publisher: 'Finex SA Group',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://finex.co.za',
    siteName: 'Finex SA Group',
    title: 'Finex SA Group | Financial Power at Every Level',
    description:
      'A fully integrated fintech banking ecosystem bringing sophisticated technology and financial inclusion to the African market.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finex SA Group | Financial Power at Every Level',
    description:
      'A fully integrated fintech banking ecosystem bringing sophisticated technology and financial inclusion to the African market.',
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
