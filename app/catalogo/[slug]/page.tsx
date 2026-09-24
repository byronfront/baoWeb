import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  contact,
  categories,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/data";
import { photo } from "@/lib/content";
import { formatPrice, formatWhatsAppUrl } from "@/lib/format";
import { Plate } from "@/components/media/Plate";
import { Ledger } from "@/components/catalog/Ledger";
import { SpecList } from "@/components/craft/SpecList";
import { Marks } from "@/components/craft/Marks";
import { CraftSteps } from "@/components/craft/CraftSteps";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Lozenge, Seal } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";

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

  const [cover, detail] = product.images;
  const related = getRelatedProducts(product.slug);
  const categoryLabel = categories.find((c) => c.key === product.category)?.label;
  const available = product.inStock !== false;

  const enquiryUrl = contact.whatsapp
    ? formatWhatsAppUrl(contact.whatsapp, `Hola, me interesa: ${product.name}`)
    : null;

  return (
    <article>
      {cover && (
        <section className="relative bg-espresso">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/3] md:aspect-[16/10] md:min-h-[72vh]">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>
      )}

      <header className="surface-paper bg-bone text-ink">
        <div className="shell pb-16 pt-10 md:pb-20 md:pt-14">
          <nav aria-label="Migas de pan">
            <ol className="flex flex-wrap items-center gap-2.5 text-micro uppercase tracking-[0.14em] text-ink-faint">
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

          <div className="mt-12 grid gap-y-10 md:grid-cols-12 md:gap-x-10">
            <div className="md:col-span-7">
              <p className="text-label uppercase text-ink-faint">{product.type}</p>
              <h1 className="mt-4 max-w-[14ch] font-display text-d2 font-light">
                {product.name}
              </h1>
            </div>

            <div className="md:col-span-4 md:col-start-9 md:self-end">
              <p className="font-display text-d4 font-normal tabular-nums">
                {formatPrice(product.price)}
              </p>
              <p className="mt-3 flex items-center gap-2 text-label uppercase text-ink-faint">
                <Lozenge className="h-[5px] w-[5px]" />
                {available ? "Se hace por encargo" : "Agotado"}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="surface-paper bg-bone pb-section text-ink">
        <div className="shell grid gap-x-12 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-lead text-ink-muted pretty">{product.description}</p>

            {product.note && (
              <blockquote className="mt-12 border-l border-espresso/20 pl-6">
                <p className="font-display text-d5 font-light italic leading-snug">
                  {product.note}
                </p>
                <footer className="mt-4 text-label uppercase text-ink-faint">
                  Nota de taller
                </footer>
              </blockquote>
            )}

            <div className="mt-12 flex flex-col items-start gap-6">
              {enquiryUrl && (
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="act act-solid"
                >
                  Consultar esta pieza
                </a>
              )}
              <Link href="/contacto" className="act-quiet">
                Otras formas de contacto
              </Link>
            </div>
          </div>

          {detail && (
            <Plate
              src={detail.src}
              alt={detail.alt}
              ratio="bench"
              sizes="(max-width: 768px) 100vw, 46vw"
              parallax={20}
              marks
              className="md:col-span-6 md:col-start-7"
              caption={detail.alt}
            />
          )}
        </div>
      </section>

      {product.spec && (
        <section className="surface-paper bg-ivory py-section text-ink">
          <div className="shell grid gap-x-12 gap-y-14 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel className="text-ink-faint">Ficha</SectionLabel>
              <h2 className="mt-6 max-w-[14ch] font-display text-d4 font-light">
                Lo que se puede medir
              </h2>
              <p className="mt-6 max-w-[28ch] text-sm text-ink-muted pretty">
                Si algo no encaja, se cambia antes de cortar.
              </p>
              <Seal className="mt-10 hidden h-12 w-12 text-espresso/20 md:block" />
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <SpecList spec={product.spec} />
              <Marks className="mt-14" />
            </div>
          </div>
        </section>
      )}

      <section className="on-dark surface-leather bg-espresso py-section text-chalk">
        <div className="shell">
          <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-10">
            <div className="md:col-span-5">
              <SectionLabel className="text-chalk-faint">
                Cómo se hizo
              </SectionLabel>
              <h2 className="mt-6 max-w-[13ch] font-display text-d3 font-light">
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

        <div className="shell-wide mt-16 grid gap-4 md:mt-20 md:grid-cols-3">
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
          <CraftSteps className="mt-20" columns={3} />

          {enquiryUrl && (
            <div className="mt-20 flex flex-col items-start gap-6 border-t border-chalk/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-narrow font-display text-d5 font-light">
                ¿La querés con otras medidas?
              </p>
              <a
                href={enquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="act act-solid"
              >
                Escribir al taller
              </a>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="surface-paper bg-bone py-section text-ink">
          <div className="shell grid gap-x-12 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel className="text-ink-faint">
                Otras piezas
              </SectionLabel>
              <p className="mt-6 max-w-[22ch] font-display text-d4 font-light">
                También en el banco
              </p>
              <Link href="/catalogo" className="act-quiet mt-8">
                Ver el catálogo
              </Link>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <Ledger products={related} />
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
