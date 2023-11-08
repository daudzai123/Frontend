import { IGraphqlResult } from '@/common/interfaces';

export const getLastSlugFromPath = (completePath: string) => {
  const pathSegments = completePath.split('/');
  return pathSegments[pathSegments.length - 1];
};

export const checkContainsSlug = <T extends { slug: string }>(
  slug: string,
  data: IGraphqlResult<T>[],
): boolean => {
  return data.some(item => item.attributes.slug === slug);
};
