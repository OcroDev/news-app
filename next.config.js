/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s.yimg.com",
      "i.kinja-img.com",
      "cdn.arstechnica.net",
      "cdn.mos.cms.futurecdn.net",
    ],
  },
};

module.exports = nextConfig;
