'use client';

import Image from 'next/image';
import { UserCircle2 } from 'lucide-react';

import { useAvatarDropdownStore } from '@/store/useOverlayStore';
import AvatarContent from '@/components/header/avatar/avatar-content';
import AvatarTooltip from '@/components/header/avatar/avatar-tooltip';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function AvatarPicture() {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useAvatarDropdownStore(state => [
    state.isAvatarDropdownOpen,
    state.setIsAvatarDropdownOpen,
  ]);

  return (
    <>
      <DropdownMenu.Root open={isAvatarDropdownOpen} onOpenChange={setIsAvatarDropdownOpen}>
        <DropdownMenu.Trigger>
          <Avatar.Root
            className='group inline-flex items-center justify-center align-middle overflow-hidden select-none
            w-11 h-11 rounded-full relative'
          >
            {/*<UserCircle2 className='h-[44px] w-[44px] text-primary-lightest' />*/}
            <Image
              src='https://geaux-avatar-icons.nyc3.digitaloceanspaces.com/001-man.png'
              alt='geaux logo'
              priority
              width={500}
              height={500}
              className='w-[40px] h-[40px]'
            />
            <AvatarTooltip />
          </Avatar.Root>
        </DropdownMenu.Trigger>

        <AvatarContent />
      </DropdownMenu.Root>
    </>
  );
}
