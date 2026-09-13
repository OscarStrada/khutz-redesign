import { getTranslations, getLocale } from "next-intl/server";
import { projects } from "@/lib/content/projects";
import { ProjectRow } from "./ProjectRow";
import styles from "./Portfolio.module.css";

export async function Portfolio() {
  const t = await getTranslations("Portfolio");
  const locale = (await getLocale()) as "es" | "en";

  return (
    <section className={styles.portfolio} id="trabajo">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectRow
              key={project.slug}
              slug={project.slug}
              title={project.title}
              slogan={project.slogan}
              accent={project.accent}
              darkText={project.darkText}
              cover={project.cover}
              servicesLabel={project.services[locale]}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
