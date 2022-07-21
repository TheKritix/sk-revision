/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: ".",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}
