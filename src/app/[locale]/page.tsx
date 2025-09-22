import { ReactElement } from 'react'
import { CardHomepage } from '@/src/components/CardHomepage/CardHomepage'
import { Description } from '@/src/components/Description/Description'

export async function generateStaticParams() {
  return [
    { locale: 'fr' },
    { locale: 'en' }
  ]
}

export default function Page(): ReactElement {
  return (
    <>
      <Description />
      <CardHomepage />
    </>
  )
}
