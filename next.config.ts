import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    experimental: {
        swcPlugins: [
            [
                'swc-plugin-stage-output',
                {
                },
            ],
        ],
    },
};

export default nextConfig;
