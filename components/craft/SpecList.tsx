import type { ProductSpec } from "@/types";

const SPEC_ORDER: (keyof ProductSpec)[] = [
  "leather",
  "tanning",
  "color",
  "thread",
  "hardware",
  "lining",
  "dimensions",
  "weight",
  "madeIn",
  "leadTime",
  "customization",
];

export function SpecList({
  spec,
  labels,
  className,
}: {
  spec: ProductSpec;
  labels: Record<keyof ProductSpec, string>;
  className?: string;
}) {
  const rows = SPEC_ORDER.map((key) => [key, spec[key]] as const).filter(
    (entry): entry is readonly [keyof ProductSpec, string] => Boolean(entry[1])
  );

  return (
    <dl className={`seam-t ${className ?? ""}`}>
      {rows.map(([key, value]) => (
        <div
          key={key}
          className="seam-b grid grid-cols-[minmax(7.5rem,0.55fr)_1fr] gap-x-8 py-4"
        >
          <dt className="text-micro uppercase tracking-[0.14em] opacity-50">
            {labels[key]}
          </dt>
          <dd className="text-sm">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
