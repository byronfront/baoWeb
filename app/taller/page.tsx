import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/data";
import { photo, workshopChapters } from "@/lib/content";
import { formatWhatsAppUrl } from "@/lib/format";
import { Plate } from "@/components/media/Plate";
import { CraftSteps } from "@/components/craft/CraftSteps";
import { Marks } from "@/components/craft/Marks";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Ridge, Seal } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

export const metadata: Metadata = {
  title: "El taller",
  description:
    "Un banco de madera, una ventana y herramientas de segunda mano. Así se corta, se cose y se bruñe cada pieza en Medellín.",
};

export default function TallerPage() {
  return (
    <div>
      <section className="on-dark relative bg-espresso text-chalk">
        <div className="relative aspect-[4/5] w-full sm:aspect-[3/2] md:aspect-[16/9] md:min-h-[78vh]">
          <Parallax strength={28}>
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
            className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent"
          />
        </div>

        <div className="shell relative -mt-40 pb-16 md:-mt-48 md:pb-24">
          <SectionLabel className="text-chalk-faint">El taller</SectionLabel>
          <h1 className="mt-6 max-w-[10ch] font-display text-d1 font-light">
            Un banco
            <br />
            y una
            <br />
            <span className="italic text-sand">ventana</span>
          </h1>
          <p className="mt-8 max-w-text text-lead text-chalk-muted pretty">
            No hay línea de producción ni máquina de coser. Hay una mesa
            marcada, luz que entra por un solo lado y herramientas que ya
            trabajaban antes de llegar aquí.
          </p>
        </div>
      </section>

      <section className="surface-paper bg-bone py-section text-ink">
        <div className="shell space-y-section">
          {workshopChapters.map((chapter, i) => {
            const imageFirst = i % 2 === 0;

            return (
              <div
                key={chapter.step}
                className="grid items-center gap-x-12 gap-y-12 md:grid-cols-12"
              >
                <Plate
                  src={chapter.photo.src}
                  alt={chapter.photo.alt}
                  ratio={imageFirst ? "bench" : "object"}
                  sizes="(max-width: 768px) 100vw, 54vw"
                  parallax={22}
                  marks={i === 1}
                  className={
                    imageFirst
                      ? "md:col-span-7"
                      : "md:col-span-5 md:col-start-8 md:row-start-1"
                  }
                />

                <Reveal
                  className={
                    imageFirst
                      ? "md:col-span-4 md:col-start-9"
                      : "md:col-span-6 md:row-start-1"
                  }
                >
                  <p className="font-display text-d4 font-light text-espresso/30">
                    {chapter.step}
                  </p>
                  <h2 className="mt-3 font-display text-d4 font-light">
                    {chapter.title}
                  </h2>
                  <p className="mt-6 max-w-text text-lead text-ink-muted pretty">
                    {chapter.body}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="on-dark surface-leather bg-espresso py-section text-chalk">
        <div className="shell">
          <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-10">
            <div className="md:col-span-5">
              <SectionLabel className="text-chalk-faint">
                El orden del trabajo
              </SectionLabel>
              <h2 className="mt-6 max-w-[13ch] font-display text-d3 font-light">
                Nada sale el mismo día en que se empieza
              </h2>
            </div>

            <Reveal className="md:col-span-5 md:col-start-8 md:self-end">
              <p className="text-lead text-chalk-muted pretty">
                Entre el corte y la costura el cuero descansa. Entre el bruñido
                y el acabado, también. Forzar el orden se nota en el canto tres
                años después.
              </p>
            </Reveal>
          </div>

          <CraftSteps className="mt-20" columns={3} />
        </div>
      </section>

      <section className="surface-paper bg-ivory py-section text-ink">
        <div className="shell">
          <Ridge className="text-espresso/15" />

          <div className="mt-16 grid gap-y-12 md:grid-cols-12 md:gap-x-10">
            <div className="md:col-span-7">
              <h2 className="max-w-[15ch] font-display text-d3 font-light">
                Se puede venir a ver cómo se hace
              </h2>
              <p className="mt-6 max-w-text text-lead text-ink-muted pretty">
                {contact.address
                  ? `El taller está en ${contact.address}. No es una tienda: hay que avisar antes para que haya alguien en el banco.`
                  : "No es una tienda: hay que avisar antes para que haya alguien en el banco."}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                {contact.whatsapp && (
                  <a
                    href={formatWhatsAppUrl(
                      contact.whatsapp,
                      "Hola, quisiera visitar el taller."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="act act-solid"
                  >
                    Concertar una visita
                  </a>
                )}
                <Link href="/catalogo" className="act-quiet">
                  Ver las piezas
                </Link>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-10 md:justify-self-end">
              <Seal className="h-16 w-16 text-espresso/20" />
            </div>
          </div>

          <Marks className="mt-section" />
        </div>
      </section>
    </div>
  );
}
