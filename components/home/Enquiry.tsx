import Link from "next/link";
import { contact } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/format";
import { Ridge } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Enquiry() {
  return (
    <section className="on-dark surface-leather bg-tobacco py-section text-chalk">
      <div className="shell">
        <Ridge className="text-chalk/16" />

        <div className="mt-16 grid gap-y-12 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-7">
            <SectionLabel index="07" className="text-chalk-muted">
              Encargo
            </SectionLabel>

            <Reveal>
              <h2 className="mt-6 max-w-[12ch] font-display text-d2 font-light">
                Se corta después de hablar
              </h2>
              <p className="mt-8 max-w-text text-lead text-chalk-muted pretty">
                El largo, las medidas, el color del hilo o el herraje se pueden
                cambiar. Contá para qué la vas a usar y se ajusta el patrón
                antes de tocar la piel.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="md:col-span-4 md:col-start-9 md:self-end">
            <div className="flex flex-col items-start gap-6">
              {contact.whatsapp && (
                <a
                  href={formatWhatsAppUrl(
                    contact.whatsapp,
                    "Hola, quisiera encargar una pieza a medida."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="act act-solid"
                >
                  Escribir por WhatsApp
                </a>
              )}

              <Link href="/contacto" className="act-quiet">
                Correo e Instagram
              </Link>
            </div>

            <p className="mt-10 border-t border-chalk/12 pt-5 text-micro text-chalk-muted">
              Entre 5 y 15 días de banco según la pieza. Se avisa la fecha
              antes de empezar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
