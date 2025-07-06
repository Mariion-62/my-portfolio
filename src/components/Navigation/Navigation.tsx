import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { ReactElement } from 'react'
import styles from './navigation.module.scss'
import { navElements } from '@/types/menu'

function Navigation(): ReactElement {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <nav className={styles.navigation}>
      {navElements.map((element) => (
        <div key={element.label} className={pathname === element.link ? styles.active : ''}>
          {element.link && <Link href={`/${locale}${element.link}`}>{t(element.label)}</Link>}
        </div>
      ))}
    </nav>
  )
}

export { Navigation }
