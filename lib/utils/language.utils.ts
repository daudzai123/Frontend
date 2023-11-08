import { cookies } from 'next/headers';
import { Cookie } from '@/common/interfaces';
import { Dictionary } from '@/dictionaries/dictionary.type';
import { dariTranslation } from '@/dictionaries/dari.translation';
import { englishTranslation } from '@/dictionaries/english.translation';
import { pashtoTranslation } from '@/dictionaries/pashto.translation';

export type Language = 'en' | 'fa-AF' | 'ps-AF';

type Dictionaries = {
  [locale in Language]: Dictionary;
};

const dictionaries: Dictionaries = {
  en: englishTranslation,
  'fa-AF': dariTranslation,
  'ps-AF': pashtoTranslation,
};

export const getDictionaryAsync = async (language: Language): Promise<Dictionary> => {
  if (isLanguage(language)) {
    return dictionaries[language];
  } else {
    throw new Error(`Unsupported locale: ${language}`);
  }
};

const extractLanguageCookie = (cookiesArray: Cookie[]): Language | undefined => {
  const languageCookie = cookiesArray.find(cookie => cookie.name === 'language');
  return languageCookie?.value as Language | undefined;
};

export const getLanguage = (): Language => {
  const cookiesArray: Cookie[] = cookies().getAll();
  return extractLanguageCookie(cookiesArray) || 'ps-AF';
};

export function isLanguage(lang: string): lang is Language {
  return ['en', 'fa-AF', 'ps-AF'].includes(lang);
}
