import { FC } from 'react';
import Image from 'next/image';
import { cn } from '@/util/cn';

type LoadingProps = {
  isLoading: boolean;
};

const LoadingScreen: FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div
      className={cn(
        `pointer-events-none fixed inset-0 z-50 flex cursor-default select-none flex-col items-center justify-center bg-black
        bg-radial-top-right transition-opacity duration-500`,
        { 'opacity-0': !isLoading }
      )}
    >
      <div className='flex flex-row items-center justify-center gap-2'>
        <Image
          src='/images/geaux-logo.png'
          alt='geaux logo'
          priority
          width={500}
          height={500}
          className='h-[40px] w-[40px] scale-[1.2] transform'
        />

        <span className='text-fs-600 font-semibold'>GEAUX TV</span>
      </div>

      <svg className='mt-5 h-12 w-12 animate-rotate text-accent-lightest' viewBox='0 0 50 50'>
        <circle
          className='animate-dash stroke-accent-lightest'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='4'
        ></circle>
      </svg>
    </div>
  );
};

export default LoadingScreen;
