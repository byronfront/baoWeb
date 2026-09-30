# Maintenance guide — Bao

Bao is an editorial workshop catalog, not an ecommerce site. Pieces are commissioned by WhatsApp, email or a visit. There is no cart, checkout, accounts, CMS or API.

If the choice is between “looking like a shop” and “looking like the workshop”, choose the workshop.

Read this file before changing code if the change is not obvious. Cursor rules in `.cursor/rules/` are the short guardrails.

---

## 1. Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build
npm start
npm run lint
npx tsc --noEmit
```

Set the public origin in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 2. What to edit

| I want to change… | File |
|---|---|
| Phone, WhatsApp, email, Instagram, city | `lib/data.ts` → `contact` |
| Price, slug, stock, measurements of a piece | `lib/data.ts` → `products` (`price` is RUB) |
| Display currencies (COP / USD / RUB) | `lib/format.ts` → `rubRates` |
| User-facing copy (ES / EN / RU) | `lib/i18n/es.ts`, `en.ts`, `ru.ts` |
| Workshop photo paths | `lib/content.ts` → `photo` |
| Routes, locales | `lib/i18n/config.ts` |
| Colours, type, spacing | `tailwind.config.ts` |
| SEO title fallback | `app/[locale]/layout.tsx` |

Do not hardcode a price, phone, photo path or brand sentence inside a component.

Copy is concrete (“cut by hand”). Never “quality and passion”.

---

## 3. Site map

Routes are English. Every locale is prefixed.

| Path | Page |
|---|---|
| `/es`, `/en`, `/ru` | Home |
| `/{locale}/catalog` | Catalog. Filter: `?category=carteras` |
| `/{locale}/catalog/[slug]` | Product sheet |
| `/{locale}/workshop` | Bench notes |
| `/{locale}/workshop/[slug]` | A note |
| `/{locale}/contact` | Commission and write |

Old Spanish URLs redirect:

- `/catalogo` → `/es/catalog`
- `/taller` → `/es/workshop`
- `/contacto` → `/es/contact`

Locales: `es` (default), `en`, `ru`. Switcher writes the `bao-locale` cookie. Middleware also reads `Accept-Language`.

Category keys stay as data IDs: `carteras` | `cinturones` | `accesorios` | `otros`. Labels are translated in the dictionaries.

---

## 4. Adding a piece

1. Two JPGs in `public/images/`: `product-{name}-01.jpg` (full object) and `-02.jpg` (detail).
2. Copy an object in `lib/data.ts` → `products`. The `slug` is the URL segment. Do not reuse a published slug. `price` is in RUB; the page shows COP, USD or RUB according to locale.
3. Add the same slug in `lib/i18n/es.ts`, `en.ts` and `ru.ts` under `products` (name, type, descriptions, spec words, image alts).
4. `category` must be one of the four keys. A new category needs `types/index.ts` and all three dictionaries.
5. `inStock: false` marks it sold out. Do not delete the sheet.
6. The first product in the array is the large piece on the home bench. Array order is catalog order.

Do not add a new page. Next builds `/{locale}/catalog/{slug}`.

---

## 5. Photography

Workshop photos are registered in `lib/content.ts` → `photo` (paths only). Alts live in the dictionaries (`photoAlt`).

| Key | File |
|---|---|
| `heroWorkshop` | `hero-workshop.jpg` |
| `hides` | `material-hides.jpg` |
| `tools` | `workshop-tools.jpg` |
| `cutting` | `process-cutting.jpg` |
| `stitching` | `process-stitching.jpg` |
| `burnishing` | `process-burnishing.jpg` |
| `patina` | `story-patina.jpg` |

Side light, warm tone, dark ground or the bench. Never a white ecommerce backdrop.

---

## 6. Translations

`lib/i18n/es.ts` is the type source. `en.ts` and `ru.ts` must match that shape.

Write as a workshop, not as a marketing desk and not as a machine translation.

- EN: full-grain, vegetable tan, saddle stitch, burnished edge, bench, made to order.
- RU: лицевая кожа, растительное дубление, седельный шов, урез, верстак, на заказ.

If a sentence cannot be measured, cut or touched, it does not go in.

When you add a UI string, add it in all three files in the same commit.

---

## 7. Contact

`lib/data.ts` → `contact`. WhatsApp links only through `formatWhatsAppUrl`. Prefill copy is per locale in `enquire`.

---

## 8. Interface

Tokens in `tailwind.config.ts`. Surfaces: `surface-paper` / `surface-leather`. Dark: `on-dark`.

Display = Cormorant (includes Cyrillic). UI = IBM Plex Sans (includes Cyrillic).

Buttons: `act act-solid` | `act-outline` | `act-quiet`. Photographs: `Plate` or `ProductTile`, never a card.

Forbidden: floating cards, shadows, glass, digital gradients, rounded-full, WhatsApp green, pure white/black, Inter/Poppins/Playfair, flags, folklore, marketing “premium”.

---

## 9. What not to add

Cart, checkout, auth, CMS, API, live stock, reviews, newsletter, cookie banner, WhatsApp float, breadcrumb flags.

---

## 10. Agents

Rules in `.cursor/rules/` are in English:

- `bao.mdc` — always on
- `catalog.mdc` — catalog and copy
- `interface.mdc` — pages, components, tokens
