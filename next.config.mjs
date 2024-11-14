import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configure l'export statique
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: true // Détection automatique de la langue du navigateur
  }
}

export default withNextIntl(nextConfig)

export const i18n = {
  locales: ['en', 'fr'],
  defaultLocale: 'en'
}
