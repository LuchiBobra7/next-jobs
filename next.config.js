/** @type {import('next').NextConfig} */
require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BROWSER_API_ENDPOINT: process.env.BROWSER_API_ENDPOINT,
    CLIENT_DOMAIN: process.env.CLIENT_DOMAIN,
  },
  serverRuntimeConfig: {
    SERVER_API_ENDPOINT: process.env.SERVER_API_ENDPOINT,
  },
}
