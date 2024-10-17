import { Link, usePathname } from "@/src/navigation";
import { navElements } from "@/types/menu";
import { useTranslations } from "next-intl";
import styles from "./navigation.module.scss";

const Navigation = () => {
  const t = useTranslations();
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      {navElements.map((element) => (
        <div
          key={element.label}
          className={pathname === element.link ? styles.active : ""}
        >
          {element.link && <Link href={element.link}>{t(element.label)}</Link>}
        </div>
      ))}
    </nav>
  );
};

export { Navigation };
