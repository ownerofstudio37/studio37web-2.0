import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Studio37 - Photography, Videography & Marketing',
  description:
    'Studio37 provides professional photography, videography, and marketing services in the Magnolia & Pinehurst, TX areas.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://studio37.cc',
    siteName: 'Studio37',
  },
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
