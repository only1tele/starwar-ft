/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/people/:id',
        destination: '/:id',
      },
    ];
  },

};

export default nextConfig;
