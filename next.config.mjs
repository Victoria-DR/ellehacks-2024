// /** @type {import('next').NextConfig} */
// const nextConfig = {};

import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

const nextConfig = withPWA({
  dest: "public",
  runtimeCaching,
});

export default nextConfig;
