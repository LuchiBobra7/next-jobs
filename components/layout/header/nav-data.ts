import { ROUTES } from 'constants/routes'
import { NavItem } from 'types/menu-item'

const { JOBS, COMPANIES, ABOUT } = ROUTES

export const navItems: NavItem[] = [
  {
    title: 'Remote jobs',
    href: JOBS,
  },
  {
    title: 'About project',
    href: ABOUT,
  },
]
