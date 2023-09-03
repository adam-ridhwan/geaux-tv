import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { getServerSession } from 'next-auth';

import { getUser } from '@/lib/user/getUser';
import AvatarPicture from '@/components/header/avatar-picture';

export default async function Header() {
  const session = await getServerSession();

  if (!session || !session.user || !session.user.email) return <div>Failed to get session or user email</div>;

  const user = await getUser(session.user.email);

  if (!user) return <div>Failed to get user</div>;

  let fetchedPhotoUrl;
  const { photoUrl } = user;
  fetchedPhotoUrl = photoUrl;

  return (
    <header className='min-h-[70px] px-4 py-3'>
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

        <AvatarPicture {...{ fetchedPhotoUrl }} />
      </div>
    </header>
  );
}
