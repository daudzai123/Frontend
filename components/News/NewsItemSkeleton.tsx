import React from 'react';

const NewsItemSkeleton: React.FC = () => {
  return (
    <div
      className='grid grid-cols-1 gap-0 border-y border-gray-200 py-2 font-light md:grid-cols-8 md:gap-2'
      style={{ maxWidth: '800px' }}>
      <div className='col-span-1 animate-pulse py-1 text-xs md:col-span-1'>
        <div className='h-4 w-3/4 rounded bg-gray-400'></div>
      </div>
      <div className='col-span-1 animate-pulse md:col-span-5'>
        <div className='mb-2 h-6 w-1/2 rounded bg-gray-400'></div>
        <div className='mb-2 h-4 w-3/4 rounded bg-gray-400'></div>
        <div className='mb-4 h-4 w-1/4 rounded bg-gray-400'></div>
      </div>
      <div className='col-span-1 animate-pulse md:col-span-2'>
        <div className='h-40 rounded bg-gray-400'></div>
      </div>
    </div>
  );
};

export default NewsItemSkeleton;
