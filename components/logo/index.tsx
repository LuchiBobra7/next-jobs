import React, { FC } from 'react'
import { Icon } from '@chakra-ui/react'
import { RiCodeBoxFill } from 'react-icons/ri'
import Link from 'components/link'

const Logo: FC = () => {
  return (
    <Link
      display="flex"
      alignItems="center"
      fontSize="1.2rem"
      fontWeight="bold"
      mb="0"
      letterSpacing="0.2px"
      _hover={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Icon as={RiCodeBoxFill} color="brand.500" w={12} h={12} mr={3} />
      devJobs
    </Link>
  )
}

export default Logo
