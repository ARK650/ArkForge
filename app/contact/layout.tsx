import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | ArkForge Custom',
  description:
    'Get a quote for custom branded products. Contact ArkForge Custom for fidget toys, phone docks, coasters, and more.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
