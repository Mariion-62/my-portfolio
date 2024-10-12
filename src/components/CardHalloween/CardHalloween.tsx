import { useTranslations } from "next-intl";
import { useState } from "react";

export interface CardHalloweenProps {
  title: string;
  answer: string;
  linkMusic: string;
}
export default function CardHalloween({
  title,
  answer,
  linkMusic,
}: CardHalloweenProps) {
  const t = useTranslations();
  const [showContent, setShowContent] = useState(false);
  const [findAnswer, setFindAnswer] = useState(false);

  function handleFindAnswer(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setShowContent(!showContent);
    setFindAnswer(!findAnswer);
  }
  return (
    <>
      <div className="card-halloween">
        <div>
          <h2>{title}</h2>
          <audio controls autoPlay={false}>
            <source src={linkMusic} type="audio/mpeg" />
          </audio>
        </div>
        <button type="button" onClick={handleFindAnswer}>
          {t("halloween.answer")}
        </button>
      </div>
      {showContent && (
        <div>
          <h3>{answer}</h3>
        </div>
      )}
    </>
  );
}
