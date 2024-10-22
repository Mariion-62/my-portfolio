import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./description.module.scss";

function Description() {
  const birthDate = new Date(1990, 11, 27);
  const today = new Date();
  const diffInMilliseconds = today.getTime() - birthDate.getTime();
  const ageDate = new Date(diffInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  const t = useTranslations();

  return (
    <div className={styles.containerDescription}>
      <p className={styles.contentDescription}>
        {t("homepage.description", { age: age })}
      </p>
      <div className={styles.img}>
        <Image
          className={styles.avatar}
          src="/avatar.png"
          alt="avatar Marion"
          width={300}
          height={300}
        />
        <Image
          className={styles.iconeOrdi}
          src="/ordi.png"
          alt="icone ordi"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

export { Description };
