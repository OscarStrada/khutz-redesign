import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Serif, Archivo, IBM_Plex_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("khutz-theme");
    if (stored !== "light") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Khutz — Diseño de producto & ingeniería de software",
  description:
    "Código propio, sin builders ni plantillas genéricas. Diseño y desarrollo web para marcas que quieren escalar en digital.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
