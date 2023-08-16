import { LANGUAGES, useLanguageStore } from '@/store/useLanguageStore';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { DotIcon } from 'lucide-react';

const TranslateContent = () => {
  const [language, setLanguage] = useLanguageStore(state => [state.language, state.setLanguage]);

  return (
    <>
      <RadioGroup.Root className='flex flex-col' defaultValue={language} aria-label='View density'>
        {LANGUAGES.map(language => (
          <RadioGroup.Item
            key={language.label}
            value={language.value}
            onClick={() => setLanguage(language.value)}
            className='relative h-[40px] pl-9 rounded-md flex flex-row items-center cursor-pointer
            hover:bg-pink-6 hover:text-pink-12'
          >
            {language.label}
            <RadioGroup.Indicator className='absolute left-[-5px]'>
              <DotIcon className='h-10 w-10' />
            </RadioGroup.Indicator>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </>
  );
};

export default TranslateContent;
