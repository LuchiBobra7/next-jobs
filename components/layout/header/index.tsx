import React from 'react'
import {
  Container,
  Box,
  Flex,
  HStack,
  Button,
  Icon,
  Avatar,
  Portal,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import Logo from 'components/logo'
import SwitchColorModeBtn from 'components/switch-color-mode'
import Navigation from 'components/layout/header/navigation'
import UserMenu from 'components/layout/header/userMenu'
import { HEADER_HEIGHT } from 'constants/layout'
import { HiChevronDown } from 'react-icons/hi'

const Header = () => {
  const bg = useColorModeValue('whiteAlpha.700', 'darkHighlight')
  const session = false
  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      zIndex="1"
      py={4}
      height={HEADER_HEIGHT}
      align="center"
      shadow="sm"
      backdropFilter="saturate(180%) blur(20px)"
      bg={bg}
      transition="all .3s"
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack align="center" spacing="3rem">
          <Logo />
          <Navigation />
        </HStack>
        <HStack align="center" spacing="1rem">
          <SwitchColorModeBtn />
          {session ? (
            <UserMenu />
          ) : (
            <Button
              colorScheme="gray"
              variant="outline"
              fontSize="sm"
              fontWeight="normal"
              leftIcon={<Icon as={FaGithub} w={5} h={5} />}
            >
              Login with Github
            </Button>
          )}
        </HStack>
      </Container>
    </Flex>
  )
}

export default Header
