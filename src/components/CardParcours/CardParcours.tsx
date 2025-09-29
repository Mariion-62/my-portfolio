import Image from 'next/image'
import { ReactElement } from 'react'
import styles from './cardParcours.module.scss'
export const dataParcours = [
  {
    id: 1,
    dateBegin: '2012',
    dateEnd: '2022',
    job: 'Conseillère Technique Fédérale',
    experience: 'Promouvoir le SA sur le territoire du Nord',
    picture: '/Logo_CDSA59.png',
    enterprise: 'CD Sport Adapté Nord',
    expTwo: 'Mise en place d’un calendrier sportif',
    expThree: 'Organisation d’événements sportifs (multisports)',
    expFour: 'Gestion des bénévoles',
    expFive: 'Relation avec les partenaires'
  },
  {
    id: 2,
    dateBegin: '2021',
    dateEnd: '2022',
    job: 'Formation Développeur Web et Web Appli',
    experience: 'Front-end : JavaScript, ReactJS, HTML, CSS',
    picture: '/Logo_WCS.png',
    enterprise: 'Wild Code School',
    expTwo: 'Back-end : Node.JS, Express',
    expThree: 'BDD : MySQL Workbench',
    expFour: 'Outils: Git, GitHub, Postman'
  },
  {
    id: 3,
    dateBegin: '04/2022',
    dateEnd: '07/2022',
    job: 'Développeuse Front-End - React',
    experience: 'Front-end: React, CSS',
    picture: '/Logo_SYB.png',
    enterprise: 'Shake Your Business',
    expTwo: 'Outils: Styled-Components,Trello, GitHub',
    expThree: "Développement d'une onePage dynamique - Réalisation de tests unitaires"
  },
  {
    id: 4,
    dateBegin: '11/2022',
    dateEnd: '09/2023',
    job: 'Développeuse Back-End - Node.JS',
    experience:
      "Développement de features (création d'API) - Réalisation de tests unitaires et tests d'intégration - Participation au comité projet",
    picture: '/Logo_Repozen.png',
    enterprise: 'Repozen',
    expTwo: 'Back-end: Node.JS, Fastify, TypeScript',
    expThree: 'BDD: MongoDB',
    expFour: 'Outils: Git, GitLab, MongoCompass, Postman, Jest, Swagger/openAPI'
  },
  {
    id: 5,
    dateBegin: '09/2023',
    dateEnd: '07/2024',
    job: 'Développeuse Front-End - React/Next.js',
    experience:
      "Développement de features pour créer un portail - Réalisation de tests unitaires et tests d'intégration - Développement d'un lib de composants partagés",
    picture: '',
    enterprise: 'Doxio',
    expTwo: 'Front-end: React, Next.js, TypeScript',
    expThree: 'Outils: Git, GitLab, Postman, Jest, Sonarqube, Jira, Swagger/openAPI'
  },
  {
    id: 6,
    dateBegin: '09/2024',
    dateEnd: "Aujourd'hui",
    job: 'Développeuse Fullstack - Vue.js, Nest.js, TypeScript',
    experience:
      "Développement de features pour un outil de gestion immobilière - Ajout de routes dans une API en Nest.js - Réalisation de tests unitaires et tests d'intégration",
    picture: '',
    enterprise: 'QuickDev',
    expTwo: 'Front-end: Vue.js - TypeScript',
    expThree: 'Back-end: Nest.js - TypeScript',
    expFour: 'Outils: Git, GitHub, Jest, Plane, Swagger/openAPI'
  }
]

export interface CardParcoursProps {
  id: number
  dateBegin: string
  dateEnd: string
  job: string
  experience?: string
  picture?: string
  enterprise: string
  expTwo?: string
  expThree?: string
  expFour?: string
  expFive?: string
}

function CardParcours({
  id,
  dateBegin,
  dateEnd,
  job,
  experience,
  picture,
  enterprise,
  expTwo,
  expThree,
  expFour,
  expFive
}: CardParcoursProps): ReactElement {
  return (
    <div className={styles.cardParcours}>
      <h3 className={styles.dateParcours}>
        {dateBegin} - {dateEnd}
      </h3>
      <p className={styles.job}>{job}</p>
      <p className={styles.enterprise}>{enterprise}</p>
      <ul className={styles.xpParcours}>
        <li className={styles.listParcours}>{experience}</li>
        <li className={styles.listParcours}>{expTwo}</li>
        <li className={styles.listParcours}>{expThree}</li>
        <li className={styles.listParcours}>{expFour}</li>
        <li className={styles.listParcours}>{expFive}</li>
      </ul>
      {picture ? (
        <div key={id} className={styles.logoParcours}>
          <Image className={styles.pictureParcours} src={picture} alt={enterprise} width={100} height={100} />
        </div>
      ) : (
        <div className={styles.logoParcours}>{enterprise}</div>
      )}
    </div>
  )
}
export { CardParcours }
