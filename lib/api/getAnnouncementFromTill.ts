import { IStrapiGraphqlListResult } from '@/common/interfaces';
import { IAnnouncement } from '@/components/Announcement/announcement.interface';
import { graphqlRequest } from '@/utils/graphql.utils';
import { Language } from '@/utils/language.utils';

export async function getAnnouncementFromTill(language: Language, from: Date, till: Date) {
  const query = `
  query Announcements($locale: I18NLocaleCode!, $from: DateTime!, $till: DateTime!) {
    announcements(locale: $locale, sort: "createdAt", filters: { createdAt: { gte: $from, lte: $till}}) {
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
  const variables = { locale: language, from, till };
  const data = await graphqlRequest(query, variables);
  return data.announcements as IStrapiGraphqlListResult<IAnnouncement>;
}
