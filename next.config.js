const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: true,
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false };
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: [],
  },

  // Pwa Setting
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    publicExcludes: ["!resume.pdf"], // don't cache pdf which I'll add later
  },
};

module.exports = withBundleAnalyzer(
  withPWA(nextConfig)
);
