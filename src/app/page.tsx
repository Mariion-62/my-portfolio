import { redirect } from 'next/navigation'
import { defaultLocale } from '../../i18n'

// Ce composant redirige automatiquement de / vers /fr ou la langue par défaut
export default function RootPage() {
  redirect(`/${defaultLocale}`)
}
