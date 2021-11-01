import { useState } from 'react'
import { NextPage } from 'next'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from 'lib/withApollo'
import Layout from 'components/layout'
import HeroSection from 'components/hero-section'
import JobListPreviewSection from 'components/job/list/JobListPreviewSection'

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <JobListPreviewSection />
    </Layout>
  )
}

export default withApollo(Home, { getDataFromTree })
