import Link from "next/link";
import type { Product } from "@/types";
import { catalogHref, getDictionary, type Locale } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";

type LedgerProps = {
  products: Product[];
  locale: Locale;
  className?: string;
  start?: number;
};

/**
 * Inventario de taller.
 * Nombre, tipo y precio en un renglón. Sin fotografía, sin caja.
 * Es la forma más honesta de listar lo que hay en el banco.
 */
export function Ledger({ products, locale, className, start = 1 }: LedgerProps) {
  const dict = getDictionary(locale);

  return (
    <ol className={`seam-t ${className ?? ""}`}>
      {products.map((product, i) => {
        const soldOut = product.inStock === false;

        return (
          <Reveal as="li" key={product.id} delay={i * 60} className="seam-b">
            <Link
              href={catalogHref(locale, product.slug)}
              className="group grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-baseline gap-x-4 py-5 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto]"
            >
              <span className="text-label tabular-nums text-ink-faint">
                {String(start + i).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="font-display text-d5 font-normal leading-tight text-ink transition-colors duration-250 group-hover:text-burnt">
                  {product.name}
                </span>
                <span className="mt-1 block text-micro uppercase tracking-[0.14em] text-ink-faint">
                  {product.type}
                  {soldOut ? ` · ${dict.ui.soldOut}` : ""}
                </span>
              </span>

              <span className="shrink-0 text-sm tabular-nums text-ink">
                {formatPrice(product.price, locale)}
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ol>
  );
}
