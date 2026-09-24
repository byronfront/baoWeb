import { photo } from "@/lib/content";
import { Plate } from "@/components/media/Plate";
import { CraftSteps } from "@/components/craft/CraftSteps";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * El proceso — el lado de la forma.
 * Tres láminas a distinta altura; debajo, los seis pasos en retícula.
 */
export function Process() {
  return (
    <section className="surface-paper bg-bone py-section text-ink">
      <div className="shell">
        <header className="grid gap-y-8 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-6">
            <SectionLabel index="04" className="text-ink-faint">
              Cómo se hace
            </SectionLabel>
            <h2 className="mt-6 max-w-[12ch] font-display text-d3 font-light">
              Seis pasos, siempre el mismo orden
            </h2>
          </div>

          <Reveal className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-lead text-ink-muted pretty">
              Entre el primero y el último pasan días, no horas. El cuero
              descansa entre paso y paso: si se fuerza, se marca.
            </p>
          </Reveal>
        </header>
      </div>

      <div className="shell-wide mt-20 md:mt-28">
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-12 md:gap-x-8">
          <Plate
            src={photo.cutting.src}
            alt={photo.cutting.alt}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 32vw"
            parallax={22}
            className="md:col-span-4"
            caption="Corte — un solo pase por borde."
          />
          <Plate
            src={photo.stitching.src}
            alt={photo.stitching.alt}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 32vw"
            parallax={22}
            marks
            className="md:col-span-4 md:mt-20"
            caption="Costura — dos agujas, un agujero cada vez."
          />
          <Plate
            src={photo.burnishing.src}
            alt={photo.burnishing.alt}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 24vw"
            parallax={22}
            className="md:col-span-3 md:col-start-10 md:mt-40"
            caption="Bruñido — madera y fricción, sin barniz."
          />
        </div>
      </div>

      <div className="shell">
        <CraftSteps className="mt-24 md:mt-32" columns={3} />
      </div>
    </section>
  );
}
