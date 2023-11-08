import { IStrapiGraphqlListResult, IGraphqlResult } from '@/common/interfaces';
import { IIndustry, IIndustryDetails } from '@/components/Industry/industry.interface';
import { graphqlRequest } from '@/utils/graphql.utils';
import { Language, getLanguage } from '@/utils/language.utils';

export async function getIndustries(language: Language) {
  const query = `
  query GetIndustries($locale: I18NLocaleCode!) {
    industries(locale: $locale, sort: "Order") {
      data {
        id
        attributes {
          label
          url
          industry_details (sort: "Order") {
            data {
              id
              attributes {
                label
                slug
              }
            }
          }
        }
      }
    }
  }`;

  const variables = {
    locale: language,
  };

  const data = await graphqlRequest(query, variables);
  return data.industries as IStrapiGraphqlListResult<IIndustry>;
}

export async function getIndustriesByURL(url: string, language: Language) {
  const query = `
  query GetIndustriesByURL($locale: I18NLocaleCode!, $url: String!) {
    industries(locale: $locale, filters: { url: { eq: $url }}) {
      data {
        id
        attributes {
          label
          description
          duration
          url
          updatedAt
        }
      }
    }
  }
`;
  const variables = {
    locale: language,
    url,
  };
  const data = await graphqlRequest(query, variables);
  return data.industries.data[0] as IGraphqlResult<IIndustry>;
}

export async function getIndustryDetailBySlug(slug: string, language: Language) {
  const query = `
  query GetIndustryDetailBySlug($locale: I18NLocaleCode!, $slug: String!) {
    industryDetails(locale: $locale, filters: { slug: { eq: $slug }}) {
      data {
        id
        attributes {
          label
          description
          duration
          updatedAt
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
  return data.industryDetails.data[0] as IGraphqlResult<IIndustryDetails>;
}
