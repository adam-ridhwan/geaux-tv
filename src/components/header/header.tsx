import Link from 'next/link';
import Image from 'next/image';
import AvatarPicture from '@/components/header/avatar/avatar-picture';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className='py-3 px-4 z-10'>
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
              className='w-[44px] h-[44px] transform scale-[1.2]'
            />
            <span className='font-medium text-xl'>GEAUX TV</span>
          </Link>
        </div>

        <AvatarPicture />
      </div>
    </header>
  );
}
