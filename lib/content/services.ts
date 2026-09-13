import type { ServiceItem, ProcessStep, Capability } from "./types";

export const services: ServiceItem[] = [
  {
    title: { es: "Análisis", en: "Analysis" },
    body: {
      es: "Entendemos tu negocio y a tus usuarios antes de construir nada — cada decisión de diseño y desarrollo parte de ahí.",
      en: "We understand your business and your users before building anything — every design and development decision starts there.",
    },
  },
  {
    title: { es: "Diseño UX/UI", en: "UX/UI Design" },
    body: {
      es: "Interfaces claras, pensadas para convertir visitantes en clientes, no solo para verse bien en un mockup.",
      en: "Clear interfaces designed to convert visitors into customers, not just to look good in a mockup.",
    },
  },
  {
    title: { es: "Desarrollo", en: "Development" },
    body: {
      es: "Código propio, rápido y escalable — desde sitios de marca hasta plataformas a la medida, entregado a tiempo.",
      en: "Real code, fast and scalable — from brand sites to custom platforms, delivered on time.",
    },
  },
  {
    title: { es: "Monitoreo", en: "Monitoring" },
    body: {
      es: "Una vez en producción, seguimos de cerca el desempeño real: errores, velocidad y uso — no solo lanzamos y desaparecemos.",
      en: "Once live, we keep a close eye on real performance: errors, speed and usage — we don't just launch and disappear.",
    },
  },
  {
    title: { es: "Mantenimiento", en: "Maintenance" },
    body: {
      es: "Soporte técnico continuo y mejoras después del lanzamiento, para que tu producto no se quede estático.",
      en: "Ongoing technical support and improvements after launch, so your product never stays static.",
    },
  },
];

export const capabilities: Capability[] = [
  {
    title: { es: "Sitios web", en: "Websites" },
    body: {
      es: "Sitios de marca, landing pages y plataformas de contenido pensadas para convertir.",
      en: "Brand sites, landing pages and content platforms built to convert.",
    },
  },
  {
    title: { es: "Apps web", en: "Web apps" },
    body: {
      es: "Sistemas web complejos, con lógica de negocio real detrás — no solo páginas estáticas.",
      en: "Complex web systems with real business logic behind them — not just static pages.",
    },
  },
  {
    title: { es: "E-commerce", en: "E-commerce" },
    body: {
      es: "Tiendas en línea a la medida, desde el catálogo hasta el checkout y los pagos.",
      en: "Custom online stores, from catalog through checkout and payments.",
    },
  },
  {
    title: { es: "SaaS", en: "SaaS" },
    body: {
      es: "Plataformas de software como servicio, multiusuario y listas para escalar.",
      en: "Multi-tenant software-as-a-service platforms, built ready to scale.",
    },
  },
  {
    title: { es: "Dashboards", en: "Dashboards" },
    body: {
      es: "Paneles administrativos y de datos a la medida de cómo opera tu negocio.",
      en: "Admin and data dashboards built around how your business actually runs.",
    },
  },
  {
    title: { es: "Apps móviles", en: "Mobile apps" },
    body: {
      es: "iOS y Android desde una sola base de código, multiplataforma con React Native.",
      en: "iOS and Android from a single codebase, cross-platform with React Native.",
    },
  },
  {
    title: { es: "Apps de escritorio", en: "Desktop apps" },
    body: {
      es: "Software instalable para Windows y macOS.",
      en: "Installable software for Windows and macOS.",
    },
  },
  {
    title: { es: "Sistemas POS", en: "POS systems" },
    body: {
      es: "Punto de venta a la medida para retail, restaurantes y servicios.",
      en: "Custom point-of-sale systems for retail, restaurants and services.",
    },
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: { es: "Descubrimiento", en: "Discovery" },
    body: {
      es: "Entendemos tu marca, tu mercado y tu presupuesto real antes de proponer nada.",
      en: "We understand your brand, your market and your real budget before proposing anything.",
    },
  },
  {
    title: { es: "Diseño", en: "Design" },
    body: {
      es: "UX/UI hecho a la medida de tu marca, nunca sobre una plantilla genérica.",
      en: "UX/UI built for your brand, never on top of a generic template.",
    },
  },
  {
    title: { es: "Desarrollo", en: "Development" },
    body: {
      es: "Construcción con estándares modernos, revisiones abiertas durante todo el proceso.",
      en: "Built with modern standards, with open reviews throughout the process.",
    },
  },
  {
    title: { es: "Lanzamiento", en: "Launch" },
    body: {
      es: "Deploy, medición de resultados y acompañamiento después de salir a producción.",
      en: "Deploy, results measurement and support after going live.",
    },
  },
];
