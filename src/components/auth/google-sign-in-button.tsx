'use client';

import { useEffect, useState } from 'react';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';
import { signIn, useSession } from 'next-auth/react';

import { getUser } from '@/lib/user/getUser';

const GoogleSignInButton = () => {
  const router = useRouter();
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') router.replace('/');
  }, [status, router]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await signIn('google', { callbackUrl: '/', redirect: false });
  };

  return (
    <>
      <div className='flex w-[80%] flex-col items-center justify-center gap-5'>
        <button
          disabled={isLoading}
          onClick={handleGoogleSignIn}
          className={cn(`text-slate-12 flex h-[40px] w-full items-center justify-center rounded-strong bg-red7`, {
            'hover:bg-red6': !isLoading,
            'bg-red6': isLoading,
          })}
        >
          {isLoading ? (
            <svg className='h-8 w-8 animate-rotate text-center' viewBox='0 0 50 50'>
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
            'Google'
          )}
        </button>
      </div>
    </>
  );
};

export default GoogleSignInButton;
