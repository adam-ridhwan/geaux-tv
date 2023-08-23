'use client';

import { FC, FormEvent, useState } from 'react';
import Link from 'next/link';

import * as Form from '@radix-ui/react-form';

type UserDetails = {
  email: string;
  password: string;
};

const SignInForm: FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({ email: '', password: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <>
      <Form.Root className='w-full flex flex-col items-center' onSubmit={handleSubmit}>
        <Form.Field className='grid mb-[10px] w-full' name='email'>
          <Form.Control asChild>
            <input
              className='box-border w-full bg-slate-1 shadow-slate-5 inline-flex h-[35px] appearance-none
              items-center justify-center rounded-md px-[10px] text-[16px] leading-none text-slate-11 shadow-[0_0_0_1px]
              outline-none hover:shadow-[0_0_0_1px_gray] focus:shadow-[0_0_0_2px_lightgray] selection:color-slate-10'
              type='email'
              placeholder='Email address'
              required
              autoComplete='off'
              onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
            />
          </Form.Control>
          <div className='flex items-baseline justify-between'>
            <Form.Message className='text-[14px] text-red-500 opacity-[0.8]' match='valueMissing'>
              Please enter your email
            </Form.Message>
            <Form.Message className='text-[14px] text-red-500 opacity-[0.8]' match='typeMismatch'>
              Please provide a valid email
            </Form.Message>
            <Form.Label className='text-[14px] leading-[35px] text-slate-12 invisible select-none'>Email</Form.Label>
          </div>
        </Form.Field>

        <Form.Field className='grid mb-[10px] w-full' name='password'>
          <Form.Control asChild>
            <input
              className='box-border w-full bg-slate-1 shadow-slate-5 inline-flex h-[35px] appearance-none
              items-center justify-center rounded-md px-[10px] text-[16px] leading-none text-slate-11 shadow-[0_0_0_1px]
              outline-none hover:shadow-[0_0_0_1px_gray] focus:shadow-[0_0_0_2px_lightgray] selection:color-slate-10'
              type='password'
              placeholder='Password'
              required
              autoComplete='off'
              onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
            />
          </Form.Control>
          <div className='flex items-baseline justify-between'>
            <Form.Message className='text-[14px] text-red-500 opacity-[0.8]' match='valueMissing'>
              Please enter your password
            </Form.Message>
            <Form.Label className='text-[14px] leading-[35px] text-slate-12 invisible select-none'>Password</Form.Label>
          </div>
        </Form.Field>

        <div className='w-full mb-[10px] flex justify-end'>
          <Link href='/account/forgot-password' className='text-pink-12 text-[14px]'>
            Forgot password?
          </Link>
        </div>

        <Form.Submit asChild>
          <button
            type='submit'
            className='box-border w-full text-slate-12 shadow-slate-3 hover:bg-mauve3 inline-flex h-[40px]
            items-center justify-center rounded-strong bg-pink-7 px-[15px] font-medium leading-none shadow-[0_2px_10px]
            focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none hover:bg-pink-6'
          >
            Sign in
          </button>
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default SignInForm;
