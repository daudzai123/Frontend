import { IFooter, IStrapiGraphqlResult } from '@/common/interfaces';
import { graphqlRequest } from '@/utils/graphql.utils';
import { Language } from '@/utils/language.utils';

export async function getFooterItems(language: Language, limit: number) {
  const query = `
    query FooterItems($locale: I18NLocaleCode!, $limit: Int!) {
      footer(locale: $locale) {
        data {
          id
          attributes {
            title
            links(pagination: {limit: $limit}) {
              id
              label
              url
            }
          }
        }
      }
    }
  `;
  const variables = { locale: language, limit };
  const data = await graphqlRequest(query, variables);
  return data.footer as IStrapiGraphqlResult<IFooter>;
}
