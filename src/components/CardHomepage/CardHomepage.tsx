import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ReactElement } from 'react'
import bgPink from './bgPink.png'
import bgPurple from './bgPurple.png'
import styles from './CardHomepage.module.scss'

function CardHomepage(): ReactElement {
  const t = useTranslations()
  return (
    <section className={styles.allCards}>
      <div className={styles.card}>
        <Link id="parcours" className={styles.link} href="/mon-parcours" role="link">
          <Image priority className={styles.imgCardHomepage} src={bgPurple} alt={t('navigation.careers')} />
          <h2 className={styles.titleCardHomepage}>{t('navigation.careers')}</h2>
        </Link>
      </div>
      <div className={styles.card}>
        <Link id="realisations" className={styles.link} href="/mes-realisations" role="link">
          <Image priority className={styles.imgCardHomepage} src={bgPink} alt={t('navigation.project')} />
          <h2 className={styles.titleCardHomepage}>{t('navigation.project')}</h2>
        </Link>
      </div>
    </section>
  )
}

export { CardHomepage }
