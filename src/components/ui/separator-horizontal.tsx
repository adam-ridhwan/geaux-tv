'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/utils/cn';

import * as Separator from '@radix-ui/react-separator';

type HorizontalSeparatorProps = {
  className?: string;
  children?: ReactNode;
};

const SeparatorHorizontal: FC<HorizontalSeparatorProps> = ({ className, children }) => (
  <>
    <Separator.Root
      orientation='horizontal'
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

export default SeparatorHorizontal;
