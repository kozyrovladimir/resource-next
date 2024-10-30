/** @type {import('next').NextConfig} */
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
};

export default nextConfig;
