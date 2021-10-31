import { AppProps } from 'next/app'
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

const App = ({ Component }: AppProps) => (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )

  export default App