import Image from 'next/image';
import Link from 'next/link';
import { Menu, UserCircle2 } from 'lucide-react';

import AvatarPicture from '@/components/header/avatar/avatar-picture';

export default function Header() {
  return (
    <header className='py-3 px-4'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <button className='cursor-pointer'>
            <Menu className='h-6 w-6 text-slate-200 mr-3' />
          </button>

          <Link href='/' className='flex flex-row items-center gap-1'>
            <Image
              src='/images/geaux-logo.png'
              alt='geaux logo'
              priority
              width={500}
              height={500}
              className='w-[40px] h-[40px] transform scale-[1.2]'
            />

            <span className='font-semibold text-fs-300'>GEAUX TV</span>
          </Link>
        </div>

        <AvatarPicture />
      </div>
    </header>
  );
}
