"use client";

import Logo from "../../public/logo.png";
import logoGitHub from "../../public/logoGitHub.png";
import logoLinkedIn from "../../public/logoLinkedIn.png";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import { Navigation } from "../Navigation/Navigation";

function Header() {
  return (
    <div className={styles.header}>
      <Link id="header" href="/">
        <Image src={'/logo.png'} alt="Logo" width={130} height={130} />
      </Link>
      <Navigation/>
      <div>
        <div className={styles.iconSocials}>
          <a
            href="https://www.linkedin.com/in/mariongrolleau/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className={styles.logoLinkedIn}
              src={'/logoLinkedIn.png'}
              alt="LinkedIn"
              width={60}
              height={60}
            />
          </a>
          <a href="https://github.com/Mariion-62">
            <Image
              src={'/logoGitHub.png'}
              alt="Github"
              className={styles.logoGitHub}
              width={60}
              height={60}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export { Header };
