/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['zh'],
    defaultLocale: 'zh',
  },
};

module.exports = nextConfig; 