import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 优化配置
  experimental: {
    // 确保动态路由正常工作
    dynamicIO: true,
  },
};

export default nextConfig;
