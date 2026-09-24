import Link from "next/link";
import { photo } from "@/lib/content";
import { Plate } from "@/components/media/Plate";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WorkshopTeaser() {
  return (
    <section className="surface-paper bg-ivory py-section text-ink">
      <div className="shell grid items-center gap-y-14 md:grid-cols-12 md:gap-x-12">
        <div className="md:col-span-5">
          <SectionLabel index="06" className="text-ink-faint">
            El taller
          </SectionLabel>

          <Reveal>
            <h2 className="mt-6 max-w-[14ch] font-display text-d3 font-light">
              Herramientas más viejas que el taller
            </h2>
            <p className="mt-6 max-w-text text-lead text-ink-muted pretty">
              Casi todas son de segunda mano. La cuchilla redonda llegó sin
              mango y corta mejor que cualquiera que se venda hoy. Se afilan
              cada mañana, antes de tocar el cuero.
            </p>

            <Link href="/taller" className="act act-outline mt-10">
              Ver el taller
            </Link>
          </Reveal>
        </div>

        <Plate
          src={photo.tools.src}
          alt={photo.tools.alt}
          ratio="square"
          sizes="(max-width: 768px) 100vw, 48vw"
          parallax={18}
          marks
          className="md:col-span-6 md:col-start-7"
          caption="Cada herramienta tiene su sitio. Siempre el mismo."
        />
      </div>
    </section>
  );
}
