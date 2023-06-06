import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "user-images.githubusercontent.com",
         },
         {
            protocol: "https",
            hostname: "github.com",
         },
      ],
   },
   serverRuntimeConfig: {
      NEWS_API_KEY: process.env.NEWS_API_KEY,
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
      IP_LOCATOR_KEY: process.env.IP_LOCATOR_KEY,
      NAME: process.env.NAME,
   },
   output: "standalone",
};

export default nextConfig;
