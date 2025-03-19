import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: false,
    reactRoot: false,
  },
};

export default nextConfig;
