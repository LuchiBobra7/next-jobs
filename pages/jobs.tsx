import { useEffect, useMemo } from 'react'
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
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useMediaQuery,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { isLgScreen } from 'theme'
import Layout from 'components/layout'
import { INNER_BLOCK_HEIGHT } from 'constants/layout'
import { JOBS_PER_JOBS_PAGE } from 'constants/jobs'
import { useRemotesQuery } from 'apollo/queries/__generated__/JobList'
import { useJobLazyQuery } from 'apollo/queries/__generated__/JobDetails'
import JobList from 'components/job/list'
import JobDetails from 'components/job/details'
import JobDetailsSkeleton from 'components/job/details/skeleton'
import EmptyData from 'components/empty-data'
import { RiSearchLine } from 'react-icons/ri'
import { HiOutlineBriefcase } from 'react-icons/hi'
import useQueryParams from 'hooks/useQueryParams'

const JobsPage: NextPage = () => {
  const bg = useColorModeValue('gray.50', 'gray.800')
  const { query } = useRouter()

  const { setNewQuery } = useQueryParams(null)
  const { data, loading, error } = useRemotesQuery({
    variables: {
      first: JOBS_PER_JOBS_PAGE,
      where: {
        tags_some: {
          slug_contains: query?.q?.toString().toLowerCase() || '',
        },
      },
    },
  })

  const { jobs } = data?.remotes[0] ?? {}
  const firstJob = jobs && jobs[0]
  const [getJob, { data: jobData, loading: jobLoading }] = useJobLazyQuery()

  const [isLg] = useMediaQuery(isLgScreen)
  const isJobInfo = !jobLoading && jobData?.job?.id
  const { isOpen, onOpen, onClose } = useDisclosure()

  const memoizedCallback = useMemo(() => {
    if (!isLg && isJobInfo && query.title) onOpen()
  }, [isLg, isJobInfo, query.title, onOpen])

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
  }, [query, firstJob, getJob, memoizedCallback])

  if (!loading && !jobs?.length) return <EmptyData imgSrc="/empty_data.svg" />
  return (
    <Layout title="Jobs | DevJobs">
      <Container py={6} overflow="visible">
        <Flex
          justify="space-between"
          wrap="wrap"
          align="center"
          w="full"
          mb={{ base: 0, md: 6 }}
        >
          <Text fontSize="sm" as="div" fontWeight="semibold">
            <Icon as={HiOutlineBriefcase} mx={2} w={5} h={5} /> Showing{' '}
            {jobs?.length} results
          </Text>
          <HStack my={{ base: 4, md: 0 }} w={{ base: '100%', md: '20rem' }}>
            <InputGroup zIndex="0">
              <InputLeftElement pointerEvents="none" size="lg" color="gray.400">
                <Icon as={RiSearchLine} w={5} h={5} />
              </InputLeftElement>
              <Input
                type="search"
                placeholder="Search by keywords..."
                aria-label="Search by keywords..."
                fontSize="sm"
                defaultValue={query?.q}
                onChange={(e) => {
                  setNewQuery({ q: e.currentTarget.value })
                }}
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
                selectedJobId={isLg ? jobData?.job?.id : null}
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
            {isJobInfo ? (
              <JobDetails selectedJob={jobData.job} />
            ) : (
              <JobDetailsSkeleton />
            )}

            {!isLg && isJobInfo && (
              <Drawer
                onClose={() => {
                  setNewQuery({ q: query?.q })
                  onClose()
                }}
                isOpen={isOpen}
                placement="right"
                size="sm"
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader
                    borderBottomWidth="1px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Button onClick={() => onClose()}>Back to Jobs</Button>
                    <DrawerCloseButton />
                  </DrawerHeader>
                  <DrawerBody py={7}>
                    <JobDetails selectedJob={jobData?.job} />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            )}
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export default withApollo(JobsPage, { getDataFromTree })
