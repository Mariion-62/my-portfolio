'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import React, { useState, useEffect, ReactElement } from 'react'
import styles from './menuBurger.module.scss'
import { navElements } from '@/types/menu'

function MenuBurger(): ReactElement {
  const t = useTranslations()
  const locale = useLocale()

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [])

  if (isOpen === undefined) {
    return <div />
  }

  return (
    <div className={styles.menuBurger}>
      <button
        className={!isOpen ? styles.burgerButtonOpen : styles.displayNone}
        onClick={toggleMenu}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-label="Ouvrir le menu"
      >
        ☰
      </button>
      {isOpen && (
        <nav className={styles.navMenu}>
          <button className={styles.burgerButtonClose} onClick={toggleMenu} aria-label="Fermer le menu">
            X
          </button>
          {navElements.map((element) => (
            <div key={element.label} className={styles.navItem}>
              {element.link && (
                <Link href={`/${locale}${element.link}`} className={styles.link} onClick={toggleMenu}>
                  {t(element.label)}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </div>
  )
}

export { MenuBurger }
