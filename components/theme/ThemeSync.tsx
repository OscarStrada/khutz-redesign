"use client";

import { useLayoutEffect } from "react";
import { useLocale } from "next-intl";

const STORAGE_KEY = "khutz-theme";

/**
 * Switching locale re-renders the [locale] layout, which makes React
 * recompute <html>'s className from JSX — wiping out the "dark" class
 * that ThemeToggle/the init script added outside React's tracking.
 * Re-apply it right after every locale change, before paint.
 */
export function ThemeSync() {
  const locale = useLocale();

  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } catch {
      document.documentElement.classList.remove("dark");
    }
  }, [locale]);

  return null;
}
