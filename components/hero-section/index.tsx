import { Flex, Text, Heading, Box, Container } from '@chakra-ui/react'
import { buildUrlData } from 'utils'
import Image from 'components/image'
import Search from 'components/search'
import { info } from './hero-info'

const HeroSection = () => {
  const { url, blurredUrl } = buildUrlData('dev_lgdmer')
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
          <Text
            as="h1"
            fontSize={{ base: '1.85rem', md: '2.5rem', lg: '3rem' }}
            lineHeight={1}
            mb={4}
            fontWeight="bold"
            letterSpacing="wider"
          >
            {info.title}
          </Text>
          <Text
            as="p"
            fontSize={{ base: '1.1rem', lg: '1.25rem' }}
            fontWeight="normal"
            opacity="0.6"
            lineHeight={1.5}
            mb={4}
          >
            {info.description}
          </Text>
          <Search />
        </Flex>
        <Box w={{ base: '100%', md: '50%' }} pt={12}>
          <Image
            height="453px"
            width="600px"
            layout="fill"
            alt="hero"
            placeholder="blur"
            src={url}
            blurDataURL={blurredUrl}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default HeroSection
