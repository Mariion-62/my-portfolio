import createNextIntlPlugin from 'next-intl/plugin'

// Utiliser le plugin next-intl avec notre configuration
const withNextIntl = createNextIntlPlugin('./next-intl.config.mjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./node_modules'],
    // Supprimer les avertissements de dépréciation de l'API legacy
    silenceDeprecations: ['legacy-js-api'],
    outputStyle: 'compressed'
  }
}

// Exporter la configuration avec le plugin next-intl
export default withNextIntl(nextConfig)
