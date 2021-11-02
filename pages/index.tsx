import { NextPage } from 'next'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from 'lib/withApollo'
import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { JOBS_PER_HOME_PAGE } from 'constants/jobs'
import Layout from 'components/layout'
import HeroSection from 'components/hero-section'
import JobList from 'components/job/list'
import { useRemotesQuery } from 'apollo/queries/__generated__/JobList'

const Home: NextPage = () => {
  const { data, loading } = useRemotesQuery({
    variables: {
      first: JOBS_PER_HOME_PAGE,
    },
  })
  const { jobs } = data?.remotes[0] || {}

  return (
    <Layout>
      <HeroSection />
      <Box as="section">
        <Container>
          <SimpleGrid
            columns={[2, null, 3]}
            minChildWidth={['320px', null, null]}
            gap={10}
            mb={6}
          >
            <JobList
              jobs={jobs}
              jobsPerPage={JOBS_PER_HOME_PAGE}
              loading={loading}
            />
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  )
}

export default withApollo(Home, { getDataFromTree })
