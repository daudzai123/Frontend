import { IStrapiGraphqlResult, IImage } from '@/common/interfaces';

export interface INews {
  title: string;
  description: string;
  news_details: string;
  updatedAt: string;
  createdAt: string;
  duration: string;
  slug: string;
  image: IStrapiGraphqlResult<IImage>;
}
