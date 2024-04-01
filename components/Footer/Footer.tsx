import { IoMailOutline } from "react-icons/io5";
import styles from "./footer.module.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p className={styles.legalsMentions}>mentions légales</p>
      <p className={styles.copyright}>Copyright {currentYear} </p>

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
