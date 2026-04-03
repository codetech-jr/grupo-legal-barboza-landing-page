/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'grupolegalbarboza.com' }], // sin www
        destination: 'https://www.grupolegalbarboza.com/:path*',
        permanent: true, // = 301
      },
    ]
  },
}

module.exports = nextConfig