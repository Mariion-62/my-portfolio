import Image from 'next/image'
import { Link } from '@/src/navigation'
import bgPink from './bgPink.png'
import bgPurple from './bgPurple.png'
import styles from './CardHomepage.module.scss'

function CardHomepage() {
  return (
    <>
      <section className={styles.allCards}>
        <div className={styles.card}>
          <Link id="parcours" className={styles.link} href="/mon-parcours">
            <Image className={styles.imgCardHomepage} src={bgPurple} alt="Mon parcours" />
            <h2 className={styles.titleCardHomepage}> Mon parcours</h2>
          </Link>
        </div>
        <div className={styles.card}>
          <Link id="realisations" className={styles.link} href="/mes-realisations">
            <Image className={styles.imgCardHomepage} src={bgPink} alt="Mon parcours" />
            <h2 className={styles.titleCardHomepage}> Mes réalisations</h2>
          </Link>
        </div>
      </section>
    </>
  )
}

export { CardHomepage }
