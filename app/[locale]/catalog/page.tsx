import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import {
  CatalogIndex,
  CatalogView,
} from "@/components/catalog/CatalogIndex";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.catalog.title, description: dict.catalog.description };
}

export default async function CatalogPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Suspense fallback={<CatalogView locale={locale} dict={dict} />}>
      <CatalogIndex locale={locale} dict={dict} />
    </Suspense>
  );
}
