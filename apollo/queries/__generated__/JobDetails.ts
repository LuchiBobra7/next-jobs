import * as Types from '../../__generated__/types';

import { gql } from '@apollo/client';
import { JobCardFragmentDoc } from './JobFragment';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type JobQueryVariables = Types.Exact<{
  input: Types.JobInput;
}>;


export type JobQuery = { __typename?: 'Query', job: { __typename?: 'Job', description?: string | null | undefined, applyUrl?: string | null | undefined, id: string, title: string, slug: string, tags?: Array<{ __typename?: 'Tag', slug: string, name: string, id: string }> | null | undefined, company?: { __typename?: 'Company', name: string, logoUrl?: string | null | undefined, websiteUrl: string, slug: string } | null | undefined } };


export const JobDocument = gql`
    query job($input: JobInput!) {
  job(input: $input) {
    ...jobCard
    description
    applyUrl
  }
}
    ${JobCardFragmentDoc}`;

/**
 * __useJobQuery__
 *
 * To run a query within a React component, call `useJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useJobQuery(baseOptions: Apollo.QueryHookOptions<JobQuery, JobQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JobQuery, JobQueryVariables>(JobDocument, options);
      }
export function useJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobQuery, JobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JobQuery, JobQueryVariables>(JobDocument, options);
        }
export type JobQueryHookResult = ReturnType<typeof useJobQuery>;
export type JobLazyQueryHookResult = ReturnType<typeof useJobLazyQuery>;
export type JobQueryResult = Apollo.QueryResult<JobQuery, JobQueryVariables>;