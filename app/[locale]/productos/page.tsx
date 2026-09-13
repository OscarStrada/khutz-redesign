import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import styles from "./page.module.css";

export async function generateMetadata() {
  const t = await getTranslations("Products");
  return {
    title: `${t("title")} — Khutz`,
    description: t("subtitle"),
  };
}

export default async function ProductsPage() {
  const t = await getTranslations("Products");

  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className={styles.grid}>
          <Link href="/productos/invitaciones-de-boda" className={styles.card}>
            <div className={styles.visual}>
              <span className={styles.swatch} style={{ background: "#efeae0" }} />
              <span className={styles.swatch} style={{ background: "#0a0c10" }} />
              <span className={styles.swatch} style={{ background: "#b98957" }} />
            </div>
            <div className={styles.body}>
              <h3>{t("weddingTitle")}</h3>
              <p>{t("weddingDescription")}</p>
              <div className={styles.foot}>
                <span className={styles.price}>{t("weddingFrom")}</span>
                <span className={styles.cta}>
                  {t("weddingCta")}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          <div className={styles.soon}>
            <span>{t("comingSoon")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
