import { getAnnouncementsBySlug } from '@/api/getAnnouncements';
import CKEditorViewer from '@/components/common/CKEditorViewer/CKEditorViewer';
import { formatAndCleanDate } from '@/utils/date.utils';
import { Language, getLanguage } from '@/utils/language.utils';
import { pageTitleCreator } from '@/utils/title.utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    language: Language;
    slug: string;
  };
};

const fetchAnnouncement = async (slug: string, language: Language) => {
  const announcement = await getAnnouncementsBySlug(slug, language);
  return announcement;
};

export async function generateMetadata({ params: { slug, language } }: Params): Promise<Metadata> {
  const getAnnouncementBySlug = await fetchAnnouncement(slug, language);
  const title = getAnnouncementBySlug ? getAnnouncementBySlug.attributes.title : 'Error';

  return {
    title: pageTitleCreator(title),
  };
}

export default async function AnnouncementItemPage({ params: { slug, language } }: Params) {
  const getAnnouncementBySlug = await fetchAnnouncement(slug, language);

  if (!getAnnouncementBySlug) notFound();

  const {
    attributes: { title, description, createdAt },
  } = getAnnouncementBySlug;

  return (
    <div className='my-10 flex w-full flex-col items-center justify-center px-4'>
      <div className='mb-4 flex flex-col border-b border-gray-300 pb-2 font-light md:w-[55%]'>
        <div className='mb-4 text-3xl font-semibold italic leading-snug text-black dark:text-white md:w-[90%]'>
          {title}
        </div>
        <div className='text-black dark:text-slate-300'>
          <p className=' text-sm'>{formatAndCleanDate(createdAt, language)}</p>
        </div>
      </div>

      <div className='flex flex-col pb-4 md:w-[55%]'>
        <div className='mt-2 dark:text-gray-200'>
          {description && <CKEditorViewer data={description} />}
        </div>
      </div>
    </div>
  );
}
