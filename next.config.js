/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization
    images: {
        formats: ['image/avif', 'image/webp'],
    },

    // Strict mode for better development
    reactStrictMode: true,
}

module.exports = nextConfig