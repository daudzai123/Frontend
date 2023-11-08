import { Language } from '@/utils/language.utils';

type LoadingTextType = {
  [language in Language]: string;
};

const loadingText: LoadingTextType = {
  en: 'Changing the language',
  'fa-AF': 'در حال تغییر زبان',
  'ps-AF': 'د ژبې بدلولو په حال کې',
};

type LanguageSelectorLoadingProps = {
  language: Language;
};

const LanguageSelectorLoading: React.FC<LanguageSelectorLoadingProps> = ({ language }) => {
  return (
    <div className='flex flex-row justify-center'>
      <div
        className='w-full animate-pulse text-sm dark:text-slate-200
                 md:py-1'>
        <div className='flex items-center justify-center tracking-wide'>
          <svg
            className='me-2 h-5 w-5 animate-bounce text-danger-color'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 18'>
            <circle cx='0' cy='12' r='2' fill='currentColor' />
            <circle cx='6' cy='12' r='2' fill='currentColor' />
            <circle cx='12' cy='12' r='2' fill='currentColor' />
          </svg>
          {language != 'en' ? (
            <div dir='rtl' className=' font-bahijHelvetica'>
              {loadingText[language]}
            </div>
          ) : (
            <div dir='ltr ' className='font-inter'>
              {loadingText[language]}
            </div>
          )}{' '}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectorLoading;
