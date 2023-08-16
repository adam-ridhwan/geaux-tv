import Link from 'next/link';
import Image from 'next/image';
import SignUpForm from '@/app/(auth)/sign-up/sign-up-form';
import HorizontalSeparator from '@/app/(auth)/sign-up/separator';

export default function SignUpPage() {
  return (
    <>
      <header className='py-2 px-4'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                src='/images/geauxlogo.png'
                alt='geaux logo'
                priority
                width={500}
                height={500}
                style={{ width: '120px' }}
              />
            </Link>
          </div>
        </div>
      </header>

      <main className='flex flex-col items-center'>
        <section className='flex items-center flex-col px-3 mt-8 w-[95%] max-w-lg'>
          <div className='flex flex-col w-full gap-2'>
            <span className='text-3xl text-slate-12 font-bold'>Sign Up</span>
            <span className='text-1xl text-slate-11'>Free TV that connects with the real you</span>
          </div>

          <div
            className='relative w-full border border-slate-5 overflow-hidden rounded-md mt-5 py-5
            bg-purple-1 bg-opacity-30 bg-radial-top-right flex flex-col items-center justify-between gap-4'
          >
            <div className='w-full flex flex-col items-center gap-4'>
              <SignUpForm />

              <div className='w-[80%] flex flex-row items-center gap-5'>
                <HorizontalSeparator />
                <span className='text-slate-11'>Or</span>
                <HorizontalSeparator />
              </div>

              <div className='w-[80%] flex flex-col items-center justify-center gap-3'>
                <button className='w-full h-[40px] bg-red-800 rounded-round text-slate-12'>Google</button>
                <button className='w-full h-[40px] bg-neutral-800 rounded-round text-slate-12'>Phone</button>
              </div>
            </div>

            <div className='w-full flex justify-center gap-1 py-5'>
              <span className='text-slate-11'>Already have an account?</span>
              <Link href='/sign-in' className='text-slate-12'>
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
