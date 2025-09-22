import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 优化配置
  experimental: {
    // 确保动态路由正常工作
    cacheComponents: true,
  },
};

export default nextConfig;
