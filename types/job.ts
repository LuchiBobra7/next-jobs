import { RemotesQuery } from 'apollo/queries/__generated__/JobList'
import { JobCardFragment } from 'apollo/queries/__generated__/JobFragment'
import { JobQuery } from 'apollo/queries/__generated__/JobDetails'

export type JobImage = {
  size?: string | number
  borderRadius?: string
  src?: string | null | undefined
  title?: string
  fallbackSrc?: string
  [x: string]: any
}

export type JobList = {
  jobs: RemotesQuery['remotes'][0]['jobs']
  jobsPerPage: number
  loading: boolean
}

export type JobItem = {
  job: JobCardFragment
}

export type JobDetails = {
  selectedJob?: JobQuery['job']
}
