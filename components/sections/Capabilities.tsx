import { getTranslations, getLocale } from "next-intl/server";
import { capabilities } from "@/lib/content/services";
import styles from "./Capabilities.module.css";

export async function Capabilities() {
  const t = await getTranslations("Capabilities");
  const locale = (await getLocale()) as "es" | "en";

  return (
    <section id="capacidades">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
        </div>

        <div className={styles.grid}>
          {capabilities.map((item) => (
            <div className={styles.item} key={item.title.en}>
              <h3>{item.title[locale]}</h3>
              <p>{item.body[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
