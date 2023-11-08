'use client';

import React, { useState } from 'react';
import Selector from '@/components/common/Selector/Selector';
import {
  convertToPersianNumeral,
  getCurrentYear,
  getDateRange,
  getYears,
} from '@/utils/date.utils';
import NewsItem from './NewsItem';
import { getNewsFromTill } from '@/api/getNewsFromTill';
import NewsItemSkeleton from './NewsItemSkeleton';
import { NewsListTextProps } from '@/dictionaries/dictionary.type';
import useSWR from 'swr';
import { Language } from '@/utils/language.utils';

type NewsListProps = {
  language: Language;
  text: NewsListTextProps;
};

const NewsList: React.FC<NewsListProps> = ({ language, text }) => {
  const [selectedYear, setSelectedYear] = useState<null | number>(getCurrentYear());
  const { from, till } = getDateRange(selectedYear!);
  const { data: newsData, isLoading } = useSWR(
    [language, from, till],
    ([language, from, till]) => getNewsFromTill(language, from, till),
    {
      revalidateOnFocus: false,
    },
  );

  const handleYearChange = (value: number) => {
    setSelectedYear(value);
  };

  return (
    <>
      <div className='mb-8 mt-2 flex max-w-[200px] justify-between space-x-1 text-sm'>
        <div className='w-1/2'>
          <Selector<number>
            items={getYears(2021, language)}
            onChange={handleYearChange}
            selected={selectedYear}
          />
        </div>
      </div>
      {selectedYear && (
        <div className='mb-2 flex justify-end text-sm' style={{ maxWidth: '800px' }}>
          {`${text.showingResultsFor} ${
            language == 'en' ? selectedYear : convertToPersianNumeral(selectedYear)
          }`}
        </div>
      )}
      {isLoading ? (
        <NewsItemSkeleton />
      ) : (
        <>
          {newsData &&
            newsData.data.map((item, index: number) => (
              <NewsItem
                language={language}
                key={index}
                item={item.attributes}
                minute={text.minute}
                read={text.read}
              />
            ))}
          {!newsData?.data.length && (
            <div
              className='group items-start border-y border-gray-200 py-2 font-light dark:border-gray-600'
              style={{ maxWidth: '800px' }}>
              {text.noNewsFound}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default NewsList;
