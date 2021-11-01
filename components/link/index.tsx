import React from 'react'
import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import { LinkItem } from 'types/link-item'

const Link = ({ href = '/', children, ...props }: LinkItem) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  )
}

export default Link
