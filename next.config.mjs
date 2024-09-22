/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**", // Allow all paths under github.com
      },
    ],
  },
};

export default nextConfig;
