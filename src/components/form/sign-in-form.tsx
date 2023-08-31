'use client';

import { FC, FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthErrorCodes } from '@/util/constants/authError';
import { AlertCircle } from 'lucide-react';
import { signIn } from 'next-auth/react';

import { useMountedStore } from '@/store/useMountedStore';
import * as Form from '@radix-ui/react-form';

type SignInUserDetails = {
  email: string;
  password: string;
};

const SignInForm: FC = () => {
  const router = useRouter();
  const [setIsMounted] = useMountedStore(state => [state.setIsMounted]);
  const [userDetails, setUserDetails] = useState<SignInUserDetails>({ email: '', password: '' });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const email = userDetails.email;
    const password = userDetails.password;

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    });

    if (result?.error === AuthErrorCodes.NO_USER_FOUND) {
      setIsLoading(false);
      setError('Sorry we could not find an account with that email');
      return;
    }

    if (result?.error === AuthErrorCodes.INVALID_PASSWORD) {
      setIsLoading(false);
      setError('Incorrect password');
      return;
    }

    setTimeout(() => setIsLoading(false), 500);

    router.replace('/');
    setIsMounted(false); // This enables the loading screen to appear before displaying the player.
  };

  useEffect(() => {
    const handleDocumentClick = () => error && setError('');
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [error]);

  return (
    <>
      {error && (
        <div className='mb-[24px] flex w-full items-center gap-2 rounded-weak bg-red6 px-3 py-4'>
          <AlertCircle className='text-fs-300 text-primary-lighter' />
          <span className='text-fs-300 text-primary-lighter'>{error}</span>
        </div>
      )}

      <Form.Root className='flex w-full flex-col items-center' onSubmit={handleSubmit}>
        <Form.Field className='mb-[10px] grid w-full' name='email'>
          <Form.Control asChild>
            <input
              className='selection:color-slate10 box-border inline-flex h-[35px] w-full appearance-none items-center
              justify-center rounded-md bg-slate1 px-[10px] text-[16px] leading-none text-slate11 shadow-[0_0_0_1px]
              shadow-slate5 outline-none hover:shadow-[0_0_0_1px_gray] focus:shadow-[0_0_0_2px_lightgray]'
              type='email'
              placeholder='Email address'
              required
              onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
            />
          </Form.Control>
          <div className='flex items-baseline justify-between'>
            <Form.Message className='text-fs-300 text-red9' match='valueMissing'>
              Please enter your email
            </Form.Message>
            <Form.Message className='text-fs-300 text-red9' match='typeMismatch'>
              Please provide a valid email
            </Form.Message>
            <Form.Label className='text-slate-12 invisible select-none text-[14px] leading-[35px]'>Email</Form.Label>
          </div>
        </Form.Field>

        <Form.Field className='mb-[10px] grid w-full' name='password'>
          <Form.Control asChild>
            <input
              className='selection:color-slate10 box-border inline-flex h-[35px] w-full appearance-none items-center
              justify-center rounded-md bg-slate1 px-[10px] text-[16px] leading-none text-slate11 shadow-[0_0_0_1px]
              shadow-slate5 outline-none hover:shadow-[0_0_0_1px_gray] focus:shadow-[0_0_0_2px_lightgray]'
              type='password'
              placeholder='Password'
              required
              autoComplete='off'
              onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
            />
          </Form.Control>
          <div className='flex items-baseline justify-between'>
            <Form.Message className='text-fs-300 text-red9' match='valueMissing'>
              Please enter your password
            </Form.Message>
            <Form.Label className='text-slate-12 invisible select-none text-[14px] leading-[35px]'>Password</Form.Label>
          </div>
        </Form.Field>

        <div className='mb-[10px] flex w-full justify-end'>
          <Link href='/account/forgot-password' className='text-pink-12 text-[14px]'>
            Forgot password?
          </Link>
        </div>

        <Form.Submit asChild>
          <button
            type='submit'
            disabled={isLoading}
            className='text-slate-12 shadow-slate-3 box-border inline-flex h-[40px] w-full items-center
            justify-center rounded-strong bg-accent-dark px-[15px] font-medium leading-none hover:bg-accent-darker
            focus:shadow-black focus:outline-none'
          >
            {isLoading ? (
              <svg className='h-8 w-8 animate-rotate text-accent-lightest' viewBox='0 0 50 50'>
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
              'Sign in'
            )}
          </button>
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default SignInForm;
