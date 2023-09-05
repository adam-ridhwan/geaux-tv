'use client';

import { FC, ReactNode, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserCircle2 } from 'lucide-react';
import { useSession } from 'next-auth/react';

import { useAvatarDropdownStore } from '@/store/useUserInterfaceStore';
import AvatarContent from '@/components/header/avatar-content';
import AvatarTooltip from '@/components/header/avatar-tooltip';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type AvatarPictureProps = {
  fetchedPhotoUrl?: string;
};

const AvatarPicture: FC<AvatarPictureProps> = ({ fetchedPhotoUrl }) => {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useAvatarDropdownStore(state => [
    state.isAvatarDropdownOpen,
    state.setIsAvatarDropdownOpen,
  ]);

  const { data: session, status } = useSession();
  const pathname = usePathname();

  /*
   * 1) if there is no user and page is in sign-in or sign-up page, don't show the avatar
   * 2) if the there is no user and page is in any other page, show the empty user avatar
   * 3) if there is a user and page is in sign-in or sign-up page, show the user's avatar
   */
  if (status === 'loading') return null;
  if (session === null && ['/sign-in', '/sign-up'].includes(pathname)) return null;
  if (['/sign-in', '/sign-up', '/account/profile'].includes(pathname) && status === 'authenticated') return null;

  return (
    <DropdownMenu.Root open={isAvatarDropdownOpen} onOpenChange={setIsAvatarDropdownOpen}>
      <DropdownMenu.Trigger>
        <Avatar.Root
          className='group relative inline-flex h-11 w-11 select-none items-center
          justify-center overflow-hidden align-middle'
        >
          {session ? (
            <Image
              src={fetchedPhotoUrl || 'https://geaux-avatar-icons.nyc3.digitaloceanspaces.com/001-man.png'}
              alt='geaux logo'
              priority
              width={500}
              height={500}
              className='h-[40px] w-[40px] rounded-full'
            />
          ) : (
            <UserCircle2 className='h-[32px] w-[32px] text-primary-light hover:text-primary-lighter' />
          )}

          <AvatarTooltip />
        </Avatar.Root>
      </DropdownMenu.Trigger>

      <AvatarContent />
    </DropdownMenu.Root>
  );
};

export default AvatarPicture;
