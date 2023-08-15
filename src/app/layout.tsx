import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import Header from '@/components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Geaux TV',
  description: 'Geaux Network TV streaming service',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* TODO: figure out a way to set the icon */}

      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
