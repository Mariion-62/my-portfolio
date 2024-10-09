import { IoMailOutline } from "react-icons/io5";
import styles from "./footer.module.scss";
import { useTranslations } from "next-intl";

function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();
  return (
    <div className={styles.footer}>
      <p className={styles.legalsMentions}>{t("footer.legal_notice")}</p>
      <p className={styles.copyright}>
        {t("footer.copyright", { currentYear })}
      </p>

      <a
        className={styles.contact}
        aria-label="mail de Marion"
        href="mailto:mariongrolleau@neuf.fr"
        target="_blank"
        rel="noreferrer"
      >
        <IoMailOutline size={30} />
      </a>
    </div>
  );
}

export { Footer };
