'use client';

import { useRouter } from 'next/navigation';
import { LogIn as LoginIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';

import { useAvatarDropdownStore, useLogOutToastStore } from '@/store/useUserInterfaceStore';

const SignOutButton = () => {
  const [openLogOutToast, closeLogOutToast] = useLogOutToastStore(state => [
    state.openLogOutToast,
    state.closeLogOutToast,
  ]);
  const [closeAvatarDropdown] = useAvatarDropdownStore(state => [state.closeAvatarDropdown]);

  return (
    <button
      onClick={() => {
        signOut({ redirect: false }).then(() => {
          openLogOutToast();
          setTimeout(() => closeLogOutToast(), 5000);
          closeAvatarDropdown();
        });
      }}
      className='flex w-full items-center gap-2 rounded-weak px-3 py-2 text-left hover:bg-red6
        hover:text-accent-lightest'
    >
      <span>
        <LoginIcon size={20} color='#fff' />
      </span>
      <span>Sign out</span>
    </button>
  );
};

export default SignOutButton;
