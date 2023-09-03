import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { getServerSession } from 'next-auth';

import AvatarPicture from '@/components/header/avatar-picture';
import AvatarTooltip from '@/components/header/avatar-tooltip';

export default async function Header() {
  const session = await getServerSession();

  return (
    <header className='px-4 py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-row'>
          <button className='cursor-pointer'>
            <Menu className='text-slate-200 mr-3 h-6 w-6' />
          </button>

          <Link href='/' className='flex flex-row items-center gap-1'>
            <Image
              src='/images/geaux-logo.png'
              alt='geaux logo'
              priority
              width={500}
              height={500}
              className='h-[40px] w-[40px] scale-[1.2] transform'
            />

            <span className='text-fs-300 font-semibold'>GEAUX TV</span>
          </Link>
        </div>

        <AvatarPicture />
      </div>
    </header>
  );
}
