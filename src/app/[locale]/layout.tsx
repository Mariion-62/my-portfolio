import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'

import { LayoutContent } from '@/src/components/LayoutContent/LayoutContent'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Marion Grolleau | Développeuse Web Full Stack',
  description:
    'Portfolio de Marion Grolleau, développeuse web Full Stack passionnée. Découvrez mes projets React, Next.js, TypeScript et mon parcours de reconversion.',
  keywords: ['développeuse web', 'full stack', 'React', 'Next.js', 'TypeScript', 'portfolio'],
  authors: [{ name: 'Marion Grolleau' }],
  openGraph: {
    title: 'Marion Grolleau | Développeuse Web Full Stack',
    description:
      'Portfolio de Marion Grolleau, développeuse web Full Stack. Découvrez mes projets et mon parcours.',
    type: 'website',
    locale: 'fr_FR'
  }
}

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default async function LocaleLayout(props: Props) {
  const { children, params } = props
  const { locale } = await params // ✅ await params avant d'accéder à ses propriétés

  const { locales } = await import('../../../i18n')

  if (!locale || !locales.includes(locale as any)) {
    notFound()
  }

  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch {
    notFound()
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutContent>{children}</LayoutContent>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
