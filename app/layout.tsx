import type { Metadata } from 'next';
import './globals.css';
import './page.css';

export const metadata: Metadata = {
  title: 'Orion Trade & Logistics LLC',
  description: 'Principal intermediary in the global physical commodity trade. New York.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}