/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  appRouter: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
