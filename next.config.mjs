/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/home", permanent: true }];
  },
  images: { domains: ["image-service.onefootball.com"] },
};

export default nextConfig;
