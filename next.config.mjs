/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yoqiresource.org',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
