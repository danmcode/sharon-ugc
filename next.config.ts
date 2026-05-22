import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sharon-ugc',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
