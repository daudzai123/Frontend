export const dynamic = 'force-dynamic';

import { getNews } from '@/api/getNews';
import { Language, getDictionaryAsync, isLanguage } from '@/utils/language.utils';
import React, { Suspense } from 'react';
import { getStatement } from '@/api/getStatement';
import { Dictionary } from '@/dictionaries/dictionary.type';
import { getAnnouncements } from '@/api/getAnnouncements';
import { getHomePage } from '@/api/getHomePage';
import Statement from '@/components/HomePage/Statement/Statement';
import HomePageLoading from '@/components/common/Loadings/HomePageLoading';
import { IStrapiGraphqlListResult, IStrapiGraphqlResult } from '@/common/interfaces';
import { IStatement } from '@/components/HomePage/homepage.interface';
import { INews } from '@/components/News/news.interface';
import { IAnnouncement } from '@/components/Announcement/announcement.interface';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import News from '@/components/News/News';
import AnnouncementCard from '@/components/Announcement/AnnouncementCard';
import { pageTitleCreator } from '@/utils/title.utils';
import { Metadata } from 'next';
import HeroSection from '@/components/HomePage/HeroSection/HeroSection';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    language: Language;
  };
};

const getHeroSection = async (language: Language) => {
  const {
    data: {
      attributes: { hero },
    },
  } = await getHomePage(language);
  return hero;
};

export async function generateMetadata({ params: { language } }: Params): Promise<Metadata> {
  const { title, subtitle: description } = await getHeroSection(language);
  return {
    title: pageTitleCreator(title),
    description: description,
  };
}

export default async function Home({ params: { language } }: Params) {
  if (!isLanguage(language)) notFound();
  const hero = await getHeroSection(language);
  const [
    {
      homePage: { statement: statementText, newsSection },
      announcementPage,
    },
    newsData,
    statement,
    announcementData,
  ] = (await Promise.all([
    getDictionaryAsync(language),
    getNews(5, language),
    getStatement(language),
    getAnnouncements(3, language),
  ])) as [
    Dictionary,
    IStrapiGraphqlListResult<INews>,
    IStrapiGraphqlResult<IStatement>,
    IStrapiGraphqlListResult<IAnnouncement>,
  ];

  return (
    <Suspense fallback={<HomePageLoading />}>
      {hero && (
        <HeroSection
          language={language}
          title={hero.title}
          subtitle={hero.subtitle}
          buttons={hero.buttons}
        />
      )}
      {statement.data && <Statement text={statementText} statement={statement} />}
      {newsData.data.length > 0 && (
        <>
          <SectionTitle
            title={newsSection.news}
            subtitle={newsSection.latestNewsAndUpdates}
            link={`/${language}/news`}
          />
          <News
            textMinute={newsSection.minute}
            textRead={newsSection.read}
            news={newsData.data}
            language={language}
          />
          <div className='border-b border-gray-900 py-2 dark:border-gray-100'></div>
        </>
      )}
      <SectionTitle
        title={announcementPage.announcements}
        subtitle={announcementPage.latestAnnouncements}
        link={`/${language}/announcements`}
      />
      <div className='flex flex-row flex-wrap items-stretch gap-2'>
        {announcementData.data.map(announcement => (
          <AnnouncementCard
            language={language}
            key={announcement.id}
            {...announcement.attributes}
          />
        ))}
      </div>
      <div className='border-b border-gray-900 py-2 dark:border-gray-100'></div>
    </Suspense>
  );
}
