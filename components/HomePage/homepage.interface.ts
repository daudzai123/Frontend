import { IStrapiGraphqlResult, IImage, IButton } from '../../lib/common/interfaces';

export interface IStatement {
  bismillah: string;
  statement: string;
  name: string;
  job: string;
  date: string;
  place: string;
  imageUrl: IStrapiGraphqlResult<IImage>;
}

export interface IHero {
  title: string;
  subtitle: string;
  buttons: IButton[];
}

export interface IHomePage {
  hero: IHero;
}
