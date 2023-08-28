import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { cn } from '@/util/cn';

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
        `flex h-full w-full items-center gap-2 rounded-weak px-3 
        py-2 hover:bg-accent-dark hover:text-accent-lightest`,
        className,
        { 'hover:accent-lightest bg-accent-darker text-accent-lightest hover:bg-accent-darker': isActive }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(ButtonSecondary);
