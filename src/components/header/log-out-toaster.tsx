'use client';

import { X } from 'lucide-react';

import { useLogOutToastStore } from '@/store/useUserInterfaceStore';
import VerticalSeparator from '@/components/ui/vertical-separator';
import * as Toast from '@radix-ui/react-toast';

const LogOutToaster = () => {
  const [isLogOutToastOpen, setIsLogOutToastOpen] = useLogOutToastStore(state => [
    state.isLogOutToastOpen,
    state.setIsLogOutToastOpen,
  ]);

  return (
    <Toast.Provider swipeDirection='right' duration={5000}>
      <Toast.Root
        type='background'
        className="grid grid-cols-[auto_max-content] items-center
        gap-x-[15px] rounded-weak bg-white p-[15px]
        shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
        [grid-template-areas:_'title_action'_'description_action']
        data-[swipe=cancel]:translate-x-0
        data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]
        data-[state=closed]:animate-hide data-[state=open]:animate-slideIn
        data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={isLogOutToastOpen}
        onOpenChange={setIsLogOutToastOpen}
      >
        <Toast.Title className='mb-[5px] text-fs-300 font-medium text-primary-dark [grid-area:_title]'>
          Signed out
        </Toast.Title>
        <Toast.Description asChild>
          <span className='m-0 whitespace-nowrap text-fs-200 leading-[1.3] text-primary-light [grid-area:_description]'>
            Sign in to enjoy all the features of the app
          </span>
        </Toast.Description>
        <Toast.Close className='mb-[5px] text-fs-300 font-medium text-primary-dark'>
          <X />
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport
        className='fixed right-3 top-16 z-[2147483647] m-0 flex w-[390px] max-w-[100vw]
        list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_0px]'
      />
    </Toast.Provider>
  );
};

export default LogOutToaster;
