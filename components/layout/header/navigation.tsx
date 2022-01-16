import { useRouter } from 'next/router'
import { HStack, useColorModeValue } from '@chakra-ui/react'
import Link from 'components/link'
import { navItems } from 'components/layout/header/nav-data'

const Navigation = () => {
  const { pathname } = useRouter()
  const initialColor = useColorModeValue('gray.600', 'whiteAlpha.700')
  const activeColor = useColorModeValue('brand.600', 'white')
  return (
    <HStack as="nav" spacing="2.5rem" display={{ base: 'none', lg: 'block' }}>
      {navItems?.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          color={pathname == item.href ? activeColor : initialColor}
          _hover={{ color: 'brand.600' }}
        >
          {item.title}
        </Link>
      ))}
    </HStack>
  )
}

export default Navigation
