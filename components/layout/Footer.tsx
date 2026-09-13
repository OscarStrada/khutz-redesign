import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./Footer.module.css";

export async function Footer() {
  const t = await getTranslations("Nav");
  const tFoot = await getTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.wrap}`}>
        <div className={styles.top}>
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

          <div className={styles.social}>
            <a
              href="https://www.instagram.com/khutzmexico/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a
              href="https://github.com/Khutz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/81525126/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.3 8.75h3.28V21H3.3V8.75Zm6.3 0h3.14v1.68h.04c.44-.82 1.5-1.68 3.1-1.68 3.32 0 3.93 2.13 3.93 4.9V21h-3.28v-5.6c0-1.34-.02-3.06-1.88-3.06-1.88 0-2.17 1.45-2.17 2.96V21H9.6V8.75Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>{tFoot("rights")}</span>
          <span>{tFoot("headquarters")}</span>
          <span>{tFoot("tag")}</span>
        </div>
      </div>
    </footer>
  );
}
