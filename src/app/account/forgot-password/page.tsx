'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { wait } from '@/utils/wait';

import * as Form from '@radix-ui/react-form';

function ForgotPassword() {
  const [email, setEmail] = useState('adamridhwan.1@gmail.com');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const [, data] = (await Promise.all([wait(1000), await response.json()])) as [void, Record<string, string> | null];

    console.log('forgot password page', data?.message);
  };

  return (
    <section className='mx-8 mt-5 flex flex-col gap-6'>
      <div className='flex flex-col'>
        <span className='text-fs-600'>Forgot password?</span>
        <span className='text-fs-200'>Reset your password by entering your email</span>
      </div>

      <Form.Root className='flex w-full flex-col items-center' onSubmit={handleSubmit}>
        <Form.Field className='mb-[10px] grid w-full' name='email'>
          <Form.Control asChild>
            <input
              className='selection:color-slate10 box-border inline-flex h-[52px] w-full appearance-none items-center
              justify-center rounded-md bg-slate1 px-[10px] text-[16px] leading-none text-slate11 shadow-[0_0_0_1px]
              shadow-slate5 outline-none hover:shadow-[0_0_0_1px_gray] focus:shadow-[0_0_0_2px_lightgray]'
              type='email'
              placeholder='Email address'
              required
              onChange={e => setEmail(e.target.value)}
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

        <Form.Submit asChild>
          <button
            type='submit'
            disabled={isLoading}
            className={cn(
              `text-slate-12 shadow-slate-3 box-border inline-flex h-[52px] w-full items-center justify-center 
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
              'Submit'
            )}
          </button>
        </Form.Submit>
      </Form.Root>
    </section>
  );
}

export default ForgotPassword;
