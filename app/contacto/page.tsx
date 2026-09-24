import type { Metadata } from "next";
import { contact } from "@/lib/data";
import { enquire, photo } from "@/lib/content";
import { formatWhatsAppUrl } from "@/lib/format";
import { Plate } from "@/components/media/Plate";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Ridge, Lozenge } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";
import { EnquireButton } from "@/components/enquire/EnquireHost";

export const metadata: Metadata = {
  title: "Encargo",
  description:
    "Encargos a medida y formas de escribir al taller en Medellín, Colombia.",
};

export default function ContactoPage() {
  return (
    <div className="surface-paper bg-bone text-ink">
      <div className="shell grid gap-x-12 gap-y-10 pb-section pt-8 md:grid-cols-12 md:gap-y-16 md:pt-10">
        <div className="order-1 md:col-span-7 md:self-end md:pb-4">
          <SectionLabel className="text-ink-faint">Contacto</SectionLabel>
          <h1 className="mt-6 max-w-[12ch] font-display text-d2 font-light md:text-d1">
            Encargo
            <br />
            y <span className="italic text-burnt">escribir</span>
          </h1>
          <p className="mt-8 max-w-text text-lead text-ink-muted pretty">
            Casi todo se hace por encargo. La conversación empieza antes que
            la pieza: qué necesitás y para qué lo vas a usar.
          </p>
        </div>

        <Plate
          src={photo.stitching.src}
          alt={photo.stitching.alt}
          ratio="object"
          sizes="(max-width: 768px) 100vw, 34vw"
          priority
          marks
          className="order-3 md:order-2 md:col-span-4 md:col-start-9"
        />

        <div
          id="encargo"
          className="order-2 scroll-mt-28 md:order-3 md:col-span-6"
        >
          <p className="text-label uppercase text-ink-faint">{enquire.cta}</p>
          <h2 className="mt-4 font-display text-d4 font-light">
            Una pieza a medida
          </h2>
          <p className="mt-5 max-w-text text-sm text-ink-muted pretty">
            Se confirma el cuero, el color del hilo, las medidas y la fecha de
            entrega por escrito. Solo entonces se marca el patrón sobre la piel.
          </p>
          <EnquireButton className="act act-solid mt-8 w-full sm:w-auto" />
        </div>

        <div
          id="escribir"
          className="order-2 scroll-mt-28 md:order-3 md:col-span-5 md:col-start-8"
        >
          <p className="text-label uppercase text-ink-faint">{enquire.write}</p>
          <h2 className="mt-4 font-display text-d4 font-light">
            Correo, WhatsApp, visita
          </h2>
          <ul className="mt-6 seam-t" aria-label="Formas de escribir">
            {contact.whatsapp && (
              <Reveal as="li" className="seam-b">
                <a
                  href={formatWhatsAppUrl(contact.whatsapp, enquire.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-y-1 py-6"
                >
                  <span className="text-micro uppercase text-ink-faint">WhatsApp</span>
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-d5 font-light">
                      {contact.phone ?? contact.whatsapp}
                    </span>
                    <Lozenge className="h-[4px] w-[4px] opacity-40" />
                  </span>
                </a>
              </Reveal>
            )}
            {contact.email && (
              <Reveal as="li" delay={70} className="seam-b">
                <a href={`mailto:${contact.email}`} className="grid gap-y-1 py-6">
                  <span className="text-micro uppercase text-ink-faint">Correo</span>
                  <span className="font-display text-d5 font-light">{contact.email}</span>
                </a>
              </Reveal>
            )}
            {contact.instagram && (
              <Reveal as="li" delay={140} className="seam-b">
                <a
                  href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-y-1 py-6"
                >
                  <span className="text-micro uppercase text-ink-faint">Instagram</span>
                  <span className="font-display text-d5 font-light">
                    @{contact.instagram}
                  </span>
                </a>
              </Reveal>
            )}
            {contact.address && (
              <Reveal as="li" delay={210} className="seam-b">
                <div className="grid gap-y-1 py-6">
                  <span className="text-micro uppercase text-ink-faint">Taller</span>
                  <span className="font-display text-d5 font-light">
                    {contact.address}
                  </span>
                  <span className="text-micro text-ink-faint">Solo con cita previa</span>
                </div>
              </Reveal>
            )}
          </ul>
        </div>
      </div>

      <section className="shell pb-section">
        <Ridge className="text-espresso/15" />
        <p className="mt-12 max-w-[28ch] font-display text-d4 font-light italic">
          Los encargos se cortan después de hablar, no antes.
        </p>
      </section>
    </div>
  );
}
