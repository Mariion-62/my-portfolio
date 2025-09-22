import { ReactElement } from 'react'
import Halloween from './ui/Halloween'

export async function generateStaticParams() {
  return [
    { locale: 'fr' },
    { locale: 'en' }
  ]
}

function Page(): ReactElement {
  return <Halloween />
}

export default Page
