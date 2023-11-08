import { IStrapiGraphqlResult } from '@/common/interfaces';
import { IHomePage } from '@/components/HomePage/homepage.interface';
import { graphqlRequest } from '@/utils/graphql.utils';
import { Language, getLanguage } from '@/utils/language.utils';

export async function getHomePage(language: Language) {
  const query = `
    query HomePage($locale: I18NLocaleCode!) {
      homePage(locale: $locale) {
        data {
          id
          attributes {
            hero {
              title
              subtitle
              buttons {
                label
                url
                type
              }
            }
          }
        }
      }
    }
  `;

  const variables = { locale: language };

  const data = await graphqlRequest(query, variables);
  return data.homePage as IStrapiGraphqlResult<IHomePage>;
}
