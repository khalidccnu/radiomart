/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@ant-design', '@ant-design/icons', 'rc-util', 'rc-picker', 'rc-pagination'],
};

module.exports = nextConfig;
