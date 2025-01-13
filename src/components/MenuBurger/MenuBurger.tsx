'use client'
import { useTranslations } from 'next-intl'
import React, { useState, useEffect, ReactElement } from 'react'
import styles from './menuBurger.module.scss'
import { Link } from '@/src/navigation'
import { navElements } from '@/types/menu'

function MenuBurger(): ReactElement {
  const t = useTranslations()

  // L'état est initialisé à `undefined` pour garantir que l'état est déterminé côté client
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    // On définit `isOpen` sur `false` une fois le premier rendu effectué côté client
    setIsOpen(false)
  }, [])

  if (isOpen === undefined) {
    // Ne rien afficher tant que l'état est indéfini
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
                <Link href={element.link} className={styles.link} onClick={toggleMenu}>
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
