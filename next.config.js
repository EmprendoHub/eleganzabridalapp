/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['minio.salvawebpro.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
