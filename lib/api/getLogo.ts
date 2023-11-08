import { IStrapiGraphqlResult, ILogo } from '@/common/interfaces';
import { graphqlRequest } from '@/utils/graphql.utils';

export async function getLogo() {
  const query = `
    query Logo {
      logo {
        data {
          id
          attributes {
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await graphqlRequest(query);
  return data.logo as IStrapiGraphqlResult<ILogo>;
}
