import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isCategory, products } from "@/lib/data";
import {
  catalogHref,
  getDictionary,
  isLocale,
  localizeProduct,
} from "@/lib/i18n";
import { ProductTile } from "@/components/ui/ProductTile";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Marks } from "@/components/craft/Marks";
import { Ridge, Lozenge } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.catalog.title, description: dict.catalog.description };
}

export default async function CatalogPage({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { category } = await searchParams;
  const active = isCategory(category) ? category : undefined;

  const localized = products.map((product) => localizeProduct(product, dict));
  const visible = active
    ? localized.filter((p) => p.category === active)
    : localized;

  const activeLabel = active ? dict.categories[active] : undefined;

  return (
    <div className="surface-paper bg-bone text-ink">
      <header className="shell pb-10 pt-10 md:pb-16 md:pt-16">
        <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-10">
          <div className="order-1 md:order-none md:col-span-3">
            <SectionLabel className="text-ink-faint">{dict.ui.catalog}</SectionLabel>
            <h1 className="mt-5 font-display text-d3 font-light md:mt-7 md:text-d2">
              {activeLabel ?? dict.ui.allPieces}
            </h1>
          </div>

          <p className="order-3 max-w-text text-lead text-ink-muted pretty md:order-none md:col-span-5 md:col-start-5 md:self-end">
            {dict.catalog.lead}
          </p>

          <nav
            aria-label={dict.ui.filter}
            className="order-2 min-w-0 max-w-full -mx-gutter flex flex-nowrap items-center gap-x-6 overflow-x-auto px-gutter pb-1 md:order-none md:col-span-3 md:col-start-10 md:mx-0 md:flex-col md:items-start md:gap-y-4 md:overflow-visible md:px-0 md:self-end"
          >
            <FilterLink href={catalogHref(locale)} active={!active} count={products.length}>
              {dict.ui.allPieces}
            </FilterLink>
            {(Object.keys(dict.categories) as Array<keyof typeof dict.categories>).map(
              (key) => (
                <FilterLink
                  key={key}
                  href={catalogHref(locale, undefined, key)}
                  active={active === key}
                  count={products.filter((p) => p.category === key).length}
                >
                  {dict.categories[key]}
                </FilterLink>
              ),
            )}
          </nav>
        </div>
      </header>

      <div className="shell pb-section">
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product, i) => (
              <ProductTile
                key={product.id}
                product={product}
                locale={locale}
                index={String(i + 1).padStart(2, "0")}
                ratio="object"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i < 2}
              />
            ))}
          </div>
        ) : (
          <Reveal className="border-t border-espresso/12 pt-12">
            <p className="font-display text-d4 font-light">{dict.ui.emptyCategory}</p>
            <p className="mt-4 max-w-text text-lead text-ink-muted">
              {dict.ui.emptyCategoryLead}
            </p>
            <Link href={catalogHref(locale)} className="act act-outline mt-10">
              {dict.ui.viewAllPieces}
            </Link>
          </Reveal>
        )}
      </div>

      <div className="shell pb-section">
        <Ridge className="mb-14 text-espresso/15" />
        <Marks items={dict.marks} label={dict.ui.marks} />
      </div>
    </div>
  );
}

function FilterLink({
  href,
  active,
  count,
  children,
}: {
  href: string;
  active: boolean;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={`group relative flex shrink-0 items-baseline gap-1.5 py-1 text-label uppercase ${
        active ? "text-ink" : "text-ink-muted hover:text-ink"
      }`}
    >
      {active && <Lozenge className="h-[5px] w-[5px] self-center" />}
      <span>{children}</span>
      <sup className="text-[0.65em] tabular-nums opacity-45">{count}</sup>
      <span
        aria-hidden
        className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current transition-transform duration-420 ease-craft ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}
