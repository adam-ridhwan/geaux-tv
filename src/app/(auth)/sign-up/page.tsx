import Link from 'next/link';

import HorizontalSeparator from '@/components/ui/horizontal-separator';
import SignUpForm from '@/components/form/sign-up-form';
import Header from '@/components/header/header';

export default function SignUpPage() {
  return (
    <>
      <main className='bg-radial-top-right h-[100dvh] max-h-[100dvh] min-h-[100dvh] flex flex-col'>
        <Header />

        <section className='relative flex flex-col items-center flex-1'>
          <div className='flex items-center flex-col mt-8 w-[90%] max-w-md'>
            <div className='flex flex-col w-full gap-2'>
              <span className='text-[35px] text-slate-12 font-bold'>Sign Up</span>
              <span className='text-[18px] text-slate-11 whitespace-nowrap'>
                Free TV that connects with the real you
              </span>
            </div>

            <div
              className='relative w-full overflow-hidden rounded-md mt-5 py-5 px-1
              flex flex-col items-center justify-between gap-4'
            >
              <div className='w-full flex flex-col items-center'>
                <SignUpForm />

                <div className='w-[80%] flex flex-row items-center gap-5 my-4'>
                  <HorizontalSeparator />
                  <span className='text-slate-11 whitespace-nowrap'>Or sign in with</span>
                  <HorizontalSeparator />
                </div>

                <div className='w-[80%] flex flex-col items-center justify-center gap-5'>
                  <button className='w-full h-[40px] bg-red-800 rounded-round text-slate-12'>Google</button>
                  <button className='w-full h-[40px] bg-neutral-800 rounded-round text-slate-12'>Phone</button>
                </div>
              </div>

              <div className='w-full flex justify-center gap-1 py-5'>
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
