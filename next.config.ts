import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: '</sitemap.xml>; rel="sitemap", </about>; rel="author"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
