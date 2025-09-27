/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Domínio para os escudos dos times. Este é o único que precisamos agora.
      { hostname: 'crests.football-data.org' },
    ],
  },
};

export default nextConfig;