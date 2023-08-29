'use client';

import { FC, FormEvent, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

import * as Form from '@radix-ui/react-form';

type UserDetails = {
  email: string;
  password: string;
};

const SignInForm: FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({ email: '', password: '' });
  const [error, setError] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = userDetails.email;
    const password = userDetails.password;

    const result = await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/',
    });

    if (result?.error === 'CredentialsSignin') {
      return setError('invalid email or password');
    }

    if (result?.error) {
      setError(result?.error || 'Something went wrong');
    }
  };

  return (
    <>
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

        <span className='text-fs-300 text-red9 '>{error}</span>

        <Form.Submit asChild>
          <button
            type='submit'
            className='text-slate-12 shadow-slate-3 box-border inline-flex h-[40px] w-full items-center
            justify-center rounded-strong bg-accent-dark px-[15px] font-medium leading-none hover:bg-accent-darker
            focus:shadow-black focus:outline-none'
          >
            Sign in
          </button>
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default SignInForm;
