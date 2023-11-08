'use client';

import { getAnnouncementFromTill } from '@/api/getAnnouncementFromTill';
import AnnouncementCard from '@/components/Announcement/AnnouncementCard';
import AnnouncementsListSkeleton from '@/components/Announcement/AnnouncementListSkeleton';
import AnnouncementSideBar from '@/components/Announcement/AnnouncementSideBar';
import { getCurrentYear, getDateRange } from '@/utils/date.utils';
import { Language } from '@/utils/language.utils';
import { useState } from 'react';
import useSWR from 'swr';

type AnnouncementListProps = {
  language: Language;
  noAnnouncementFoundText: string;
};

const AnnouncementList: React.FC<AnnouncementListProps> = ({
  language,
  noAnnouncementFoundText,
}) => {
  const [selectedYear, setSelectedYear] = useState<null | number>(getCurrentYear());
  const { from, till } = getDateRange(selectedYear!);

  const { data: announcementData, isLoading } = useSWR(
    [language, from, till],
    ([language, from, till]) => getAnnouncementFromTill(language, from, till),
    { revalidateOnFocus: false },
  );

  const handleYearChange = (value: number) => {
    setSelectedYear(value);
  };

  return (
    <div className='flex w-full flex-row gap-4'>
      <div className='w-[10%]'>
        <AnnouncementSideBar
          selectedYear={selectedYear}
          onYearSelect={handleYearChange}
          language={language}
        />
      </div>
      {isLoading ? (
        <AnnouncementsListSkeleton />
      ) : (
        <>
          {announcementData && announcementData.data.length > 0 ? (
            <div className='flex w-[90%] flex-row flex-wrap gap-4'>
              {announcementData.data.map(announcement => (
                <AnnouncementCard
                  language={language}
                  key={announcement.id}
                  {...announcement.attributes}
                />
              ))}
            </div>
          ) : (
            <div
              className='group items-start py-2 font-light dark:text-zinc-300'
              style={{ maxWidth: '800px' }}>
              {noAnnouncementFoundText}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AnnouncementList;
