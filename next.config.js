/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


// module.exports = nextConfig;
module.exports = {
  async rewrites() {
      return [
        
        {
          source: '/api/:path*',
          destination: 'https://api.example.com/:path*',
          
        },
        
        // nextConfig,
        
      ]
    },
    async headers() {
          return [
            {
              source: "/_next/:path*",
              headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" },
              ],
            },
          ]
        },
};
  