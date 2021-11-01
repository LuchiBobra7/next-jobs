import * as Types from '../../../../apollo/__generated__/types';

import { gql } from '@apollo/client';
export type JobCardFragment = { __typename?: 'Job', id: string, title: string, slug: string, tags?: Array<{ __typename?: 'Tag', slug: string, name: string, id: string }> | null | undefined, company?: { __typename?: 'Company', name: string, logoUrl?: string | null | undefined, websiteUrl: string, slug: string } | null | undefined };

export const JobCardFragmentDoc = gql`
    fragment jobCard on Job {
  id
  title
  slug
  tags {
    slug
    name
    id
  }
  company {
    name
    logoUrl
    websiteUrl
    slug
  }
}
    `;