import { getTranslations } from "next-intl/server";
import styles from "./CTA.module.css";

export async function CTA() {
  const t = await getTranslations("CTA");

  return (
    <section className={styles.cta} id="contacto">
      <div className="wrap">
        <h2 className={styles.title}>
          {t("titlePrefix")} <em>{t("accent")}</em>?
        </h2>
        <a className="btn" href="mailto:hola@khutz.com">
          <span>{t("button")}</span>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
        <div className={`eyebrow ${styles.tag}`}>{t("tag")}</div>
      </div>
    </section>
  );
}
