import getConfig from 'next/config'
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

export const IS_DEV = process.env.NODE_ENV !== 'production'
export const IS_SERVER = !process.browser

export const ENV = process.env.NODE_ENV || 'development'

export const { CLIENT_DOMAIN } = publicRuntimeConfig

export const {
  BROWSER_API_ENDPOINT,
  CLOUDINARY_CLOUD,
  GITHUB_ID,
  GITHUB_SECRET,
  NEXTAUTH_URL,
} = publicRuntimeConfig

export const { SERVER_API_ENDPOINT } = serverRuntimeConfig
