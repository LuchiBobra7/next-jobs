import { useRouter } from 'next/router'
import { ROUTES } from 'constants/routes'
import JobCard from 'components/job/card'
import JobItem from 'components/job/item'
import JobListSkeleton from 'components/job/list/skeleton'
import { removeEmptyParams } from 'utils/index'
import { Query as QueryProps } from 'types/query'
import { JobList as JobListProps } from 'types/job'

const JobList = ({ jobs, jobsPerPage, loading }: JobListProps) => {
  const { push, query } = useRouter()
  if (loading) return <JobListSkeleton jobsPerPage={jobsPerPage} />
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
