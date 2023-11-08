import { IStrapiGraphqlListResult } from '@/common/interfaces';
import { INews } from '@/components/News/news.interface';
import { graphqlRequest } from '@/utils/graphql.utils';
import { Language } from '@/utils/language.utils';

export async function getNewsFromTill(language: Language, from: Date, till: Date) {
  const query = `
  query Newses($locale: I18NLocaleCode!, $from: DateTime!, $till: DateTime!) {
    newses(locale: $locale, sort: "createdAt", filters: { createdAt: { gte: $from, lte: $till }}) {
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
  }`;

  const variables = { locale: language, from, till };

  const data = await graphqlRequest(query, variables);
  return data.newses as IStrapiGraphqlListResult<INews>;
}
