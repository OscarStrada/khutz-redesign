"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Template } from "@/lib/content/types";
import { TemplateCard } from "./TemplateCard";
import styles from "./TemplatesGrid.module.css";

export function TemplatesGrid({
  templates,
  locale,
}: {
  templates: Template[];
  locale: "es" | "en";
}) {
  const t = useTranslations("Store");
  const [styleFilter, setStyleFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<number | "all">("all");

  // Keyed on the Spanish label so the active filter survives a locale
  // switch — the displayed pill text still follows the current locale.
  const styleOptions = useMemo(() => {
    const seen = new Map<string, string>();
    for (const template of templates) {
      if (!seen.has(template.style.es)) {
        seen.set(template.style.es, template.style[locale]);
      }
    }
    return Array.from(seen, ([key, label]) => ({ key, label }));
  }, [templates, locale]);

  const priceOptions = useMemo(
    () => Array.from(new Set(templates.map((template) => template.priceMXN))).sort((a, b) => a - b),
    [templates],
  );

  const filtered = templates.filter((template) => {
    const matchesStyle = styleFilter === "all" || template.style.es === styleFilter;
    const matchesPrice = priceFilter === "all" || template.priceMXN === priceFilter;
    return matchesStyle && matchesPrice;
  });

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>{t("filterStyle")}</span>
          <div className={styles.pills}>
            <button
              type="button"
              className={styleFilter === "all" ? styles.pillActive : styles.pill}
              onClick={() => setStyleFilter("all")}
            >
              {t("filterAll")}
            </button>
            {styleOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                className={styleFilter === option.key ? styles.pillActive : styles.pill}
                onClick={() => setStyleFilter(option.key)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>{t("filterPrice")}</span>
          <div className={styles.pills}>
            <button
              type="button"
              className={priceFilter === "all" ? styles.pillActive : styles.pill}
              onClick={() => setPriceFilter("all")}
            >
              {t("filterAll")}
            </button>
            {priceOptions.map((price) => (
              <button
                key={price}
                type="button"
                className={priceFilter === price ? styles.pillActive : styles.pill}
                onClick={() => setPriceFilter(price)}
              >
                ${price} MXN
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>{t("noResults")}</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((template) => (
            <TemplateCard key={template.slug} template={template} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
