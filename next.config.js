const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },

  async rewrites() {
    return [
      {
        source: "/minecraft",
        destination: "https://drive.google.com/file/d/19N9FcYdSRV9MW5bMXtOMd2bR6nxAobqL/view?usp=sharing",
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);

