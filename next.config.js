import path from 'path'
import { fileURLToPath } from 'url'
import createNextIntlPlugin from 'next-intl/plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Utiliser le plugin next-intl avec notre configuration
const withNextIntl = createNextIntlPlugin('./next-intl.config.mjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  sassOptions: {
    includePaths: ['./node_modules'],
    // Supprimer les avertissements de dépréciation de l'API legacy
    silenceDeprecations: ['legacy-js-api'],
    outputStyle: 'compressed'
  }
}

// Exporter la configuration avec le plugin next-intl
export default withNextIntl(nextConfig)
