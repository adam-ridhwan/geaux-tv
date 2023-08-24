import { FC } from 'react';
import Link from 'next/link';
import { UserCircle2 as AvatarIcon, HeartHandshakeIcon, LogIn as LoginIcon } from 'lucide-react';

import { useAvatarDropdownStore } from '@/store/useOverlayStore';
import HorizontalSeparator from '@/components/ui/horizontal-separator';
import TranslateDropdown from '@/components/header/translate/translate-dropdown';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const AvatarContent: FC = () => {
  const [closeAvatarDropdown] = useAvatarDropdownStore(state => [state.closeAvatarDropdown]);

  return (
    <>
      <DropdownMenu.Content
        align='end'
        sideOffset={5}
        className='w-40 bg-primary-darkest border-2 border-primary-dark rounded-weak flex flex-col p-2.5
        will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade z-40'
        onInteractOutside={closeAvatarDropdown}
      >
        <DropdownMenu.Item className='w-full rounded-weak'>
          <Link
            href='/profile'
            onClick={closeAvatarDropdown}
            className='w-full h-full text-left px-3 py-2 hover:bg-accent-dark hover:text-accent-lightest
            rounded-weak flex items-center gap-2'
          >
            <span>
              <AvatarIcon size={20} color='#fff' />
            </span>
            <span>Profile</span>
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item className='w-full rounded-weak'>
          <Link
            href='/'
            onClick={closeAvatarDropdown}
            className='w-full h-full text-left px-3 py-2 hover:bg-accent-dark hover:text-accent-lightest
            rounded-weak flex items-center gap-2'
          >
            <span>
              <HeartHandshakeIcon size={20} color='#fff' />
            </span>
            <span>Support</span>
          </Link>
        </DropdownMenu.Item>

        {/* TRANSLATE DROPDOWN*/}
        <TranslateDropdown />

        <DropdownMenu.Separator className='h-[2px] bg-primary-dark my-2' />

        <DropdownMenu.Item className='w-full rounded-weak'>
          <button
            className='w-full h-full text-left px-3 py-2 hover:bg-accent-dark hover:text-accent-lightest
            rounded-weak flex items-center gap-2'
          >
            <span>
              <LoginIcon size={20} color='#fff' />
            </span>
            <span>Log in</span>
          </button>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </>
  );
};

export default AvatarContent;
