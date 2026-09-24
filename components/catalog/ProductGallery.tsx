"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/types";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) return null;

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-tobacco">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                aria-label={`Vista ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
                onClick={() => setActive(i)}
                className={`relative aspect-square min-h-11 w-full overflow-hidden bg-tobacco ${
                  i === active ? "outline outline-1 outline-espresso" : "opacity-70"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
