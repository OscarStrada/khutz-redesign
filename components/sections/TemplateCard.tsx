import type { Template } from "@/lib/content/types";
import styles from "./TemplateCard.module.css";

export function TemplateCard({ template, locale }: { template: Template; locale: "es" | "en" }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.preview} ${styles[template.variant]}`}>
        <span className={styles.tag}>{locale === "es" ? "Vista previa" : "Preview"}</span>
        <span className={styles.names}>{template.previewNames}</span>
        <span className={styles.rule} />
        <span className={styles.date}>{template.previewDate}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.nameRow}>
          <h3>{template.name}</h3>
          <span className={styles.style}>{template.style[locale]}</span>
        </div>

        <ul className={styles.features}>
          {template.features.map((feature) => (
            <li key={feature[locale]}>{feature[locale]}</li>
          ))}
        </ul>

        <div className={styles.foot}>
          <span className={styles.price}>
            <small>{locale === "es" ? "Desde" : "From"}</small>${template.priceMXN} MXN
          </span>
          <div className={styles.actions}>
            <a
              className={styles.demo}
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === "es" ? "Ver demo" : "View demo"}
            </a>
            <a
              className={styles.buy}
              href={template.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === "es" ? "Comprar" : "Buy"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
