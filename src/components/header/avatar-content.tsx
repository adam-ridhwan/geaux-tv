import { FC } from 'react';
import Link from 'next/link';
import { UserCircle2 as AvatarIcon, HeartHandshakeIcon, LogIn as LoginIcon } from 'lucide-react';
import { getSession, signOut, useSession } from 'next-auth/react';

import { useAvatarDropdownStore } from '@/store/useUserInterfaceStore';
import SignInLink from '@/components/header/sign-in-link';
import SignOutButton from '@/components/header/sign-out-button';
import TranslateDropdown from '@/components/header/translate-dropdown';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const AvatarContent: FC = () => {
  const [closeAvatarDropdown] = useAvatarDropdownStore(state => [state.closeAvatarDropdown]);

  const { data: session } = useSession();

  return (
    <>
      <DropdownMenu.Content
        align='end'
        sideOffset={5}
        className='z-40 flex w-40 flex-col rounded-weak border-2 border-primary-dark bg-primary-darkest
        p-2.5 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade'
        onInteractOutside={closeAvatarDropdown}
      >
        <DropdownMenu.Item className='w-full rounded-weak'>
          <Link
            href='/account/profile'
            onClick={closeAvatarDropdown}
            className='flex h-full w-full items-center gap-2 rounded-weak px-3
            py-2 text-left hover:bg-accent-dark hover:text-accent-lightest'
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
            className='flex h-full w-full items-center gap-2 rounded-weak px-3
            py-2 text-left hover:bg-accent-dark hover:text-accent-lightest'
          >
            <span>
              <HeartHandshakeIcon size={20} color='#fff' />
            </span>
            <span>Support</span>
          </Link>
        </DropdownMenu.Item>

        {/* TRANSLATE DROPDOWN*/}
        {/*<TranslateDropdown />*/}

        <DropdownMenu.Separator className='my-2 h-[2px] bg-primary-dark' />

        <DropdownMenu.Item className='w-full rounded-weak' onSelect={e => e.preventDefault()}>
          {session ? <SignOutButton /> : <SignInLink />}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </>
  );
};

export default AvatarContent;
