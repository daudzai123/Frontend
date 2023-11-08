import { IStrapiGraphqlListResult } from '@/common/interfaces';

export interface IMenu {
  name: string;
  subMenus: IStrapiGraphqlListResult<ISubMenu>;
}

export interface ISubMenu {
  name: string;
  description: string;
  url: string;
}
