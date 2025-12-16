'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { ReactElement } from 'react'
import bgPink from './bgPink.webp'
import bgPurple from './bgPurple.webp'
import styles from './CardHomepage.module.scss'

function CardHomepage(): ReactElement {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <section className={styles.allCards}>
      <div className={styles.card}>
        <Link id="parcours" className={styles.link} href={`${locale}/mon-parcours`} role="link">
          <Image className={styles.imgCardHomepage} src={bgPurple} alt={t('navigation.careers')} />
          <h2 className={styles.titleCardHomepage}>{t('navigation.careers')}</h2>
        </Link>
      </div>
      <div className={styles.card}>
        <Link id="realisations" className={styles.link} href={`${locale}/mes-realisations`} role="link">
          <Image className={styles.imgCardHomepage} src={bgPink} alt={t('navigation.project')} />
          <h2 className={styles.titleCardHomepage}>{t('navigation.project')}</h2>
        </Link>
      </div>
    </section>
  )
}

export { CardHomepage }
