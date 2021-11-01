import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

type Props = {
  [x: string]: any
}
const JobCard = ({ children, ...props }: Props) => {
  const bg = useColorModeValue('white', 'darkHighlight')
  const boxShadow = useColorModeValue('md', 'none')
  return (
    <Box
      as="article"
      display="flex"
      p={6}
      bg={bg}
      boxShadow={boxShadow}
      borderLeftColor="brand.300"
      transition="all .1s"
      cursor="pointer"
      _hover={{ boxShadow: 'lg' }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default JobCard
