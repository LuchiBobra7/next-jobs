import { Flex, Text, Heading, Box, Container } from '@chakra-ui/react'
import { buildUrlData } from 'utils'
import Image from 'components/image'
import Search from 'components/search'
import { info } from './hero-info'

const HeroSection = () => {
  const url = buildUrlData('dev_rm5h87')
  return (
    <Box as="section">
      <Flex
        as={Container}
        align="center"
        justify={['center', 'space-around', 'space-between']}
        direction={{ base: 'column-reverse', lg: 'row' }}
        wrap="wrap"
        minH={{ lg: '50vh' }}
      >
        <Flex
          direction="column"
          w={{ md: '70%', lg: '44%' }}
          justify={{
            base: 'center',
            lg: 'space-around',
          }}
          textAlign={{
            base: 'center',
            lg: 'left',
          }}
          pt={8}
          pb={{ base: 8, lg: 0 }}
        >
          <Text fontSize="md" color="brand.500" fontWeight="bold" mb={1}>
            {info.subTitle}
          </Text>
          <Heading
            as="h1"
            size="2xl"
            mb={4}
            fontWeight="bold"
            letterSpacing="wider"
          >
            {info.title}
          </Heading>
          <Heading
            as="p"
            size="md"
            fontWeight="normal"
            opacity="0.6"
            lineHeight={1.5}
            mb={4}
          >
            {info.description}
          </Heading>
          <Search />
        </Flex>
        <Box w={{ base: '100%', md: '50%' }} pt={12}>
          <Image
            height="420px"
            width="600px"
            layout="fill"
            alt="hero"
            src="/dev.svg"
            placeholder="blur"
            blurDataURL={url}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default HeroSection
