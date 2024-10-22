import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/src/navigation";
import styles from "./CardHomepage.module.scss";

function CardHomepage() {
  const t = useTranslations();
  return (
    <>
      <section className={styles.allCards}>
        <div className={styles.card}>
          <Link id="parcours" className={styles.link} href="/mon-parcours">
            <Image
              className={styles.imgCardHomepage}
              src="/bgPurple.png"
              alt={t("navigation.careers")}
              width={400}
              height={250}
              priority
            />
            <h2 className={styles.titleCardHomepage}>
              {t("navigation.careers")}
            </h2>
          </Link>
        </div>
        <div className={styles.card}>
          <Link
            id="realisations"
            className={styles.link}
            href="/mes-realisations"
          >
            <Image
              className={styles.imgCardHomepage}
              src="/bgPink.png"
              alt={t("navigation.project")}
              width={400}
              height={250}
              priority
            />
            <h2 className={styles.titleCardHomepage}>
              {t("navigation.project")}
            </h2>
          </Link>
        </div>
      </section>
    </>
  );
}

export { CardHomepage };
