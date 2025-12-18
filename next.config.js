/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ArkForge',
  assetPrefix: '/ArkForge/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
