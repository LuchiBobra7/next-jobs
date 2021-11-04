import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'
import { theme } from 'theme'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  </ChakraProvider>
)

export default App
