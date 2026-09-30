export const locales = ["es", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeCookie = "bao-locale";

export const localeMeta: Record<
  Locale,
  { label: string; html: string; og: string }
> = {
  es: { label: "ES", html: "es", og: "es_CO" },
  en: { label: "EN", html: "en", og: "en_US" },
  ru: { label: "RU", html: "ru", og: "ru_RU" },
};

/** English path segments — same for every locale. */
const paths = {
  catalog: "catalog",
  workshop: "workshop",
  contact: "contact",
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function href(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

export function catalogHref(locale: Locale, slug?: string, category?: string): string {
  const base = slug
    ? href(locale, `${paths.catalog}/${slug}`)
    : href(locale, paths.catalog);
  if (!slug && category) return `${base}?category=${category}`;
  return base;
}

export function workshopHref(locale: Locale, slug?: string): string {
  return slug
    ? href(locale, `${paths.workshop}/${slug}`)
    : href(locale, paths.workshop);
}

export function contactHref(locale: Locale, hash?: "encargo" | "escribir"): string {
  const base = href(locale, paths.contact);
  return hash ? `${base}#${hash}` : base;
}

export function switchLocalePath(pathname: string, next: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isLocale(parts[0])) {
    parts[0] = next;
    return `/${parts.join("/")}/`;
  }
  const rest = parts.join("/");
  return rest ? `/${next}/${rest}/` : `/${next}/`;
}
