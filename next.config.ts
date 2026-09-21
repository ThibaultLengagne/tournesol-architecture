import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tournesolarchitecture.fr" }],
        destination: "https://tournesolarchitecture.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
