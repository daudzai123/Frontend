export type StatementTextProps = {
  statement: string;
  minister: string;
};

export type NewsSectionTextProps = {
  latestNewsAndUpdates: string;
  read: string;
  minute: string;
  news: string;
};

export type NewsListTextProps = {
  read: string;
  minute: string;
  news: string;
  search: string;
  noNewsFound: string;
  showingResultsFor: string;
};

export type HomePageTextProps = {
  pageName: string;
  news: string;
  announcements: string;
  statement: StatementTextProps;
  newsSection: NewsSectionTextProps;
};

export type NewsPageTextProps = {
  pageName: string;
  pageDescription: string;
  searchNews: string;
  newsList: NewsListTextProps;
};

export type NotFoundTextProps = {
  pageNotFound: string;
  goBackToHomepage: string;
};

export type AnnouncementTextProps = {
  pageName: string;
  pageDescription: string;
  announcements: string;
  latestAnnouncements: string;
  noAnnouncementFound: string;
};

export type IndustryTextProps = {
  lastUpdatedOn: string;
  read: string;
  minute: string;
};

export type CommonTextProps = {
  notFound: NotFoundTextProps;
};

export type Dictionary = {
  homePage: HomePageTextProps;
  newsPage: NewsPageTextProps;
  common: CommonTextProps;
  announcementPage: AnnouncementTextProps;
  industryPage: IndustryTextProps;
};
