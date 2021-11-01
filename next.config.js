/** @type {import('next').NextConfig} */
require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    CLIENT_DOMAIN: process.env.CLIENT_DOMAIN,
  },
  serverRuntimeConfig: {
    SERVER_API_ENDPOINT: process.env.SERVER_API_ENDPOINT,
  },
}
