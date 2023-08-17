import { create } from 'zustand';

export const LANGUAGES: { label: string; value: string }[] = [
  { label: 'English', value: 'en' },
  { label: 'العربية', value: 'ar' },
  { label: '中文 (简体)', value: 'zh' },
  { label: 'Français', value: 'fr' },
  { label: 'Deutsch', value: 'de' },
  { label: 'Ελληνικά', value: 'el' },
  { label: 'Kreyòl Ayisyen', value: 'ht' },
  { label: 'Bahasa Indonesia', value: 'id' },
  { label: 'Italiano', value: 'it' },
  { label: '日本語', value: 'ja' },
  { label: '한국어', value: 'ko' },
  { label: 'Português', value: 'pt' },
  { label: 'Русский', value: 'ru' },
  { label: 'Español', value: 'es' },
  { label: 'اردو', value: 'ur' },
];

type LanguageState = {
  currentLanguage: string;
  setCurrentLanguage: (currentLangugage: string) => void;
};

export const useLanguageStore = create<LanguageState>()(set => ({
  currentLanguage: LANGUAGES[0].value,
  setCurrentLanguage: (currentLanguage: string) => set({ currentLanguage }),
}));
