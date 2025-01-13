import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'fr']

export default getRequestConfig(async (context) => {
  const locale = await context.requestLocale // Utiliser requestLocale au lieu de locale

  if (!locale || !locales.includes(locale)) notFound()

  return {
    locale,
    messages: (await import(`../dictionnary/${locale}.json`)).default
  }
})
