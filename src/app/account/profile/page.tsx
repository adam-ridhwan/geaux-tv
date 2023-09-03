import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getServerSession } from 'next-auth';

import { getUser } from '@/lib/user/getUser';
import Profile from '@/components/profile/profile';

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session || !session.user || !session.user.email)
    return <div>Failed to get session or user email at profile page</div>;

  const user = await getUser(session.user.email);

  if (!user) return <div>Failed to get user</div>;

  const userDetails = {
    email: user.email,
    name: user.name,
    phone: user.phone,
    photoUrl: user.photoUrl,
  };

  return (
    <>
      <div className='mx-5 my-3 flex flex-col'>
        <Link href='/' className='flex w-fit flex-row items-center text-primary-lighter'>
          <ArrowLeft className='h-5 w-5' />
          <span>back to player</span>
        </Link>
        <span className='my-10 text-fs-600'>Manage your profile</span>
        <Profile {...{ userDetails }} />
      </div>
    </>
  );
}
