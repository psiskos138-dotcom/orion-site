import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import './page.css';

const url = 'https://www.otlnyc.com'
const title = 'Orion Trade & Logistics LLC'
const description = 'Principal intermediary in the global physical commodity trade. New York.'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'commodity trading', 'physical commodities', 'trade intermediary',
    'logistics', 'global trade', 'commodity broker', 'New York', 'OTL',
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: title }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image'],
  },
  alternates: { canonical: url },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}