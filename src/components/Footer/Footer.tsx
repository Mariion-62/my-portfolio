import { useTranslations } from 'next-intl'
import { ReactElement } from 'react'
import { IoMailOutline } from 'react-icons/io5'
import packageJson from '../../../package.json'
import styles from './footer.module.scss'

function Footer(): ReactElement {
  const currentYear = new Date().getFullYear()
  const t = useTranslations()
  return (
    <div className={styles.footer}>
      <p className={styles.legalsMentions}>{t('footer.legal_notice')}</p>
      <p className={styles.copyright}>{t('footer.copyright', { currentYear })}</p>
      <p className={styles.version}>v{packageJson.version}</p>

      <a
        className={styles.contact}
        aria-label="mail de Marion"
        href="mailto:mariongrolleau@neuf.fr"
        target="_blank"
        rel="noreferrer"
      >
        <IoMailOutline size={30} />
      </a>
    </div>
  )
}

export { Footer }
