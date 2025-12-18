import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ArkForge Custom | Precision Branded Products',
  description:
    'Custom branded fidget toys, phone docks, coasters, and more. Low minimums, fast turnaround, advanced manufacturing for businesses.',
  keywords: [
    'custom branded products',
    'promotional products',
    'fidget toys',
    'phone docks',
    'coasters',
    'B2B',
    'custom manufacturing',
    'Ontario',
  ],
  openGraph: {
    title: 'ArkForge Custom | Precision Branded Products',
    description:
      'Custom branded fidget toys, phone docks, coasters, and more for businesses.',
    type: 'website',
    locale: 'en_CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
