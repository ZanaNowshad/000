/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@zaibuld/ui", "@zaibuld/api", "@zaibuld/ai"],
  experimental: {
    serverComponentsExternalPackages: [],
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;