# Bao

Workshop leather catalog. Pieces are commissioned by WhatsApp or email. No cart, no payments.

Next.js 14 · TypeScript · Tailwind CSS.

Locales: Spanish (`/es`), English (`/en`), Russian (`/ru`). Paths are English (`/catalog`, `/workshop`, `/contact`).

## Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Middleware sends `/` to the preferred locale.

```bash
npm run build && npm start
npm run lint
```

## Maintenance

**[MAINTENANCE.md](./MAINTENANCE.md)**

Daily files:

- `lib/data.ts` — products and contact
- `lib/content.ts` — photo paths and note slugs
- `lib/i18n/es.ts`, `en.ts`, `ru.ts` — all user-facing copy

Cursor rules live in `.cursor/rules/`.

## Domain

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```
