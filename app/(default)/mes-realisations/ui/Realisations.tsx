import { useEffect, useState } from "react";
import styles from "./realisation.module.scss";
import {
  CardRealisation,
  CardRealisationProps,
  dataRealisation,
} from "@/components/CardRealisation/CardRealisation";

export type DataRealisationType = CardRealisationProps;

export default function Realisations() {
  const [cardRealisations, setCardRealisations] = useState<
    DataRealisationType[]
  >([]);
  useEffect(() => {
    const dataRealisationCopy: CardRealisationProps[] = [...dataRealisation];

    dataRealisationCopy.sort((a, b) => {
      return b.id - a.id;
    });
    setCardRealisations(dataRealisationCopy);
  }, []);

  return (
    <div className={styles.realisation}>
      {cardRealisations.map((cardRealisation, index) => {
        return (
          <div key={index}>
            <CardRealisation
              id={cardRealisation.id}
              title={cardRealisation.title}
              picture={cardRealisation.picture}
              content={cardRealisation.content}
              linkGithub={cardRealisation.linkGithub}
              linkGithubBack={cardRealisation.linkGithubBack}
              linkSite={cardRealisation.linkSite}
              group={cardRealisation.group}
              time={cardRealisation.time}
              problematique={cardRealisation.problematique}
            />
          </div>
        );
      })}
    </div>
  );
}
