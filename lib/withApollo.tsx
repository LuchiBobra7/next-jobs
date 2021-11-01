import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import nextWithApollo from 'next-with-apollo'
import { IS_SERVER, SERVER_API_ENDPOINT } from 'config/env'

const withApollo = nextWithApollo(
  ({ initialState, ...rest }) => {
    return new ApolloClient({
      ssrMode: IS_SERVER,
      link: new HttpLink({
        uri: SERVER_API_ENDPOINT,
      }),
      cache: new InMemoryCache().restore(initialState || {}),
      // @ts-ignore
      defaultOptions: { ...rest },
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...props.apollo.defaultOptions.ctx} />
        </ApolloProvider>
      )
    },
  }
)

export default withApollo
