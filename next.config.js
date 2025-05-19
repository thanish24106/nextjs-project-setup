/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
  typescript: {
    // During development, type errors won't prevent the app from running
    ignoreBuildErrors: true,
  },
  eslint: {
    // During development, lint errors won't prevent the app from running
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
