import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/data";
import { photo } from "@/lib/content";
import {
  catalogHref,
  contactHref,
  fill,
  getDictionary,
  isLocale,
  locales,
  localizeProduct,
} from "@/lib/i18n";
import { formatPrice } from "@/lib/format";
import { Plate } from "@/components/media/Plate";
import { Ledger } from "@/components/catalog/Ledger";
import { ProductGallery } from "@/components/catalog/ProductGallery";
import { SpecList } from "@/components/craft/SpecList";
import { Marks } from "@/components/craft/Marks";
import { CraftSteps } from "@/components/craft/CraftSteps";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Lozenge } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";
import { EnquireButton } from "@/components/enquire/EnquireHost";
import { ProductSticky } from "@/components/catalog/ProductSticky";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const raw = getProductBySlug(slug);
  if (!raw) return { title: dict.product.sheet };
  const product = localizeProduct(raw, dict);
  const cover = product.images[0];

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      type: "article",
      ...(cover ? { images: [{ url: cover.src, alt: cover.alt }] } : {}),
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const raw = getProductBySlug(slug);
  if (!raw) notFound();

  const product = localizeProduct(raw, dict);
  const related = getRelatedProducts(product.slug).map((item) =>
    localizeProduct(item, dict),
  );
  const categoryLabel = dict.categories[product.category];
  const available = product.inStock !== false;

  return (
    <article className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="surface-paper bg-bone text-ink">
        <div className="shell pb-12 pt-6 md:pb-20 md:pt-10">
          <nav aria-label={dict.ui.breadcrumb}>
            <ol className="flex flex-wrap items-center gap-2.5 text-micro uppercase tracking-[0.12em] text-ink-faint">
              <li>
                <Link href={catalogHref(locale)} className="transition-colors hover:text-ink">
                  {dict.ui.catalog}
                </Link>
              </li>
              <Lozenge className="h-[4px] w-[4px] opacity-50" />
              <li>
                <Link
                  href={catalogHref(locale, undefined, product.category)}
                  className="transition-colors hover:text-ink"
                >
                  {categoryLabel}
                </Link>
              </li>
              <Lozenge className="h-[4px] w-[4px] opacity-50" />
              <li aria-current="page" className="text-ink-muted">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-start gap-x-12 gap-y-10 md:mt-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <ProductGallery
                images={product.images}
                viewAria={dict.product.viewAria}
              />
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <p className="text-label uppercase text-ink-faint">{product.type}</p>
              <h1 className="mt-3 font-display text-d3 font-light md:text-d2">
                {product.name}
              </h1>
              <p className="mt-4 font-display text-d5 font-normal tabular-nums">
                {formatPrice(product.price, locale)}
              </p>
              <p className="mt-3 flex items-center gap-2 text-label uppercase text-ink-faint">
                <Lozenge className="h-[5px] w-[5px]" />
                {available ? dict.ui.madeToOrder : dict.ui.soldOut}
              </p>

              <p className="mt-8 text-lead text-ink-muted pretty">
                {product.description}
              </p>

              {product.note && (
                <blockquote className="mt-8 border-l border-espresso/20 pl-5">
                  <p className="font-display text-d5 font-light italic leading-snug">
                    {product.note}
                  </p>
                  <footer className="mt-3 text-label uppercase text-ink-faint">
                    {dict.product.workshopNote}
                  </footer>
                </blockquote>
              )}

              <div className="mt-10 hidden flex-col items-start gap-5 md:flex">
                {available && <EnquireButton productName={product.name} />}
                <Link href={contactHref(locale, "escribir")} className="act-quiet">
                  {dict.enquire.write}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {product.spec && (
        <section className="surface-paper bg-ivory py-section text-ink">
          <div className="shell grid gap-x-12 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel className="text-ink-faint">{dict.product.sheet}</SectionLabel>
              <h2 className="mt-5 max-w-[14ch] font-display text-d4 font-light">
                {dict.product.measurable}
              </h2>
              <p className="mt-5 max-w-[28ch] text-sm text-ink-muted pretty">
                {dict.product.measurableLead}
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <SpecList spec={product.spec} labels={dict.spec} />
              <Marks items={dict.marks} label={dict.ui.marks} className="mt-12" />
            </div>
          </div>
        </section>
      )}

      <section className="on-dark surface-leather bg-espresso py-section text-chalk">
        <div className="shell">
          <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-10">
            <div className="md:col-span-5">
              <SectionLabel className="text-chalk-faint">
                {dict.product.howMade}
              </SectionLabel>
              <h2 className="mt-5 max-w-[13ch] font-display text-d3 font-light">
                {dict.product.fromCut}
              </h2>
            </div>

            <Reveal className="md:col-span-5 md:col-start-8 md:self-end">
              <p className="text-lead text-chalk-muted pretty">
                {product.spec?.leadTime
                  ? fill(dict.product.leadTime, { time: product.spec.leadTime })
                  : dict.product.sixSteps}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="shell mt-12 grid gap-3 md:mt-16 md:grid-cols-3 md:gap-4">
          <Plate
            src={photo.cutting.src}
            alt={dict.photoAlt.cutting}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 33vw"
            caption={dict.product.captions[0]}
          />
          <Plate
            src={photo.stitching.src}
            alt={dict.photoAlt.stitching}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 33vw"
            caption={dict.product.captions[1]}
          />
          <Plate
            src={photo.burnishing.src}
            alt={dict.photoAlt.burnishing}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 33vw"
            caption={dict.product.captions[2]}
          />
        </div>

        <div className="shell">
          <CraftSteps steps={dict.craftSteps} className="mt-16" columns={3} />

          {available && (
            <div className="mt-16 flex flex-col items-start gap-6 border-t border-chalk/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-narrow font-display text-d5 font-light">
                {dict.product.otherMeasures}
              </p>
              <EnquireButton productName={product.name} />
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="surface-paper bg-bone py-section text-ink">
          <div className="shell grid gap-x-12 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel className="text-ink-faint">
                {dict.product.otherPieces}
              </SectionLabel>
              <p className="mt-5 max-w-[22ch] font-display text-d4 font-light">
                {dict.product.alsoOnBench}
              </p>
              <Link href={catalogHref(locale)} className="act-quiet mt-6">
                {dict.ui.viewCatalog}
              </Link>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <Ledger products={related} locale={locale} />
            </div>
          </div>
        </section>
      )}

      {available && <ProductSticky name={product.name} price={product.price} />}
    </article>
  );
}
