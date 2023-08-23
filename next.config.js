/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['geaux-avatar-icons.nyc3.digitaloceanspaces.com', 'geaux-channel-icons.nyc3.digitaloceanspaces.com'],
  },
};

module.exports = nextConfig;
