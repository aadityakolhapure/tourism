import { UserConfig } from 'next-i18next';

const nextI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'mr', 'hi'], // English, Marathi, Hindi
  },
};

export default nextI18NextConfig;
