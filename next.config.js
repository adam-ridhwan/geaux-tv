/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'geaux-avatar-icons.nyc3.digitaloceanspaces.com',
      'geaux-channel-icons.nyc3.digitaloceanspaces.com',
      'lh3.googleusercontent.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tv/465',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
