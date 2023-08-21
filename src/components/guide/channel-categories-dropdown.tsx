'use client';

import { useState } from 'react';
import { data } from '@/database';

import Button from '@/components/ui/button';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const CHANNEL_CATEGORIES = [...Object.keys(data).map(channel => channel), 'Favorites'];
const TV_DATA = Object.entries(data);

const ChannelCategoriesDropdown = () => {
  const [isChannelCategoriesDropdownOpen, setIsChannelCategoriesDropdownOpen] = useState<boolean>();
  return (
    <>
      <DropdownMenu.Root open={isChannelCategoriesDropdownOpen} onOpenChange={setIsChannelCategoriesDropdownOpen}>
        <DropdownMenu.Trigger asChild>
          <button className={'w-full mt-3 bg-slate-1 border-2 border-slate-3 rounded-round'}>
            <span>Channels</span>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align='center'
          className='bg-slate-1 border-2 border-slate-3 rounded-md flex flex-col p-2.5
          will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade'
        >
          <DropdownMenu.Item className='w-full rounded-md'>
            {CHANNEL_CATEGORIES.map(category => {
              return <Button key={category}>{category}</Button>;
            })}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default ChannelCategoriesDropdown;
