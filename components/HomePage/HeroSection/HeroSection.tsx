import React from 'react';
import Link from 'next/link';
import { ButtonType, buttonStyles } from '@/utils/button.styles';
import { IButton } from '@/common/interfaces';
import { Language } from '@/utils/language.utils';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  buttons: IButton[];
  language: Language;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, buttons, language }) => {
  return (
    <div className='relative z-10 mx-auto px-4 py-10 xs:py-24 sm:px-6 md:max-w-7xl md:px-8'>
      <div className='flex flex-col items-center text-center text-gray-800 dark:text-white'>
        <span className='block w-full text-3xl font-extrabold leading-tight tracking-wide text-black dark:text-zinc-300 xs:w-[90%] sm:w-[70%] md:text-5xl'>
          {title}
        </span>
        <p className='mb-14 mt-8 w-full max-w-3xl font-normal tracking-wide text-gray-700  dark:text-zinc-300 sm:w-[70%] md:w-[70%] md:text-xl'>
          {subtitle}
        </p>
        <div className='flex-column flex w-full flex-wrap items-center justify-center gap-4 p-2 sm:flex-nowrap'>
          {buttons.map(({ label, url, type }, index) => (
            <div key={index} className={`flex w-full xs:w-[50%] sm:w-[30%] md:w-[20%]`}>
              <Link
                href={`/${language}${url}`}
                prefetch={false}
                className={`flex w-full items-center justify-center px-6 py-2 font-medium -tracking-normal transition-colors hover:opacity-80 ${
                  buttonStyles[type as ButtonType]
                }
                `}>
                <div className={`text-${type}-color-inverse`}>{label}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
