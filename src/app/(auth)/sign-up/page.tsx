import Link from 'next/link';

import SeparatorHorizontal from '@/components/ui/separator-horizontal';
import GoogleSignInButton from '@/components/auth/google-sign-in-button';
import SignUpForm from '@/components/auth/sign-up-form';

export default function SignUpPage() {
  return (
    <>
      <main className='flex h-[100dvh] max-h-[100dvh] min-h-[100dvh] flex-col'>
        <section className='relative flex flex-1 flex-col items-center'>
          <div className='mt-8 flex w-[90%] max-w-md flex-col items-center'>
            <div className='flex w-full flex-col gap-2'>
              <span className='text-slate-12 text-[35px] font-bold'>Sign Up</span>
              <span className='text-slate-11 whitespace-nowrap text-[18px]'>
                Free TV that connects with the real you
              </span>
            </div>

            <div
              className='relative mt-5 flex w-full flex-col items-center justify-between
              gap-4 overflow-hidden rounded-md px-1 py-5'
            >
              <div className='flex w-full flex-col items-center'>
                <SignUpForm />

                <div className='my-4 flex w-[80%] flex-row items-center gap-5'>
                  <SeparatorHorizontal />
                  <span className='text-slate-11 whitespace-nowrap'>Or sign in with</span>
                  <SeparatorHorizontal />
                </div>

                <GoogleSignInButton />
              </div>

              <div className='flex w-full justify-center gap-1 py-5'>
                <span className='text-slate-11'>Already have an account?</span>
                <Link href='/sign-in' className='text-pink-12 font-medium underline underline-offset-2'>
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
