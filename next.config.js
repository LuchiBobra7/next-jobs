/** @type {import('next').NextConfig} */
require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BROWSER_API_ENDPOINT: process.env.BROWSER_API_ENDPOINT,
    CLIENT_DOMAIN: process.env.CLIENT_DOMAIN,
    CLOUDINARY_CLOUD: process.env.CLOUDINARY_CLOUD,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  serverRuntimeConfig: {
    SERVER_API_ENDPOINT: process.env.SERVER_API_ENDPOINT,
  },
  images: {
    domains: ['res.cloudinary.com', 'cdn.filestackcontent.com'],
  },
}
