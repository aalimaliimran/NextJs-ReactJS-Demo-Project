/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    MONGODB_URI:process.env.MONGODB_URI,
  }
}


module.exports = nextConfig
