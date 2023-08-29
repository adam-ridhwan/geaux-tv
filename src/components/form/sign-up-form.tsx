'use client';

import { FC, FormEvent, useState } from 'react';
import { isValidName } from '@/util/isValidName';

import * as Form from '@radix-ui/react-form';

type UserDetails = {
  name: string;
  email: string;
  password: string;
};

const SignUpForm: FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({ name: '', email: '', password: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
  };

  return (
    <>
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
              autoComplete='off'
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
              autoComplete='off'
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
            className='text-slate-12 shadow-slate-3 box-border inline-flex h-[40px] w-full items-center
            justify-center rounded-strong bg-accent-dark px-[15px] font-medium leading-none hover:bg-accent-darker
            focus:shadow-black focus:outline-none'
          >
            Sign up
          </button>
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default SignUpForm;
