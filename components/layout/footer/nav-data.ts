import { FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'
import { MenuItem } from 'types/menu-item'

export const menuItems: MenuItem[] = [
  {
    navigation: [
      {
        title: 'Twitter',
        href: '/twitter',
        icon: FaTwitter,
        isExternal: true,
      },
      {
        title: 'Facebook',
        href: '/fb',
        icon: FaFacebook,
        isExternal: true,
      },
      {
        title: 'Github',
        href: '#',
        icon: FaGithub,
        isExternal: true,
      },
      {
        title: 'fakemail@fakemail.com',
        href: '#',
        isExternal: true,
      },
    ],
  },
  {
    navigation: [
      {
        title: 'Home',
        href: '#',
      },
      {
        title: 'Terms & Condition',
        href: '#',
      },
      {
        title: 'Privacy Policy',
        href: '#',
      },
      {
        title: 'Cookie Policy',
        href: '#',
      },
    ],
  },
  {
    title: 'For Job Seekers',
    navigation: [
      {
        title: 'Remote jobs',
        href: '/jobs',
      },
      {
        title: 'Companies',
        href: '/companies',
      },
      {
        title: 'About project',
        href: '/about',
      },
    ],
  },
  {
    title: 'Credits',
    navigation: [
      {
        title: 'Storyset.com',
        href: 'https://storyset.com/technology',
        isExternal: true,
      },
      {
        title: 'Shades generator',
        href: 'https://javisperez.github.io/tailwindcolorshades/',
        isExternal: true,
      },
      {
        title: 'GraphQL.jobs',
        href: 'https://api.graphql.jobs/',
        isExternal: true,
      },
    ],
  },
]
