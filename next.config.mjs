/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,  // Ignore TypeScript type errors during build
    },
    eslint: {
        ignoreDuringBuilds: true,  // Ignore ESLint during production build
    }
};

export default nextConfig;
