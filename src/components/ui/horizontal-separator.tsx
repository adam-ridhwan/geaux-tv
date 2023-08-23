'use client';

import { FC } from 'react';
import { cn } from '@/util/cn';

import * as Separator from '@radix-ui/react-separator';

type HorizontalSeparatorProps = {
  className?: string;
};

const HorizontalSeparator: FC<HorizontalSeparatorProps> = ({ className }) => (
  <>
    <Separator.Root
      orientation='horizontal'
      className={cn(
        `bg-primary-dark data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full
          data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-4`,
        className
      )}
    />
  </>
);

export default HorizontalSeparator;
