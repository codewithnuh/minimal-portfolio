import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [new URL("https://placehold.co/**")],
  },
  turbopack: {
    root: __dirname,
  },
};

export default withPayload(nextConfig);
