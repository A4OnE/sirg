/**@type{import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error', 'err']
    },
  },
  images: {

    domains: ['api.vipgroupnepal.com'],
  },
  env: {
    Url: "https://api.vipgroupnepal.com",
  },
};
module.exports = nextConfig;
