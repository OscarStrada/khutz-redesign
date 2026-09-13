"use client";

import { useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import styles from "./Portfolio.module.css";

interface ProjectRowProps {
  slug: string;
  title: string;
  slogan: string;
  accent: string;
  darkText: boolean;
  cover: string;
  servicesLabel: string;
  stack: string;
}

export function ProjectRow({
  slug,
  title,
  slogan,
  accent,
  darkText,
  cover,
  servicesLabel,
  stack,
}: ProjectRowProps) {
  const previewRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const preview = previewRef.current;
    if (!preview) return;
    preview.style.left = `${e.clientX}px`;
    preview.style.top = `${e.clientY}px`;
  }

  function handleEnter() {
    previewRef.current?.classList.add(styles.previewVisible);
  }

  function handleLeave() {
    previewRef.current?.classList.remove(styles.previewVisible);
  }

  return (
    <>
      <Link
        href={`/trabajo/${slug}`}
        className={`${styles.row} ${darkText ? "" : styles.onDark}`}
        style={{ "--accent": accent } as React.CSSProperties}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <span className={styles.dot} />
        <div className={styles.thumb}>
          <Image src={cover} alt={title} width={104} height={76} />
        </div>
        <div className={styles.main}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.slogan}>{slogan}</p>
        </div>
        <div className={styles.meta}>
          <span>{servicesLabel}</span>
          <span>{stack}</span>
        </div>
        <span className={styles.arrow}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M4 12L12 4M6 4h6v6" />
          </svg>
        </span>
      </Link>

      <div
        ref={previewRef}
        className={styles.preview}
        style={{ backgroundImage: `url('${cover}')` }}
        aria-hidden="true"
      />
    </>
  );
}
