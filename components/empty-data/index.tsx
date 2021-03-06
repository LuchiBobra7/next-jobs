import React from 'react'
import { Container, Heading, Button } from '@chakra-ui/react'
import Image from 'components/image'
import Layout from 'components/layout'
import Search from 'components/search'
import { buildUrlData } from 'utils'

type Props = {
  imgSrc?: string
  imgBlurredSrc?: string
  imgSize?: string
  text?: string
  search?: boolean
}
const EmptyData = ({
  imgSrc = 'Personal_files-rafiki_y6bsoa',
  imgSize = '460px',
  text = 'Ups!... no results found',
  search = true,
}: Props) => {
  const { url } = buildUrlData(imgSrc)
  return (
    <Layout>
      <Container
        py={9}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Image alt="No results" width={imgSize} height={imgSize} src={url} />
        <Heading mb={9}>{text}</Heading>
        {search ? <Search /> : <Button>Back to home page</Button>}
      </Container>
    </Layout>
  )
}

export default EmptyData
