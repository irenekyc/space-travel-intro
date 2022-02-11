/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV !== "development" ? "/space-travel-teaser-site" : "",
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/space-travel-teaser-site",
  env: {
    BACKEND_URL: "/space-travel-teaser-site",
  },
};

module.exports = nextConfig;
