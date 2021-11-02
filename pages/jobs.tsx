import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from 'lib/withApollo'
import { useRouter } from 'next/router'
import {
  Container,
  SimpleGrid,
  Box,
  Flex,
  HStack,
  Text,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import Layout from 'components/layout'
import { INNER_BLOCK_HEIGHT } from 'constants/layout'
import { JOBS_PER_JOBS_PAGE } from 'constants/jobs'
import { useRemotesQuery } from 'apollo/queries/__generated__/JobList'
import { useJobLazyQuery } from 'apollo/queries/__generated__/JobDetails'
import JobList from 'components/job/list'
import JobDetails from 'components/job/details'
import JobDetailsSkeleton from 'components/job/details/skeleton'
import { RiSearchLine } from 'react-icons/ri'
import { HiOutlineBriefcase } from 'react-icons/hi'

const JobsPage: NextPage = () => {
  const bg = useColorModeValue('gray.50', 'gray.800')
  const { query, push } = useRouter()
  const { data, loading } = useRemotesQuery({
    variables: {
      first: JOBS_PER_JOBS_PAGE,
      where: {
        tags_some: {
          slug_contains: query?.q?.toString().toLowerCase() || '',
        },
      },
    },
  })

  const { jobs } = data?.remotes[0] || {}
  const firstJob = jobs && jobs[0]
  const [getJob, { data: jobData, loading: jobLoading }] = useJobLazyQuery()

  useEffect(() => {
    if (!!firstJob) {
      getJob({
        variables: {
          input: {
            jobSlug: query?.title?.toString() || firstJob.slug,
            companySlug:
              query?.company?.toString() || firstJob.company?.slug || '',
          },
        },
      })
    }
  }, [query, getJob, firstJob])

  console.log(jobData)

  return (
    <Layout title="Jobs | DevJobs">
      <Container py={6} overflow="visible">
        <Flex justify="space-between" align="center" w="full" mb={6}>
          <Text fontSize="sm" as="div" fontWeight="semibold">
            <Icon as={HiOutlineBriefcase} mx={2} w={5} h={5} /> Showing{' '}
            {jobs?.length} results
          </Text>
          <HStack spacing="1rem">
            <InputGroup
              w="260px"
              display={{ base: 'none', md: 'block' }}
              zIndex="0"
            >
              <InputLeftElement pointerEvents="none" size="lg" color="gray.400">
                <Icon as={RiSearchLine} w={5} h={5} />
              </InputLeftElement>
              <Input
                type="search"
                placeholder="Search by keywords..."
                aria-label="Search by keywords..."
                fontSize="sm"
                defaultValue={query?.q}
              />
            </InputGroup>
          </HStack>
        </Flex>
        <Flex
          overflow="visible"
          alignItems="flex-start"
          position="relative"
          w="full"
          mb={9}
          borderWidth={{ lg: '1px' }}
          borderRadius="md"
        >
          <Flex
            position="sticky"
            top="80px"
            w={{ base: 'full', lg: '380px' }}
            h={{ lg: INNER_BLOCK_HEIGHT }}
            flexShrink={0}
            bg={{ lg: bg }}
            overflowY={{ base: 'auto', lg: 'scroll' }}
            flexDirection="column"
            borderTopRadius="md"
          >
            <SimpleGrid
              columns={[1, 2, 1]}
              minChildWidth="320px"
              gap={{ base: 6, lg: 0 }}
              px={{ base: '10px', lg: 0 }}
              py={{ base: '10px', lg: 0 }}
            >
              <JobList
                jobs={jobs}
                jobsPerPage={JOBS_PER_JOBS_PAGE}
                loading={loading}
              />
            </SimpleGrid>
          </Flex>
          <Box
            display={{ base: 'none', lg: 'block' }}
            flex="1"
            px={16}
            py={12}
            minH={{ lg: INNER_BLOCK_HEIGHT }}
            h="full"
            w="full"
          >
            {!jobLoading && jobData?.job?.id ? (
              <JobDetails selectedJob={jobData.job} />
            ) : (
              <JobDetailsSkeleton />
            )}
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export default withApollo(JobsPage, { getDataFromTree })
