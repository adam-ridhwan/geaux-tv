import { FC } from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LanguagesIcon } from 'lucide-react';
import TranslateContent from '@/components/header/translate/translate-content';

const TranslateDropdown: FC = () => {
  return (
    <>
      <DropdownMenu.Item
        className='w-full rounded-md'
        onSelect={e => {
          e.preventDefault(); // prevents the dropdown from closing when clicked
        }}
      >
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              className='w-full h-full text-left px-3 py-2 hover:bg-pink-6 hover:text-pink-12 rounded-md
              flex items-center gap-2'
            >
              <span>
                <LanguagesIcon size={20} color='#fff' />
              </span>
              <span>Translate</span>
            </button>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content
              className='w-52 bg-slate-1 border-2 border-slate-3 rounded-md p-2.5 will-change-[opacity,transform]
              data-[side=left]:animate-slideUpAndFade'
              side='bottom'
              align='end'
              onFocusOutside={e => {
                e.preventDefault(); // prevents the dropdown from closing when mouse moves outside
              }}
            >
              <TranslateContent />
              <Popover.Close
                className='rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default'
                aria-label='Close'
              >
                X
              </Popover.Close>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </DropdownMenu.Item>
    </>
  );
};

export default TranslateDropdown;
