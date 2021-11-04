import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { GITHUB_ID, GITHUB_SECRET } from 'config/env'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
      scope: 'read:user',
    }),

    // ...add more providers here
  ],
})
