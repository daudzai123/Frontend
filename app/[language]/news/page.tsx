export const dynamic = 'force-dynamic';

import React, { Suspense } from 'react';
import { Language, getDictionaryAsync } from '@/utils/language.utils';
import NewsPageLoading from '@/components/common/Loadings/NewsPageLoading';
import { pageTitleCreator } from '@/utils/title.utils';
import { Metadata } from 'next';
import NewsList from '@/components/News/NewsList';

type Params = {
  params: {
    language: Language;
  };
};

const getText = async (language: Language) => {
  const { newsPage } = await getDictionaryAsync(language);
  return newsPage;
};

export async function generateMetadata({ params: { language } }: Params): Promise<Metadata> {
  const { pageName, pageDescription: description } = await getText(language);

  return {
    title: pageTitleCreator(pageName),
    description,
  };
}

export default async function NewsPage({ params: { language } }: Params) {
  const { newsList, searchNews } = await getText(language);

  return (
    <Suspense fallback={<NewsPageLoading />}>
      {' '}
      <div className='flex flex-col text-black dark:text-gray-200'>
        <div className='flex flex-row'>
          <div className='text-lg font-semibold'>{searchNews}</div>
        </div>
        <NewsList language={language} text={newsList} />
      </div>
    </Suspense>
  );
}
