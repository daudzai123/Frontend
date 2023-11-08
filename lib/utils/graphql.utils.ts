import { Language } from '@/utils/language.utils';

const SERVER_URL = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL;

const getResponseJson = async (response: Response) => {
  const { data, errors } = await response.json();
  if (errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);
  }
  return data;
};

type GraphQLVariables = Record<string, string | number | Language | Date>;

const fetchGraphQLData = async (url: RequestInfo, query: string, variables?: GraphQLVariables) => {
  const body = JSON.stringify({ query, variables });
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
      cache: 'no-store',
    });

    return await getResponseJson(response);
  } catch (error: any) {
    throw new Error(`Network error: ${error.message}`);
  }
};

export const graphqlRequest = (query: string, variables?: GraphQLVariables) => {
  return fetchGraphQLData(`${SERVER_URL}/graphql`, query, variables);
};
