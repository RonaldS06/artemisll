import type { ImageMetadata } from "astro";

import artemis5 from "../assets/media/artemis5.webp";
import artemis2 from "../assets/media/artemis2.webp";
import artemis3 from "../assets/media/artemis3.webp";
import artemis4 from "../assets/media/artemis4.webp";

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
  title: string;
  year: string;
  phase: string;
  description: string;
  details: string[];
  next: string | null;
  prev: string | null;
}

export const galleryData: Record<string, GalleryItem> = {
  tripulacion: {
    src: artemis5 as ImageMetadata,
    alt: "Tripulación de Artemis II",
    title: "La Tripulación",
    year: "2024",
    phase: "FASE 01 — SELECCIÓN",
    description:
      "Reid Wiseman, Victor Glover, Christina Koch y Jeremy Hansen forman la tripulación de Artemis II. Son los primeros humanos seleccionados para volar más allá de la órbita terrestre baja desde 1972.",
    details: [
      "Reid Wiseman — Comandante, veterano de la ISS",
      "Victor Glover — Piloto, primer afroamericano en una misión lunar",
      "Christina Koch — Especialista de misión, récord de permanencia femenina en el espacio",
      "Jeremy Hansen — Especialista de misión, primer canadiense en una misión lunar",
    ],
    next: "despegue",
    prev: null,
  },
  despegue: {
    src: artemis2 as ImageMetadata,
    alt: "Despegue del Space Launch System",
    title: "El Despegue",
    year: "2026",
    phase: "FASE 02 — LANZAMIENTO",
    description:
      "El Space Launch System (SLS) es el cohete más potente jamás construido por la NASA. Con 98 metros de altura y 39.1 meganewtons de empuje, lanzará la cápsula Orion hacia la Luna desde el Centro Espacial Kennedy.",
    details: [
      "Empuje total: 39.1 MN — 15% más potente que el Saturn V",
      "Altura: 98 metros con la cápsula Orion integrada",
      "Propulsores sólidos de 5 segmentos generan el 75% del empuje inicial",
      "Etapa principal con 4 motores RS-25 de hidrógeno líquido",
    ],
    next: "orbita",
    prev: "tripulacion",
  },
  orbita: {
    src: artemis3 as ImageMetadata,
    alt: "Cápsula Orion en órbita lunar",
    title: "Órbita Lunar",
    year: "2026",
    phase: "FASE 03 — TRÁNSITO LUNAR",
    description:
      "La cápsula Orion realizará un vuelo de aproximación lunar, pasando a tan solo 8,900 km de la superficie. La tripulación verá el lado oculto de la Luna antes de utilizar la gravedad lunar para regresar a la Tierra.",
    details: [
      "Duración total de la misión: aproximadamente 10 días",
      "Distancia máxima de la Tierra: 450,000 km",
      "Aproximación lunar más cercana: 8,900 km de la superficie",
      "Primera vez que humanos ven el lado oculto de la Luna desde Apollo 17",
    ],
    next: "regreso",
    prev: "despegue",
  },
  regreso: {
    src: artemis4 as ImageMetadata,
    alt: "Amerizaje de la cápsula Orion",
    title: "El Regreso",
    year: "2026",
    phase: "FASE 04 — REENTRADA",
    description:
      "La cápsula Orion realizará una reentrada de alta velocidad a 40,000 km/h, utilizando un escudo térmico de nueva generación para proteger a la tripulación. Amerizará en el Océano Pacífico frente a la costa de San Diego.",
    details: [
      "Velocidad de reentrada: 40,000 km/h (Mach 32)",
      "Temperatura del escudo térmico: hasta 2,760°C",
      "11 paracaídas desaceleran la cápsula para un amerizaje seguro",
      "Recuperación naval por la USS Portland en el Pacífico",
    ],
    next: null,
    prev: "orbita",
  },
};

export const galleryArray = [
  { slug: "tripulacion", ...galleryData.tripulacion },
  { slug: "despegue", ...galleryData.despegue },
  { slug: "orbita", ...galleryData.orbita },
  { slug: "regreso", ...galleryData.regreso },
];
