import '../styles/index.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AuthProvider from '@/store/auth-provider';
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
        <AuthProvider>
          <main className='flex h-[100dvh] w-full flex-col'>
            <Header />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
