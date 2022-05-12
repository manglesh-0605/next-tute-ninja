/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    domains: ['nowcast-dev-images.s3.amazonaws.com']
  }
};

module.exports = nextConfig
