import type { Locale } from "@/lib/i18n/config";

/**
 * Catalog prices are stored in RUB.
 * Rates noted 24 Sep 2026: CBR 1 USD = 84.51 RUB; 1 RUB = 37.24 COP.
 */
export const rubRates = {
  RUB: 1,
  USD: 1 / 84.51,
  COP: 37.24,
} as const;

export type DisplayCurrency = keyof typeof rubRates;

const money: Record<
  Locale,
  { currency: DisplayCurrency; number: string }
> = {
  es: { currency: "COP", number: "es-CO" },
  en: { currency: "USD", number: "en-US" },
  ru: { currency: "RUB", number: "ru-RU" },
};

export function convertFromRub(rub: number, currency: DisplayCurrency): number {
  const raw = rub * rubRates[currency];
  if (currency === "COP") return Math.round(raw / 1000) * 1000;
  return Math.round(raw);
}

export function formatPrice(priceRub: number, locale: Locale): string {
  const { currency, number } = money[locale];
  return new Intl.NumberFormat(number, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(convertFromRub(priceRub, currency));
}

export function formatWhatsAppUrl(phone: string, message?: string): string {
  const clean = phone.replace(/\D/g, "");
  const text = encodeURIComponent(
    message ?? "Hello — I saw the workshop site and would like to ask about a piece.",
  );
  return `https://wa.me/${clean}?text=${text}`;
}
