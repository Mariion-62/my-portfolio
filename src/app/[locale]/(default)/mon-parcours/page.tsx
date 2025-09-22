import { ReactElement } from 'react'
import Parcours from './ui/Parcours'

export async function generateStaticParams() {
  return [
    { locale: 'fr' },
    { locale: 'en' }
  ]
}

export default function Page(): ReactElement {
  return <Parcours />
}
