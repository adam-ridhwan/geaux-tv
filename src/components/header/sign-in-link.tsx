import Link from 'next/link';
import { LogIn as LoginIcon } from 'lucide-react';

import { useAvatarDropdownStore } from '@/store/useUserInterfaceStore';

const SignInLink = () => {
  const [closeAvatarDropdown] = useAvatarDropdownStore(state => [state.closeAvatarDropdown]);

  return (
    <>
      <Link
        href='/sign-in'
        onClick={closeAvatarDropdown}
        className='flex h-full w-full items-center gap-2 rounded-weak px-3
        py-2 text-left hover:bg-accent-dark hover:text-accent-lightest'
      >
        <span>
          <LoginIcon size={20} color='#fff' />
        </span>
        <span>Sign in</span>
      </Link>
    </>
  );
};

export default SignInLink;
