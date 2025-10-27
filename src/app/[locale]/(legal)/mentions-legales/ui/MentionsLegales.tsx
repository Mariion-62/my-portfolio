'use client'

import { useTranslations } from 'next-intl';
import { ReactElement } from 'react';
import styles from './mentionsLegales.module.scss';

export default function MentionsLegales(): ReactElement {
  const t = useTranslations('legalNotice')

  return (
    <div className={styles.legalNotice}>
      <h1 className={styles.mainTitle}>{t('title')}</h1>
      <p className={styles.lastUpdate}>{t('lastUpdate')}</p>

      <section className={styles.section}>
        <h2>{t('editor.title')}</h2>
        <p>
          <strong>{t('editor.name')}</strong> Marion Grolleau
        </p>
        <p>
          <strong>{t('editor.address')}</strong> Saint-Maurice-De-Lignon
        </p>
        <p>
          <strong>{t('editor.email')}</strong>{' '}
          <a href="mailto:mariongrolleau62@gmail.com">mariongrolleau62@gmail.com</a>
        </p>
        <p>
          <strong>{t('editor.siteType')}</strong> {t('editor.siteTypeValue')}
        </p>
      </section>

      <section className={styles.section}>
        <h2>{t('hosting.title')}</h2>
        <p>
          <strong>{t('hosting.provider')}</strong> Netlify, Inc.
        </p>
        <p>
          <strong>{t('hosting.address')}</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA
        </p>
        <p>
          <strong>{t('hosting.website')}</strong>{' '}
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
            www.netlify.com
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>{t('intellectualProperty.title')}</h2>
        <p>{t('intellectualProperty.content')}</p>
        <p>{t('intellectualProperty.copyright')}</p>
      </section>

      <section className={styles.section}>
        <h2>{t('musicCredits.title')}</h2>
        <p>{t('musicCredits.intro')}</p>
        <ul className={styles.creditsList}>
          <li>{t('musicCredits.addamsFamily')}</li>
          <li>{t('musicCredits.americanHorrorStory')}</li>
          <li>{t('musicCredits.coraline')}</li>
          <li>{t('musicCredits.corpseBride')}</li>
          <li>{t('musicCredits.scoobyDoo')}</li>
          <li>{t('musicCredits.exorcist')}</li>
          <li>{t('musicCredits.ghostbusters')}</li>
          <li>{t('musicCredits.jaws')}</li>
          <li>{t('musicCredits.lionKing')}</li>
          <li>{t('musicCredits.ratched')}</li>
          <li>{t('musicCredits.buffy')}</li>
          <li>{t('musicCredits.scream')}</li>
          <li>{t('musicCredits.strangerThings')}</li>
          <li>{t('musicCredits.littleMermaid')}</li>
          <li>{t('musicCredits.thriller')}</li>
          <li>{t('musicCredits.walkingDead')}</li>
          <li>{t('musicCredits.saw')}</li>
          <li>{t('musicCredits.charmed')}</li>
          <li>{t('musicCredits.dexter')}</li>
          <li>{t('musicCredits.thisIsHalloween')}</li>
        </ul>
        <p>{t('musicCredits.fairUse')}</p>
      </section>

      <section className={styles.section}>
        <h2>{t('privacy.title')}</h2>
        <h3>{t('privacy.dataCollection.title')}</h3>
        <p>{t('privacy.dataCollection.content')}</p>

        <h3>{t('privacy.cookies.title')}</h3>
        <p>{t('privacy.cookies.content')}</p>

        <h3>{t('privacy.rights.title')}</h3>
        <p>{t('privacy.rights.content')}</p>
      </section>

      <section className={styles.section}>
        <h2>{t('liability.title')}</h2>
        <p>{t('liability.content')}</p>
      </section>

      <section className={styles.section}>
        <h2>{t('externalLinks.title')}</h2>
        <p>{t('externalLinks.content')}</p>
      </section>

      <section className={styles.section}>
        <h2>{t('applicableLaw.title')}</h2>
        <p>{t('applicableLaw.content')}</p>
      </section>
    </div>
  )
}

export { MentionsLegales };
