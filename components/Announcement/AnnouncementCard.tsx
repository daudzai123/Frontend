import Link from 'next/link';
import { formatAndCleanDate } from '@/utils/date.utils';

interface AnnouncementCardProps {
  language: string;
  title: string;
  slug: string;
  createdAt: string;
}

const AnnouncementCard = ({ language, title, slug, createdAt }: AnnouncementCardProps) => {
  return (
    <Link
      href={`/${language}/announcements/${slug}`}
      className='group flex h-[max-content]  flex-col rounded bg-white p-6 shadow-sm dark:bg-[#202123]'>
      <div className='mb-1 text-sm text-gray-900 dark:text-zinc-300'>
        {formatAndCleanDate(createdAt, language)}
      </div>
      <div className='h-[80%] font-medium text-gray-900 group-hover:underline dark:text-zinc-300'>
        {title}
      </div>
    </Link>
  );
};

export default AnnouncementCard;
