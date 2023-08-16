'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { useState } from 'react';
import AvatarTooltip from '@/components/header/avatar/avatar-tooltip';
import AvatarContent from '@/components/header/avatar/avatar-content';


export default function AvatarPicture() {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState<boolean>(false);

  const closeAvatarDropdown = () => setIsAvatarDropdownOpen(false);

  return (
    <>
      <DropdownMenu.Root open={isAvatarDropdownOpen} onOpenChange={setIsAvatarDropdownOpen}>
        <DropdownMenu.Trigger>
          <Avatar.Root
            className='group inline-flex items-center justify-center align-middle overflow-hidden select-none
            w-11 h-11 rounded-full relative'
          >
            <Avatar.Image
              className='w-full h-full object-cover'
              src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'
              alt='Avatar Image'
            />
            <Avatar.Fallback
              className='w-full h-full flex items-center justify-center bg-white text-[purple-3] text-base leading-none
              font-medium'
              delayMs={600}
            >
              A
            </Avatar.Fallback>

            <AvatarTooltip />
          </Avatar.Root>
        </DropdownMenu.Trigger>

        <AvatarContent closeAvatarDropdown={closeAvatarDropdown} />
      </DropdownMenu.Root>
    </>
  );
}
