import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./Hero.module.css";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className={styles.hero}>
      <div className="wrap">
        <div className={styles.eyebrowRow}>
          <span className="eyebrow">{t("eyebrow")}</span>
        </div>

        <h1 className={styles.h1}>
          <span className={styles.line}>{t("line1")}</span>
          <span className={styles.line}>{t("line2")}</span>
          <span className={styles.line}>
            <em className={styles.accentWord}>{t("accent")}</em>
          </span>
        </h1>

        <div className={styles.foot}>
          <p className={styles.sub}>{t("sub")}</p>
          <Link className="btn" href="/#trabajo">
            <span>{t("cta")}</span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <b>{t("stat1Value")}</b>
            <span>{t("stat1Label")}</span>
          </div>
          <div className={styles.stat}>
            <b>{t("stat2Value")}</b>
            <span>{t("stat2Label")}</span>
          </div>
          <div className={styles.stat}>
            <b>{t("stat3Value")}</b>
            <span>{t("stat3Label")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
