/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SCHEMA_PATH: process.env.SCHEMA_PATH,
  },
}
