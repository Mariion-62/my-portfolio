"use client";

import {
  CardParcours,
  CardParcoursProps,
  dataParcours,
} from "@/components/CardParcours/CardParcours";
import { useState, useEffect } from "react";
import styles from "./parcours.module.scss";
import { CardBenevole, CardBenevoleProps, dataBenevole } from "@/components/CardBenevole/CardBenevole";

export type DataParcoursType = CardParcoursProps;
export type DataBenevoleType = CardBenevoleProps;

 export default function Parcours() {
  const [allParcours, setAllParcours] = useState<DataParcoursType[]>([]);
  useEffect(() => {
    const dataParcoursCopy: CardParcoursProps[] = [...dataParcours];

    dataParcoursCopy.sort((a, b) => {
      const idA = new Date(a.id).getTime();
      const idB = new Date(b.id).getTime();
      return idB - idA;
    });

    setAllParcours(dataParcoursCopy);
  }, []);

  const [benevoles, setBenevoles] = useState<CardBenevoleProps[]>([]);
  useEffect(() => {
    setBenevoles(dataBenevole);
  }, []);

  return (
    <>
      <h2 className={styles.titleExpPro}>Expériences professionnelles</h2>
      <div className={styles.parcours}>
        {allParcours.map((oneParcours, index) => (
          <div className={styles.cardParcours} key={index}>
            <CardParcours
              id={oneParcours.id}
              dateBegin={oneParcours.dateBegin}
              dateEnd={oneParcours.dateEnd}
              job={oneParcours.job}
              enterprise={oneParcours.enterprise}
              experience={oneParcours.experience}
              picture={oneParcours.picture}
              expTwo={oneParcours.expTwo}
              expThree={oneParcours.expThree}
              expFour={oneParcours.expFour}
              expFive={oneParcours.expFive}
            />
          </div>
        ))}
      </div>
      <div>
        {benevoles.map((benevole, index) => (
          <div className="cardBenevole" key={index}>
            <CardBenevole
              picture={benevole.picture}
              listOne={benevole.listOne}
              listTwo={benevole.listTwo}
              listThree={benevole.listThree}
              listFour={benevole.listFour}
              listFive={benevole.listFive}
            />
          </div>
        ))}
      </div>
    </>
  );
}