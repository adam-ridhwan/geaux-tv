import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';

import { cn } from '@/lib/cn';

type ExtendedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  children?: ReactNode;
};

const ButtonSecondary: ForwardRefRenderFunction<HTMLButtonElement, ExtendedButtonProps> = (
  { className, isActive, children, ...props },
  ref
) => {
  return (
    <button
      ref={ref}
      className={cn(
        `w-full h-full px-3 py-2 flex items-center gap-2 
        hover:bg-tertiary-dark hover:text-tertiary-lightest focus:bg-tertiary-darker rounded-weak`,
        className,
        { 'bg-tertiary-darker hover:bg-pink-4 text-tertiary-lightest hover:tertiary-lightest': isActive }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(ButtonSecondary);
