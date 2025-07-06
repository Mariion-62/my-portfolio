'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { ReactElement } from 'react'
import { MenuBurger } from '../MenuBurger/MenuBurger'
import { Navigation } from '../Navigation/Navigation'
import styles from './header.module.scss'
import ChangeLogoWithDate from '@/src/utils/ChangeLogoWithDate'

function Header(): ReactElement {
  const locale = useLocale()

  return (
    <header className={styles.header}>
      <Link id="header" href={`/${locale}`}>
        {ChangeLogoWithDate()}
      </Link>
      {typeof window !== 'undefined' && window.innerWidth <= 768 ? <MenuBurger /> : <Navigation />}
      <div>
        <div className={styles.iconSocials}>
          <a href="https://www.linkedin.com/in/mariongrolleau/" target="_blank" rel="noreferrer">
            <Image
              priority
              className={styles.logoLinkedIn}
              src={'/logoLinkedIn.png'}
              alt="LinkedIn"
              width={60}
              height={60}
            />
          </a>
          <a href="https://github.com/Mariion-62">
            <Image priority src={'/logoGitHub.png'} alt="Github" className={styles.logoGitHub} width={60} height={60} />
          </a>
        </div>
      </div>
    </header>
  )
}

export { Header }
