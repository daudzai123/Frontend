'use client';

import React, { use, useEffect } from 'react';
import { Language } from '@/utils/language.utils';
import LanguageSelectorLoading from '@/components/common/Loadings/LanguageSelectorLoading';
import { setCookie } from 'cookies-next';

interface LanguageOption {
  code: Language;
  label: string;
}

const languages: LanguageOption[] = [
  { code: 'en', label: 'English' },
  { code: 'fa-AF', label: 'دری' },
  { code: 'ps-AF', label: 'پښتو' },
];

type LanguageSelectorProps = {
  language: Language;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language }) => {
  const [loading, setLoading] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(language);

  useEffect(() => {
    setCookie('language', language, { maxAge: 60 * 60 * 24 * 30 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (newLanguage: Language) => {
    setCookie('language', newLanguage, { maxAge: 60 * 60 * 24 * 30 });
    setLoading(true);
    setSelectedLanguage(newLanguage);
    window.location.href = `/${newLanguage}`;
  };

  return !loading ? (
    <div className='flex justify-center'>
      {languages.map(lang => (
        <div
          key={lang.code}
          onClick={() => handleClick(lang.code)}
          className={`cursor-pointer px-3 py-2 transition-colors ease-in md:py-1 ${
            language === lang.code
              ? 'text-info-color dark:text-info-dark-color'
              : 'text-gray-500 hover:text-info-color dark:text-slate-200 dark:hover:text-info-dark-color'
          }
            ${lang.code != 'en' ? 'font-bahijHelvetica' : 'font-inter'}
            `}>
          {lang.label}
        </div>
      ))}
    </div>
  ) : (
    <LanguageSelectorLoading language={selectedLanguage} />
  );
};

export default LanguageSelector;
