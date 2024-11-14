import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone'
}

export default withNextIntl(nextConfig)
export const i18n = {
  locales: ['en', 'fr'],
  defaultLocale: 'en'
}
