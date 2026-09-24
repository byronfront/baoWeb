# Guía de mantenimiento — Bao

Esta guía sirve para mantener el sitio sin romper su identidad ni su funcionamiento.

Bao no es un ecommerce. Es un **catálogo editorial de taller**: se muestra lo que hay en el banco y el encargo se cierra por WhatsApp, correo o visita. No hay carrito, pagos, cuentas ni API.

Si hay que elegir entre “parecer una tienda” y “parecer el taller”, se elige el taller.

## Para una IA

`MANTENIMIENTO.md` es el manual. No entra solo en el contexto de Cursor.

Las reglas que sí se inyectan en cada sesión están en `.cursor/rules/`:

- `bao.mdc` — siempre: no rediseñar, no romper el negocio
- `catalogo.mdc` — al editar `lib/data.ts` y `lib/content.ts`
- `interfaz.mdc` — al editar páginas, componentes y tokens

Si trabajás en otro editor, pegá o mencioná esas reglas al empezar. No hace falta otro documento de identidad: este archivo es la referencia larga; las reglas son el freno.

---

## 1. Arranque rápido

### Requisitos

- Node.js 18 o superior
- npm

### Comandos

```bash
npm install          # primera vez
npm run dev          # http://localhost:3000
npm run build        # comprobar que produce bien
npm start            # servir el build
npm run lint         # ESLint
npx tsc --noEmit     # comprobar TypeScript
```

### Dominio (SEO y redes)

Crear `.env.local` en la raíz:

```env
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Sin esto, las URLs de Open Graph usan el placeholder `https://tudominio.com`.

---

## 2. Qué archivo tocar para cada cambio

Esta es la tabla más importante. Casi todo el mantenimiento cotidiano vive en dos archivos.

| Quiero cambiar… | Archivo | Qué editar |
|---|---|---|
| Teléfono, WhatsApp, mail, Instagram, ciudad | `lib/data.ts` | objeto `contact` |
| Precio, nombre, stock, ficha de una pieza | `lib/data.ts` | array `products` |
| Añadir o quitar una pieza | `lib/data.ts` + foto en `public/images/` | ver §4 |
| Textos de la portada (hero, oficio, materiales…) | `lib/content.ts` | `hero`, `manifesto`, `materials`, etc. |
| Nombres del menú | `lib/content.ts` | array `nav` |
| Fotos del taller / proceso | `lib/content.ts` → `photo` + archivo en `public/images/` | ver §5 |
| Moneda de los precios | `lib/format.ts` | `formatPrice` |
| Colores, tipografía, espaciado | `tailwind.config.ts` | no hardcodear en componentes |
| Titular SEO del sitio | `app/layout.tsx` | `metadata` |
| Una página concreta | `app/.../page.tsx` | solo si el contenido no alcanza |

**Regla:** el relato se edita en `lib/content.ts`. El catálogo y el contacto se editan en `lib/data.ts`. Si un componente escribe una ruta de imagen o un precio a mano, está mal.

---

## 3. Mapa del sitio

| Ruta | Archivo | Función |
|---|---|---|
| `/` | `app/page.tsx` | Portada: relato + inventario |
| `/catalogo` | `app/catalogo/page.tsx` | Índice de piezas |
| `/catalogo?categoria=carteras` | el mismo | Filtro. Claves: `carteras`, `cinturones`, `accesorios`, `otros` |
| `/catalogo/[slug]` | `app/catalogo/[slug]/page.tsx` | Ficha de una pieza (SSG) |
| `/taller` | `app/taller/page.tsx` | Documental del oficio |
| `/contacto` | `app/contacto/page.tsx` | Encargo: WhatsApp, correo, Instagram, visita |

El layout global (`app/layout.tsx`) envuelve todo con `Header` y `Footer`.

No hay `app/api/`, ni middleware, ni autenticación, ni checkout.

---

## 4. Cómo añadir una pieza

Es el cambio más frecuente. Se hace en este orden.

### 4.1 Preparar las fotos

Poner **dos JPG** en `public/images/`:

```
public/images/product-nombre-01.jpg   ← vista completa
public/images/product-nombre-02.jpg   ← detalle (costura, canto, interior)
```

Convención de nombre: `product-{pieza}-01.jpg` y `product-{pieza}-02.jpg`.

Dirección fotográfica (no negociable):

- luz lateral, tonos cálidos, sombras profundas
- fondo oscuro o banco de trabajo, nunca fondo blanco de ecommerce
- la primera foto es el objeto entero; la segunda, un detalle táctil

