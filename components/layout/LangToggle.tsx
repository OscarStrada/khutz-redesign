"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import styles from "./LangToggle.module.css";

export function LangToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(nextLocale: "es" | "en") {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className={styles.toggle} role="group" aria-label="Idioma / Language">
      <button
        className={locale === "es" ? styles.active : undefined}
        onClick={() => switchTo("es")}
        aria-pressed={locale === "es"}
      >
        ES
      </button>
      <span aria-hidden="true" className={styles.sep}>
        /
      </span>
      <button
        className={locale === "en" ? styles.active : undefined}
        onClick={() => switchTo("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
