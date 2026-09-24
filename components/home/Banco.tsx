import Link from "next/link";
import { products } from "@/lib/data";
import { Ledger } from "@/components/catalog/Ledger";
import { ProductTile } from "@/components/ui/ProductTile";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * El banco.
 * Una pieza a escala editorial + el inventario completo como renglones.
 * No es una parrilla de tarjetas.
 */
export function Banco() {
  const [featured, ...rest] = products;
  if (!featured) return null;

  return (
    <section className="surface-paper bg-bone py-section text-ink">
      <div className="shell">
        <header className="grid gap-y-8 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-7">
            <SectionLabel index="01" className="text-ink-faint">
              El banco
            </SectionLabel>
            <h2 className="mt-6 max-w-[13ch] font-display text-d3 font-light">
              Lo que hay cortado ahora
            </h2>
          </div>

          <div className="flex flex-col justify-end md:col-span-4 md:col-start-9">
            <p className="text-lead text-ink-muted pretty">
              {products.length} piezas. Cada una se hace por encargo, sobre el
              mismo banco, con el mismo orden de trabajo.
            </p>
            <Link href="/catalogo" className="act-quiet mt-6 self-start">
              Ver el catálogo
            </Link>
          </div>
        </header>

        <div className="mt-20 grid items-start gap-x-12 gap-y-16 md:mt-28 md:grid-cols-12">
          <ProductTile
            product={featured}
            index="01"
            ratio="plate"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="md:col-span-7"
          />

          <div className="md:col-span-4 md:col-start-9 md:pt-4">
            <p className="text-label uppercase text-ink-faint">Inventario</p>
            <Ledger products={products} className="mt-6" />
          </div>
        </div>

        {rest.length >= 2 && (
          <div className="mt-24 grid gap-x-10 gap-y-16 md:mt-32 md:grid-cols-12">
            <ProductTile
              product={rest[0]}
              index="02"
              ratio="object"
              sizes="(max-width: 768px) 100vw, 34vw"
              className="md:col-span-4 md:mt-24"
            />
            <ProductTile
              product={rest[1]}
              index="03"
              ratio="bench"
              sizes="(max-width: 768px) 100vw, 42vw"
              className="md:col-span-5 md:col-start-7"
            />
          </div>
        )}
      </div>
    </section>
  );
}