Comprimir antes de subir (por ejemplo [Squoosh](https://squoosh.app)). El sitio sirve AVIF/WebP solo si el archivo original no es enorme.

### 4.2 Añadir el objeto en `lib/data.ts`

Copiar un producto existente y cambiar los campos. Ejemplo mínimo:

```ts
{
  id: "5",
  slug: "porta-cartas-natural",          // URL: /catalogo/porta-cartas-natural
  name: "Porta cartas natural",
  type: "Estuche de una pieza",
  shortDescription: "Sale claro. El color lo pone el uso.",
  description:
    "Vacuno flor entera, una sola pieza plegada. Costura a punto de silla, sin forro.",
  note: "Una frase concreta, escrita por quien lo hizo. No un eslogan.",
  price: 6200,
  category: "accesorios",                // carteras | cinturones | accesorios | otros
  featured: false,
  inStock: true,
  spec: {
    leather: "Vacuno flor entera, 1,6 mm",
    tanning: "Vegetal, 45 días en foso",
    color: "Natural sin teñir",
    thread: "Lino encerado 0,45 mm, punto de silla",
    dimensions: "22 × 12 × 3 cm",
    weight: "180 g",
    madeIn: "Medellín, Colombia",
    leadTime: "7 a 10 días",
    customization: "Iniciales grabadas en seco, sin coste",
  },
  images: [
    {
      src: "/images/product-porta-cartas-01.jpg",
      alt: "Porta cartas de cuero natural sobre el banco, luz de lado",
    },
    {
      src: "/images/product-porta-cartas-02.jpg",
      alt: "Detalle de la costura y el canto bruñido del porta cartas",
    },
  ],
},
```

Luego:

1. El `slug` tiene que ser único. Es la URL. Si se cambia un slug ya publicado, el enlace viejo se rompe.
2. `category` tiene que ser una de las cuatro claves. Si se necesita una categoría nueva, hay que añadirla en `types/index.ts` (`ProductCategory`) **y** en el array `categories` de `lib/data.ts`.
3. `featured: true` ya no decide la portada: el banco de `/` muestra el inventario completo. El primer producto del array es la pieza grande. El orden del array **es** el orden del catálogo.
4. `inStock: false` muestra la marca «Agotado» y cambia el microcopy. La ficha sigue existiendo.
5. `shortDescription` va al SEO (meta description). `description` es el cuerpo. `note` es la cita de taller.
6. `spec` se imprime como tabla. Cada línea es un hecho (medida, cuero, hilo). Si un campo opcional no aplica, se omite (`hardware`, `lining`, `weight`, `customization`).
7. El `alt` de cada foto describe lo que se ve, no el producto en abstracto.

No hace falta crear una página nueva. Next genera `/catalogo/{slug}` solo.

### 4.3 Quitar una pieza

Borrar el objeto del array `products`. Las páginas estáticas se regeneran en el próximo `build`. Si la pieza ya circuló, conviene dejar una redirección o no reutilizar el slug.

### 4.4 Marcar agotado sin borrar

```ts
inStock: false
```

### 4.5 Copy de producto: qué escribir y qué no

Sí:

- “Cortado de una sola tira del lomo.”
- “Sale claro. El color lo pone el uso.”
- “La forma la da el espesor del cuero, no un armazón.”

No:

- “Diseño atemporal / premium / de calidad.”
- “Ideal para el día a día.”
- “Hecho con pasión.”

Si no se puede medir, cortar o tocar, no va.

---

## 5. Fotografía editorial

Las fotos del taller **no se escriben en los componentes**. Se registran en `lib/content.ts` → `photo` y se referencian desde ahí.

| Clave | Archivo | Dónde se usa |
|---|---|---|
| `heroWorkshop` | `hero-workshop.jpg` | Hero de portada, apertura del taller |
| `hides` | `material-hides.jpg` | Sección materia |
| `tools` | `workshop-tools.jpg` | Teaser del taller, capítulo II |
| `cutting` | `process-cutting.jpg` | Proceso, ficha de producto |
| `stitching` | `process-stitching.jpg` | Proceso, taller, contacto |
| `burnishing` | `process-burnishing.jpg` | Proceso, capítulo III |
| `patina` | `story-patina.jpg` | Sección tiempo |

Para reemplazar una foto: sustituir el archivo **con el mismo nombre**, o cambiar `src` y `alt` en `photo`.

Para añadir una foto nueva:

1. Colocar el archivo en `public/images/`.
2. Añadir una clave en `photo`.
3. Usarla en el componente (`photo.nuevaClave`).

Rutas locales: `/images/archivo.jpg` (la carpeta `public/` no va en la URL).

Si alguna vez se sirven fotos desde otro dominio, hay que añadir ese dominio en `next.config.mjs` → `images.remotePatterns`. Hoy está vacío a propósito.

---

## 6. Textos de marca (`lib/content.ts`)

| Clave | Qué controla |
|---|---|
| `nav` | Menú del header y del footer |
| `hero` | Titular, kicker, coordenadas, lugar |
| `manifesto` | Las tres frases del oficio + el párrafo |
| `materials` | Las cuatro materias (nombre, origen, nota) |
| `craftSteps` | Los seis pasos. El orden es el del taller; no reordenar a la ligera |
| `marks` | Los tres sellos: «Cosido a mano», «Flor entera», «Lotes pequeños» |
| `patina` | Título, cuerpo, caption y la línea de tiempo (día uno / año / diez) |
| `workshopChapters` | Los tres capítulos de `/taller` (banco, herramientas, tiempo) |

El menú es deliberadamente corto: Piezas, Taller, Encargo. Encargo apunta a `/contacto`. Si se añade un ítem, aparece en header, menú móvil y footer.

---

## 7. Contacto y conversión

Todo el cierre comercial pasa por `lib/data.ts` → `contact` y `lib/format.ts`.

```ts
export const contact = {
  email: "cuerosbao@gmail.com",
  phone: "+57 301 496 3136",
  whatsapp: "+57 301 496 3136",
  address: "Medellín, Colombia",
  instagram: "cuerosbao",          // sin @
};
```

`formatWhatsAppUrl(telefono, mensaje)` arma el enlace `wa.me`. Los mensajes ya están contextualizados:

- header: «Hola, quisiera preguntar por un encargo.»
- portada: «Hola, quisiera encargar una pieza a medida.»
- ficha: `Hola, me interesa: {nombre}`
- taller: «Hola, quisiera visitar el taller.»

Si se cambia el número, se cambia **una sola vez** en `contact`. Si un campo se deja vacío, el canal desaparece solo (header, footer, contacto).

### Moneda

Hoy `formatPrice` formatea en **ARS** (`es-AR`). El taller está en Colombia. Si los precios pasan a pesos colombianos:

```ts
export function formatPrice(price: number, currency = "COP"): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
```

No cambiar la moneda en un componente suelto.

---

## 8. Arquitectura de carpetas

```
app/
  layout.tsx                 # fuentes, SEO, Header/Footer
  page.tsx                   # portada
  globals.css                # texturas, botones, revelados
  catalogo/page.tsx
  catalogo/[slug]/page.tsx
  taller/page.tsx
  contacto/page.tsx

components/
  brand/Ornament.tsx         # sello, cresta, wordmark, escuadras
  catalog/Ledger.tsx         # inventario tipográfico
  craft/                     # pasos, sellos de fabricación, ficha técnica
  home/                      # bloques de la portada
  layout/                    # Header, Footer
  media/Plate.tsx            # fotografía montada como lámina
  motion/                    # Reveal, Parallax
  ui/                        # ProductTile, SectionLabel

lib/
  content.ts                 # relato
  data.ts                    # catálogo + contacto
  format.ts                  # precio + WhatsApp

types/index.ts               # Product, ProductSpec, ContactInfo
public/images/               # todas las fotos
tailwind.config.ts           # tokens
```

No hay carpeta `public/images/products/`. Las fotos de pieza viven planas en `public/images/product-*.jpg`.

---

## 9. Portada: orden del relato

`app/page.tsx` ensambla, no escribe. El orden es el relato:

1. `Hero` — folio: texto a la izquierda, foto a la derecha. En móvil, titular primero.
2. `Banco` — pieza grande (la primera del array) + inventario + dos piezas más.
3. `Manifesto` — el oficio.
4. `Materials` — la materia.
5. `Process` — cómo se hace.
6. `Patina` — el tiempo.
7. `WorkshopTeaser` — antesala del taller.
8. `Enquiry` — encargo.

Para reordenar, se mueve el componente en `app/page.tsx`. Para cambiar el texto, se edita `lib/content.ts`.

---

## 10. Sistema de diseño

Los tokens viven en `tailwind.config.ts`. `app/globals.css` solo deriva curvas, grano y trazos. **No inventar hexadecimales en un componente.**

### Color (materia)

| Token | Uso |
|---|---|
| `bone`, `ivory`, `parchment` | Papel |
| `sand`, `clay`, `terracotta`, `cognac` | Acentos cálidos |
| `burnt`, `tobacco` | Énfasis, hover |
| `charcoal`, `espresso`, `pitch` | Cuero oscuro |
| `olive` | Sombra vegetal, uso escaso |
| `brass`, `bronze` | Metal: foco y detalle, nunca dorado brillante |
| `ink` / `ink-muted` / `ink-faint` | Texto sobre papel |
| `chalk` / `chalk-muted` / `chalk-faint` | Texto sobre cuero |

Sobre una sección oscura se pone la clase `on-dark` para que botones, costuras y foco inviertan.

### Superficies

- `surface-paper` — grano de papel, secciones claras.
- `surface-leather` — luz lateral + grano bajo, secciones oscuras.

### Tipografía

- `font-display` — Cormorant Garamond. Títulos, nombres, citas. `text-d1` … `text-d5`.
- `font-sans` — IBM Plex Sans. UI, precios, navegación, fichas.
- `text-label` — caja alta, tracking amplio. Etiquetas de taller.
- `text-micro` — notas y pies de foto.

No usar blackletter, ni otra serif “medieval”, ni Inter / Poppins / Playfair.

### Espaciado y caja

- `px-gutter`, `py-section`, `py-section-lg`
- `.shell` (1440) y `.shell-wide` (1760)
- Radio casi nulo (`1px`). Nada flota, nada tiene sombra grande.

### Botones

```html
<a class="act act-solid">…</a>      <!-- lleno -->
<a class="act act-outline">…</a>    <!-- trazo -->
<a class="act-quiet">…</a>          <!-- enlace con hilo -->
```

Rectangulares. Sin `rounded-full`, sin glow, sin verde de WhatsApp.

### Ornamento (`components/brand/Ornament.tsx`)

Un solo sello. No añadir grecas nuevas.

| Pieza | Uso |
|---|---|
| `Seal` | Marca. `compact` para tamaños < 18px |
| `Ridge` | Divisor de sección (la cresta) |
| `Frieze` | Alias de `Ridge` |
| `Lozenge` | Viñeta |
| `Rule` | Hilo interrumpido por el rombo |
| `CornerMarks` | Escuadras sobre una foto |
| `Wordmark` | BAO + sello |

Colombia se siente en la materia (cuero, tierra, calor). Rusia se siente en la forma (ejes, retícula, sello). No se usan banderas, ni colores nacionales, ni clichés (castillos, runas, folclore).

### Movimiento

- `Reveal` — aparece al entrar en pantalla. Una sola vez.
- `Parallax` — desplazamiento corto de la foto. `strength` en píxeles, bajo (18–36).
- Respetar `prefers-reduced-motion` (ya está en `globals.css`).
- Prohibido: bounce, scroll hijacking, hovers juguetones.

---

## 11. Componentes: para qué está cada uno

| Componente | Sirve para | No sirve para |
|---|---|---|
| `ProductTile` | Foto + renglón (nombre, tipo, precio). Hover: segunda foto | Meterlo en una card con borde y sombra |
| `Ledger` | Inventario tipográfico, sin foto | Sustituir el catálogo entero en desktop |
| `Plate` | Foto editorial con máscara, caption, escuadras opcionales | Avatares, iconos, logos |
| `SpecList` | Tabla de la ficha. El orden de las filas está fijo | Listas de marketing |
| `CraftSteps` | Los seis pasos. Toma el color del fondo | Reordenar el oficio |
| `Marks` | Tres sellos de fabricación | Iconos de “envío gratis” |
| `SectionLabel` | Antetítulo de sección | Títulos |
| `Header` | Nav + menú móvil. En `/` flota; en el resto reserva hueco | Añadir un mega-menú |
| `Footer` | Colofón: frase, índice, canales | Newsletter con popup |

Si un componente no encaja en el diseño nuevo, se reconstruye. No se le pone una segunda capa de CSS.

---

## 12. Páginas: qué se puede tocar

### `/catalogo`

- Filtros: se generan desde `categories`. No hardcodear.
- Vacío (categoría sin piezas): ya hay un estado «Ahora mismo no hay nada de esto en el banco.»
- En móvil aparece el `Ledger` encima de las fotos. En desktop, no.

### `/catalogo/[slug]`

Orden de la ficha:

1. Fotografía completa
2. Nombre, tipo, precio, disponibilidad
3. Texto + nota de taller + CTA
4. Detalle
5. Ficha técnica + sellos
6. Cómo se hizo (fotos de proceso + seis pasos)
7. Otras piezas (`Ledger`)

`generateStaticParams` lee `products`. Un slug nuevo aparece solo después de `build` (en `next dev` también se ve).

### `/taller`

Capítulos en `workshopChapters`. La visita usa `contact.address` y WhatsApp.

### `/contacto`

Los canales se arman solos a partir de `contact`. No duplicar teléfonos aquí.

---

## 13. Cosas que no hay que romper

Estas piezas son el negocio. Se puede cambiar cómo se ven; no se puede eliminar lo que hacen.

- Enlaces de WhatsApp con mensaje según contexto
- Filtro `?categoria=`
- `getProductBySlug`, `getRelatedProducts`, `isCategory`
- `inStock === false` → «Agotado»
- Rutas actuales (`/catalogo`, `/taller`, `/contacto`)
- `mailto:` e Instagram
- Skip link, `aria-current`, cierre del menú con Escape

No existe — y no hace falta inventarlo para “completar” el sitio —:

- carrito / checkout / pasarela
- login / cuentas
- formularios POST
- CMS, API routes, fetch remoto
- búsqueda, paginación, ordenación

---

## 14. Identidad: criterios al tocar la UI

Antes de un cambio visual, pasar esta lista:

1. ¿Sigue pareciendo un taller, o empezó a parecer Shopify?
2. ¿La foto manda, o la caja?
3. ¿El texto es concreto?
4. ¿El color se siente físico (cuero, papel, metal) o digital?
5. ¿El ornamento es el sello de Bao, o apareció una greca nueva?
6. ¿Mobile tiene composición propia, o es el desktop apilado?
7. ¿Hay blanco puro, negro puro, dorado brillante o verde de WhatsApp? Si sí, sacar.

Lujo = proporción, tipografía, materia, espacio. No la palabra “premium”. No más latón.

---

## 15. Publicar

1. Editar `lib/data.ts` y/o `lib/content.ts`.
2. Poner las fotos en `public/images/`.
3. `npm run dev` y recorrer:
   - portada (hero, banco, encargo)
   - catálogo y un filtro vacío
   - una ficha (WhatsApp abre con el nombre correcto)
   - taller y contacto
   - menú móvil
4. `npx tsc --noEmit` y `npm run build`.
5. En Vercel (u otro host):
   - importar el repo
   - variable `NEXT_PUBLIC_SITE_URL` = dominio real
   - no hace falta server, base de datos ni keys

Tras el primer deploy, cada push a la rama de producción vuelve a construir el sitio. Como el catálogo es estático, un producto nuevo **no aparece en producción hasta el siguiente build**.

---

## 16. Problemas frecuentes

**La foto no se ve.**  
La ruta debe empezar por `/images/…` y el archivo tiene que existir en `public/images/`. Next no avisa si el JPG falta: se ve el fondo `tobacco`.

**Cambié el slug y el enlace viejo da 404.**  
Esperado. Avisar a quien lo tenga, o no cambiar slugs publicados.

**El menú móvil tapa la página aunque esté cerrado.**  
`Header` usa `hidden` + `flex` condicional. No poner `flex` fijo en el overlay.

**Añadí una categoría y TypeScript se queja.**  
Falta en `ProductCategory` (`types/index.ts`) o en `categories` (`lib/data.ts`). Las dos.

**Quiero una foto externa (Drive, CMS, CDN).**  
Añadir el host en `next.config.mjs` → `images.remotePatterns`. Si no, Next bloquea el `<Image>`.

**El precio se ve en pesos argentinos.**  
`lib/format.ts`. Ver §7.

**El sitio se ve “de plantilla” después de un cambio.**  
Casi siempre es: cards con sombra, un icono de más, un degradado, o copy genérico. Revertir eso antes de añadir más diseño.

**`metadataBase` apunta a tudominio.com.**  
Falta `.env.local` con `NEXT_PUBLIC_SITE_URL`.

---

## 17. Checklist de un cambio de catálogo

- [ ] Dos fotos en `public/images/` (completa + detalle)
- [ ] Objeto nuevo al final — o donde deba ir en el orden — de `products`
- [ ] `slug` único, en minúsculas, sin espacios
- [ ] `category` válida
- [ ] `spec` completo (cuero, curtido, color, hilo, medidas, origen, plazo)
- [ ] `note` concreta
- [ ] `alt` descriptivo
- [ ] WhatsApp de la ficha se prueba en local
- [ ] `npm run build` pasa

---

## 18. Quién mantiene qué

| Rol | Archivos habituales |
|---|---|
| Dueño del taller (textos, precios, stock) | `lib/data.ts`, `lib/content.ts` |
| Quien hace las fotos | `public/images/` + claves en `photo` o `images[]` |
| Desarrollo | el resto, sin saltarse esta guía |

Si el cambio es de contenido, no hace falta abrir `app/` ni `components/`.
