'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/util/cn';

import * as Separator from '@radix-ui/react-separator';

type VerticalSeparatorProps = {
  className?: string;
  children?: ReactNode;
};

const VerticalSeparator: FC<VerticalSeparatorProps> = ({ className, children }) => (
  <>
    <Separator.Root
      orientation='vertical'
      className={cn(
        `my-4 bg-primary-dark data-[orientation=horizontal]:h-px
        data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px`,
        className
      )}
    >
      {children}
    </Separator.Root>
  </>
);

export default VerticalSeparator;
