import Image from 'next/image';
import { ReactElement } from 'react';
import avatar from './avatar.webp';
import styles from './description.module.scss';
import ordi from './ordi.png';

function Description(): ReactElement {
  const birthDate = new Date(1990, 10, 27)
  const today = new Date()
  const diffInMilliseconds = today.getTime() - birthDate.getTime()
  const ageDate = new Date(diffInMilliseconds)
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)

  return (
    <div className={styles.containerDescription}>
      <p className={styles.contentDescription}>
        Je m’appelle Marion, j’ai {age} ans. J’ai travaillé pendant 10 ans dans le domaine du sport adapté.
        J’ai décidé de faire une reconversion dans le domaine de l’IT pour me donner un nouveau challenge et m&apos;
        épanouir en tant que développeuse.
      </p>
      <div className={styles.img}>
        <Image className={styles.avatar} src={avatar} alt="avatar Marion" width={300} height={300} priority />
        <Image className={styles.iconeOrdi} src={ordi} alt="icone ordi" width={600} height={600} />
      </div>
    </div>
  )
}

export { Description };
