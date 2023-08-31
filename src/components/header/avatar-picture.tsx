'use client';

import Image from 'next/image';
import { UserCircle2 } from 'lucide-react';
import { SessionProvider } from 'next-auth/react';

import { useAvatarDropdownStore } from '@/store/useUserInterfaceStore';
import AvatarContent from '@/components/header/avatar-content';
import AvatarTooltip from '@/components/header/avatar-tooltip';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function AvatarPicture() {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useAvatarDropdownStore(state => [
    state.isAvatarDropdownOpen,
    state.setIsAvatarDropdownOpen,
  ]);

  return (
    <>
      <SessionProvider>
        <DropdownMenu.Root open={isAvatarDropdownOpen} onOpenChange={setIsAvatarDropdownOpen}>
          <DropdownMenu.Trigger>
            <Avatar.Root
              className='group relative inline-flex h-11 w-11 select-none items-center
            justify-center overflow-hidden rounded-full align-middle'
            >
              {/*<UserCircle2 className='h-[44px] w-[44px] text-primary-lightest' />*/}
              <Image
                src='https://geaux-avatar-icons.nyc3.digitaloceanspaces.com/001-man.png'
                alt='geaux logo'
                priority
                width={500}
                height={500}
                className='h-[40px] w-[40px]'
              />
              <AvatarTooltip />
            </Avatar.Root>
          </DropdownMenu.Trigger>

          <AvatarContent />
        </DropdownMenu.Root>
      </SessionProvider>
    </>
  );
}
