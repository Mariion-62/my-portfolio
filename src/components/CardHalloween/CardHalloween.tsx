import { useTranslations } from 'next-intl'
import { ReactElement } from 'react'
import styles from '../CardHalloween/cardHalloween.module.scss'

export interface CardHalloweenProps {
  title: string
  answer: string
  linkMusic: string
  isAswerVisible: boolean
  onAnswerClick: () => void
}
export function CardHalloween({
  title,
  answer,
  linkMusic,
  isAswerVisible,
  onAnswerClick
}: CardHalloweenProps): ReactElement {
  const t = useTranslations()

  return (
    <div>
      <div className={styles.card_halloween}>
        <div className={styles.container_audio}>
          <h2 className={styles.title}>{title}</h2>
          <audio key={linkMusic} controls autoPlay={false}>
            <source src={linkMusic} type="audio/mpeg" />
          </audio>
        </div>
        <div className={styles.container_answer}>
          <button type="button" onClick={onAnswerClick} className={styles.button_answer}>
            {t('halloween.answer')}
          </button>
          <div>{isAswerVisible && <p className={styles.answer_text}>{answer}</p>}</div>
        </div>
      </div>
    </div>
  )
}
