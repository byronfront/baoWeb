import type { ReactNode } from "react";
import { Lozenge } from "@/components/brand/Ornament";

type SectionLabelProps = {
  children: ReactNode;
  index?: string;
  className?: string;
};

export function SectionLabel({ children, index, className }: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 text-label uppercase ${className ?? ""}`}
    >
      <Lozenge className="h-[5px] w-[5px] shrink-0 opacity-65" />
      {index && <span className="tabular-nums opacity-55">{index}</span>}
      <span>{children}</span>
    </p>
  );
}
