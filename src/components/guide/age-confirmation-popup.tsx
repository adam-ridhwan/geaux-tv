'use client';

import { useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';

import { useMountedStore } from '@/store/useMountedStore';
import { useAgePopupStore } from '@/store/useUserInterfaceStore';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const AgeConfirmationPopup = () => {
  const router = useRouter();
  const [isAgePopupOpen, setIsAgePopupOpen, channel] = useAgePopupStore(state => [
    state.isAgePopupOpen,
    state.setIsAgePopupOpen,
    state.channel,
  ]);
  const [isMounted] = useMountedStore(state => [state.isMounted]);

  // if (!isMounted) return null;

  return (
    <>
      <AlertDialog.Root open={isAgePopupOpen} onOpenChange={setIsAgePopupOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className='fixed inset-0 z-20 bg-black opacity-[0.5]' />

          <AlertDialog.Content
            className={cn(
              `fixed left-[50%] top-[50%] z-30 h-[170px] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] 
              rounded-[6px] bg-white p-[25px] 
              shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
              focus:outline-none data-[state=open]:animate-contentShow`
            )}
          >
            <AlertDialog.Title className='m-0 text-[17px] font-medium text-primary-dark'>
              Are you over 16 years old?
            </AlertDialog.Title>

            <AlertDialog.Description className='mb-5 mt-4 text-[15px] leading-normal text-primary-light'>
              You can only watch this content if you are over 16 years old.
            </AlertDialog.Description>

            <div className='flex justify-end gap-[25px]'>
              <AlertDialog.Cancel asChild>
                <button className='inline-flex h-[35px] items-center justify-center rounded-[4px] bg-mauve4 px-[15px] font-medium leading-none text-mauve11 outline-none hover:bg-mauve5 focus:shadow-[0_0_0_2px] focus:shadow-mauve7'>
                  Cancel
                </button>
              </AlertDialog.Cancel>

              <AlertDialog.Action asChild>
                <button
                  onClick={() => router.replace(`/tv/${channel?.channelNumber}`)}
                  className='inline-flex h-[35px] items-center justify-center rounded-[4px] bg-accent-darker px-[20px] font-medium leading-none text-primary-lightest outline-none hover:bg-accent-dark focus:shadow-[0_0_0_2px] focus:shadow-red7'
                >
                  Enter
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
};

export default AgeConfirmationPopup;
