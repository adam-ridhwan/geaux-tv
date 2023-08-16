'use client';

import * as Form from '@radix-ui/react-form';
import Link from 'next/link';
import { FC, FormEvent, useState } from 'react';
import { isValidName } from '@/lib/isValidName';

interface UserDetails {
  name: string;
  email: string;
  password: string;
}

const SignUpForm: FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({ name: '', email: '', password: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <>
      <Form.Root className='w-[80%] my-3' onSubmit={handleSubmit}>
        <Form.Field className='grid mb-[10px]' name='name'>
          <div className='flex items-baseline justify-between'>
            <Form.Label className='text-[14px] leading-[35px] text-slate-12'>Name</Form.Label>
            <Form.Message className='text-[12px] text-red-500 opacity-[0.8]' match='valueMissing'>
              Please enter your name
            </Form.Message>
            <Form.Message className='text-[12px] text-red-500 opacity-[0.8]' match={data => !isValidName(data)}>
              Invalid characters
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className='box-border w-full bg-slate-1 shadow-slate-5 inline-flex h-[35px] appearance-none
              items-center justify-center rounded-md px-[10px] text-[16px] leading-none text-slate-11 shadow-[0_0_0_1px]
              outline-none hover:shadow-[0_0_0_1px_gray] focus:shadow-[0_0_0_2px_lightgray] selection:color-slate-10'
              type='name'
              placeholder='Enter your name'
              required
              autoComplete='off'
              onChange={e => setUserDetails({ ...userDetails, name: e.target.value })}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className='grid mb-[10px]' name='email'>
          <div className='flex items-baseline justify-between'>
            <Form.Label className='text-[14px] leading-[35px] text-slate-12'>Email</Form.Label>
            <Form.Message className='text-[12px] text-red-500 opacity-[0.8]' match='valueMissing'>
              Please enter your email
            </Form.Message>
            <Form.Message className='text-[12px] text-red-500 opacity-[0.8]' match='typeMismatch'>
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className='box-border w-full bg-slate-1 shadow-slate-5 inline-flex h-[35px] appearance-none
              items-center justify-center rounded-md px-[10px] text-[16px] leading-none text-slate-11 shadow-[0_0_0_1px]
              outline-none hover:shadow-[0_0_0_1px_gray] focus:shadow-[0_0_0_2px_lightgray] selection:color-slate-10'
              type='email'
              placeholder='Enter your email'
              required
              autoComplete='off'
              onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field className='grid mb-[10px]' name='password'>
          <div className='flex items-baseline justify-between'>
            <Form.Label className='text-[15px] font-medium leading-[35px] text-white'>Password</Form.Label>
            <Form.Message className='text-[12px] text-red-500 opacity-[0.8]' match='valueMissing'>
              Please enter your password
            </Form.Message>
            <Form.Message className='text-[12px] text-red-500 opacity-[0.8]' match='typeMismatch'>
              Please provide a valid password
            </Form.Message>
            <Form.Message
              className='text-[12px] text-red-500 opacity-[0.8] text-right'
              match={value => value.length < 6 || value.length > 20}
            >
              Password should be between 6 and 20 characters
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className='box-border w-full bg-slate-1 shadow-slate-5 inline-flex h-[35px] appearance-none
              items-center justify-center rounded-md px-[10px] text-[16px] leading-none text-slate-11 shadow-[0_0_0_1px]
              outline-none hover:shadow-[0_0_0_1px_gray] focus:shadow-[0_0_0_2px_lightgray] selection:color-slate-10'
              type='password'
              placeholder='Enter your password'
              required
              autoComplete='off'
              onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
            />
          </Form.Control>
        </Form.Field>

        <div className='w-full flex justify-end'>
          <Link href='/forgot-password' className='text-[13px] text-slate-12'>
            Forgot password?
          </Link>
        </div>

        <Form.Submit asChild>
          <button
            type='submit'
            className='box-border w-full text-slate-12 shadow-slate-3 hover:bg-mauve3 inline-flex h-[40px]
            items-center justify-center rounded-round bg-pink-7 px-[15px] font-medium leading-none shadow-[0_2px_10px]
            focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[20px] hover:bg-pink-6'
          >
            Sign up
          </button>
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default SignUpForm;
