import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import * as Tooltip from '@radix-ui/react-tooltip';

const AvatarTooltip = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {session && (
        <Tooltip.Provider delayDuration={300} skipDelayDuration={0} disableHoverableContent>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div className='absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50' />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className='select-none
              rounded-weak
              bg-primary-darkest px-[15px] py-[10px] text-fs-300 leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]
              data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade'
                sideOffset={5}
                align='end'
              >
                <div className='flex flex-col gap-2.5 p-2'>
                  <span className='text-primary-lightest'>Adam Ridhwan Amir Hamzah</span>
                  <span className='text-primary-lighter'>adamridhwan.1@gmail.com</span>
                </div>
                <Tooltip.Arrow className='fill-slate-1' height={10} width={15} />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      )}
    </>
  );
};

export default AvatarTooltip;
