import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';

import { cn } from '@/lib/cn';

type ExtendedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  children?: ReactNode;
};

const Button: ForwardRefRenderFunction<HTMLButtonElement, ExtendedButtonProps> = (
  { className, isActive, children, ...props },
  ref
) => {
  return (
    <button
      ref={ref}
      className={cn(
        `w-full h-full px-3 py-2 flex items-center gap-2 
        hover:bg-secondary-dark hover:text-secondary-lightest focus:bg-secondary-darker rounded-dropdown-radius`,
        className,
        { 'bg-secondary-darker hover:bg-pink-4 text-secondary-lightest hover:secondary-lightest': isActive }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
