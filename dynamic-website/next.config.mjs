/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed ignoreDuringBuilds - Let's catch actual errors
  // Removed ignoreBuildErrors - Let's catch TypeScript issues
  images: {
    unoptimized: true,
  },
}

export default nextConfig
