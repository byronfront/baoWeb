import { manifesto } from "@/lib/content";
import { Ridge, Seal } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * El credo. Tres gestos, en el orden en que ocurren.
 * Después del banco, baja el pulso: mucho aire, poco objeto.
 */
export function Manifesto() {
  return (
    <section className="surface-paper bg-ivory py-section text-ink">
      <div className="shell">
        <Ridge className="text-espresso/15" />

        <div className="mt-16 grid gap-y-14 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-3">
            <SectionLabel index="02" className="text-ink-faint">
              {manifesto.label}
            </SectionLabel>
            <Seal className="mt-12 hidden h-14 w-14 text-espresso/20 md:block" />
          </div>

          <div className="md:col-span-9">
            <Reveal>
              <h2 className="font-display text-d3 font-light">
                {manifesto.lines.map((line, i) => (
                  <span
                    key={line}
                    className={`block ${i === 2 ? "italic text-burnt" : ""}`}
                    style={{ paddingLeft: `${i * 6}%` }}
                  >
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>

            <Reveal delay={140} className="mt-14 max-w-text md:ml-[18%]">
              <p className="text-lead text-ink-muted pretty">{manifesto.body}</p>
              <p className="mt-8 text-label uppercase text-ink-faint">
                {manifesto.signature}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
