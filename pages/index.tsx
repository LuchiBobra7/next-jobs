import { useState } from 'react'
import { NextPage } from 'next'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from 'lib/withApollo'
import { useRemotesQuery } from 'apollo/queries/__generated__/JobList'
import Layout from 'components/layout'
import HeroSection from 'components/hero-section'

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const { data } = useRemotesQuery({
    variables: {
      where: {
        tags_some: {
          slug_contains: searchValue?.toLowerCase(),
        },
      },
    },
  })
  const jobList = data?.remotes[0]?.jobs

  return (
    <Layout>
      <HeroSection />
    </Layout>
  )
}

export default withApollo(Home, { getDataFromTree })
