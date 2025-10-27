import { ReactElement } from 'react'
import MentionsLegales from './ui/MentionsLegales'

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export default function MentionsLegalesPage(): ReactElement {
  return <MentionsLegales />
}
