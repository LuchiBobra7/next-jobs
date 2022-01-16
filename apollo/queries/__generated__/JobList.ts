import * as Types from '../../__generated__/types';

import { gql } from '@apollo/client';
import { JobCardFragmentDoc } from './JobFragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RemotesQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.JobWhereInput>;
}>;


export type RemotesQuery = { __typename?: 'Query', remotes: Array<{ __typename?: 'Remote', id: string, name: string, slug: string, type: string, jobs?: Array<{ __typename?: 'Job', locationNames?: string | null | undefined, id: string, title: string, slug: string, tags?: Array<{ __typename?: 'Tag', slug: string, name: string, id: string }> | null | undefined, company?: { __typename?: 'Company', name: string, logoUrl?: string | null | undefined, websiteUrl: string, slug: string } | null | undefined }> | null | undefined }> };


export const RemotesDocument = gql`
    query remotes($first: Int, $where: JobWhereInput) {
  remotes {
    id
    name
    slug
    type
    jobs(first: $first, where: $where) {
      ...jobCard
      locationNames
    }
  }
}
    ${JobCardFragmentDoc}`;

/**
 * __useRemotesQuery__
 *
 * To run a query within a React component, call `useRemotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRemotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemotesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemotesQuery(baseOptions?: Apollo.QueryHookOptions<RemotesQuery, RemotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RemotesQuery, RemotesQueryVariables>(RemotesDocument, options);
      }
export function useRemotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RemotesQuery, RemotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RemotesQuery, RemotesQueryVariables>(RemotesDocument, options);
        }
export type RemotesQueryHookResult = ReturnType<typeof useRemotesQuery>;
export type RemotesLazyQueryHookResult = ReturnType<typeof useRemotesLazyQuery>;
export type RemotesQueryResult = Apollo.QueryResult<RemotesQuery, RemotesQueryVariables>;