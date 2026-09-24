import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { photo, workshopNotes } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Ridge } from "@/components/brand/Ornament";
import { Parallax } from "@/components/motion/Parallax";
import { EnquireButton } from "@/components/enquire/EnquireHost";

export const metadata: Metadata = {
  title: "El taller",
  description:
    "Notas del banco: cómo se corta, se cose y se bruñe cada pieza en Medellín.",
};

export default function TallerPage() {
  return (
    <div>
      <section className="on-dark relative bg-espresso text-chalk">
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] md:aspect-[16/9] md:min-h-[56vh]">
          <Parallax strength={22}>
            <Image
              src={photo.heroWorkshop.src}
              alt={photo.heroWorkshop.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/25 to-transparent"
          />
        </div>

        <div className="shell relative -mt-28 pb-12 md:-mt-36 md:pb-16">
          <SectionLabel className="text-chalk-faint">Bitácora</SectionLabel>
          <h1 className="mt-5 max-w-[12ch] font-display text-d2 font-light md:text-d1">
            Notas
            <br />
            del <span className="italic text-sand">banco</span>
          </h1>
          <p className="mt-6 max-w-text text-lead text-chalk-muted pretty">
            Cómo se trabaja aquí: el banco, las herramientas, el tiempo y lo que
            el cuero hace después de salir.
          </p>
        </div>
      </section>

      <section className="surface-paper bg-bone py-section text-ink">
        <div className="shell">
          <Ridge className="mb-12 text-espresso/15" />

          <ul>
            {workshopNotes.map((note, i) => (
              <li key={note.slug} className="seam-b">
                <Link
                  href={`/taller/${note.slug}`}
                  className="group grid items-start gap-6 py-10 md:grid-cols-12 md:gap-10"
                >
                  <p className="text-micro uppercase tracking-[0.12em] text-ink-faint md:col-span-2">
                    {note.dateLabel}
                  </p>
                  <div className="relative aspect-[16/10] overflow-hidden bg-tobacco md:col-span-4">
                    <Image
                      src={note.photo.src}
                      alt={note.photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 32vw"
                      className="object-cover transition-transform duration-700 ease-craft group-hover:scale-[1.03]"
                      priority={i === 0}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <h2 className="font-display text-d4 font-light group-hover:text-burnt">
                      {note.title}
                    </h2>
                    <p className="mt-3 max-w-text text-sm text-ink-muted pretty">
                      {note.excerpt}
                    </p>
                    <p className="mt-5 text-label uppercase text-ink-faint">
                      Leer
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-col items-start gap-5 border-t border-espresso/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-narrow font-display text-d5 font-light">
              Se puede encargar una pieza desde el mismo banco.
            </p>
            <EnquireButton />
          </div>
        </div>
      </section>
    </div>
  );
}
