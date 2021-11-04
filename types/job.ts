import { RemotesQuery } from 'apollo/queries/__generated__/JobList'
import { JobCardFragment } from 'apollo/queries/__generated__/JobFragment'
import { JobQuery } from 'apollo/queries/__generated__/JobDetails'

export type BorderRadius = {
  base?: number | string
  sm?: number | string
  md?: number | string
  lg?: number | string
}

export type JobImage = {
  size?: string | number
  borderRadius?: number | string | BorderRadius
  src?: string | null | undefined
  title?: string
  fallbackSrc?: string
  [x: string]: any
}

export type JobList = {
  jobs: RemotesQuery['remotes'][0]['jobs']
  jobsPerPage: number
  loading: boolean
  cardBorderRadius?: string | number | BorderRadius
  selectedJobId?: string | null
}

export type JobItem = {
  job: JobCardFragment
}

export type JobDetails = {
  selectedJob: JobQuery['job']
}
