import Link from 'next/link';

import SeparatorHorizontal from '@/components/ui/separator-horizontal';
import GoogleSignInButton from '@/components/auth/google-sign-in-button';
import SignInForm from '@/components/auth/sign-in-form';

export default async function SignInPage() {
  return (
    <>
      <main className='flex h-[100dvh] max-h-[100dvh] min-h-[100dvh] flex-col'>
        <section className='relative flex flex-1 flex-col items-center'>
          <div className='mt-8 flex w-[90%] max-w-md flex-col items-center'>
            <div className='flex w-full flex-col gap-2'>
              <span className='text-slate-12 text-[35px] font-bold'>Sign In</span>
              <span className='text-slate-11 whitespace-nowrap text-[18px]'>Welcome back! Sign in to continue</span>
            </div>

            <div
              className='relative  flex w-full flex-col items-center justify-between
                gap-4 overflow-hidden rounded-md px-1 py-5'
            >
              <div className='flex w-full flex-col items-center'>
                <SignInForm />

                <div className='my-4 flex w-[80%] flex-row items-center gap-5'>
                  <SeparatorHorizontal />
                  <span className='text-slate-11 whitespace-nowrap'>Or sign in with</span>
                  <SeparatorHorizontal />
                </div>

                <GoogleSignInButton />
              </div>

              <div className='flex w-full justify-center gap-1 py-5'>
                <span className='text-slate-11'>Don&apos;t have an account?</span>
                <Link href='sign-up' className='text-pink-12 font-medium underline underline-offset-2'>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
