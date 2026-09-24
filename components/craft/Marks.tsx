import { Seal } from "@/components/brand/Ornament";

export function Marks({
  items,
  label,
  className,
}: {
  items: string[];
  label: string;
  className?: string;
}) {
  return (
    <ul
      className={`seam-t grid sm:grid-cols-3 ${className ?? ""}`}
      aria-label={label}
    >
      {items.map((mark) => (
        <li
          key={mark}
          className="seam-b flex items-center gap-3.5 py-5 sm:justify-center sm:border-b-0"
        >
          <Seal compact className="h-4 w-4 shrink-0 opacity-50" />
          <span className="text-label uppercase">{mark}</span>
        </li>
      ))}
    </ul>
  );
}
