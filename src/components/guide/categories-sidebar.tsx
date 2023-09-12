'use client';

import { FC } from 'react';
import useWindowSize, { DESKTOP, MOBILE, TABLET } from '@/utils/useWindowSize';

import { useTvStore } from '@/store/useTvStore';
import ButtonSecondary from '@/components/ui/button-secondary';
import SignOutButton from '@/components/header/sign-out-button';

type categoriesSidebarProps = {
  scrollToCategory: (channelIndex: string) => void;
};

const CategoriesSidebar: FC<categoriesSidebarProps> = ({ scrollToCategory }) => {
  const [channelCategories] = useTvStore(state => [state.channelCategories]);
  const currentDevice = useWindowSize();

  return (
    <>
      {currentDevice !== MOBILE &&
        channelCategories.map(category => (
          <ButtonSecondary
            key={category}
            onClick={() => scrollToCategory(category)}
            className='flex h-[45px] min-h-[45px] whitespace-nowrap rounded-[40px] font-bold
            hover:bg-accent-darker hover:text-white'
          >
            {category}
          </ButtonSecondary>
        ))}
    </>
  );
};

export default CategoriesSidebar;
