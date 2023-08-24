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
        `w-full h-full px-3 py-2 flex items-center gap-2 
        hover:bg-accent-dark hover:text-accent-lightest rounded-weak`,
        className,
        { 'bg-accent-darker hover:bg-accent-darker text-accent-lightest hover:accent-lightest': isActive }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(ButtonSecondary);
