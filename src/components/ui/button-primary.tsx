import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { cn } from '@/utils/cn';

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
      className={cn(`h-[40px] w-full rounded-strong border-2 border-primary-light bg-primary-darkest`, className, {
        'border-primary-lightest': isActive,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(ButtonPrimary);
