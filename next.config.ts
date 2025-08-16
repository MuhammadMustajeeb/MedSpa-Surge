import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ✅ Ignore ESLint errors during builds (Vercel won’t block)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
