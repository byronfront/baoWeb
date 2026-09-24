import Image from "next/image";
import { materials, photo } from "@/lib/content";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * La materia — el lado colombiano.
 * No se nombra el país. Se muestra la piel, la corteza y el origen.
 */
export function Materials() {
  return (
    <section className="on-dark surface-leather bg-charcoal text-chalk">
      <div className="grid lg:grid-cols-12">
        <div className="relative aspect-[4/5] sm:aspect-bench lg:col-span-6 lg:aspect-auto lg:min-h-[92vh]">
          <Parallax strength={36}>
            <Image
              src={photo.hides.src}
              alt={photo.hides.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Parallax>
          <p className="spine pointer-events-none absolute bottom-10 left-6 text-chalk/50">
            Flor entera · Antioquia
          </p>
        </div>

        <div className="px-gutter py-section lg:col-span-6">
          <div className="mx-auto max-w-[38rem] lg:ml-auto lg:mr-0 lg:max-w-[36rem]">
            <SectionLabel index="03" className="text-chalk-faint">
              La materia
            </SectionLabel>

            <Reveal>
              <h2 className="mt-6 font-display text-d3 font-light">
                Cuatro cosas
                <br />
                entran por
                <br />
                <span className="italic">la puerta</span>
              </h2>
              <p className="mt-6 max-w-narrow text-lead text-chalk-muted pretty">
                Nada más. No hay forros sintéticos, ni pegante que sustituya a
                una costura, ni herrajes chapados que se pelen en dos años.
              </p>
            </Reveal>

            <dl className="seam-t mt-14">
              {materials.map(({ name, origin, note }, i) => (
                <Reveal key={name} delay={i * 70} className="seam-b py-6">
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="font-display text-d5 font-normal">{name}</dt>
                    <span className="shrink-0 text-right text-micro uppercase tracking-[0.14em] text-chalk-faint">
                      {origin}
                    </span>
                  </div>
                  <dd className="mt-2.5 max-w-[48ch] text-sm text-chalk-muted pretty">
                    {note}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
