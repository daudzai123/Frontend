import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { convertDateBasedOnLanguage } from '@/utils/date.utils';
import { INews } from '@/components/News/news.interface';

type NewsItemProps = {
  item: INews;
  minute: string;
  read: string;
  language: string;
};

const NewsItem: React.FC<NewsItemProps> = ({ item, minute, read, language }) => {
  return (
    <div
      className='group grid grid-cols-1 items-start gap-0 border-y border-gray-200 py-2 font-light dark:border-gray-600 md:grid-cols-8 md:gap-2'
      style={{ maxWidth: '800px' }}>
      <div className='col-span-1 py-1 text-xs md:col-span-1'>
        {convertDateBasedOnLanguage(item.createdAt, language)}
      </div>
      <Link className='col-span-1 md:col-span-5' href={`/${language}/news/${item.slug}`}>
        <div className='mb-2 text-xl font-normal group-hover:underline'>{item.title}</div>
        <div className='text-sm text-gray-500 dark:text-gray-300'>{item.description}</div>
        <div className='my-1 mb-4 text-xs text-gray-600 dark:text-gray-400'>
          {item.duration} {minute} {read}
        </div>
      </Link>
      {item.image && (
        <Link className='col-span-1 md:col-span-2' href={`/${language}/news/${item.slug}`}>
          <Image
            height={800}
            width={800}
            className='h-40 object-cover'
            src={item.image.data.attributes.url}
            alt={item.title}
          />
        </Link>
      )}
    </div>
  );
};

export default NewsItem;
