import { Box, HStack, Heading, Text, Icon } from '@chakra-ui/react'
import { HiOutlineBriefcase, HiOutlineLocationMarker } from 'react-icons/hi'
import JobImage from 'components/job/image'
import { JobItem as JobItemProps } from 'types/job'

const JobItem = ({ job }: JobItemProps) => {
  return (
    <>
      <JobImage src={job.company?.logoUrl} title={job.title} />
      <Box ml="4">
        <Heading fontSize="md" fontWeight="semibold" as="h4" mb={2}>
          {job?.title}
        </Heading>

        <HStack
          spacing="1rem"
          fontSize="sm"
          mb={1}
          fontWeight="500"
          opacity="0.6"
        >
          <HStack
            align="center"
            justify="flex-start"
            transition="ease-out"
            transitionProperty="background"
            transitionDuration="normal"
            _hover={{
              background: 'gray.dark',
            }}
          >
            <Icon
              width={5}
              height={5}
              mr={0.5}
              color={'gray.light'}
              as={HiOutlineBriefcase}
            />
            <Text flex={1}>{job?.company?.name}</Text>
          </HStack>
          <HStack
            align="center"
            justify="flex-start"
            transition="ease-out"
            transitionProperty="background"
            transitionDuration="normal"
            _hover={{
              background: 'gray.dark',
            }}
          >
            <Icon
              width={5}
              height={5}
              mr={0.5}
              color={'gray.light'}
              as={HiOutlineLocationMarker}
            />
            <Text flex={1}>{'Remote'}</Text>
          </HStack>
        </HStack>
      </Box>
    </>
  )
}

export default JobItem
