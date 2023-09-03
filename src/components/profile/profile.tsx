'use client';

import { FC } from 'react';
import Image from 'next/image';
import { ChevronRight, Mail, Smartphone, SquareAsterisk, User } from 'lucide-react';

import HorizontalSeparator from '@/components/ui/horizontal-separator';
import * as Avatar from '@radix-ui/react-avatar';

type ProfileProps = {
  userDetails: Pick<User, 'name' | 'email' | 'phone' | 'photoUrl'>;
};

const Profile: FC<ProfileProps> = ({ userDetails }) => {
  const { name, email, phone, photoUrl } = userDetails;

  return (
    <>
      <div className='mb-5 flex flex-row items-center gap-4 text-fs-400'>
        <Avatar.Root>
          <Image
            src={photoUrl || 'https://geaux-avatar-icons.nyc3.digitaloceanspaces.com/001-man.png'}
            alt='geaux logo'
            priority
            width={500}
            height={500}
            className='h-[72px] w-[72px]'
          />
        </Avatar.Root>
        <button className='h-10 rounded-strong border border-primary-dark px-5 font-medium'>
          Change profile picture
        </button>
      </div>

      <div className='flex flex-col text-fs-400'>
        <button className='flex h-[88px] flex-row items-center gap-4 text-left'>
          <User className='text-primary-lighter' />
          <div className='flex flex-col'>
            <span className='text-primary-light'>Name</span>
            <span className='text-primary-lightest'>{name}</span>
          </div>
          <ChevronRight className='ml-auto text-primary-lighter' />
        </button>

        <HorizontalSeparator className='my-0' />

        <button className='flex h-[88px] flex-row items-center gap-4 text-left'>
          <Mail className='text-primary-lighter' />
          <div className='flex flex-col'>
            <span className='text-primary-light'>Email</span>
            <span className='pointer-events-none select-text text-primary-lightest no-underline'>{email}</span>
          </div>
          <ChevronRight className='ml-auto text-primary-lighter' />
        </button>

        <HorizontalSeparator className='my-0' />

        <button className='flex h-[88px] flex-row items-center gap-4 text-left'>
          <Smartphone className='text-primary-lighter' />
          <div className='flex flex-col'>
            <span className='text-primary-light'>Phone</span>
            <span className='text-primary-lightest'>{phone}</span>
          </div>
          <ChevronRight className='ml-auto text-primary-lighter' />
        </button>

        <HorizontalSeparator className='my-0' />

        <button className='flex h-[88px] flex-row items-center gap-4 text-left'>
          <SquareAsterisk className='text-primary-lighter' />
          <span>Change password</span>
          <ChevronRight className='ml-auto text-primary-lighter' />
        </button>
      </div>
    </>
  );
};

export default Profile;
