import { FC } from 'react';
import { cn } from '@/util/cn';
import { DotIcon } from 'lucide-react';

import { languageCode, LANGUAGES, useLanguageStore } from '@/store/useLanguageStore';
import { useAvatarDropdownStore } from '@/store/useUserInterfaceStore';
import Button from '@/components/ui/button-secondary';
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
      <RadioGroup.Root className='z-50 flex flex-col' defaultValue={currentLanguage} aria-label='View density'>
        {LANGUAGES.map(language => (
          <RadioGroup.Item asChild key={language.languageName} value={language.languageCode}>
            <Button
              className='relative rounded-weak pl-9'
              isActive={currentLanguage === language.languageCode}
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
