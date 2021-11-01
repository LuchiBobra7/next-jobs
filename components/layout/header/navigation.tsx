import { HStack } from '@chakra-ui/react'
import Link from 'components/link'
import { navItems } from 'components/layout/header/nav-data'

const Navigation = () => (
  <HStack as="nav" spacing="2.5rem" display={{ base: 'none', lg: 'block' }}>
    {navItems?.map((item, i) => (
      <Link
        key={i}
        href={item.href}
        _hover={{ color: 'brand.600' }}
        fontSize="14.5px"
      >
        {item.title}
      </Link>
    ))}
  </HStack>
)

export default Navigation
