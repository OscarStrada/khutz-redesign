import { getTranslations, getLocale } from "next-intl/server";
import { services } from "@/lib/content/services";
import { ServicesAccordion } from "./ServicesAccordion";
import styles from "./Services.module.css";

export async function Services() {
  const t = await getTranslations("Services");
  const locale = (await getLocale()) as "es" | "en";

  const items = services.map((item) => ({
    title: item.title[locale],
    body: item.body[locale],
  }));

  return (
    <section id="servicios">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
        </div>

        <ServicesAccordion items={items} className={styles.list} />
      </div>
    </section>
  );
}
