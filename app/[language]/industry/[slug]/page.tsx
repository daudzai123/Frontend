import { getIndustryDetailBySlug, getIndustriesByURL } from '@/api/getIndustries';
import { IGraphqlResult } from '@/common/interfaces';
import { IIndustry, IIndustryDetails } from '@/components/Industry/industry.interface';
import CKEditorViewer from '@/components/common/CKEditorViewer/CKEditorViewer';
import { formatAndCleanDate } from '@/utils/date.utils';
import { Language, getDictionaryAsync, getLanguage } from '@/utils/language.utils';
import { pageTitleCreator } from '@/utils/title.utils';
import { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    slug: string;
    language: Language;
  };
};

const fetchIndustry = async (slug: string, language: Language) => {
  let industry: IGraphqlResult<IIndustry> | IGraphqlResult<IIndustryDetails> = await getIndustriesByURL(
    '/' + slug,
    language,
  );
  if (!industry) {
    industry = await getIndustryDetailBySlug(slug, language);
  }

  return industry;
};

export async function generateMetadata({ params: { slug, language } }: Params): Promise<Metadata> {
  const industry = await fetchIndustry(slug, language);
  const title = industry ? industry.attributes.label : 'Error';
  return {
    title: pageTitleCreator(title),
  };
}

export default async function IndustryDetailsItemPage({ params: { slug, language } }: Params) {
  const industry = await fetchIndustry(slug, language);
  if (!industry) notFound();

  const {
    attributes: { label, duration, description, updatedAt },
  } = industry;

  const {
    industryPage: { minute, read, lastUpdatedOn },
  } = await getDictionaryAsync(language);

  return (
    <main className='my-4 flex w-full bg-gray-50 px-6 py-6 leading-relaxed shadow dark:bg-zinc-800'>
      <div className='mb-8 flex w-full flex-col pb-4'>
        <div className='mb-8 flex flex-row justify-between text-sm text-gray-600 dark:text-slate-300'>
          <div>
            {lastUpdatedOn} {formatAndCleanDate(updatedAt, language)}
          </div>
          <div>
            {duration} {minute} {read}
          </div>
        </div>
        <div className='text-2xl font-semibold leading-snug text-black dark:text-white'>
          {label}
        </div>
        <CKEditorViewer centered={false} data={description} />
      </div>
    </main>
  );
}
