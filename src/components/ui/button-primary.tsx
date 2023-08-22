import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { cn } from '@/util/cn';

type ExtendedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  children?: ReactNode;
};

const ButtonPrimary: ForwardRefRenderFunction<HTMLButtonElement, ExtendedButtonProps> = (
  { className, isActive, children, ...props },
  ref
) => {
  return (
    <button
      ref={ref}
      className={cn(`w-full mt-3 h-[40px] bg-primary-darkest border-2 border-primary-dark rounded-strong`, className, {
        'border-primary-light': isActive,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(ButtonPrimary);
