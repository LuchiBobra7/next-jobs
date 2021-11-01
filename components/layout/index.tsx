import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import Header from 'components/layout/header'
import Footer from 'components/layout/footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Dev jobs' }: Props) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Flex as="main" flex="1" flexDirection="column">
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Layout
