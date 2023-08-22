'use client';

import { FC, useState } from 'react';
import useWindowSize, { MOBILE } from '@/util/useWindowSize';

import { Channels, useTvStore } from '@/store/useTvStore';
import ButtonPrimary from '@/components/ui/button-primary';
import Button from '@/components/ui/button-secondary';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type Props = {
  data: Channels;
  CHANNEL_CATEGORIES: string[];
};

const ChannelCategoriesDropdown: FC<Props> = ({ data, CHANNEL_CATEGORIES }) => {
  const [channels, setChannels] = useTvStore(state => [state.channels, state.setChannels]);
  const [isChannelCategoriesDropdownOpen, setIsChannelCategoriesDropdownOpen] = useState<boolean>();
  const currentDevice = useWindowSize();

  if (data && data !== channels) setChannels(data); // Set channels in global store

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
        className='bg-primary-darkest border-2 border-primary-light rounded-weak flex flex-col p-2.5
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
