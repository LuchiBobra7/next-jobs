import React from 'react'
import { Container, Box } from '@chakra-ui/react'
import Navigation from 'components/layout/footer/navigation'

const Footer = () => (
  <Box as="footer" fontSize="sm">
    <Container display="flex" justifyContent="center" w="full">
      <Navigation />
    </Container>
  </Box>
)

export default Footer
