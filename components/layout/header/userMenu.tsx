import React from 'react'
import { signOut } from 'next-auth/client'
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
import { User } from 'types/user'

type Props = {
  user?: User | null | undefined
}

const UserMenu = ({ user }: Props) => {
  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Button}
        variant="link"
        textAlign="left"
        rightIcon={<HiChevronDown />}
      >
        <Avatar
          name={user?.name || 'User'}
          src={user?.image || ''}
          width="40px"
          height="40px"
          backgroundColor="brand.200"
        />
        <Box display="inline-flex" ml="1rem" flexDirection="column">
          <Text fontSize="sm" fontWeight="light" color="gray.500">
            Hello,
          </Text>
          <Text color="gray.900">{user?.name || 'User'}</Text>
        </Box>
      </MenuButton>
      <Portal>
        <MenuList fontSize="sm" minW="160px">
          <MenuItem>My Profile</MenuItem>
          <MenuItem onClick={() => signOut()}>Logout</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}

export default UserMenu
