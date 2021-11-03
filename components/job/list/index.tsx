import React from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from 'constants/routes'
import JobCard from 'components/job/card'
import JobItem from 'components/job/item'
import JobListSkeleton from 'components/job/list/skeleton'
import { JobList as JobListProps } from 'types/job'
import useQueryParams from 'hooks/useQueryParams'

const JobList = ({
  jobs,
  jobsPerPage,
  loading,
  cardBorderRadius,
  selectedJobId,
}: JobListProps) => {
  const { query } = useRouter()

  const { setNewQuery, setNewPath } = useQueryParams(null)
  if (loading) return <JobListSkeleton jobsPerPage={jobsPerPage} />

  return (
    <>
      {jobs?.map((job) => (
        <JobCard
          key={job.id}
          borderRadius={cardBorderRadius}
          borderLeftWidth={selectedJobId === job.id ? '7px' : 0}
          borderLeftColor="brand.300"
          onClick={() => {
            setNewPath(ROUTES.JOBS)
            setNewQuery({
              q: query?.q,
              title: job?.slug,
              company: job?.company?.slug,
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
