'use client';

import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';
import AvatarPicture from '@/components/header/avatar/avatar-picture';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='py-2 px-4'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <button className='cursor-pointer'>
            <Bars3Icon className='h-6 w-6 text-slate-200 mr-3' />
          </button>

          <Link href='/'>
            <Image
              src='/images/geauxlogo.png'
              alt='geaux logo'
              priority
              width={500}
              height={500}
              style={{ width: '120px' }}
            />
          </Link>
        </div>

        <AvatarPicture />
      </div>
    </header>
  );
}
