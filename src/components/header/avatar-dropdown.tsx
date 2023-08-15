'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import Link from 'next/link';
import { useState } from 'react';
import NameEmailTooltip from '@/components/header/name-email-tooltip';

export default function AvatarDropdown() {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);

  const closeAvatarDropdown = () => setIsAvatarDropdownOpen(false);

  return (
    <DropdownMenu.Root open={isAvatarDropdownOpen} onOpenChange={setIsAvatarDropdownOpen}>
      <DropdownMenu.Trigger>
        <Avatar.Root className='group inline-flex items-center justify-center align-middle overflow-hidden select-none w-11 h-11 rounded-full relative'>
          <Avatar.Image
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'
            alt='Avatar Image'
          />

          <NameEmailTooltip />

          <Avatar.Fallback
            className='w-full h-full flex items-center justify-center bg-white text-[purple-3] text-base leading-none font-medium'
            delayMs={600}
          >
            A
          </Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align='end'
        className='w-40 bg-slate-1 border-2 border-slate-3 rounded-md flex flex-col p-2.5
        will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade
        data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'
      >
        <DropdownMenu.Item className='w-full rounded-md'>
          <Link
            href='/'
            onClick={closeAvatarDropdown}
            className='block w-full h-full text-left px-3 py-2 hover:bg-purple-6 rounded-md'
          >
            Player
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item className='w-full rounded-md'>
          <Link
            href='/'
            onClick={closeAvatarDropdown}
            className='block w-full h-full text-left px-3 py-2 hover:bg-purple-6 rounded-md'
          >
            Support
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item className='w-full rounded-md'>
          <Link
            href='/sign-in'
            onClick={closeAvatarDropdown}
            className='block w-full h-full text-left px-3 py-2 hover:bg-purple-6 rounded-md'
          >
            Sign In
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Separator className='h-[2px] bg-slate-3 my-1.5' />

        <DropdownMenu.Item className='w-full rounded-md'>
          <button className='block w-full h-full text-left px-3 py-2 hover:bg-purple-6 rounded-md'>Log Out</button>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
