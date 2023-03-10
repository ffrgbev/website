export default async () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    images: {
      unoptimized: true,
   },
  };
  return nextConfig
}