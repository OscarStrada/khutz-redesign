export interface LocalizedText {
  es: string;
  en: string;
}

export interface Project {
  slug: string;
  title: string;
  slogan: string;
  accent: string;
  darkText: boolean;
  cover: string;
  gallery: string[];
  services: LocalizedText;
  stack: string;
  url: string;
  challenge: LocalizedText;
  solution: LocalizedText;
  result: LocalizedText;
}

export interface Template {
  slug: string;
  name: string;
  variant: "alba" | "marea" | "lino" | "canela" | "azahar";
  style: LocalizedText;
  priceMXN: number;
  features: LocalizedText[];
  previewNames: string;
  previewDate: string;
  demoUrl: string;
  checkoutUrl: string;
}

export interface ServiceItem {
  title: LocalizedText;
  body: LocalizedText;
}

export interface ProcessStep {
  title: LocalizedText;
  body: LocalizedText;
}

export interface Capability {
  title: LocalizedText;
  body: LocalizedText;
}
