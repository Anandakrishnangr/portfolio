import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config, { isServer }) {
    if (isServer) {
      // Prevent pdfjs-dist from trying to load the node‑canvas package
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      }
    }
    config.module.rules.push({
      test: /pdf\.worker\.min\.js$/,
      type: 'asset/resource',
    });
    return config
  },
};

export default nextConfig;
