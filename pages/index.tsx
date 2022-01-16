import { NextPage } from 'next'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from 'lib/withApollo'
import {
  Box,
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import Link from 'components/link'
import { ROUTES } from 'constants/routes'
import { MIN_POST_WIDTH } from 'constants/layout'
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
  const { jobs } = data?.remotes[0] ?? {}
  return (
    <Layout title="🐣 DevJobs | Just another pet project">
      <HeroSection />
      <Box as="section">
        <Container>
          <Flex align="center" justify="space-between" mb={7} flexWrap="wrap">
            <Heading as="h3" fontSize="xl" color="primary.700">
              Older than a year remote jobs
            </Heading>

            <Link
              href={ROUTES.JOBS}
              color="brand.500"
              fontSize="sm"
              _hover={{ textDecoration: 'none' }}
            >
              Browse all{' '}
              <Text as="span" ml={2}>
                👉
              </Text>
            </Link>
          </Flex>

          <SimpleGrid
            columns={[2, null, 3]}
            minChildWidth={[MIN_POST_WIDTH, null, null]}
            gap={{ base: 5, md: 10 }}
          >
            {!loading && !jobs?.length && 'Empty here'}
            <JobList
              jobs={jobs}
              jobsPerPage={JOBS_PER_HOME_PAGE}
              loading={loading}
              cardBorderRadius={10}
            />
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  )
}

export default withApollo(Home, { getDataFromTree })
