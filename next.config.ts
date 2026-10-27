import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 only accepts listed qualities; anything else silently falls back to 75.
    qualities: [75, 85, 90],
  },
  env: {
    // Draft projects (placeholder content) appear locally and on Vercel preview
    // deployments, but never on the production site.
    SHOW_DRAFTS: process.env.VERCEL_ENV === "production" ? "0" : "1",
  },
};

export default nextConfig;
