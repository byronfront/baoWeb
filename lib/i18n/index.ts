import type { Product } from "@/types";
import type { Locale } from "./config";
import type { Dictionary } from "./es";
import { es } from "./es";
import { en } from "./en";
import { ru } from "./ru";

export type { Locale, Dictionary };
export {
  locales,
  defaultLocale,
  localeCookie,
  localeMeta,
  paths,
  isLocale,
  href,
  catalogHref,
  workshopHref,
  contactHref,
  switchLocalePath,
  localeFromPath,
} from "./config";

const dictionaries: Record<Locale, Dictionary> = { es, en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? es;
}

export function fill(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? ""),
  );
}

export function localizeProduct(product: Product, dict: Dictionary): Product {
  const copy = dict.products[product.slug as keyof Dictionary["products"]];
  if (!copy) return product;

  return {
    ...product,
    name: copy.name,
    type: copy.type,
    shortDescription: copy.shortDescription,
    description: copy.description,
    note: copy.note ?? product.note,
    spec: product.spec
      ? {
          ...product.spec,
          ...copy.spec,
        }
      : product.spec,
    images: product.images.map((image, i) => ({
      ...image,
      alt: copy.imageAlts[i] ?? image.alt,
    })),
  };
}
