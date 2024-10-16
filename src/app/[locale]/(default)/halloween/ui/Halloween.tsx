"use client";

import React, { useState } from "react";
import CardHalloween from "@/src/components/CardHalloween/CardHalloween";
import { useTranslations } from "next-intl";
import styles from "./halloween.module.scss";
import { link } from "fs";
import { title } from "process";

export default function Halloween() {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataHalloween.length);
    setIsAnswerVisible(false);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + dataHalloween.length) % dataHalloween.length
    );
    setIsAnswerVisible(false);
  };

  const handleAnswerClick = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  const dataHalloween = [
    {
      title: t("halloween.title_music.title_one"),
      answer: t("halloween.music.adams_family"),
      linkMusic: "/assets/adams-family.mp3",
    },
    {
      title: t("halloween.title_music.title_two"),
      answer: t("halloween.music.american_horror_story"),
      linkMusic: "/assets/american-horror-story.mp3",
    },
    {
      title: t("halloween.title_music.title_three"),
      answer: t("halloween.music.coraline"),
      linkMusic: "/assets/coraline.mp3",
    },
    {
      title: t("halloween.title_music.title_four"),
      answer: t("halloween.music.corpse_bride"),
      linkMusic: "/assets/corpse-bride.mp3",
    },
    {
      title: t("halloween.title_music.title_five"),
      answer: t("halloween.music.scooby_doo"),
      linkMusic: "/assets/ScoobyDoo.mp3",
    },
    {
      title: t("halloween.title_music.title_six"),
      answer: t("halloween.music.exorcist"),
      linkMusic: "/assets/exorcist.mp3",
    },
    {
      title: t("halloween.title_music.title_seven"),
      answer: t("halloween.music.ghostbusters"),
      linkMusic: "/assets/ghostbusters.mp3",
    },
    {
      title: t("halloween.title_music.title_eight"),
      answer: t("halloween.music.jaws"),
      linkMusic: "/assets/jaws.mp3",
    },
    {
      title: t("halloween.title_music.title_nine"),
      answer: t("halloween.music.lion_king"),
      linkMusic: "/assets/lion-king.mp3",
    },
    {
      title: t("halloween.title_music.title_ten"),
      answer: t("halloween.music.ratched"),
      linkMusic: "/assets/ratched.mp3",
    },
    {
      title: t("halloween.title_music.title_eleven"),
      answer: t("halloween.music.buffy"),
      linkMusic: "/assets/BuffyContreLesVampires.mp3",
    },

    {
      title: t("halloween.title_music.title_twelve"),
      answer: t("halloween.music.scream"),
      linkMusic: "/assets/scream.mp3",
    },
    {
      title: t("halloween.title_music.title_thirteen"),
      answer: t("halloween.music.stranger_things"),
      linkMusic: "/assets/stranger-things.mp3",
    },
    {
      title: t("halloween.title_music.title_fourteen"),
      answer: t("halloween.music.the_little_mermaid"),
      linkMusic: "/assets/the-little-mermaid.mp3",
    },
    {
      title: t("halloween.title_music.title_fifteen"),
      answer: t("halloween.music.thriller"),
      linkMusic: "/assets/thriller.mp3",
    },
    {
      title: t("halloween.title_music.title_sixteen"),
      answer: t("halloween.music.walking_dead"),
      linkMusic: "/assets/walking-dead.mp3",
    },
    {
      title: t("halloween.title_music.title_seventeen"),
      answer: t("halloween.music.saw"),
      linkMusic: "/assets/saw.mp3",
    },
    {
      title: t("halloween.title_music.title_eighteen"),
      answer: t("halloween.music.charmed"),
      linkMusic: "/assets/Charmed.mp3",
    },
    {
      title: t("halloween.title_music.title_nineteen"),
      answer: t("halloween.music.dexter"),
      linkMusic: "/assets/dexter.mp3",
    },
    {
      title: t("halloween.title_music.title_twenty"),
      answer: t("halloween.music.this_is_halloween"),
      linkMusic: "/assets/ThisIsHalloween.mp3",
    },
  ];

  return (
    <div className={styles.halloween_page}>
      <div>
        <h1 className={styles.title_page}>{t("halloween.title_page")}</h1>
      </div>
      <div className={styles.card}>
        <CardHalloween
          title={dataHalloween[currentIndex].title}
          answer={dataHalloween[currentIndex].answer}
          linkMusic={dataHalloween[currentIndex].linkMusic}
          isAswerVisible={isAnswerVisible}
          onAnswerClick={handleAnswerClick}
        />
        <div className={styles.container_button}>
          <button
            className={styles.button_prev_next}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            {t("halloween.previous_button")}
          </button>
          <button
            className={styles.button_prev_next}
            onClick={handleNext}
            disabled={currentIndex === dataHalloween.length - 1}
          >
            {t("halloween.next_button")}
          </button>
        </div>
      </div>
    </div>
  );
}
export { Halloween };
