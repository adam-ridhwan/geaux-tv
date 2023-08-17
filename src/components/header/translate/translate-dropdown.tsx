import { FC } from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LanguagesIcon, X } from 'lucide-react';
import TranslateContent from '@/components/header/translate/translate-content';
import Button from '@/components/ui/button';
import { useTranslatePopoverStore } from '@/store/useOverlayStore';

const TranslateDropdown: FC = () => {
  const [isTranslatePopoverOpen, setIsTranslatePopoverOpen] = useTranslatePopoverStore(state => [
    state.isTranslatePopoverOpen,
    state.setIsTranslatePopoverOpen,
  ]);

  return (
    <>
      <DropdownMenu.Item
        className='w-full rounded-md'
        onSelect={e => {
          e.preventDefault(); // prevents the dropdown from closing when clicked
        }}
      >
        <Popover.Root open={isTranslatePopoverOpen} onOpenChange={setIsTranslatePopoverOpen}>
          <Popover.Trigger asChild>
            <Button state={isTranslatePopoverOpen}>
              <span>
                <LanguagesIcon size={20} color='#fff' />
              </span>
              <span>Translate</span>
            </Button>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              className='w-52 bg-slate-1 border-2 border-slate-3 rounded-md p-2.5 will-change-[opacity,transform]
              data-[side=left]:animate-slideUpAndFade'
              side='left'
              align='start'
              alignOffset={-75}
              onFocusOutside={e => {
                e.preventDefault(); // prevents the dropdown from closing when mouse moves outside
              }}
            >
              <TranslateContent />

              <Popover.Close
                className='rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] outline-none cursor-pointer'
                aria-label='Close'
              >
                <X />
              </Popover.Close>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </DropdownMenu.Item>
    </>
  );
};

export default TranslateDropdown;
