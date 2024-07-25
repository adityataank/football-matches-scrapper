/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/home", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-service.onefootball.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
