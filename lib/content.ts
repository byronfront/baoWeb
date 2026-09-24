/**
 * Contenido editorial.
 * Separado de `lib/data.ts` para reescribir el relato sin tocar el catálogo.
 *
 * Criterio: frases concretas. Si no se puede medir, cortar o tocar, no va.
 */

export type Photo = { src: string; alt: string };

export const photo = {
  heroWorkshop: {
    src: "/images/hero-workshop.jpg",
    alt: "Taller de marroquinería con una piel extendida sobre el banco y luz entrando de lado por la ventana",
  },
  hides: {
    src: "/images/material-hides.jpg",
    alt: "Pilas de cuero curtido al vegetal apiladas en capas, vistas a ras del canto",
  },
  tools: {
    src: "/images/workshop-tools.jpg",
    alt: "Herramientas de marroquinería ordenadas en cuadrícula sobre madera oscura",
  },
  cutting: {
    src: "/images/process-cutting.jpg",
    alt: "Cuchilla redonda cortando el cuero siguiendo el borde de una plantilla de cartón",
  },
  stitching: {
    src: "/images/process-stitching.jpg",
    alt: "Manos cosiendo a punto de silla una pieza de cuero sujeta en el caballete",
  },
  burnishing: {
    src: "/images/process-burnishing.jpg",
    alt: "Bruñidor de madera puliendo el canto de una pieza gruesa de cuero",
  },
  patina: {
    src: "/images/story-patina.jpg",
    alt: "Tres monederos iguales alineados: uno nuevo, uno de un año y uno de diez, cada vez más oscuros",
  },
} satisfies Record<string, Photo>;

export const nav = [
  { href: "/catalogo", label: "Piezas" },
  { href: "/taller", label: "Taller" },
  { href: "/contacto", label: "Encargo" },
];

export const enquire = {
  cta: "Encargar",
  write: "Escribir",
  toastTitle: "Se hace por encargo",
  toastBody: "El patrón se ajusta antes de cortar. Cinco a quince días de banco.",
  toastDismiss: "Ahora no",
  modalTitle: "Encargar una pieza",
  modalLead:
    "Se confirma el cuero, el hilo, las medidas y la fecha por escrito. Después se corta.",
  modalWhatsApp: "WhatsApp",
  modalEmail: "Correo",
  modalContact: "Otras formas de escribir",
  product: (name: string) => `Hola, me interesa: ${name}`,
  general: "Hola, quisiera encargar una pieza a medida.",
};

export const hero = {
  kicker: "Marroquinería de taller",
  lines: ["Hecho", "para", "quedarse"],
  body: "Cuero curtido al vegetal, cortado con cuchilla y cosido a punto de silla. No hay máquina de coser en este taller.",
  coord: "6°14′N · 75°34′O",
  place: "Medellín",
};

export const manifesto = {
  label: "El oficio",
  lines: ["Cortado a mano.", "Cosido punto por punto.", "Bruñido hasta que el canto brilla."],
  body: "No hay máquina de coser en este taller. Cada agujero se marca con un punzón y se cruza con dos agujas, uno detrás de otro. Una cartera son entre seis y nueve horas de banco. Es más lento, y es la única forma que conocemos de que una costura no se abra en veinte años.",
  signature: "Medellín, Colombia",
};

export const materials = [
  {
    name: "Cuero flor entera",
    origin: "Antioquia",
    note: "La capa exterior de la piel, con el grano intacto. No se lija ni se corrige: las cicatrices y las marcas de la res se quedan donde están.",
  },
  {
    name: "Curtido vegetal",
    origin: "Acacia y quebracho",
    note: "Cuarenta y cinco días en foso en lugar de dos en tambor. Es lento, es caro y es la razón de que el cuero oscurezca en vez de agrietarse.",
  },
  {
    name: "Hilo de lino encerado",
    origin: "0,45 y 0,55 mm",
    note: "Se rompe antes el cuero que la costura. Y si un punto cede, el punto de silla impide que se suelte la fila entera.",
  },
  {
    name: "Latón macizo",
    origin: "Fundido a mano",
    note: "Sin baño ni chapa. Se oscurece con los años y se puede volver a sacar brillo. Un herraje cromado, cuando se pela, ya no vuelve.",
  },
];

