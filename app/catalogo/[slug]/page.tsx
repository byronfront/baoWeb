import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/data";
import { enquire, photo } from "@/lib/content";
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

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Pieza no encontrada" };

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
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product.slug);
  const categoryLabel = categories.find((c) => c.key === product.category)?.label;
  const available = product.inStock !== false;

  return (
    <article className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="surface-paper bg-bone text-ink">
        <div className="shell pb-12 pt-6 md:pb-20 md:pt-10">
          <nav aria-label="Migas de pan">
            <ol className="flex flex-wrap items-center gap-2.5 text-micro uppercase tracking-[0.12em] text-ink-faint">
              <li>
                <Link href="/catalogo" className="transition-colors hover:text-ink">
                  Catálogo
                </Link>
              </li>
              <Lozenge className="h-[4px] w-[4px] opacity-50" />
              <li>
                <Link
                  href={`/catalogo?categoria=${product.category}`}
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
              <ProductGallery images={product.images} />
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <p className="text-label uppercase text-ink-faint">{product.type}</p>
              <h1 className="mt-3 font-display text-d3 font-light md:text-d2">
                {product.name}
              </h1>
              <p className="mt-4 font-display text-d5 font-normal tabular-nums">
                {formatPrice(product.price)}
              </p>
              <p className="mt-3 flex items-center gap-2 text-label uppercase text-ink-faint">
                <Lozenge className="h-[5px] w-[5px]" />
                {available ? "Se hace por encargo" : "Agotado"}
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
                    Nota de taller
                  </footer>
                </blockquote>
              )}

              <div className="mt-10 hidden flex-col items-start gap-5 md:flex">
                {available && <EnquireButton productName={product.name} />}
                <Link href="/contacto#escribir" className="act-quiet">
                  {enquire.write}
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
              <SectionLabel className="text-ink-faint">Ficha</SectionLabel>
              <h2 className="mt-5 max-w-[14ch] font-display text-d4 font-light">
                Lo que se puede medir
              </h2>
              <p className="mt-5 max-w-[28ch] text-sm text-ink-muted pretty">
                Si algo no encaja, se cambia antes de cortar.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <SpecList spec={product.spec} />
              <Marks className="mt-12" />
            </div>
          </div>
        </section>
      )}

      <section className="on-dark surface-leather bg-espresso py-section text-chalk">
        <div className="shell">
          <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-10">
            <div className="md:col-span-5">
              <SectionLabel className="text-chalk-faint">
                Cómo se hizo
              </SectionLabel>
              <h2 className="mt-5 max-w-[13ch] font-display text-d3 font-light">
                Del corte al último punto
              </h2>
            </div>

            <Reveal className="md:col-span-5 md:col-start-8 md:self-end">
              <p className="text-lead text-chalk-muted pretty">
                {product.spec?.leadTime
                  ? `Esta pieza son ${product.spec.leadTime} de banco, repartidos en estos seis pasos.`
                  : "Seis pasos, repartidos en varios días de banco."}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="shell mt-12 grid gap-3 md:mt-16 md:grid-cols-3 md:gap-4">
          <Plate
            src={photo.cutting.src}
            alt={photo.cutting.alt}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 33vw"
            caption="Selección y corte."
          />
          <Plate
            src={photo.stitching.src}
            alt={photo.stitching.alt}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 33vw"
            caption="Punto de silla."
          />
          <Plate
            src={photo.burnishing.src}
            alt={photo.burnishing.alt}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 33vw"
            caption="Bruñido y acabado."
          />
        </div>

        <div className="shell">
          <CraftSteps className="mt-16" columns={3} />

          {available && (
            <div className="mt-16 flex flex-col items-start gap-6 border-t border-chalk/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-narrow font-display text-d5 font-light">
                ¿La querés con otras medidas?
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
              <SectionLabel className="text-ink-faint">Otras piezas</SectionLabel>
              <p className="mt-5 max-w-[22ch] font-display text-d4 font-light">
                También en el banco
              </p>
              <Link href="/catalogo" className="act-quiet mt-6">
                Ver el catálogo
              </Link>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <Ledger products={related} />
            </div>
          </div>
        </section>
      )}

      {available && (
        <ProductSticky name={product.name} price={product.price} />
      )}
    </article>
  );
}
