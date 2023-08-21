import { FC } from 'react';
import { LanguagesIcon } from 'lucide-react';

import { useTranslatePopoverStore } from '@/store/useOverlayStore';
import Button from '@/components/ui/button';
import TranslateContent from '@/components/header/translate/translate-content';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Popover from '@radix-ui/react-popover';

const TranslateDropdown: FC = () => {
  const [isTranslatePopoverOpen, setIsTranslatePopoverOpen] = useTranslatePopoverStore(state => [
    state.isTranslatePopoverOpen,
    state.setIsTranslatePopoverOpen,
  ]);

  return (
    <>
      <DropdownMenu.Item
        className='w-full rounded-dropdown-radius'
        onSelect={e => {
          e.preventDefault(); // prevents the dropdown from closing when clicked
        }}
      >
        <Popover.Root open={isTranslatePopoverOpen} onOpenChange={setIsTranslatePopoverOpen}>
          <Popover.Trigger asChild>
            <Button isActive={isTranslatePopoverOpen}>
              <span>
                <LanguagesIcon size={20} color='#fff' />
              </span>
              <span>Translate</span>
            </Button>
          </Popover.Trigger>

          <Popover.Content
            className='w-52 bg-primary-darkest border-2 border-primary-darker rounded-dropdown-radius p-2.5
            will-change-[opacity,transform] data-[side=left]:animate-slideUpAndFade'
            side='left'
            align='start'
            alignOffset={-75}
            onFocusOutside={e => {
              e.preventDefault(); // prevents the dropdown from closing when mouse moves outside
            }}
          >
            <TranslateContent />
          </Popover.Content>
        </Popover.Root>
      </DropdownMenu.Item>
    </>
  );
};

export default TranslateDropdown;
