import { IStrapiGraphqlListResult } from '../common/interfaces';
import { IMenu } from '@/components/common/Navbar/navbar.interface';
import { graphqlRequest } from '@/utils/graphql.utils';
import { Language } from '@/utils/language.utils';

export async function getMenus(language: Language) {
  const query = `
    query Menus($locale: I18NLocaleCode!) {
      menus(locale: $locale, sort: "Order") {
        data {
          id
          attributes {
            name
            subMenus: sub_menus {
              data {
                id
                attributes {
                  name
                  description
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    locale: language,
  };

  const data = await graphqlRequest(query, variables);
  return data.menus as IStrapiGraphqlListResult<IMenu>;
}
