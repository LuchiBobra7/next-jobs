import React, { useState } from 'react'
import { ROUTES } from 'constants/routes'
import { Flex, Input, Button, useColorModeValue } from '@chakra-ui/react'
import useQueryParams from 'hooks/useQueryParams'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const { setNewQuery, setNewPath } = useQueryParams(null)
  return (
    <Flex
      as="form"
      boxShadow="sm"
      p="1"
      borderRadius="lg"
      borderWidth="1px"
      onSubmit={(e) => {
        e.preventDefault()
        setNewPath(ROUTES.JOBS)
        setNewQuery({
          q: searchValue,
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
        display={{ base: 'none', md: 'inline-flex' }}
      >
        Find jobs
      </Button>
    </Flex>
  )
}

export default Search
