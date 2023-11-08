export const dynamic = 'force-dynamic';

import AnnouncementList from '@/components/Announcement/AnnouncementList';
import PageTitle from '@/components/common/PageTitle/PageTitle';
import { Language, getDictionaryAsync, getLanguage } from '@/utils/language.utils';
import { pageTitleCreator } from '@/utils/title.utils';

type Params = {
  params: {
    language: Language;
  };
};

const getText = async (language: Language) => {
  const { announcementPage } = await getDictionaryAsync(language);
  return announcementPage;
};

export async function generateMetadata({ params: { language } }: Params) {
  const { pageName, pageDescription: description } = await getText(language);
  return {
    title: pageTitleCreator(pageName),
    description,
  };
}

export default async function AnnouncementPage({ params: { language } }: Params) {
  const { announcements, noAnnouncementFound } = await getText(language);
  return (
    <>
      <PageTitle title={announcements} />
      <AnnouncementList noAnnouncementFoundText={noAnnouncementFound} language={language} />
    </>
  );
}
