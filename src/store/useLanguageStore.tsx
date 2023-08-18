import { create } from 'zustand';

interface Language {
  languageName: string;
  languageCode: string;
}

export const LANGUAGES: Language[] = [
  { languageName: 'English', languageCode: 'en' },
  { languageName: 'العربية', languageCode: 'ar' },
  { languageName: '中文 (简体)', languageCode: 'zh' },
  { languageName: 'Français', languageCode: 'fr' },
  { languageName: 'Deutsch', languageCode: 'de' },
  { languageName: 'Ελληνικά', languageCode: 'el' },
  { languageName: 'Kreyòl Ayisyen', languageCode: 'ht' },
  { languageName: 'Bahasa Indonesia', languageCode: 'id' },
  { languageName: 'Italiano', languageCode: 'it' },
  { languageName: '日本語', languageCode: 'ja' },
  { languageName: '한국어', languageCode: 'ko' },
  { languageName: 'Português', languageCode: 'pt' },
  { languageName: 'Русский', languageCode: 'ru' },
  { languageName: 'Español', languageCode: 'es' },
  { languageName: 'اردو', languageCode: 'ur' },
];

export type languageCode = (typeof LANGUAGES)[number]['languageCode'];

type LanguageState = {
  currentLanguage: languageCode;
  setCurrentLanguage: (currentLanguage: string) => void;
};

export const useLanguageStore = create<LanguageState>()(set => ({
  currentLanguage: localStorage.getItem('currentLanguage') || LANGUAGES[0].languageCode,
  setCurrentLanguage: (currentLanguage: string) => set({ currentLanguage }),
}));
