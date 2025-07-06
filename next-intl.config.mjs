import { getRequestConfig } from 'next-intl/server'
import { defaultLocale, locales } from './i18n.config.js'

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale && typeof locale === 'string' && locales.includes(locale) ? locale : defaultLocale

  try {
    return {
      locale: validLocale,
      messages: (await import(`./messages/${validLocale}.json`)).default
    }
  } catch (error) {
    console.error(`Erreur lors du chargement des messages pour ${validLocale}:`, error)

    return {
      locale: defaultLocale,
      messages: (await import(`./messages/${defaultLocale}.json`)).default
    }
  }
})
