'use client';

import { FC, useState } from 'react';
import useWindowSize, { MOBILE } from '@/utils/useWindowSize';

import { useTvStore } from '@/store/useTvStore';
import ButtonPrimary from '@/components/ui/button-primary';
import ButtonSecondary from '@/components/ui/button-secondary';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type categoriesDropdownProps = {
  scrollToCategory: (channelIndex: string) => void;
};

const CategoriesDropdown: FC<categoriesDropdownProps> = ({ scrollToCategory }) => {
  const [channelCategories] = useTvStore(state => [state.channelCategories]);
  const [isChannelCategoriesDropdownOpen, setIsChannelCategoriesDropdownOpen] = useState<boolean>();
  const currentDevice = useWindowSize();

  if (currentDevice !== MOBILE) return;

  return (
    <>
      <DropdownMenu.Root open={isChannelCategoriesDropdownOpen} onOpenChange={setIsChannelCategoriesDropdownOpen}>
        <DropdownMenu.Trigger asChild>
          <ButtonPrimary isActive={isChannelCategoriesDropdownOpen} className='min-h-[40px] w-[95%] bg-primary-darkest'>
            <span>Categories</span>
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
              {channelCategories.map(category => {
                return (
                  <ButtonSecondary key={category} onClick={() => scrollToCategory(category)}>
                    {category}
                  </ButtonSecondary>
                );
              })}
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

export default CategoriesDropdown;
