"use client";

import Image from "next/image";
import styles from "./not-found.module.scss";
import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <div className={styles.page404}>
          <Image
            src="/error_404.png"
            alt="404 Error"
            width={400}
            height={400}
          />
          <div className={styles.title}>
            Oops... Cette page n&apos;existe pas
          </div>
          <Link className={styles.link} href="/">
            <button className={styles.button_back}>Accueil</button>
          </Link>
        </div>
      </body>
    </html>
  );
}
