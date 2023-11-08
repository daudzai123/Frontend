import React from 'react';

const AnnouncementsListSkeleton: React.FC = () => {
  const items = new Array(3).fill(null);
  return (
    <div className='flex w-[90%] flex-row flex-wrap gap-4'>
      {items.map((_, index) => (
        <div key={index} className='w-full animate-pulse'>
          <div className='h-24 rounded bg-gray-400'></div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementsListSkeleton;
