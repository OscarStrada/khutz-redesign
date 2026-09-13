import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { projects, getProject } from "@/lib/content/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Khutz`,
    description: project.challenge.es,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("CaseStudy");
  const locale = (await getLocale()) as "es" | "en";
  const [featured, ...rest] = project.gallery;
  const duo = rest.slice(0, 2);
  const closing = rest[2];

  return (
    <section className={styles.caseStudy}>
      <div className="wrap">
        <Link className={styles.back} href="/#trabajo">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M13 8H3M7 4L3 8l4 4" />
          </svg>
          <span>{t("back")}</span>
        </Link>

        <div className={styles.head}>
          <div>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.slogan}>{project.slogan}</p>
          </div>
          <div className={styles.meta}>
            <span>
              {t("services")}: {project.services[locale]}
            </span>
            <span>
              {t("stack")}: {project.stack}
            </span>
            <a href={project.url} target="_blank" rel="noopener">
              {project.url.replace("https://", "")} ↗
            </a>
          </div>
        </div>

        <figure className={`${styles.frame} ${styles.cover}`}>
          <Image
            src={project.cover}
            alt={`${project.title} — portada del proyecto`}
            fill
            sizes="(max-width: 900px) 100vw, 1400px"
            priority
          />
          <figcaption className={styles.frameTag}>{project.title} — portada</figcaption>
        </figure>

        <div className={styles.body}>
          <div>
            <span className="eyebrow">{t("challenge")}</span>
            <p>{project.challenge[locale]}</p>
          </div>
          <div>
            <span className="eyebrow">{t("solution")}</span>
            <p>{project.solution[locale]}</p>
          </div>
        </div>

        {featured && (
          <figure className={`${styles.frame} ${styles.featured}`}>
            <Image
              src={featured}
              alt={`${project.title} — vista destacada`}
              fill
              sizes="(max-width: 900px) 100vw, 1400px"
            />
            <figcaption className={styles.frameTag}>01</figcaption>
          </figure>
        )}

        <div className={styles.result}>
          <div>
            <span className="eyebrow">{t("result")}</span>
            <h3>{project.result[locale]}</h3>
          </div>
          <a className="btn" href={project.url} target="_blank" rel="noopener">
            <span>{t("viewLive")}</span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {duo.length > 0 && (
          <div className={styles.duo}>
            {duo.map((src, i) => (
              <figure key={src} className={`${styles.frame} ${styles.duoItem}`}>
                <Image
                  src={src}
                  alt={`${project.title} — detalle`}
                  fill
                  sizes="(max-width: 900px) 50vw, 700px"
                />
                <figcaption className={styles.frameTag}>{String(i + 2).padStart(2, "0")}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {closing && (
          <figure className={`${styles.frame} ${styles.closing}`}>
            <Image
              src={closing}
              alt={`${project.title} — cierre`}
              fill
              sizes="(max-width: 900px) 100vw, 1400px"
            />
            <figcaption className={styles.frameTag}>04</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
