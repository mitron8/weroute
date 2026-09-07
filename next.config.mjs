/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services/enterprise-technology-consulting-and-advisory',
        destination: '/services/consulting-advisory',
        permanent: true,
      },
      {
        source: '/sub-services',
        destination: '/services/consulting-advisory',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
