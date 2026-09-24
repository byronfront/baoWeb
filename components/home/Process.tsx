import { photo } from "@/lib/content";
import { Plate } from "@/components/media/Plate";
import { CraftSteps } from "@/components/craft/CraftSteps";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Dictionary } from "@/lib/i18n";

export function Process({ dict }: { dict: Dictionary }) {
  const process = dict.process;

  return (
    <section className="surface-paper bg-bone py-section text-ink">
      <div className="shell">
        <header className="grid gap-y-8 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-6">
            <SectionLabel index="04" className="text-ink-faint">
              {process.label}
            </SectionLabel>
            <h2 className="mt-6 max-w-[12ch] font-display text-d3 font-light">
              {process.title}
            </h2>
          </div>

          <Reveal className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-lead text-ink-muted pretty">{process.lead}</p>
          </Reveal>
        </header>
      </div>

      <div className="shell-wide mt-20 md:mt-28">
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-12 md:gap-x-8">
          <Plate
            src={photo.cutting.src}
            alt={dict.photoAlt.cutting}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 32vw"
            parallax={22}
            className="md:col-span-4"
            caption={process.captions[0]}
          />
          <Plate
            src={photo.stitching.src}
            alt={dict.photoAlt.stitching}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 32vw"
            parallax={22}
            marks
            className="md:col-span-4 md:mt-20"
            caption={process.captions[1]}
          />
          <Plate
            src={photo.burnishing.src}
            alt={dict.photoAlt.burnishing}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 24vw"
            parallax={22}
            className="md:col-span-3 md:col-start-10 md:mt-40"
            caption={process.captions[2]}
          />
        </div>
      </div>

      <div className="shell">
        <CraftSteps steps={dict.craftSteps} className="mt-24 md:mt-32" columns={3} />
      </div>
    </section>
  );
}
