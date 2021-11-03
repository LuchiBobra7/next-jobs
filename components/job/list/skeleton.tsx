import JobCard from 'components/job/card'
import JobItemSkeleton from 'components/job/item/skeleton'

type Props = {
  jobsPerPage: number
}

const JobListSkeleton = ({ jobsPerPage }: Props) => {
  return (
    <>
      {[...new Array(jobsPerPage)].map((_, i) => (
        <JobCard key={i}>
          <JobItemSkeleton />
        </JobCard>
      ))}
    </>
  )
}

export default JobListSkeleton
