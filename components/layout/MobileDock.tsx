"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./MobileDock.module.css";

export function MobileDock() {
  const t = useTranslations("Nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      const diff = y - lastScrollY.current;

      // Ignore tiny jitter (mobile rubber-banding, sub-pixel scroll) so the
      // dock doesn't flicker, and never hide it while the menu is open.
      if (Math.abs(diff) < 8 || menuOpen) return;

      setHidden(diff > 0 && y > 80);
      lastScrollY.current = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  const links = [
    { href: "/#trabajo", label: t("work") },
    { href: "/productos", label: t("products") },
    { href: "/#servicios", label: t("services") },
    { href: "/#proceso", label: t("process") },
    { href: "/#contacto", label: t("contact") },
  ];

  return (
    <div className={`${styles.dockLayer} ${hidden ? styles.dockHidden : ""}`}>
      {menuOpen && (
        <ul className={styles.menu}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <nav className={styles.dock} aria-label="Mobile">
        <button
          type="button"
          className={styles.pill}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            {menuOpen ? (
              <path strokeLinecap="round" d="M3 3l10 10M13 3L3 13" />
            ) : (
              <path strokeLinecap="round" d="M2 4.5h12M2 8h12M2 11.5h12" />
            )}
          </svg>
        </button>

        <span className={styles.sep} aria-hidden="true" />

        <div className={styles.pill}>
          <ThemeToggle />
        </div>

        <span className={styles.sep} aria-hidden="true" />

        <div className={styles.pill}>
          <LangToggle />
        </div>
      </nav>
    </div>
  );
}
