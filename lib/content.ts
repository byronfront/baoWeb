/**
 * Structural editorial assets.
 * User-facing copy lives in `lib/i18n`. Photo paths stay here.
 */

export type Photo = { src: string };

export const photo = {
  heroWorkshop: { src: "/images/hero-workshop.jpg" },
  hides: { src: "/images/material-hides.jpg" },
  tools: { src: "/images/workshop-tools.jpg" },
  cutting: { src: "/images/process-cutting.jpg" },
  stitching: { src: "/images/process-stitching.jpg" },
  burnishing: { src: "/images/process-burnishing.jpg" },
  patina: { src: "/images/story-patina.jpg" },
} satisfies Record<string, Photo>;

export type WorkshopNoteMeta = {
  slug: "el-banco" | "las-herramientas" | "el-tiempo" | "la-patina";
  date: string;
  photo: Photo;
};

export const workshopNotes: WorkshopNoteMeta[] = [
  { slug: "el-banco", date: "2024-11", photo: photo.heroWorkshop },
  { slug: "las-herramientas", date: "2025-02", photo: photo.tools },
  { slug: "el-tiempo", date: "2025-06", photo: photo.burnishing },
  { slug: "la-patina", date: "2025-09", photo: photo.patina },
];

export function getWorkshopNote(slug: string): WorkshopNoteMeta | undefined {
  return workshopNotes.find((note) => note.slug === slug);
}
