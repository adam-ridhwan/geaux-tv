import '../styles/index.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Geaux TV',
  description: 'Geaux Network TV streaming service',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} h-[100dvh] max-h-[100dvh] min-h-[100dvh] border-4 border-crimson-9`}>
        <main className='flex flex-col w-full h-full'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
