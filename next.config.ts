import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  trailingSlash: true,

   compress: true,
   images: {
    formats: ["image/webp"],
    qualities: [70, 75, 80, 90, 95],
  },
  async headers() {
    return [
      {

        source: "/(.*)",
        headers: [
          // Security Headers
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(self)",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "credentialless",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value:
              "max-age=63072000; includeSubDomains; preload",
          },
        
        ],
      },
    ];
  },
};

export default nextConfig;
