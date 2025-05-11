/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    typescript: {
        // Ignore type errors in the app directory
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            {
                hostname: "utfs.io", // Older Domain name for UploadThing
            },
            {
                hostname: "*.ufs.sh", // Current Domain name for UploadThing
            }
        ]
    },
};

export default config;
