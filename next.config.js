/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better performance
  output: 'standalone',
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Strict mode for better development
  reactStrictMode: true,
}

module.exports = nextConfig
