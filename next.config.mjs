/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
     appDir: true,
    },
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "gilmelk.com",
            },
          ],
    },
    devIndicators: {
      buildActivity: false
  }
};

export default nextConfig;
