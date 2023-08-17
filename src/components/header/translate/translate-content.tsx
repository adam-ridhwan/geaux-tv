import { LANGUAGES, useLanguageStore } from '@/store/useLanguageStore';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { DotIcon } from 'lucide-react';
import { FC } from 'react';
import { useAvatarDropdownStore } from '@/store/useOverlayStore';
import Button from '@/components/ui/button';
import { cn } from '@/lib/cn';

const TranslateContent: FC = () => {
  const [currentLanguage, setCurrentLanguage] = useLanguageStore(state => [
    state.currentLanguage,
    state.setCurrentLanguage,
  ]);
  const [closeAvatarDropdown] = useAvatarDropdownStore(state => [state.closeAvatarDropdown]);

  const selectLanguage = (language: string) => {
    setCurrentLanguage(language);
    closeAvatarDropdown();
  };

  return (
    <>
      <RadioGroup.Root className='flex flex-col' defaultValue={currentLanguage} aria-label='View density'>
        {LANGUAGES.map(language => (
          <RadioGroup.Item asChild key={language.label} value={language.value}>
            <Button
              className={cn('relative pl-9')}
              state={currentLanguage === language.value}
              onClick={() => selectLanguage(language.value)}
            >
              <span>{language.label}</span>
              <RadioGroup.Indicator className='absolute left-[-2px]'>
                <DotIcon className='h-10 w-10' />
              </RadioGroup.Indicator>
            </Button>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </>
  );
};

export default TranslateContent;
