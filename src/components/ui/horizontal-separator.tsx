'use client';

import { FC, ReactNode } from 'react';
import { cn } from '@/util/cn';

import * as Separator from '@radix-ui/react-separator';

type HorizontalSeparatorProps = {
  className?: string;
  children?: ReactNode;
};

const HorizontalSeparator: FC<HorizontalSeparatorProps> = ({ className, children }) => (
  <>
    <Separator.Root
      orientation='horizontal'
      className={cn(
        `bg-primary-dark data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full
        data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-4`,
        className
      )}
    >
      {children}
    </Separator.Root>
  </>
);

export default HorizontalSeparator;
