'use client';

import { FC, useState } from 'react';
import useWindowSize, { MOBILE } from '@/util/useWindowSize';

import { Channels, useTvStore } from '@/store/useTvStore';
import ButtonPrimary from '@/components/ui/button-primary';
import Button from '@/components/ui/button-secondary';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type ChannelCategoriesDropdownProps = {
  TV_DATA: Channels;
  CHANNEL_CATEGORIES: string[];
};

const ChannelCategoriesDropdown: FC<ChannelCategoriesDropdownProps> = ({ TV_DATA, CHANNEL_CATEGORIES }) => {
  const [channels, setChannels, setCurrentChannel] = useTvStore(state => [
    state.channels,
    state.setChannels,
    state.setCurrentChannel,
  ]);
  const [isChannelCategoriesDropdownOpen, setIsChannelCategoriesDropdownOpen] = useState<boolean>();
  const currentDevice = useWindowSize();

  // Set channels in global store
  if (TV_DATA && TV_DATA !== channels) {
    setChannels(TV_DATA);
    setCurrentChannel(TV_DATA[CHANNEL_CATEGORIES[1]][0]);
  }

  if (currentDevice !== MOBILE) return;

  return (
    <DropdownMenu.Root open={isChannelCategoriesDropdownOpen} onOpenChange={setIsChannelCategoriesDropdownOpen}>
      <DropdownMenu.Trigger asChild>
        <ButtonPrimary isActive={isChannelCategoriesDropdownOpen} className='min-h-[40px] w-[95%] bg-primary-darkest'>
          <span>Channels</span>
        </ButtonPrimary>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='end'
          sideOffset={5}
          alignOffset={15}
          className='z-50 flex flex-col rounded-weak border-2 border-primary-dark bg-primary-darkest
          p-2.5 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade'
        >
          <DropdownMenu.Item className='w-full rounded-weak'>
            {CHANNEL_CATEGORIES.map(category => {
              return <Button key={category}>{category}</Button>;
            })}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ChannelCategoriesDropdown;
