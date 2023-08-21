import { FC } from 'react';
import { DotIcon } from 'lucide-react';

import { languageCode, LANGUAGES, useLanguageStore } from '@/store/useLanguageStore';
import { useAvatarDropdownStore } from '@/store/useOverlayStore';
import { cn } from '@/lib/cn';
import Button from '@/components/ui/button';
import * as RadioGroup from '@radix-ui/react-radio-group';

const TranslateContent: FC = () => {
  const [currentLanguage, setCurrentLanguage] = useLanguageStore(state => [
    state.currentLanguage,
    state.setCurrentLanguage,
  ]);
  const [closeAvatarDropdown] = useAvatarDropdownStore(state => [state.closeAvatarDropdown]);

  const selectLanguage = (selectedLanguage: languageCode) => {
    setCurrentLanguage(selectedLanguage);
    closeAvatarDropdown();
  };

  return (
    <>
      <RadioGroup.Root className='flex flex-col z-50' defaultValue={currentLanguage} aria-label='View density'>
        {LANGUAGES.map(language => (
          <RadioGroup.Item asChild key={language.languageName} value={language.languageCode}>
            <Button
              className={cn('relative pl-9')}
              state={currentLanguage === language.languageCode}
              onClick={() => selectLanguage(language.languageCode)}
            >
              <span>{language.languageName}</span>
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
