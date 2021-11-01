import { JOBS_PER_HOME_PAGE } from 'constants/jobs'
import JobCard from 'components/job/card'
import JobItemSkeleton from 'components/job/item/skeleton'

const JobListSkeleton = () => (
  <>
    {[...new Array(JOBS_PER_HOME_PAGE)].map((_, i) => (
      <JobCard key={i}>
        <JobItemSkeleton />
      </JobCard>
    ))}
  </>
)

export default JobListSkeleton
