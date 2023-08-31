'use client';

import { FC } from 'react';
import useWindowSize, { DESKTOP, MOBILE, TABLET } from '@/util/useWindowSize';

import { useTvStore } from '@/store/useTvStore';
import ButtonSecondary from '@/components/ui/button-secondary';
import SignOutButton from '@/components/header/sign-out-button';

const ChannelCategoriesDropdown: FC = () => {
  const [channelCategories] = useTvStore(state => [state.channelCategories]);
  const currentDevice = useWindowSize();

  if (currentDevice === MOBILE) return;

  return (
    <>
      {channelCategories.map(category => {
        return (
          <ButtonSecondary key={category} className='flex h-[45px] min-h-[45px] whitespace-nowrap'>
            {category}
          </ButtonSecondary>
        );
      })}
    </>
  );
};

export default ChannelCategoriesDropdown;
