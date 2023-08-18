import Link from 'next/link';
import HorizontalSeparator from '@/components/ui/separator';
import Header from '@/components/header/header';
import SignInForm from '@/components/sign-in-form';

export default function SignInPage() {
  return (
    <>
      <main className='bg-radial-top-right h-[100dvh] max-h-[100dvh] min-h-[100dvh] flex flex-col'>
        <Header />

        <section className='relative flex flex-col items-center flex-1'>
          <div className='flex items-center flex-col mt-8 w-[90%] max-w-md'>
            <div className='flex flex-col w-full gap-2'>
              <span className='text-[35px] text-slate-12 font-bold'>Sign In</span>
              <span className='text-[18px] text-slate-11 whitespace-nowrap'>Welcome back! Sign in to continue</span>
            </div>

            <div
              className='relative w-full overflow-hidden rounded-md mt-5 py-5 px-1
                flex flex-col items-center justify-between gap-4'
            >
              <div className='w-full flex flex-col items-center'>
                <SignInForm />

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
