/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "encrypted-tbn2.gstatic.com",
      "media.discordapp.net",
      "cdn.discordapp.com",
      "static.wikia.nocookie.net",
      "www.futurelifenow-online.com",
      "firebasestorage.googleapis.com",
      "www.logolynx.com",
      "images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com",
      "ih1.redbubble.net",
      "images-cdn.ubuy.co.in",
      "images-na.ssl-images-amazon.com",
      "imagizer.imageshack.com",
      "logos-world.net",
    ],
    minimumCacheTTL: 3208,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        port: '',
      },
    ],

  },reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
};
module.exports = nextConfig
