'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import styles from './not-found.module.scss'

export default function NotFound(): ReactElement {
  return (
    <html lang="fr">
      <body>
        <div className={styles.page404}>
          <Image priority src="/error_404.png" alt="404 Error" width={400} height={400} />
          <div className={styles.title}>Oops... Cette page n&apos;existe pas</div>
          <Link className={styles.link} href="/">
            <button className={styles.button_back}>Accueil</button>
          </Link>
        </div>
      </body>
    </html>
  )
}
