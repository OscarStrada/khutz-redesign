import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Nav.module.css";

export async function Nav() {
  const t = await getTranslations("Nav");

  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.wrap}`}>
        <Link href="/" className={styles.logoLink} aria-label="Khutz">
          <Logo />
        </Link>

        <ul className={styles.links}>
          <li>
            <Link href="/#trabajo">{t("work")}</Link>
          </li>
          <li>
            <Link href="/productos">{t("products")}</Link>
          </li>
          <li>
            <Link href="/#servicios">{t("services")}</Link>
          </li>
          <li>
            <Link href="/#proceso">{t("process")}</Link>
          </li>
          <li>
            <Link href="/#contacto">{t("contact")}</Link>
          </li>
        </ul>

        <div className={styles.controls}>
          <ThemeToggle />
          <LangToggle />
        </div>
      </div>
    </header>
  );
}
