/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tailwindcss.com"
      },
      {
        hostname: "test.zhihur.com"
      }
    ]
  }
};

export default nextConfig;
