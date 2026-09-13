"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

const STORAGE_KEY = "khutz-theme";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Hydration-safe mount gate: the theme is set on <html> by an inline
    // script before hydration, so we read it from the DOM once mounted.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist.
    }
    setIsDark(next);
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      aria-pressed={isDark}
      onClick={toggle}
    >
      {mounted && (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
          {isDark ? (
            <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7Z" strokeLinejoin="round" />
          ) : (
            <>
              <circle cx="8" cy="8" r="3.2" />
              <path
                strokeLinecap="round"
                d="M8 1.6v1.4M8 13v1.4M14.4 8H13M3 8H1.6M12.3 3.7l-1 1M4.7 11.3l-1 1M12.3 12.3l-1-1M4.7 4.7l-1-1"
              />
            </>
          )}
        </svg>
      )}
    </button>
  );
}
