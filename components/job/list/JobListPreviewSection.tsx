import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import JobList from 'components/job/list'

const JobListPreviewSection = () => {
  return (
    <Box as="section">
      <Container>
        <SimpleGrid
          columns={[2, null, 3]}
          minChildWidth={['320px', null, null]}
          gap={10}
          mb={6}
        >
          <JobList />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default JobListPreviewSection
