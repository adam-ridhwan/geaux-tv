'use client';

import { FC } from 'react';
import { MoreVertical } from 'lucide-react';

import { useOptionsPopupStore } from '@/store/useOverlayStore';
import { Channel } from '@/store/useTvStore';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

type OptionsButtonProps = {
  channel: Channel;
};

const OptionsButton: FC<OptionsButtonProps> = ({ channel }) => {
  const [isOptionsPopupOpen, setIsOptionsPopupOpen] = useOptionsPopupStore(state => [
    state.isOptionsPopupOpen,
    state.setIsOptionsPopupOpen,
  ]);

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            className='absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-[44px] flex justify-center items-center'
            onClick={() => setIsOptionsPopupOpen(true)}
          >
            <MoreVertical className='text-primary-light' />
            <VisuallyHidden.Root>Options</VisuallyHidden.Root>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='bg-primary-darkest opacity-50 data-[state=open]:animate-overlayShow fixed inset-0' />
          <Dialog.Content
            className='data-[state=open]:animate-contentShow fixed bottom-[20px] left-[50%] translate-x-[-50%]
            p-[25px] w-[80vw] max-w-[400px] max-h-[85vh] rounded-weak bg-primary-darkest border-2 border-primary-dark drop-shadow-2xl'
          >
            {channel.channelNumber}
            <div className='flex flex-col items-start'>
              <button>Details</button>
              <button>Like</button>
              <button>Share</button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default OptionsButton;
