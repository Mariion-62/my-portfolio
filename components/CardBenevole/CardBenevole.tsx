import Image from "next/image";
import styles from "./cardBenevole.module.scss";

export interface CardBenevoleProps {
  picture: string;
  listOne?: string;
  listTwo?: string;
  listThree?: string;
  listFour?: string;
  listFive?: string;
}

export function CardBenevole({
  picture,
  listOne,
  listTwo,
  listThree,
  listFour,
  listFive,
}: CardBenevoleProps) {
  return (
    <>
      <div className={styles.cardBenevole}>
        <Image
          className={styles.imgBenevole}
          src={picture}
          alt="img"
          width={100}
          height={100}
        />
        <ul className={styles.allListBenevole}>
          <li className={styles.itemsBenevole}>{listOne}</li>

          <li className={styles.itemsBenevole}>{listTwo}</li>

          <li className={styles.itemsBenevole}>{listThree}</li>
          <li className={styles.itemsBenevole}>{listFive}</li>
        </ul>

        <div className={styles.buttonMore}>
          <a className={styles.linkMore} href={listFour}>
            En savoir +
          </a>
        </div>
      </div>
    </>
  );
}

export const dataBenevole = [
  {
    picture: "/logoTT.png",
    listOne: "Joueuse depuis + 20ans",
    listTwo: "Membre du bureau du Seclin Ping Pour Prétexte",
    listThree: "Coach section Sport Adapté pendant 10 ans",
    listFour: "https://www.facebook.com/seclinppp",
  },
  {
    picture: "/jeuxdesociete.png",
    listOne: "Vice-présidente de l'association la Remise Enjouée",
    listTwo: "Atelier Chantier d'Insertion",
    listThree: "Collecte - Trie - Rénove des jouers de seconde main",
    listFour: "https://www.laremiseenjouee.org/",
  },
];
