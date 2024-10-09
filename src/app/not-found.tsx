import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.page404}>
      <div className={styles.title}>Oops... Cette page n&apos;existe pas</div>
      <button className={styles.btnBack}>
        <a className={styles.link} href="/">
          Accueil
        </a>
      </button>
    </div>
  );
}
