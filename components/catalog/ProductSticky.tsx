"use client";

import { formatPrice } from "@/lib/format";
import { EnquireButton } from "@/components/enquire/EnquireHost";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function ProductSticky({ name, price }: { name: string; price: number }) {
  const { locale } = useLocale();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-espresso/12 bg-bone px-gutter py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="flex items-center justify-between gap-4">
        <p className="font-display text-d5 font-normal tabular-nums">
          {formatPrice(price, locale)}
        </p>
        <EnquireButton productName={name} className="act act-solid" />
      </div>
    </div>
  );
}
