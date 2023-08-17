import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Geaux TV',
  description: 'Geaux Network TV streaming service',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* TODO: figure out a way to set the icon */}

      <body className={`${inter.className} h-[100dvh] max-h-[100dvh]`}>{children}</body>
    </html>
  );
}
