import { getNewsBySlug } from '@/api/getNews';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { Language, getDictionaryAsync, getLanguage } from '@/utils/language.utils';
import NewsSlugLoading from '@/components/common/Loadings/NewsSlugLoading';
import CKEditorViewer from '@/components/common/CKEditorViewer/CKEditorViewer';
import { formatAndCleanDate } from '@/utils/date.utils';
import { notFound } from 'next/navigation';
import { pageTitleCreator } from '@/utils/title.utils';
import { Metadata } from 'next';

type Params = {
  params: {
    slug: string;
    language: Language;
  };
};

const getNews = async (slug: string, language: Language) => {
  const getNewsFromSlug = await getNewsBySlug(slug, language);
  return getNewsFromSlug;
};

const getText = async (language: Language) => {
  const {
    newsPage: { newsList },
  } = await getDictionaryAsync(language);
  return newsList;
};

export async function generateMetadata({ params: { slug, language } }: Params): Promise<Metadata> {
  const news = await getNews(slug, language);
  const title = news ? news.attributes.title : 'Error';
  const description = news ? news.attributes.description : 'Error';
  return {
    title: pageTitleCreator(title),
    description: description,
  };
}

export default async function NewsItemPage({ params: { slug, language } }: Params) {
  const news = await getNews(slug, language);
  if (!news) notFound();

  const { read, minute } = await getText(language);
  const {
    attributes: { title, description, news_details, duration, createdAt, image },
  } = news;

  return (
    <Suspense fallback={<NewsSlugLoading />}>
      <div className='my-10 flex w-full flex-col items-center justify-center px-4'>
        <div className='mb-8 flex flex-col border-b  border-gray-300 pb-4 md:w-[55%]'>
          <div className='mb-4 text-3xl font-semibold italic leading-snug text-black dark:text-white md:w-[90%]'>
            {title}
          </div>
          <div className='text-black dark:text-slate-300'>
            <p className='mb-4 text-lg font-light'>{description}</p>
            <p className='my-1 text-sm font-semibold'>
              {formatAndCleanDate(createdAt, getLanguage())}
            </p>
            <p className='text-sm '>
              {duration} {minute} {read}
            </p>
          </div>
        </div>
        <div className='flex flex-col pb-4 md:w-[80%]'>
          {image.data && (
            <Image
              height={1200}
              width={1200}
              className='h-80 w-full object-cover md:h-[650px]'
              src={image.data.attributes.url}
              alt={title}
            />
          )}
        </div>
        <div className='mt-6 flex flex-col pb-4 dark:text-gray-200 md:w-[55%]'>
          <CKEditorViewer data={news_details} />
        </div>
      </div>
    </Suspense>
  );
}
