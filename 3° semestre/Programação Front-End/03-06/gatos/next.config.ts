import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/cats/:path*',
        destination: 'https://thecatapi.com*', 
      },
    ];
  },
};


export default nextConfig;
