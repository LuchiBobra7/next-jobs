import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from 'constants/routes'
import { Flex, Input, Button, useColorModeValue } from '@chakra-ui/react'
import { removeEmptyParams, slugify } from 'utils/index'
import { Query } from 'types/query'

const Search = () => {
  const bg = useColorModeValue('white', 'gray.900')
  const [searchValue, setSearchValue] = useState('')
  const { push } = useRouter()
  return (
    <Flex
      as="form"
      boxShadow="sm"
      p="1"
      minWidth={460}
      borderRadius="lg"
      borderWidth="1px"
      bg={bg}
      onSubmit={(e) => {
        e.preventDefault()
        const queryParams = removeEmptyParams({
          q: slugify(searchValue),
        })
        push({
          pathname: ROUTES.JOBS,
          query: queryParams as Query,
        })
      }}
    >
      <Input
        type="search"
        size="lg"
        px={6}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by keywords..."
        aria-label="Search by title or keywords..."
        border="0"
        _focus={{ border: 0 }}
      />

      <Button
        colorScheme="brand"
        type="submit"
        px={10}
        size="lg"
        borderRadius="lg"
        letterSpacing="wide"
        fontSize="md"
      >
        Find jobs
      </Button>
    </Flex>
  )
}

export default Search
