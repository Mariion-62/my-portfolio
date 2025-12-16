'use client'

import { usePathname } from 'next/navigation'
import { ReactElement, ReactNode } from 'react'
import { Footer } from '@/src/components/Footer/Footer'
import { GoogleAnalytics } from '@/src/components/GoogleAnalytics/GoogleAnalytics'
import { Header } from '@/src/components/Header/Header'

type Props = {
  children: ReactNode
}

function LayoutContent({ children }: Props): ReactElement {
  const pathname = usePathname()

  // Vérifie si on est sur la page mentions légales
  const isLegalPage = pathname.includes('/mentions-legales')

  return (
    <>
      <GoogleAnalytics />
      <Header hideNavigation={isLegalPage} />
      {children}
      <Footer />
    </>
  )
}

export { LayoutContent }
