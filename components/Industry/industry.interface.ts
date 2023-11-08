import { IStrapiGraphqlListResult } from '@/common/interfaces';

export interface IIndustry {
  label: string;
  url: string;
  description: string;
  duration: string;
  updatedAt: string;
  industry_details: IStrapiGraphqlListResult<IIndustryDetails>;
}

export interface IIndustryDetails {
  label: string;
  slug: string;
  description: string;
  duration: string;
  updatedAt: string;
}
