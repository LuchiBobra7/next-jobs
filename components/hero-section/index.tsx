import { Flex, Text, Heading, Box, Container } from '@chakra-ui/react'
import { buildUrl } from 'cloudinary-build-url'
import Image from 'components/image'
import Search from 'components/search'

export const info = {
  subTitle: `For developers`,
  title: `Join us & Apply to remote software jobs`,
  description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
    beatae nobis assumenda sequi ipsum nam quia quo, quasi iure
    obcaecati dolore corrupti?`,
}

const HeroSection = () => {
  const url = buildUrl('dev_rm5h87', {
    cloud: {
      cloudName: 'dxxzokncv',
    },
    transformations: {
      effect: {
        name: 'pixelate',
        value: 40,
      },
    },
  })

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
          w={{ base: '70%', lg: '44%' }}
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
        <Box w={{ base: '50%' }} pt={12}>
          <Image
            height="420px"
            width="600px"
            layout="fill"
            alt="hero"
            src="https://res.cloudinary.com/dxxzokncv/image/upload/v1635777478/dev_rm5h87.svg"
            placeholder="blur"
            blurDataURL={url}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default HeroSection
