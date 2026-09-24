import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { CornerMarks, Lozenge } from "@/components/brand/Ornament";

const RATIO = {
  plate: "aspect-plate",
  object: "aspect-object",
  bench: "aspect-bench",
  square: "aspect-square",
  frieze: "aspect-frieze",
  panorama: "aspect-panorama",
  fill: "h-full",
} as const;

type PlateProps = {
  src: string;
  alt: string;
  sizes: string;
  ratio?: keyof typeof RATIO;
  priority?: boolean;
  className?: string;
  parallax?: number;
  marks?: boolean;
  caption?: ReactNode;
  hoverZoom?: boolean;
};

export function Plate({
  src,
  alt,
  sizes,
  ratio = "object",
  priority = false,
  className,
  parallax = 0,
  marks = false,
  caption,
  hoverZoom = false,
}: PlateProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${
        hoverZoom
          ? "transition-transform duration-1100 ease-craft group-hover:scale-[1.03]"
          : ""
      }`}
    />
  );

  return (
    <figure className={className}>
      <Reveal variant="none" className="relative">
        <div
          className={`reveal-mask relative overflow-hidden bg-tobacco ${RATIO[ratio]}`}
        >
          {parallax > 0 ? <Parallax strength={parallax}>{image}</Parallax> : image}
        </div>

        {marks && (
          <CornerMarks className="text-chalk/40" size={18} inset={12} />
        )}
      </Reveal>

      {caption && (
        <figcaption className="mt-4 flex items-start gap-2.5 text-micro opacity-60">
          <Lozenge className="mt-[0.55em] h-[5px] w-[5px] shrink-0 opacity-70" />
          <span className="pretty">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
