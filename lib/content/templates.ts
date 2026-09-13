import type { Template } from "./types";

export const templates: Template[] = [
  {
    slug: "alba",
    name: "Alba",
    variant: "alba",
    style: { es: "Minimalista", en: "Minimal" },
    priceMXN: 690,
    previewNames: "Ana & Diego",
    previewDate: "14 · 02 · 2026",
    features: [
      { es: "RSVP digital", en: "Digital RSVP" },
      { es: "Cuenta regresiva", en: "Countdown timer" },
      { es: "Un idioma", en: "Single language" },
    ],
  },
  {
    slug: "marea",
    name: "Marea",
    variant: "marea",
    style: { es: "Editorial oscuro", en: "Dark editorial" },
    priceMXN: 890,
    previewNames: "Ana & Diego",
    previewDate: "14 · 02 · 2026",
    features: [
      { es: "RSVP digital", en: "Digital RSVP" },
      { es: "Galería de fotos", en: "Photo gallery" },
      { es: "ES / EN", en: "ES / EN" },
    ],
  },
  {
    slug: "lino",
    name: "Lino",
    variant: "lino",
    style: { es: "Cálido y rústico", en: "Warm & rustic" },
    priceMXN: 690,
    previewNames: "Ana & Diego",
    previewDate: "14 · 02 · 2026",
    features: [
      { es: "RSVP digital", en: "Digital RSVP" },
      { es: "Mapa del venue", en: "Venue map" },
      { es: "Cuenta regresiva", en: "Countdown timer" },
    ],
  },
];
