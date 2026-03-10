import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignore TypeScript errors during build (only option still valid)
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Framer Motion optimization for Turbopack
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
