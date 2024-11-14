import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { Link } from '@/src/navigation'
import { navElements } from '@/types/menu'
import styles from './menuBurger.module.scss'

const MenuBurger = () => {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.menuBurger}>
      <button className={!isOpen ? styles.burgerButtonOpen : styles.displayNone} onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <nav className={styles.navMenu}>
          <button className={styles.burgerButtonClose} onClick={toggleMenu}>
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
