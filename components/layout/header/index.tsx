import React from 'react'
import { DefaultProfile } from 'next-auth'
import { signIn, useSession } from 'next-auth/client'
import {
  Container,
  Flex,
  HStack,
  Button,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import Logo from 'components/logo'
import SwitchColorModeBtn from 'components/switch-color-mode'
import Navigation from 'components/layout/header/navigation'
import UserMenu from 'components/layout/header/userMenu'
import { HEADER_HEIGHT } from 'constants/layout'

const Header = () => {
  const bg = useColorModeValue('whiteAlpha.700', 'darkHighlight')
  const [session] = useSession()
  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      zIndex="1"
      py={4}
      minHeight={HEADER_HEIGHT}
      align="center"
      shadow="sm"
      backdropFilter="saturate(180%) blur(20px)"
      bg={bg}
      transition="all 0.2s ease-in"
    >
      <Container
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
      >
        <HStack align="center" spacing="3rem">
          <Logo />
          <Navigation />
        </HStack>
        <HStack align="center" spacing="1rem">
          <SwitchColorModeBtn />
          {session ? (
            <UserMenu user={session?.user as DefaultProfile} />
          ) : (
            <Button
              colorScheme="gray"
              variant="outline"
              fontSize="sm"
              fontWeight="normal"
              onClick={() => signIn('github')}
            >
              <>
                <Icon as={FaGithub} w={5} h={5} />
                <Text display={{ base: 'none', md: 'inline' }} ml={3}>
                  Login with Github
                </Text>
              </>
            </Button>
          )}
        </HStack>
      </Container>
    </Flex>
  )
}

export default Header
