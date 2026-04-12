import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for deployment to any static host
  output: 'export',

  // Trailing slashes for static hosting compatibility
  trailingSlash: true,

  // Image optimization settings for static export
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
