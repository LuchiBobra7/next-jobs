import { HStack, VStack, Flex, Skeleton, SkeletonText } from '@chakra-ui/react'

const JobDetailsSkeleton = () => {
  return (
    <Flex justify="center" direction="column">
      <HStack spacing="2rem" mb={7} align="flex-start">
        <Skeleton w="76px" h="76px" borderRadius="xl" />
        <VStack spacing="1rem" align="flex-start">
          <Skeleton w="300px" h="36px" />
          <Skeleton w="200px" h="36px" />
        </VStack>
      </HStack>
      <SkeletonText mt="4" noOfLines={40} spacing="2" size="20px" />
    </Flex>
  )
}

export default JobDetailsSkeleton
