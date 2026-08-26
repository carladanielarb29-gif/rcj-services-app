/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "procemconsultores.com" },
      { protocol: "https", hostname: "lamenteesmaravillosa.com" },
      { protocol: "https", hostname: "www.tcmetrologia.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "c.pxhere.com" },
      { protocol: "https", hostname: "ocaglobal.pe" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
