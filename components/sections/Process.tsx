import { getTranslations, getLocale } from "next-intl/server";
import { processSteps } from "@/lib/content/services";
import styles from "./Process.module.css";

export async function Process() {
  const t = await getTranslations("Process");
  const locale = (await getLocale()) as "es" | "en";

  return (
    <section id="proceso">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
        </div>

        <div className={styles.grid}>
          {processSteps.map((step, i) => (
            <div className={styles.step} key={step.title.en}>
              <span className={styles.idx}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title[locale]}</h3>
              <p>{step.body[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
