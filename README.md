# Bao

Sitio del taller de marroquinería. Catálogo editorial: las piezas se encargan por WhatsApp o correo. No hay carrito ni pagos.

Next.js 14 · TypeScript · Tailwind CSS.

## Arranque

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start   # producción
npm run lint                 # lint
```

## Mantenimiento

La guía completa — añadir piezas, fotos, textos, contacto, diseño y qué no romper — está en:

**[MANTENIMIENTO.md](./MANTENIMIENTO.md)**

Para que una IA no rediseñe ni rompa el negocio, el proyecto tiene reglas en `.cursor/rules/` (`bao.mdc`, `catalogo.mdc`, `interfaz.mdc`). Cursor las carga solo. En otro chat, conviene adjuntar o citar `MANTENIMIENTO.md`.

Los dos archivos de uso diario:

- `lib/data.ts` — productos y contacto
- `lib/content.ts` — relato, menú y fotos del taller

## Dominio

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```
