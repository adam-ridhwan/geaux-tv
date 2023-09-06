'use client';

import { FC, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types';
import { cn } from '@/util/cn';
import { isValidName } from '@/util/isValidName';
import { wait } from '@/util/wait';
import { AlertCircle } from 'lucide-react';
import { signIn } from 'next-auth/react';

import { useMountedStore } from '@/store/useMountedStore';
import { createUser } from '@/lib/user/createUser';
import { getUser } from '@/lib/user/getUser';
import * as Form from '@radix-ui/react-form';

type UserDetails = {
  name: string;
  email: string;
  password: string;
};

const SignUpForm: FC = () => {
  const router = useRouter();
  const [setIsMounted] = useMountedStore(state => [state.setIsMounted]);
  const [userDetails, setUserDetails] = useState<UserDetails>({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const { name, email, password } = userDetails;

    const [, user] = (await Promise.all([wait(1000), getUser(userDetails.email)])) as [void, User | null];

    if (user) {
      setError('An account with that email already exists');
      setIsLoading(false);
      return;
    }

    const newUser: User = {
      email,
      name,
      password,
      provider: 'credentials',
      emailVerified: false,
      createdAt: new Date(),
      lastLogin: new Date(),
      updatedAt: new Date(),
    };

    await createUser(newUser);

    await signIn('credentials', {
      email,
      password,
      redirect: true, // refreshes the page so that profile picture on header updates
      callbackUrl: '/',
    });

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
        <Form.Field className='mb-[10px] grid  w-full' name='name'>
          <Form.Control asChild>
            <input
              className='selection:color-slate10 box-border inline-flex h-[35px] w-full appearance-none items-center
              justify-center rounded-md bg-slate1 px-[10px] text-[16px] leading-none text-slate11 shadow-[0_0_0_1px]
              shadow-slate5 outline-none hover:shadow-[0_0_0_1px_gray] focus:shadow-[0_0_0_2px_lightgray]'
              type='name'
              placeholder='Name'
              required
              onChange={e => setUserDetails({ ...userDetails, name: e.target.value })}
            />
          </Form.Control>
          <div className='flex items-baseline justify-between'>
            <Form.Message className='text-[14px] text-red9 opacity-[1]' match='valueMissing'>
              Please enter your name
            </Form.Message>
            <Form.Message className='text-[14px] text-red9 opacity-[1]' match={data => !isValidName(data)}>
              Invalid characters
            </Form.Message>
            <Form.Label className='invisible select-none text-[14px] leading-[35px]'>!</Form.Label>
          </div>
        </Form.Field>

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
            <Form.Message className='text-[14px] text-red9 opacity-[1]' match='valueMissing'>
              Please enter your email
            </Form.Message>
            <Form.Message className='text-[14px] text-red9 opacity-[1]' match='typeMismatch'>
              Please provide a valid email
            </Form.Message>
            <Form.Label className='invisible select-none text-[14px] leading-[35px]'>!</Form.Label>
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
              autoComplete='new-password'
              onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
            />
          </Form.Control>
          <div className='flex max-w-[200px] items-baseline justify-between'>
            <Form.Message className='text-[14px] text-red9 opacity-[1]' match='valueMissing'>
              Please enter your password
            </Form.Message>
            <Form.Message className='text-[14px] text-red9 opacity-[1]' match='typeMismatch'>
              Please provide a valid password
            </Form.Message>
            <Form.Message
              className='whitespace-nowrap text-[14px] text-red9 opacity-[1]'
              match={value => value.length < 6 || value.length > 20}
            >
              <span>Please enter between 6 and 20 characters</span>
            </Form.Message>
            <Form.Label className='invisible select-none text-[14px] leading-[35px]'>!</Form.Label>
          </div>
        </Form.Field>

        <Form.Submit asChild>
          <button
            type='submit'
            className={cn(
              `text-slate-12 shadow-slate-3 box-border inline-flex h-[40px] w-full items-center justify-center 
              rounded-strong bg-accent-dark px-[15px] font-medium leading-none focus:shadow-black focus:outline-none`,
              { 'hover:bg-accent-darker': !isLoading },
              { 'bg-accent-darker': isLoading }
            )}
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
              'Sign up'
            )}
          </button>
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default SignUpForm;
