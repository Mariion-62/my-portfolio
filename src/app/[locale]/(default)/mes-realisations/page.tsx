import { ReactElement } from 'react'
import { Realisations } from '@/src/app/[locale]/(default)/mes-realisations/ui/Realisations'

export async function generateStaticParams() {
  return [
    { locale: 'fr' },
    { locale: 'en' }
  ]
}

function Page(): ReactElement {
  return <Realisations />
}

export default Page
