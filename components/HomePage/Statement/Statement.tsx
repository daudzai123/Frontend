import React from 'react';
import Image from 'next/image';
import { IStrapiGraphqlResult } from '@/common/interfaces';
import { IStatement } from '@/components/HomePage/homepage.interface';
import { StatementTextProps } from '@/dictionaries/dictionary.type';

type StatementProps = {
  statement: IStrapiGraphqlResult<IStatement>;
  text: StatementTextProps;
};

const Statement: React.FC<StatementProps> = ({
  statement: {
    data: {
      attributes: { name, job, date, place, statement, imageUrl, bismillah },
    },
  },
  text,
}) => {
  return (
    <div className='mt-5 flex flex-col items-start justify-center border-b border-gray-900 py-4 text-black transition-all dark:border-gray-100 dark:text-gray-200'>
      <div className='mb-4 flex flex-row gap-1'>
        <div className='text-md font-semibold'>{text.statement}</div>
        <p className='italic text-gray-500 dark:text-gray-300'>{text.minister}</p>
      </div>
      <div className='md:gap-15 flex flex-col-reverse items-center gap-4 md:flex-row'>
        <div className='my-4 text-justify md:w-[70%]'>
          <p className='text-md mb-2'>{bismillah}</p>
          <p>{`"${statement}"`}</p>
          <p className='text-md mt-4 font-semibold'>{name}</p>
          <p className='md:text-md text-sm'>{job}</p>
          <p className='text-sm md:text-sm'>
            {date} - {place}
          </p>
        </div>
        {imageUrl.data && (
          <Image
            src={imageUrl.data.attributes.url}
            height={800}
            width={800}
            alt={name}
            className='h=[40%] w-[50%] object-cover md:h-[300px]'
          />
        )}
      </div>
    </div>
  );
};

export default Statement;
