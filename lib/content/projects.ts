import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "only-homes",
    title: "Only Homes",
    slogan: "No apartments no condos just homes",
    accent: "#F64B29",
    darkText: true,
    cover: "/projects/only-homes.png",
    gallery: [
      "/projects/gallery/only-homes/onlyhomes-1.jpg",
      "/projects/gallery/only-homes/onlyhomes-3.jpg",
      "/projects/gallery/only-homes/onlyhomes-5.jpg",
      "/projects/gallery/only-homes/onlyhomes-7.jpg",
    ],
    services: {
      es: "Diseño y desarrollo web",
      en: "Web design and development",
    },
    stack: "React · Sanity CMS",
    url: "https://onlyhomestulum.com",
    challenge: {
      es: "Only Homes Tulum es una agencia inmobiliaria enfocada únicamente en la venta de casas con un concepto chic y ecológico en el Caribe mexicano. Nuestra participación abarcó desde el diseño UX/UI hasta el desarrollo del sitio. El objetivo: un diseño limpio y moderno que evocara la naturaleza y, al mismo tiempo, fuera fácil y barato de mantener.",
      en: "Only Homes Tulum is a real estate agency focused solely on selling houses with a chic, eco-conscious concept on the Mexican Caribbean coast. Our work spanned UX/UI design through development. The brief: a clean, modern design that evoked nature — and stayed easy and cheap to maintain.",
    },
    solution: {
      es: "Dos cosas eran claras desde el inicio: el presupuesto era limitado y el contenido debía ser fácil de actualizar. Descartamos un sistema a la medida (MERN Stack o similar) por presupuesto y desarrollamos el sitio en WordPress — un CMS de bajo costo que permite gestionar contenido con facilidad, sin sacrificar un diseño creado a la medida en Adobe XD.",
      en: "Two things were clear from day one: the budget was limited, and content needed to be easy to update. We ruled out a fully custom system (MERN stack or similar) on cost, and built the site on WordPress instead — a low-cost CMS that keeps content management simple, without sacrificing a design built from scratch in Adobe XD.",
    },
    result: {
      es: "Un sitio moderno, entregado dentro de presupuesto y fácil de mantener sin ayuda técnica.",
      en: "A modern site, delivered on budget and easy to maintain without technical help.",
    },
  },
  {
    slug: "boatabroad",
    title: "Boatabroad",
    slogan: "Sail the world",
    accent: "#00BFC1",
    darkText: true,
    cover: "/projects/boatabroad.png",
    gallery: [
      "/projects/gallery/boatabroad/boatabroad-1.jpg",
      "/projects/gallery/boatabroad/boatabroad-3.jpg",
      "/projects/gallery/boatabroad/boatabroad-5.jpg",
      "/projects/gallery/boatabroad/boatabroad-9.jpg",
    ],
    services: {
      es: "Desarrollo web",
      en: "Web development",
    },
    stack: "MongoDB · Express · React · Node.js",
    url: "https://boatabroad.com",
    challenge: {
      es: "Boatabroad es un marketplace que conecta propietarios de barcos con navegantes en busca de rentar uno. El objetivo era desarrollar un sistema totalmente a la medida, escalable y con una interfaz fácil de utilizar — llevando la idea del cliente a un plan de trabajo real y a una arquitectura capaz de crecer con la demanda.",
      en: "Boatabroad is a marketplace connecting boat owners with people looking to rent one. The goal was a fully custom, scalable system with an interface that stayed simple — turning the client's idea into a real plan and an architecture built to grow with demand.",
    },
    solution: {
      es: "Nuestro trabajo abarcó desde el diseño hasta el desarrollo y despliegue. Construimos el sitio sobre MERN Stack (MongoDB, Express, React y Node.js) y un dashboard hecho a la medida donde el administrador valida anuncios sin tocar una línea de código.",
      en: "Our work spanned design through development and deployment. We built the site on the MERN stack (MongoDB, Express, React and Node.js) plus a custom dashboard where the admin approves listings without touching a line of code.",
    },
    result: {
      es: "Una arquitectura que escala con el negocio, no en contra de él.",
      en: "An architecture that scales with the business, not against it.",
    },
  },
  {
    slug: "aura",
    title: "Aura",
    slogan: "Find properties on the best beaches in México",
    accent: "#0060FF",
    darkText: false,
    cover: "/projects/aura.png",
    gallery: [
      "/projects/gallery/aura/aura-2.jpg",
      "/projects/gallery/aura/aura-4.jpg",
      "/projects/gallery/aura/aura-7.jpg",
      "/projects/gallery/aura/aura-9.jpg",
    ],
    services: {
      es: "Desarrollo web",
      en: "Web development",
    },
    stack: "WordPress",
    url: "https://aurarealestate.mx",
    challenge: {
      es: "Aura Real Estate es una agencia inmobiliaria que promueve propiedades en las mejores playas de México. El objetivo era claro: un sitio sencillo que transmitiera seguridad y elegancia en cada rincón, con contenido que el equipo pudiera gestionar de forma fácil y rápida.",
      en: "Aura Real Estate is an agency that markets properties on Mexico's best beaches. The brief was clear: a simple site that still felt secure and elegant in every corner, with content the team could manage quickly on its own.",
    },
    solution: {
      es: "Nuestro trabajo abarcó desde el diseño hasta el desarrollo del sitio. Aura se construyó sobre WordPress y un template base, buscando un sitio intuitivo donde la información de cada propiedad se viera de forma clara y concisa, sin perder un diseño moderno y elegante.",
      en: "Our work spanned design through website development. Aura's site was built on the open-source WordPress CMS over a base template. The goal was an intuitive site that presented each property's details clearly and concisely, while keeping the design modern and elegant.",
    },
    result: {
      es: "Un sitio que transmite la confianza de la marca en cada propiedad que muestra.",
      en: "A site that carries the brand's trust into every property it shows.",
    },
  },
  {
    slug: "calido",
    title: "Cálido",
    slogan: "Un lugar cálido",
    accent: "#A58861",
    darkText: true,
    cover: "/projects/calido.png",
    gallery: [
      "/projects/gallery/calido/calido-1.jpg",
      "/projects/gallery/calido/calido-3.jpg",
      "/projects/gallery/calido/calido-8.jpg",
      "/projects/gallery/calido/calido-10.jpg",
    ],
    services: {
      es: "Diseño y desarrollo web",
      en: "Web design and development",
    },
    stack: "React",
    url: "https://calidomx.com",
    challenge: {
      es: "Cálido Furniture and Deco es una empresa ubicada en Tulum dedicada a la comercialización de muebles y textiles. Nuestro trabajo consistió en el diseño UX/UI y el desarrollo web del sitio.",
      en: "Cálido Furniture and Deco is a Tulum-based company selling furniture and textiles. Our work covered the UX/UI design and the web development.",
    },
    solution: {
      es: "El sitio se construyó en WordPress sobre un template base para facilitar la gestión de contenido, sentando las bases para escalar en el futuro a un ecommerce con WooCommerce y pasarelas de pago como PayPal y Stripe.",
      en: "The site was built on WordPress over a base template to keep content management simple, and laid the groundwork to scale into an ecommerce store with WooCommerce and payment gateways like PayPal and Stripe.",
    },
    result: {
      es: "Una base lista para crecer hacia una tienda en línea sin rehacer el sitio.",
      en: "A foundation ready to grow into an online store without rebuilding the site.",
    },
  },
  {
    slug: "bellepool",
    title: "Bellepool",
    slogan: "Albercas siempre bellas",
    accent: "#0582CA",
    darkText: false,
    cover: "/projects/bellepool.png",
    gallery: [
      "/projects/gallery/bellepool/bellepool-1.jpg",
      "/projects/gallery/bellepool/bellepool-2.jpg",
      "/projects/gallery/bellepool/bellepool-8.jpg",
      "/projects/gallery/bellepool/bellepool-9.jpg",
    ],
    services: {
      es: "Diseño y desarrollo web",
      en: "Web design and development",
    },
    stack: "WordPress + WooCommerce",
    url: "https://bellepool.com",
    challenge: {
      es: "Bellepool se dedica a la construcción y mantenimiento de albercas. Nuestro trabajo consistió en diseñar y desarrollar su tienda en línea — requisito del cliente: WordPress y WooCommerce.",
      en: "Bellepool builds and maintains swimming pools. Our work was designing and developing their online store — the client's requirement was WordPress and WooCommerce.",
    },
    solution: {
      es: "El cliente necesitaba el sitio listo en pocos días. Construir sobre una arquitectura base como WordPress redujo drásticamente los tiempos de desarrollo, mientras buscábamos transmitir una sensación de frescura que recordara al agua, el concepto principal de la marca.",
      en: "Our client needed the site live in just a few days. Building on a base architecture like WordPress cut development time drastically. We aimed for a sense of freshness that echoed water — the brand's core concept.",
    },
    result: {
      es: "Tienda en línea lista en días, no en meses.",
      en: "An online store ready in days, not months.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
