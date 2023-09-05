'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

const GoogleButton = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session && session.user) {
      router.replace('/');
      setIsLoading(false);
    }
  }, [router, session]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await signIn('google', { callbackUrl: '/', redirect: false });
  };

  return (
    <>
      <div className='flex w-[80%] flex-col items-center justify-center gap-5'>
        <button
          className='text-slate-12 flex h-[40px] w-full items-center justify-center rounded-strong bg-red7'
          onClick={handleGoogleSignIn}
        >
          {isLoading ? (
            <svg className='h-8 w-8 animate-rotate text-center ' viewBox='0 0 50 50'>
              <circle
                className='animate-dash stroke-accent-lightest'
                cx='25'
                cy='25'
                r='20'
                fill='none'
                strokeWidth='4'
              ></circle>
            </svg>
          ) : (
            'Sign in with Google'
          )}
        </button>
      </div>
    </>
  );
};

export default GoogleButton;
