'use client';

import * as Separator from '@radix-ui/react-separator';

export default function HorizontalSeparator() {
  return (
    <>
      <Separator.Root
        orientation='horizontal'
        className='bg-primary-dark data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full
        data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-4'
      />
    </>
  );
}
