/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['p21-ad-sg.ibyteimg.com', 'lh3.googleusercontent.com', 'res.cloudinary.com'],
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, { isServer }) => {
    // Thêm rule cho SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
