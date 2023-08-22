'use client';

import { useState } from 'react';
import { data } from '@/database';
import useWindowSize, { MOBILE } from '@/util/useWindowSize';

import ButtonPrimary from '@/components/ui/button-primary';
import Button from '@/components/ui/button-secondary';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const CHANNEL_CATEGORIES = [...Object.keys(data).map(channel => channel), 'Favorites'];
const TV_DATA = Object.entries(data);

const ChannelCategoriesDropdown = () => {
  const [isChannelCategoriesDropdownOpen, setIsChannelCategoriesDropdownOpen] = useState<boolean>();
  const currentDevice = useWindowSize();

  if (currentDevice !== MOBILE) return;

  return (
    <DropdownMenu.Root open={isChannelCategoriesDropdownOpen} onOpenChange={setIsChannelCategoriesDropdownOpen}>
      <DropdownMenu.Trigger asChild>
        <ButtonPrimary isActive={isChannelCategoriesDropdownOpen}>
          <span>Channels</span>
        </ButtonPrimary>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align='end'
        sideOffset={5}
        alignOffset={15}
        className='bg-primary-darkest border-2 border-primary-darker rounded-weak flex flex-col p-2.5
        will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade'
      >
        <DropdownMenu.Item className='w-full rounded-weak'>
          {CHANNEL_CATEGORIES.map(category => {
            return <Button key={category}>{category}</Button>;
          })}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default ChannelCategoriesDropdown;
