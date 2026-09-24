import type { Product, ContactInfo } from "@/types";

export const contact: ContactInfo = {
  email: "cuerosbao@gmail.com",
  phone: "+57 301 496 3136",
  whatsapp: "+57 301 496 3136",
  address: "Medellín, Colombia",
  instagram: "cuerosbao",
};

/** `price` is RUB. Display converts to COP / USD / RUB in `formatPrice`. */
export const products: Product[] = [
  {
    id: "1",
    slug: "cartera-clasica-natural",
    name: "Cartera clásica natural",
    type: "Cartera estructurada",
    shortDescription: "La estructura la sostiene el cuero. No lleva armazón.",
    description:
      "Vacuno flor entera de 2,2 mm, curtido al vegetal. La forma la da el espesor del cuero, no un refuerzo interno. Cierre de latón macizo, costura a punto de silla, cantos bruñidos a mano.",
    note: "La estructura se sostiene sola. No lleva refuerzo interno: es el espesor del cuero el que mantiene la forma.",
    price: 18500,
    category: "carteras",
    featured: true,
    inStock: true,
    spec: {
      leather: "Vacuno flor entera, 2,2 mm",
      tanning: "Vegetal, 45 días en foso",
      color: "Coñac natural",
      thread: "Lino encerado 0,55 mm, punto de silla",
      hardware: "Latón macizo envejecido a mano",
      lining: "Sin forro. Carne de cuero lijada y sellada",
      dimensions: "26 × 24 × 10 cm",
      weight: "780 g",
      madeIn: "Medellín, Colombia",
      leadTime: "12 a 15 días",
      customization: "Iniciales grabadas en seco, sin coste",
    },
    images: [
      {
        src: "/images/product-cartera-01.jpg",
        alt: "Cartera clásica en cuero coñac sobre un banco de madera, iluminada de lado",
      },
      {
        src: "/images/product-cartera-02.jpg",
        alt: "Detalle de la costura a punto de silla y el canto bruñido de la cartera",
      },
    ],
  },
  {
    id: "2",
    slug: "cinturon-vintage-marrón",
    name: "Cinturón vintage marrón",
    type: "Cinturón de una pieza",
    shortDescription: "Una sola tira del lomo. Se corta a tu talla.",
    description:
      "Cortado de una pieza del lomo — la zona más densa de la piel —, 3,8 mm. Hebilla de latón envejecido. El largo se decide antes de hacer el último agujero.",
    note: "Cortado de una sola tira del lomo, la zona más densa de la piel. Por eso no se estira con los años.",
    price: 8500,
    category: "cinturones",
    featured: true,
    inStock: true,
    spec: {
      leather: "Vacuno flor entera del lomo, 3,8 mm",
      tanning: "Vegetal, curtido lento",
      color: "Marrón quemado",
      thread: "Lino encerado 0,45 mm en el pasador",
      hardware: "Hebilla de latón macizo, pátina natural",
      dimensions: "3,5 cm de ancho, largo a medida",
      weight: "210 g",
      madeIn: "Medellín, Colombia",
      leadTime: "7 a 10 días",
      customization: "Se corta a tu talla exacta",
    },
    images: [
      {
        src: "/images/product-cinturon-01.jpg",
        alt: "Cinturón de cuero marrón enrollado en espiral sobre madera oscura",
      },
      {
        src: "/images/product-cinturon-02.jpg",
        alt: "Detalle de la hebilla de latón envejecido y el pasador cosido a mano",
      },
    ],
  },
  {
    id: "3",
    slug: "monedero-minimalista",
    name: "Monedero minimalista",
    type: "Monedero de tres pliegues",
    shortDescription: "Sale claro. El color lo pone el uso.",
    description:
      "Una sola pieza plegada, cuero sin teñir. Tres pliegues, costura visible, sin forro. En un año será miel; en cinco, ámbar oscuro.",
    note: "Sale del taller claro, casi crudo. El color lo pone el uso: en un año será miel, en cinco, ámbar oscuro.",
    price: 4200,
    category: "accesorios",
    featured: true,
    inStock: true,
    spec: {
      leather: "Vacuno flor entera, 1,4 mm rebajado a 0,8 en los pliegues",
      tanning: "Vegetal, sin teñir",
      color: "Natural sin teñir",
      thread: "Lino encerado 0,45 mm, punto de silla",
      lining: "Sin forro. Una sola pieza plegada",
      dimensions: "10,5 × 8 × 2 cm",
      weight: "95 g",
      madeIn: "Medellín, Colombia",
      leadTime: "5 a 8 días",
      customization: "Iniciales grabadas en seco, sin coste",
    },
    images: [
      {
        src: "/images/product-monedero-01.jpg",
        alt: "Monedero de cuero natural sin teñir sobre un papel de patrón envejecido",
      },
      {
        src: "/images/product-monedero-02.jpg",
        alt: "Interior del monedero abierto, mostrando los compartimentos y la carne del cuero",
      },
    ],
  },
  {
    id: "4",
    slug: "riñonera-cuero",
    name: "Riñonera de cuero",
    type: "Riñonera con correa ajustable",
    shortDescription: "Correa que se puede acortar. Pensada para quedarse.",
    description:
      "Vacuno de 1,8 mm, correa de 70 a 110 cm, cierre de latón macizo. Las costuras internas van rematadas; no hay forro que se despegue.",
    note: "La correa se puede acortar en casa con un punzón. Está pensada para que dure más que la moda que la trajo.",
    price: 12500,
    category: "accesorios",
    featured: false,
    inStock: true,
    spec: {
      leather: "Vacuno flor entera, 1,8 mm",
      tanning: "Vegetal, teñido en tambor",
      color: "Terracota",
      thread: "Lino encerado 0,55 mm, punto de silla",
      hardware: "Hebilla y cierre de latón macizo",
      lining: "Sin forro. Costuras internas rematadas",
      dimensions: "20 × 15 × 6 cm · correa 70–110 cm",
      weight: "460 g",
      madeIn: "Medellín, Colombia",
      leadTime: "10 a 14 días",
      customization: "Largo de correa a medida",
    },
    images: [
      {
        src: "/images/product-rinonera-01.jpg",
        alt: "Riñonera de cuero terracota colgada de un gancho de hierro en una pared de estuco",
      },
      {
        src: "/images/product-rinonera-02.jpg",
        alt: "Detalle del cierre de latón y la solapa cosida a mano de la riñonera",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

/** Otras piezas del catálogo, excluida la que se está mirando. */
export function getRelatedProducts(slug: string, limit = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}

export const categories: { key: Product["category"]; label: string }[] = [
  { key: "carteras", label: "Carteras" },
  { key: "cinturones", label: "Cinturones" },
  { key: "accesorios", label: "Accesorios" },
  { key: "otros", label: "Otros" },
];

export function isCategory(value: string | undefined): value is Product["category"] {
  return categories.some((c) => c.key === value);
}
