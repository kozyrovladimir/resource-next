/** @type {import('next').NextConfig} */
const API_URL = process.env.API_PATH;

const nextConfig = {
    images: {
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.yoqi.run',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'static.yoqi.com',
                pathname: '**',
            }
        ]
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${API_URL}/:path*`,
            },
        ]
    },
};

export default nextConfig;
