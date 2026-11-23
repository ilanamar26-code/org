/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/orlinski-bay', destination: '/', permanent: false },
      { source: '/projects', destination: '/concepts', permanent: true },
      { source: '/projects/:slug*', destination: '/concepts', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
