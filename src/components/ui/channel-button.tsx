import { ButtonHTMLAttributes, FC, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { cn } from '@/util/cn';

type ChannelButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  isActive?: boolean;
  children: ReactNode;
  colorIndex?: number;
};

const ChannelButton: ForwardRefRenderFunction<HTMLButtonElement, ChannelButtonProps> = (
  { className, isActive, children, colorIndex, ...props },
  ref
) => {
  return (
    <>
      <button
        ref={ref}
        className={cn(
          `w-full flex flex-row items-center gap-4 h-[72px] bg-primary-void border-t border-t-primary-dark px-[16px]`,
          className,
          {
            '': isActive,
          }
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default forwardRef(ChannelButton);
