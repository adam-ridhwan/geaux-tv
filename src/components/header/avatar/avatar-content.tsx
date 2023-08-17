import { FC } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { HeartHandshakeIcon, LogIn as LoginIcon, UserCircle2 as AvatarIcon } from 'lucide-react';
import TranslateDropdown from '@/components/header/translate/translate-dropdown';
import { useAvatarDropdownStore } from '@/store/useOverlayStore';

const AvatarContent: FC = () => {
  const { closeAvatarDropdown } = useAvatarDropdownStore();

  return (
    <>
      <DropdownMenu.Content
        align='end'
        className='w-40 bg-slate-1 border-2 border-slate-3 rounded-md flex flex-col p-2.5
          will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade'
        onInteractOutside={closeAvatarDropdown}
      >
        <DropdownMenu.Item className='w-full rounded-md'>
          <Link
            href='/profile'
            onClick={closeAvatarDropdown}
            className='w-full h-full text-left px-3 py-2 hover:bg-pink-6 hover:text-pink-12 rounded-md flex items-center gap-2'
          >
            <span>
              <AvatarIcon size={20} color='#fff' />
            </span>
            <span>Profile</span>
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item className='w-full rounded-md'>
          <Link
            href='/'
            onClick={closeAvatarDropdown}
            className='w-full h-full text-left px-3 py-2 hover:bg-pink-6 hover:text-pink-12 rounded-md flex items-center gap-2'
          >
            <span>
              <HeartHandshakeIcon size={20} color='#fff' />
            </span>
            <span>Support</span>
          </Link>
        </DropdownMenu.Item>

        <TranslateDropdown />

        <DropdownMenu.Separator className='h-[2px] bg-slate-3 my-1.5' />

        <DropdownMenu.Item className='w-full rounded-md'>
          <button className='w-full h-full text-left px-3 py-2 hover:bg-pink-6 hover:text-pink-12 rounded-md flex items-center gap-2'>
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
