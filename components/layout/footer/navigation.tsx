import {
  Box,
  SimpleGrid,
  List,
  ListItem,
  Heading,
  Icon,
} from '@chakra-ui/react'
import { menuItems } from './nav-data'
import Link from 'components/link'

const Navigation = () => (
  <SimpleGrid
    columns={[2, null, 4]}
    spacing="40px"
    w="full"
    borderTopWidth="1px"
    py={7}
  >
    {menuItems.map((item, i) => (
      <Box key={i}>
        <Heading as="h5" size="xs" mb="0.75rem">
          {item.title}
        </Heading>
        <List spacing="0.5rem">
          {item.navigation.map((listItem, i) => (
            <ListItem key={i}>
              {listItem.icon && <Icon as={listItem.icon} mr={2} w={5} h={6} />}
              <Link
                key={i}
                href={listItem.href}
                _hover={{ textDecoration: 'underline' }}
                isExternal={listItem.isExternal}
              >
                {listItem.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    ))}
  </SimpleGrid>
)

export default Navigation
