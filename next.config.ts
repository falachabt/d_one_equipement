import type { NextConfig } from "next";

const replitDevDomain = process.env.REPLIT_DEV_DOMAIN;

const allowedDevOrigins = [
  "*.replit.dev",
  "*.spock.replit.dev",
  ...(replitDevDomain ? [replitDevDomain] : []),
];

const nextConfig: NextConfig = {
  allowedDevOrigins,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shantui-global.com",
      },
    ],
  },
};

export default nextConfig;
