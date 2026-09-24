import Image from "next/image";
import { patina, photo } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { Lozenge } from "@/components/brand/Ornament";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Patina() {
  return (
    <section className="on-dark surface-leather bg-espresso text-chalk">
      <div className="shell py-section pb-12 md:pb-16">
        <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-6">
            <SectionLabel index="05" className="text-chalk-faint">
              {patina.label}
            </SectionLabel>
            <h2 className="mt-6 max-w-[11ch] font-display text-d2 font-light">
              {patina.title}
            </h2>
          </div>

          <Reveal className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-lead text-chalk-muted pretty">{patina.body}</p>
          </Reveal>
        </div>
      </div>

      <Reveal variant="none">
        <div className="reveal-mask relative aspect-[4/3] w-full overflow-hidden sm:aspect-frieze md:aspect-panorama">
          <Image
            src={photo.patina.src}
            alt={photo.patina.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="shell py-10 md:py-14">
        <ol className="grid gap-8 sm:grid-cols-3 sm:gap-10">
          {patina.years.map((year) => (
            <li key={year.mark} className="flex gap-4">
              <Lozenge className="mt-2 h-[5px] w-[5px] shrink-0 text-chalk-faint" />
              <div>
                <p className="text-label uppercase text-chalk-faint">
                  {year.mark} · {year.label}
                </p>
                <p className="mt-2 text-sm text-chalk-muted">{year.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
