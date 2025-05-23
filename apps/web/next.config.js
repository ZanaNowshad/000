/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@zaibuld/ui", "@zaibuld/api", "@zaibuld/ai"],
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [],
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;