"use client";

import Link from "next/link";
import { commissionSlugs, getProductBySlug } from "@/lib/data";
import { catalogHref } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";
import { EnquireButton } from "@/components/enquire/EnquireHost";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function CommissionPieces() {
  const { locale, dict } = useLocale();

  return (
    <ul className="mt-8 seam-t">
      {commissionSlugs.map((slug) => {
        const name = dict.commissionPieces[slug];
        const listed = getProductBySlug(slug);

        return (
          <li
            key={slug}
            className="seam-b flex items-center justify-between gap-4 py-4"
          >
            <div className="min-w-0">
              {listed ? (
                <Link
                  href={catalogHref(locale, slug)}
                  className="font-display text-d5 font-light leading-tight hover:text-burnt"
                >
                  {name}
                </Link>
              ) : (
                <p className="font-display text-d5 font-light leading-tight">
                  {name}
                </p>
              )}
              {listed && (
                <p className="mt-1 text-micro tabular-nums text-ink-faint">
                  {formatPrice(listed.price, locale)}
                </p>
              )}
            </div>
            <EnquireButton
              productName={name}
              className="act act-outline shrink-0"
            />
          </li>
        );
      })}
    </ul>
  );
}