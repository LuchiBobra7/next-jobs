import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'
import { theme } from 'theme'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Provider session={pageProps.session}>
      <NextNProgress color="rgba(67, 123, 252, 0.9)" />
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
)

export default App
