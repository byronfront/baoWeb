import type { Metadata } from "next";
import Link from "next/link";
import { categories, isCategory, products } from "@/lib/data";
import { ProductTile } from "@/components/ui/ProductTile";
import { Ledger } from "@/components/catalog/Ledger";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Marks } from "@/components/craft/Marks";
import { Ridge, Lozenge } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Piezas",
  description:
    "Carteras, cinturones y accesorios cortados y cosidos a mano en cuero curtido al vegetal. Cada pieza con su ficha: cuero, curtido, hilo, medidas y tiempo de banco.",
};

const PLACEMENT = [
  {
    className: "md:col-span-7",
    ratio: "plate" as const,
    sizes: "(max-width: 768px) 100vw, 54vw",
  },
  {
    className: "md:col-span-4 md:col-start-9 md:mt-28",
    ratio: "object" as const,
    sizes: "(max-width: 768px) 100vw, 31vw",
  },
  {
    className: "md:col-span-5 md:col-start-2",
    ratio: "bench" as const,
    sizes: "(max-width: 768px) 100vw, 38vw",
  },
  {
    className: "md:col-span-5 md:col-start-8 md:mt-20",
    ratio: "object" as const,
    sizes: "(max-width: 768px) 100vw, 38vw",
  },
];

type Props = { searchParams: Promise<{ categoria?: string }> };

export default async function CatalogoPage({ searchParams }: Props) {
  const { categoria } = await searchParams;
  const active = isCategory(categoria) ? categoria : undefined;

  const visible = active
    ? products.filter((p) => p.category === active)
    : products;

  const activeLabel = categories.find((c) => c.key === active)?.label;

  return (
    <div className="surface-paper bg-bone text-ink">
      <header className="shell pb-14 pt-section md:pb-20">
        <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-3">
            <SectionLabel className="text-ink-faint">Catálogo</SectionLabel>
            <h1 className="mt-8 font-display text-d2 font-light">
              {activeLabel ?? "Todas las piezas"}
            </h1>
          </div>

          <p className="max-w-text text-lead text-ink-muted pretty md:col-span-5 md:col-start-5 md:self-end">
            Cada pieza sale del mismo banco y lleva su ficha: qué cuero es,
            cómo se curtió, con qué hilo está cosida y cuánto tarda en hacerse.
          </p>

          <nav
            aria-label="Filtrar por categoría"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 md:col-span-3 md:col-start-10 md:flex-col md:items-start md:gap-y-4 md:self-end"
          >
            <FilterLink href="/catalogo" active={!active} count={products.length}>
              Todas
            </FilterLink>
            {categories.map(({ key, label }) => (
              <FilterLink
                key={key}
                href={`/catalogo?categoria=${key}`}
                active={active === key}
                count={products.filter((p) => p.category === key).length}
              >
                {label}
              </FilterLink>
            ))}
          </nav>
        </div>
      </header>

      {visible.length > 0 && (
        <div className="shell pb-16 md:hidden">
          <Ledger products={visible} />
        </div>
      )}

      <div className="shell pb-section">
        {visible.length > 0 ? (
          <div className="grid gap-x-10 gap-y-20 md:grid-cols-12">
            {visible.map((product, i) => {
              const place = PLACEMENT[i % PLACEMENT.length];

              return (
                <ProductTile
                  key={product.id}
                  product={product}
                  index={String(i + 1).padStart(2, "0")}
                  ratio={place.ratio}
                  sizes={place.sizes}
                  className={place.className}
                  priority={i < 2}
                />
              );
            })}
          </div>
        ) : (
          <Reveal className="border-t border-espresso/12 pt-12">
            <p className="font-display text-d4 font-light">
              Ahora mismo no hay nada de esto en el banco.
            </p>
            <p className="mt-4 max-w-text text-lead text-ink-muted">
              Se puede hacer por encargo. También podés ver el resto del
              catálogo.
            </p>
            <Link href="/catalogo" className="act act-outline mt-10">
              Ver todas las piezas
            </Link>
          </Reveal>
        )}
      </div>

      <div className="shell pb-section">
        <Ridge className="mb-14 text-espresso/15" />
        <Marks />
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
      className={`group relative flex items-baseline gap-1.5 py-1 text-label uppercase ${
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
