import { getServerSession } from 'next-auth';

import { getUser } from '@/lib/user/getUser';
import Profile from '@/components/profile/profile';

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session || !session.user || !session.user.email) return <div>Failed to get session or user email</div>;

  const user = await getUser(session.user.email);

  if (!user) return <div>Failed to get user</div>;

  const { password, ...userWithoutPassword } = user;

  return (
    <>
      <div className='mx-5 my-3 flex flex-col'>
        <span className='mb-10 text-fs-600'>Manage your profile</span>
        <Profile {...{ userWithoutPassword }} />
      </div>
    </>
  );
}
