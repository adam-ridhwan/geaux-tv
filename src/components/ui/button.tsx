import { cn } from '@/lib/cn';
import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';

interface ExtendedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: boolean;
  children?: ReactNode;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ExtendedButtonProps> = (
  { className, state, children, ...props },
  ref,
) => {
  return (
    <button
      ref={ref}
      className={cn(
        `w-full h-full px-3 py-2 flex items-center gap-2 
        hover:bg-pink-6 hover:text-pink-12 rounded-md focus:bg-pink-5`,
        className,
        { 'bg-pink-4 hover:bg-pink-4 text-pink-12 hover:text-pink-12': state },
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
