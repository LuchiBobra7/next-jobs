import { NextPage } from 'next'
import { VStack, Text } from '@chakra-ui/react'
import withApollo from '../lib/withApollo'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { useRemotesQuery } from '../apollo/queries/__generated__/JobList'

const Home: NextPage = () => {
  const { data } = useRemotesQuery()
  const jobList = data?.remotes[0]?.jobs

  return (
    <VStack>
      {jobList?.map((item) => (
        <Text key={item?.id}>{item?.title}</Text>
      ))}
    </VStack>
  )
}

export default withApollo(Home, { getDataFromTree })
