import { IStrapiGraphqlListResult, IGraphqlResult } from '@/common/interfaces';
import { INews } from '@/components/News/news.interface';
import { graphqlRequest } from '@/utils/graphql.utils';
import { Language, getLanguage } from '@/utils/language.utils';

export async function getNews(limit: number, language: Language) {
  const query = `
    query Newses($locale: I18NLocaleCode!, $limit: Int!) {
      newses(locale: $locale, sort: "createdAt", pagination: { limit: $limit }) {
        data {
          id
          attributes {
            title
            description
            slug
            duration
            image {
              data {
                attributes {
                  url
                  name
                }
              }
            }
            createdAt
          }
        }
      }
    }
  `;

  const variables = {
    locale: language,
    limit,
  };

  const data = await graphqlRequest(query, variables);

  return data.newses as IStrapiGraphqlListResult<INews>;
}

export async function getNewsBySlug(slug: string, language: Language) {
  const query = `
    query NewsBySlug($locale: I18NLocaleCode!, $slug: String!) {
      newses(locale: $locale, filters: { slug: { eq: $slug} }) {
        data {
          id
          attributes {
            title
            description
            news_details
            slug
            duration
            image {
              data {
                attributes {
                  url
                  name
                }
              }
            }
            updatedAt
            createdAt
          }
        }
      }
    }
  `;

  const variables = {
    locale: language,
    slug,
  };

  const data = await graphqlRequest(query, variables);

  return data.newses.data[0] as IGraphqlResult<INews>;
}
