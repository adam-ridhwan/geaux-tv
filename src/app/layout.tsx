import '../styles/index.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

import Header from '@/components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Geaux TV',
  description: 'Geaux Network TV streaming service',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        {/*<SessionProvider>*/}
        <main className='flex h-[100dvh] w-full flex-col'>
          <Header />
          {children}
        </main>
        {/*</SessionProvider>*/}
      </body>
    </html>
  );
}