export const craftSteps = [
  {
    step: "01",
    title: "Selección",
    body: "Se elige la zona de la piel según lo que vaya a aguantar. El lomo para lo que se tensa; la falda, para lo que se pliega.",
  },
  {
    step: "02",
    title: "Corte",
    body: "Cuchilla redonda y plantilla de cartón. Un solo pase por borde: el segundo pase se nota siempre en el canto.",
  },
  {
    step: "03",
    title: "Cantos",
    body: "Se rebaja el filo, se lija en tres granos y se humedece el borde antes de tocarlo con nada más.",
  },
  {
    step: "04",
    title: "Costura",
    body: "Punto de silla, dos agujas, hilo de lino encerado. Un agujero cada vez, marcado antes con el punzón.",
  },
  {
    step: "05",
    title: "Bruñido",
    body: "Madera y fricción hasta que el canto deja de absorber agua y empieza a devolver la luz.",
  },
  {
    step: "06",
    title: "Acabado",
    body: "Grasa animal, un día de reposo y una última revisión a contraluz, punto por punto.",
  },
];

export const marks = ["Cosido a mano", "Flor entera", "Lotes pequeños"];

export const patina = {
  label: "El tiempo",
  title: "El cuero cambia contigo",
  body: "Curtido al vegetal, sin pigmento que lo tape. Sale del taller claro y se va oscureciendo con la luz, la grasa de las manos y el roce de los días. Las tres piezas de abajo son el mismo monedero: recién hecho, al año y a los diez.",
  caption: "El mismo monedero: día uno, año uno, año diez.",
  years: [
    { mark: "01", label: "Día uno", note: "Sale claro, casi crudo." },
    { mark: "02", label: "Año uno", note: "La miel empieza a aparecer." },
    { mark: "03", label: "Año diez", note: "Ámbar oscuro, el grano a la vista." },
  ],
};

export type WorkshopNote = {
  slug: string;
  date: string;
  dateLabel: string;
  title: string;
  excerpt: string;
  body: string;
  photo: Photo;
};

export const workshopNotes: WorkshopNote[] = [
  {
    slug: "el-banco",
    date: "2024-11",
    dateLabel: "Noviembre 2024",
    title: "El banco",
    excerpt:
      "Una mesa marcada por quien trabajó antes. La luz entra por un solo lado y decide a qué hora se cosen las piezas oscuras.",
    body: "Una mesa de madera maciza marcada por los cortes de quien trabajó antes. Las muescas no se lijan: sirven de referencia. La luz entra por un solo lado, de mañana, y es la que decide a qué hora se cosen las piezas oscuras.\n\nNo hay línea de producción ni máquina de coser. Hay una mesa marcada, herramientas que ya trabajaban antes de llegar aquí, y el orden de siempre: corte, descanso, costura, bruñido.",
    photo: photo.heroWorkshop,
  },
  {
    slug: "las-herramientas",
    date: "2025-02",
    dateLabel: "Febrero 2025",
    title: "Las herramientas",
    excerpt:
      "Cuchilla redonda, punzones, bruñidor. Casi todas de segunda mano; algunas más viejas que el taller.",
    body: "Cuchilla redonda, punzones, sacabocados, bruñidor de madera y compás de puntas. Casi todas son de segunda mano y algunas más viejas que el taller. Se afilan cada mañana antes de empezar.\n\nLa cuchilla redonda llegó sin mango y corta mejor que cualquiera que se venda hoy. Cada herramienta tiene su sitio. Siempre el mismo.",
    photo: photo.tools,
  },
  {
    slug: "el-tiempo",
    date: "2025-06",
    dateLabel: "Junio 2025",
    title: "El tiempo",
    excerpt:
      "Nada sale el mismo día en que se empieza. Entre el corte y la costura el cuero descansa.",
    body: "Una pieza pasa por el banco varias veces antes de salir. Entre el corte y la costura el cuero descansa; entre el bruñido y el acabado, también. Nada sale el mismo día en que se empieza.\n\nForzar el orden se nota en el canto tres años después. Por eso hay que avisar la fecha antes de empezar: entre cinco y quince días de banco, según la pieza.",
    photo: photo.burnishing,
  },
  {
    slug: "la-patina",
    date: "2025-09",
    dateLabel: "Septiembre 2025",
    title: "La pátina",
    excerpt:
      "Sale claro y se oscurece con la luz, la grasa de las manos y el roce de los días.",
    body: "Curtido al vegetal, sin pigmento que lo tape. Sale del taller claro y se va oscureciendo con la luz, la grasa de las manos y el roce de los días.\n\nEl mismo monedero: día uno, casi crudo; al año, la miel empieza a aparecer; a los diez, ámbar oscuro y el grano a la vista. El cuero cambia con quien lo lleva.",
    photo: photo.patina,
  },
];

export function getWorkshopNote(slug: string): WorkshopNote | undefined {
  return workshopNotes.find((note) => note.slug === slug);
}

export const workshopChapters = workshopNotes.slice(0, 3).map((note, i) => ({
  step: ["I", "II", "III"][i] ?? String(i + 1),
  title: note.title,
  body: note.excerpt,
  photo: note.photo,
}));
