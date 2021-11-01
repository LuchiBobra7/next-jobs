import { useState } from 'react'
import { NextPage } from 'next'
import { getDataFromTree } from '@apollo/client/react/ssr'
import withApollo from 'lib/withApollo'
import { useRemotesQuery } from 'apollo/queries/__generated__/JobList'
import { VStack, Text, Input } from '@chakra-ui/react'

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
    <VStack>
      <Input onChange={(e) => setSearchValue(e.target.value)} />
      {jobList?.map((item) => (
        <Text key={item?.id}>{item?.title}</Text>
      ))}
    </VStack>
  )
}

export default withApollo(Home, { getDataFromTree })
