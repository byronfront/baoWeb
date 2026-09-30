import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getDictionary,
  isLocale,
  localeMeta,
  locales,
  type Locale,
} from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EnquireProvider } from "@/components/enquire/EnquireContext";
import { EnquireHost } from "@/components/enquire/EnquireHost";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { HtmlLang } from "@/components/i18n/HtmlLang";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    openGraph: {
      locale: localeMeta[locale].og,
      siteName: "Bao",
    },
    alternates: {
      languages: {
        es: "/es",
        en: "/en",
        ru: "/ru",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dict={dict}>
      <HtmlLang locale={locale} />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-gutter focus:top-4 focus:z-[100] focus:bg-espresso focus:px-5 focus:py-3 focus:text-label focus:uppercase focus:text-chalk"
      >
        {dict.nav.skip}
      </a>
      <EnquireProvider>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <EnquireHost />
      </EnquireProvider>
    </LocaleProvider>
  );
}
