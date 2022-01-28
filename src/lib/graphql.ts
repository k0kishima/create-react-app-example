import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_SERVER_BASE_URL } from '@/config';

export const graphqlClient = new GraphQLClient(GRAPHQL_SERVER_BASE_URL);
