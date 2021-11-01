import { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { ROUTES } from 'constants/routes'
import { JOBS_PER_HOME_PAGE } from 'constants/jobs'
import JobCard from 'components/job/card'
import JobItem from 'components/job/item'
import JobListSkeleton from 'components/job/list/skeleton'
import { removeEmptyParams } from 'utils/index'
import { Query as QueryProps } from 'types/query'
import { useRemotesQuery } from './__generated__/JobList'
import React from 'react'

const JobList: FC = () => {
  const { push, query } = useRouter()
  const { data, loading } = useRemotesQuery({
    variables: {
      first: JOBS_PER_HOME_PAGE,
    },
  })
  const jobs = data?.remotes[0]?.jobs

  if (loading) return <JobListSkeleton />
  return (
    <>
      {jobs?.map((job) => (
        <JobCard
          key={job.id}
          onClick={() => {
            const queryParams = removeEmptyParams({
              q: query?.q,
              title: job?.slug,
              company: job?.company?.slug,
            })

            push({
              pathname: ROUTES.JOBS,
              query: queryParams as QueryProps,
            })
          }}
        >
          <JobItem job={job} />
        </JobCard>
      ))}
    </>
  )
}

export default JobList
