import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DataHarbor - Get Any Data From Any Website',
  description: 'DataHarbor: Professional B2B data extraction platform powering 700M+ domains. Get clean, structured data from any website in your preferred format.',
  keywords: ['data extraction', 'web scraping', 'data collection', 'B2B data', 'API', 'DataHarbor'],
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
