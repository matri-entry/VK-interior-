import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90, 95, 100],
    remotePatterns: [],
  },
  // Trailing slash false for cleaner URLs
  trailingSlash: false,
};

export default nextConfig;
