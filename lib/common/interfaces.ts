export interface IStrapiGraphqlListResult<T> {
  data: IGraphqlResult<T>[];
}

export interface IStrapiGraphqlResult<T> {
  data: IGraphqlResult<T>;
}

export interface IGraphqlResult<T> {
  id: string;
  attributes: T;
}

export interface IImage {
  name: string;
  url: string;
}

export interface IButton {
  label: string;
  url: string;
  type: string;
}

export interface ILogo {
  image: IStrapiGraphqlResult<IImage>;
}

export interface ILink {
  id: string;
  label: string;
  url: string;
}

export interface IFooter {
  title: string;
  links: ILink[];
}

export type Cookie = {
  name: string;
  value: string;
};

export type Theme = 'light' | 'dark';
