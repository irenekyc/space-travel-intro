/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV !== "development" ? "/space-travel-teaser-site/" : "",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
