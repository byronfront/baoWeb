import type { CSSProperties } from "react";

/* ==========================================================================
   Sistema ornamental Bao
   --------------------------------------------------------------------------
   Un sello inventado. No es un patrón ruso ni uno colombiano.

   Estructura (forma): marco cuadrado, ejes cardinales, rombo interior.
   Materia (ritmo): una cresta quebrada — la línea de una cordillera —
   cruza el centro. El rombo se escalona en peldaños, no en curva.

   De este sello salen el friso, el divisor, las viñetas y las escuadras.
   ========================================================================== */

const FRAME = "M6 6 H58 V58 H6 Z";
const FRAME_INNER = "M10 10 H54 V54 H10 Z";

const STEPPED =
  "M32 14 H36 V18 H40 V22 H44 V26 H48 V32 " +
  "V38 H44 V42 H40 V46 H36 V50 H32 " +
  "H28 V46 H24 V42 H20 V38 H16 V32 " +
  "V26 H20 V22 H24 V18 H28 V14 Z";

const RIDGE = "M12 32 L18 26 L24 32 L32 22 L40 32 L46 26 L52 32";
const CORE = "M32 28 L36 32 L32 36 L28 32 Z";

type SealProps = {
  className?: string;
  /** Solo el rombo y el núcleo. Para tamaños menores de ~18px. */
  compact?: boolean;
  title?: string;
};

export function Seal({ className, compact = false, title }: SealProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {!compact && (
        <>
          <path d={FRAME} stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d={FRAME_INNER} stroke="currentColor" strokeWidth="0.75" opacity="0.25" />
          <path d="M32 6 V12" stroke="currentColor" strokeWidth="1" opacity="0.45" />
          <path d="M32 52 V58" stroke="currentColor" strokeWidth="1" opacity="0.45" />
          <path d="M6 32 H12" stroke="currentColor" strokeWidth="1" opacity="0.45" />
          <path d="M52 32 H58" stroke="currentColor" strokeWidth="1" opacity="0.45" />
          <path d={RIDGE} stroke="currentColor" strokeWidth="1.15" />
        </>
      )}
      <path d={STEPPED} stroke="currentColor" strokeWidth="1.2" />
      <path d={CORE} fill="currentColor" />
    </svg>
  );
}

type LozengeProps = {
  className?: string;
  outline?: boolean;
};

/** Viñeta. El rombo mínimo del sello. */
export function Lozenge({ className, outline = false }: LozengeProps) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <path
        d="M4 0.4 L7.6 4 L4 7.6 L0.4 4 Z"
        fill={outline ? "none" : "currentColor"}
        stroke="currentColor"
        strokeWidth={outline ? 1 : 0}
      />
    </svg>
  );
}

/**
 * Cresta: la línea quebrada del sello, desplegada.
 * Es el divisor de sección — una cordillera reducida a un trazo.
 */
const RIDGE_MASK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='14' viewBox='0 0 48 14'%3E%3Cpath d='M0 11 L8 3 L16 11 L24 3 L32 11 L40 3 L48 11' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M24 11 L26 9 L24 7 L22 9 Z' fill='%23000'/%3E%3C/svg%3E\")";

type RidgeProps = {
  className?: string;
  height?: number;
};

export function Ridge({ className, height = 12 }: RidgeProps) {
  const style: CSSProperties = {
    height,
    maskImage: RIDGE_MASK,
    WebkitMaskImage: RIDGE_MASK,
    maskRepeat: "repeat-x",
    WebkitMaskRepeat: "repeat-x",
    maskSize: "auto 100%",
    WebkitMaskSize: "auto 100%",
    backgroundColor: "currentColor",
  };

  return <div aria-hidden="true" className={className} style={style} />;
}

/** Alias histórico: el friso es ahora la cresta. */
export const Frieze = Ridge;

type RuleProps = {
  className?: string;
  mark?: "start" | "center" | "none";
  draw?: boolean;
};

export function Rule({ className, mark = "center", draw = false }: RuleProps) {
  const line = `h-px flex-1 bg-current opacity-20 ${draw ? "reveal-line" : ""}`;

  if (mark === "none") {
    return (
      <div aria-hidden="true" className={`flex ${className ?? ""}`}>
        <span className={line} />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-4 ${className ?? ""}`}
    >
      {mark === "center" && <span className={line} />}
      <Lozenge className="h-[5px] w-[5px] shrink-0 opacity-55" />
      <span className={line} style={{ transitionDelay: "120ms" }} />
    </div>
  );
}

type CornerMarksProps = {
  className?: string;
  size?: number;
  inset?: number;
};

/** Escuadras. Encuadran la fotografía como una lámina, sin caja. */
export function CornerMarks({
  className,
  size = 16,
  inset = 10,
}: CornerMarksProps) {
  const corners: CSSProperties[] = [
    { top: inset, left: inset, borderTopWidth: 1, borderLeftWidth: 1 },
    { top: inset, right: inset, borderTopWidth: 1, borderRightWidth: 1 },
    { bottom: inset, left: inset, borderBottomWidth: 1, borderLeftWidth: 1 },
    { bottom: inset, right: inset, borderBottomWidth: 1, borderRightWidth: 1 },
  ];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
    >
      {corners.map((corner, i) => (
        <span
          key={i}
          className="absolute border-solid border-current"
          style={{ width: size, height: size, ...corner }}
        />
      ))}
    </div>
  );
}

type WordmarkProps = {
  className?: string;
  withSeal?: boolean;
};

export function Wordmark({ className, withSeal = true }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      {withSeal && <Seal className="h-[1.05em] w-[1.05em] shrink-0" />}
      <span className="font-display text-[1.45em] font-medium leading-none tracking-[0.2em]">
        BAO
      </span>
    </span>
  );
}
