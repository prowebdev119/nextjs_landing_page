/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains : [
      'images.unsplash.com',
    ]
  },
  
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']

}
