/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'crests.football-data.org' },
    ],
  },
};

export default nextConfig;