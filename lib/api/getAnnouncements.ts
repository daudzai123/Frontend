import { IStrapiGraphqlListResult, IGraphqlResult } from '@/common/interfaces';
import { IAnnouncement } from '@/components/Announcement/announcement.interface';
import { graphqlRequest } from '@/utils/graphql.utils';
import { Language, getLanguage } from '@/utils/language.utils';

export async function getAnnouncements(limit: number, language: Language) {
  const query = `
    query Announcements($locale: I18NLocaleCode!, $limit: Int!) {
      announcements(locale: $locale, sort: "createdAt:desc", pagination: { limit: $limit }) {
        data {
          id
          attributes {
            title
            slug
            createdAt
          }
        }
      }
    }
  `;
  const variables = { locale: language, limit };
  const data = await graphqlRequest(query, variables);
  return data.announcements as IStrapiGraphqlListResult<IAnnouncement>;
}

export async function getAnnouncementsBySlug(slug: string, language: Language) {
  const query = `
    query AnnouncementsBySlug($locale: I18NLocaleCode!, $slug: String!) {
      announcements(locale: $locale, filters: { slug: { eq: $slug }}) { 
        data {
          id
          attributes {
            title
            description
            slug
            createdAt
          }
        }
      }
    }
  `;
  const variables = { locale: language, slug };
  const data = await graphqlRequest(query, variables);
  return data.announcements.data[0] as IGraphqlResult<IAnnouncement>;
}
