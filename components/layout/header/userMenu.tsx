import React from 'react'
import {
  Box,
  Button,
  Avatar,
  Portal,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react'
import { HiChevronDown } from 'react-icons/hi'

const UserMenu = () => {
  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Button}
        variant="link"
        textAlign="left"
        rightIcon={<HiChevronDown />}
      >
        <Avatar
          name={'User'}
          src={''}
          width="40px"
          height="40px"
          backgroundColor="brand.200"
        />
        <Box display="inline-flex" ml="1rem" flexDirection="column">
          <Text fontSize="sm" fontWeight="light" color="gray.500">
            Hello,
          </Text>
          <Text color="gray.900">{'User'}</Text>
        </Box>
      </MenuButton>
      <Portal>
        <MenuList fontSize="sm" minW="160px">
          <MenuItem>My Profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}

export default UserMenu
