import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { INews } from '@/components/News/news.interface';
import { IGraphqlResult } from '@/common/interfaces';
import { Language } from '@/utils/language.utils';

type NewsProps = {
  news: IGraphqlResult<INews>[];
  textRead: string;
  textMinute: string;
  language: Language;
};

const News: React.FC<NewsProps> = ({ news, textMinute, textRead, language }) => {
  const mainNews = news[0];
  const sideNews = news.slice(1);

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-8'>
      <MainNewsItem
        language={language}
        mainNews={mainNews}
        textMinute={textMinute}
        textRead={textRead}
      />
      <div className='md:col-span-3'>
        <div className='grid gap-4 md:grid-cols-2'>
          {sideNews.map((news, index) => (
            <SideNewsItem
              key={index}
              news={news}
              textMinute={textMinute}
              textRead={textRead}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

type MainNewsProps = {
  mainNews: IGraphqlResult<INews>;
  textMinute: string;
  textRead: string;
  language: Language;
};

const MainNewsItem: React.FC<MainNewsProps> = ({ mainNews, textMinute, textRead, language }) => (
  <Link
    href={`/${language}/news/${mainNews.attributes.slug}`}
    className='group flex flex-col items-center justify-center border-b border-gray-900 pb-4 dark:border-blue-100 md:col-span-5 md:border-b-0 md:border-e md:pe-4'>
    {mainNews.attributes.image.data && (
      <Image
        height={800}
        width={800}
        className='h-80 w-full object-cover dark:opacity-80 md:h-[500px]'
        src={mainNews.attributes.image.data.attributes.url}
        alt={mainNews.attributes.title}
      />
    )}
    <div className='mt-5 md:text-center'>
      <div className='mb-2 text-2xl text-gray-900 group-hover:underline dark:text-zinc-200'>
        {mainNews.attributes.title}
      </div>
      <p className='mb-2 text-gray-600 dark:text-zinc-400'>{mainNews.attributes.description}</p>
      <div className='mt-2 text-sm text-gray-600 dark:text-zinc-400'>
        {mainNews.attributes.duration} {textMinute} {textRead}
      </div>
    </div>
  </Link>
);

type SideNewsProps = {
  news: IGraphqlResult<INews>;
  index: number;
  textMinute: string;
  textRead: string;
  language: Language;
};

const SideNewsItem: React.FC<SideNewsProps> = ({ news, index, textMinute, textRead, language }) => (
  <Link
    href={`/${language}/news/${news.attributes.slug}`}
    key={index}
    className='group border-b border-gray-900 py-4 dark:border-blue-100 md:border-b-0'>
    <Image
      height={800}
      width={800}
      className='h-52 w-full object-cover dark:opacity-80 md:h-32'
      src={news.attributes.image.data.attributes.url}
      alt={news.attributes.title}
    />
    <div className='mt-2 flex flex-col items-start'>
      <div className='mb-2 font-semibold group-hover:underline dark:text-zinc-200'>
        {news.attributes.title}
      </div>
      <p className='text-sm dark:text-zinc-400'>{news.attributes.description}</p>
      <div className='mt-2 text-sm text-gray-600 dark:text-zinc-400'>
        {news.attributes.duration} {textMinute} {textRead}
      </div>
    </div>
  </Link>
);
