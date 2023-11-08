/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ['mcit.gov.af', '103.132.98.250'],
    minimumCacheTTL: 28800, // 8 hours in seconds is
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
