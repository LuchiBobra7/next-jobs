import { IconType } from 'react-icons/lib'

export type NavItem = {
  title: string
  href?: string
  icon?: IconType
  isExternal?: boolean
}

export type MenuItem = {
  title?: string
  navigation: NavItem[]
}
