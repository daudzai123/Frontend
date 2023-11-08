import { IStrapiGraphqlResult } from '@/common/interfaces';
import { IStatement } from '@/components/HomePage/homepage.interface';
import { graphqlRequest } from '@/utils/graphql.utils';
import { Language, getLanguage } from '@/utils/language.utils';

export async function getStatement(language: Language) {
  const query = `
    query Statement($locale: I18NLocaleCode!) {
      statement(locale: $locale) {
        data  {
          id
          attributes {
            bismillah,
            statement,
            name,
            job,
            date,
            place,
            imageUrl {
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
  const variables = { locale: language };
  const data = await graphqlRequest(query, variables);
  return data.statement as IStrapiGraphqlResult<IStatement>;
}
