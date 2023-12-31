'use client';

import { FC } from 'react';
import Image from 'next/image';
import { ChevronRightSquare, Heart, MoreVertical, Share } from 'lucide-react';

import { Channel } from '@/store/useTvStore';
import { useOptionsPopupStore } from '@/store/useUserInterfaceStore';
import ButtonSecondary from '@/components/ui/button-secondary';
import SeparatorHorizontal from '@/components/ui/separator-horizontal';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

type OptionsButtonProps = {
  channel: Channel;
};

const OptionsButton: FC<OptionsButtonProps> = ({ channel }) => {
  const [
    isOptionsPopupOpen,
    setIsOptionsPopupOpen,
    openOptionsPopup,
    closeOptionsPopup,
    selectedChannel,
    setSelectedChannel,
  ] = useOptionsPopupStore(state => [
    state.isOptionsPopupOpen,
    state.setIsOptionsPopupOpen,
    state.openOptionsPopup,
    state.closeOptionsPopup,
    state.selectedChannel,
    state.setSelectedChannel,
  ]);

  const openOptionsContainer = () => {
    openOptionsPopup();
    setSelectedChannel(channel);
  };

  return (
    <>
      <Dialog.Root open={isOptionsPopupOpen} onOpenChange={setIsOptionsPopupOpen}>
        <Dialog.Trigger asChild>
          <button
            className='group absolute right-0 top-1/2
            flex h-[80%] w-[44px] -translate-y-1/2 items-center justify-center tablet:top-5 tablet:h-[30px] tablet:w-[30px]'
            onClick={openOptionsContainer}
          >
            <MoreVertical className='text-primary-lighter group-hover:text-primary-light' />
            <VisuallyHidden.Root>Options</VisuallyHidden.Root>
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 z-20 bg-black opacity-[0.05] data-[state=open]:animate-overlayShow' />
          <Dialog.Content
            onCloseAutoFocus={e => e.preventDefault()}
            className='fixed bottom-[20px] left-[50%] z-30 max-h-[85vh]
            w-[90vw] max-w-[400px] translate-x-[-50%] rounded-weak border-2 border-primary-dark bg-primary-darkest p-[10px]
            opacity-50 drop-shadow-2xl data-[state=open]:animate-contentShow'
          >
            <div className='flex h-[64px] flex-row items-center gap-4'>
              <div className='relative aspect-video h-full rounded-weak bg-cool-gradient'>
                <Image
                  src={selectedChannel?.channelIcon || ''}
                  alt={selectedChannel?.channelName || 'channel-button logo'}
                  width={55}
                  height={60}
                  className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
                />
              </div>
              <span className='whitespace-nowrap text-fs-400 font-bold text-primary-lightest'>
                {selectedChannel?.channelName}
              </span>
            </div>

            <SeparatorHorizontal className='my-2' />

            <div className='flex flex-col items-start'>
              <ButtonSecondary onClick={closeOptionsPopup}>
                <ChevronRightSquare />
                <span>Details</span>
              </ButtonSecondary>
              <ButtonSecondary onClick={closeOptionsPopup}>
                <Heart />
                <span>Add to favorites</span>
              </ButtonSecondary>
              <ButtonSecondary onClick={closeOptionsPopup}>
                <Share />
                <span>Share</span>
              </ButtonSecondary>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default OptionsButton;
