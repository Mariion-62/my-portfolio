"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import {
  CardParcours,
  CardParcoursProps,
  dataParcours,
} from "@/src/components/CardParcours/CardParcours";
import styles from "./parcours.module.scss";

export type DataParcoursType = CardParcoursProps;

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
  const t = useTranslations();
  return (
    <>
      <h2 className={styles.titleExpPro}>{t("exp_careers.title_exp")}</h2>
      <div className={styles.parcours}>
        {allParcours.map((oneParcours, index) => {
          return (
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
          );
        })}
      </div>
    </>
  );
}
