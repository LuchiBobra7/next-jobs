import { extendTheme, ThemeConfig, theme as baseTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/lato'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  layerStyles: {
    buttonList: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    content: {
      'h1, h2, h3, h4, h5, h6': {
        my: '0.5rem',
      },
      'p, ul': {
        mb: '1rem',
      },
      ul: {
        listStyle: 'inside',
        marginBottom: '1rem',
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.900')(props),
        lineHeight: 'base',
        scrollbarWidth: 'thin',
        scrollbarColor: 'blue orange',
      },

      '*, *::before, ::after': {
        borderColor: mode('gray.100', 'gray.700')(props),
      },
      '*': {
        scrollbarWidth: 'thin',
        scrollbarColor: 'gray.200 gray.400',
      },

      '*::-webkit-scrollbar': {
        width: '7px',
      },

      '*::-webkit-scrollbar-track': {
        background: 'gray.200',
      },

      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'gray.400',
        borderRadius: '20px',
      },
      '@media(-webkit - min - device - pixel - ratio: 1.25), (min - resolution: 120 dpi)':
        {
          body: {
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            perspective: 1000,
          },
        },
    }),
  },
  colors: {
    brand: {
      '50': '#f6f8ff',
      '100': '#ecf2ff',
      '200': '#d0defe',
      '300': '#b4cafe',
      '400': '#7ba3fd',
      '500': '#437bfc',
      '600': '#3c6fe3',
      '700': '#325cbd',
      '800': '#284a97',
      '900': '#213c7b',
    },
    darkHighlight: 'rgba(26, 32, 44, 0.7)',
  },
  fonts: {
    heading: `Lato, ${baseTheme.fonts?.body}`,
    body: `Lato, ${baseTheme.fonts?.body}`,
  },
  shadows: {
    sm: `0px 6px 15px 0px rgba(64, 79, 104, 0.05)`,
    md: `0px 4px 16px rgba(0, 0, 0, 0.06), 0px 8px 32px  rgba(0, 0, 0, 0.04)`,
    lg: `0px 4px 36px  rgba(0, 0, 0, 0.1)`,
  },
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.xl',
        px: 5,
      },
    },

    Button: {
      sizes: {
        lg: {
          height: '46px',
          fontSize: 'sm',
          px: '2rem',
        },
      },
      variants: {
        link: {
          _hover: {
            textDecoration: 'none',
          },
        },
      },
    },
  },
})

export const isLgScreen = `(min-width: ${theme.breakpoints.lg})`
