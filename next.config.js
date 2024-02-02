/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'aceternity.com',
          // Optionally, you can specify a port and pathname prefix
          // port: '',
          // pathname: '/images/products/thumbnails/new/**',
        },
      ],
    },
    // Add any other configurations you need here
  };
  
  module.exports = nextConfig;
  