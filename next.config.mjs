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
  env: {
    STAGE: process.env.STAGE,
    EVENTLYTICS_API_KEY: process.env.EVENTLYTICS_API_KEY,
    PROJECT_TOKEN: process.env.PROJECT_TOKEN,
    USER_TOKEN: process.env.USER_TOKEN,
  },
};

export default nextConfig;
