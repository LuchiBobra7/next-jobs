import { Box, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import { JOB_IMAGE_PREVIEW_SIZE } from 'constants/layout'

const JobItemSkeleton = () => (
  <>
    <Box flexShrink={0}>
      <SkeletonCircle size={JOB_IMAGE_PREVIEW_SIZE} />
    </Box>
    <Box ml="4" w="full">
      <Skeleton height="26px" mb={3} />
      <Skeleton height="18px" />
    </Box>
  </>
)

export default JobItemSkeleton
