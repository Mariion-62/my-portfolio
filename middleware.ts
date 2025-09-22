import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n'

export default createMiddleware({
  // Utiliser les locales depuis notre fichier de configuration unifié
  locales,
  // Utiliser la locale par défaut depuis notre fichier de configuration
  defaultLocale,
  // Activer le préfixe de locale seulement si nécessaire
  localePrefix: 'always'
})

export const config = {
  // Matcher pour intercepter toutes les routes sauf celles spécifiées
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
