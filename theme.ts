import { extendTheme, ThemeConfig, theme as baseTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/lato'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.900')(props),
      },
    }),
  },
  colors: {},
  fonts: {
    heading: `Lato, ${baseTheme.fonts?.body}`,
    body: `Lato, ${baseTheme.fonts?.body}`,
  },
  shadows: {},
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.xl',
        px: 9,
      },
    },
  },
})
