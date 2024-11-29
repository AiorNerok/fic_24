import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/join",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
