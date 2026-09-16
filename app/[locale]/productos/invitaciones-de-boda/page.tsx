import { getTranslations, getLocale } from "next-intl/server";
import { templates } from "@/lib/content/templates";
import { TemplatesGrid } from "@/components/sections/TemplatesGrid";

export async function generateMetadata() {
  const t = await getTranslations("Store");
  return {
    title: `${t("title")} — Khutz`,
    description: t("subtitle"),
  };
}

export default async function PlantillasPage() {
  const t = await getTranslations("Store");
  const locale = (await getLocale()) as "es" | "en";

  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <TemplatesGrid templates={templates} locale={locale} />
      </div>
    </section>
  );
}
