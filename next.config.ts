import type { NextConfig } from "next";
import i18nConfig from "@/config/next-i18next.config";

const nextConfig: NextConfig = {
  i18n: i18nConfig.i18n,
  // reactStrictMode: true,

  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;
