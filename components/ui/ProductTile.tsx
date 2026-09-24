import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Pieza del catálogo.
 * No es una tarjeta: la fotografía se apoya en la página.
 * La ficha cuelga debajo como un renglón de inventario.
 */

const RATIO = {
  object: "aspect-object",
  plate: "aspect-plate",
  bench: "aspect-bench",
} as const;

type ProductTileProps = {
  product: Product;
  sizes: string;
  priority?: boolean;
  index?: string;
  ratio?: keyof typeof RATIO;
  className?: string;
  delay?: number;
};

export function ProductTile({
  product,
  sizes,
  priority = false,
  index,
  ratio = "object",
  className,
  delay = 0,
}: ProductTileProps) {
  const [front, back] = product.images;
  const soldOut = product.inStock === false;

  return (
    <Reveal as="article" delay={delay} className={`group ${className ?? ""}`}>
      <Link href={`/catalogo/${product.slug}`} className="block">
        <div className={`relative overflow-hidden bg-tobacco ${RATIO[ratio]}`}>
          {front ? (
            <>
              <Image
                src={front.src}
                alt={front.alt}
                fill
                sizes={sizes}
                priority={priority}
                className="object-cover transition-all duration-1100 ease-craft group-hover:scale-[1.025] group-hover:opacity-0"
              />
              {back && (
                <Image
                  src={back.src}
                  alt=""
                  aria-hidden
                  fill
                  sizes={sizes}
                  className="scale-[1.025] object-cover opacity-0 transition-all duration-1100 ease-craft group-hover:opacity-100"
                />
              )}
            </>
          ) : (
            <span className="absolute inset-0 flex items-center justify-center px-6 text-center font-display text-d5 text-chalk-faint">
              {product.name}
            </span>
          )}

          {index && (
            <span className="absolute left-4 top-4 text-label tabular-nums text-chalk/75 mix-blend-difference">
              {index}
            </span>
          )}

          {soldOut && (
            <span className="absolute bottom-4 left-4 bg-espresso/90 px-3 py-1.5 text-label uppercase text-chalk">
              Agotado
            </span>
          )}
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto] items-end gap-x-6 gap-y-1 border-t border-espresso/12 pt-4 transition-colors duration-420 ease-craft group-hover:border-espresso/40">
          <h3 className="font-display text-d5 font-normal leading-tight text-ink">
            {product.name}
          </h3>
          <p className="text-sm tabular-nums text-ink">
            {formatPrice(product.price)}
          </p>
          <p className="col-span-2 text-micro uppercase tracking-[0.16em] text-ink-faint">
            {product.type}
            {product.spec?.leather ? ` · ${product.spec.leather}` : ""}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
