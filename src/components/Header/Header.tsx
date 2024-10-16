"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import { Navigation } from "../Navigation/Navigation";
import ChangeLogoWithDate from "@/src/utils/ChangeLogoWithDate";

function Header() {
  return (
    <div className={styles.header}>
      <Link id="header" href="/">
        {ChangeLogoWithDate()}
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
              src={"/logoLinkedIn.png"}
              alt="LinkedIn"
              width={60}
              height={60}
            />
          </a>
          <a href="https://github.com/Mariion-62">
            <Image
              src={"/logoGitHub.png"}
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
