import Image from 'next/image'
import avatar from './avatar.png'
import styles from './description.module.scss'
import ordi from './ordi.png'

function Description() {
  const birthDate = new Date(1990, 11, 27)
  const today = new Date()
  const diffInMilliseconds = today.getTime() - birthDate.getTime()
  const ageDate = new Date(diffInMilliseconds)
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)

  return (
    <div className={styles.containerDescription}>
      <p className={styles.contentDescription}>
        Je m’appelle Marion, j’ai {age} ans, je suis pacsée. Je suis curieuse, autonome, investie, dynamique. J’aime
        voyager, jouer au jeux vidéo, aux jeux de société, aller en concert, en festival mais aussi me poser devant une
        série, lire un bouquin ou écouter de la musique. J’ai travaillé pendant 10 ans dans le domaine du sport adapté.
        J’ai décidé de faire une reconversion dans le domaine de l’IT pour me donner un nouveau challenge et m&apos;
        épanouir en tant que développeuse.
      </p>
      <div className={styles.img}>
        <Image className={styles.avatar} src={avatar} alt="avatar Marion" width={300} height={300} />
        <Image className={styles.iconeOrdi} src={ordi} alt="icone ordi" width={600} height={600} />
      </div>
    </div>
  )
}

export { Description }
