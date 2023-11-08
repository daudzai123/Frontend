'use client';

import { getYears } from '@/utils/date.utils';

type AnnouncementSideBarProps = {
  selectedYear: number | null;
  onYearSelect: (year: number) => void;
  language: string;
};

const AnnouncementSideBar: React.FC<AnnouncementSideBarProps> = ({
  selectedYear,
  onYearSelect,
  language,
}) => {
  return (
    <div className='flex flex-col items-center text-black dark:text-zinc-300'>
      {getYears(2021, language).map(({ label, value }, index) => (
        <div
          key={index}
          onClick={() => onYearSelect(value)}
          className={`text-md my-2 cursor-pointer font-semibold hover:text-info-color ${
            value === selectedYear ? 'underline' : ''
          }`}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default AnnouncementSideBar;
