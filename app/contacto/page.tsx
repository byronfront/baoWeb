import type { Metadata } from "next";
import { contact } from "@/lib/data";
import { photo } from "@/lib/content";
import { formatWhatsAppUrl } from "@/lib/format";
import { Plate } from "@/components/media/Plate";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Ridge, Lozenge } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Encargo",
  description:
    "Correo, WhatsApp e Instagram del taller. Encargos a medida y visitas con cita previa en Medellín, Colombia.",
};

type Channel = {
  label: string;
  value: string;
  hint: string;
  href?: string;
  external?: boolean;
};

export default function ContactoPage() {
  const channels: Channel[] = [];

  if (contact.whatsapp) {
    channels.push({
      label: "WhatsApp",
      value: contact.phone ?? contact.whatsapp,
      hint: "Lo más rápido",
      href: formatWhatsAppUrl(contact.whatsapp),
      external: true,
    });
  }

  if (contact.email) {
    channels.push({
      label: "Correo",
      value: contact.email,
      hint: "Respuesta en uno o dos días",
      href: `mailto:${contact.email}`,
    });
  }

  if (contact.instagram) {
    channels.push({
      label: "Instagram",
      value: `@${contact.instagram}`,
      hint: "Piezas recién salidas del banco",
      href: `https://instagram.com/${contact.instagram.replace("@", "")}`,
      external: true,
    });
  }

  if (contact.address) {
    channels.push({
      label: "Taller",
      value: contact.address,
      hint: "Solo con cita previa",
    });
  }

  return (
    <div className="surface-paper bg-bone text-ink">
      <section className="shell pb-section pt-10">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-7 md:self-end md:pb-4">
            <SectionLabel className="text-ink-faint">Encargo</SectionLabel>
            <h1 className="mt-8 max-w-[11ch] font-display text-d1 font-light">
              Escribí
              <br />
              antes de
              <br />
              <span className="italic text-burnt">cortar</span>
            </h1>
            <p className="mt-10 max-w-text text-lead text-ink-muted pretty">
              Casi todo se hace por encargo, así que la conversación empieza
              antes que la pieza. Contá qué necesitás y para qué lo vas a usar.
            </p>
          </div>

          <Plate
            src={photo.stitching.src}
            alt={photo.stitching.alt}
            ratio="object"
            sizes="(max-width: 768px) 100vw, 34vw"
            priority
            marks
            className="md:col-span-4 md:col-start-9"
          />
        </div>
      </section>

      <section className="shell pb-section">
        <ul className="seam-t" aria-label="Formas de contacto">
          {channels.map(({ label, value, hint, href, external }, i) => {
            const body = (
              <>
                <span className="text-micro uppercase tracking-[0.14em] text-ink-faint">
                  {label}
                </span>
                <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <span className="font-display text-d4 font-light leading-tight transition-colors duration-250 ease-craft group-hover:text-burnt">
                    {value}
                  </span>
                  <span className="flex items-center gap-2 text-micro text-ink-faint">
                    <Lozenge className="h-[4px] w-[4px] opacity-0 transition-opacity duration-250 group-hover:opacity-70" />
                    {hint}
                  </span>
                </span>
              </>
            );

            const rowClass =
              "group grid items-baseline gap-x-8 gap-y-2 py-8 sm:grid-cols-[minmax(7rem,0.26fr)_1fr]";

            return (
              <Reveal as="li" key={label} delay={i * 70} className="seam-b">
                {href ? (
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={rowClass}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={rowClass}>{body}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="shell pb-section">
        <Ridge className="text-espresso/15" />

        <div className="mt-14 grid gap-y-8 md:grid-cols-12 md:gap-x-10">
          <p className="font-display text-d4 font-light italic leading-tight md:col-span-5">
            Los encargos se cortan después de hablar, no antes.
          </p>
          <p className="max-w-text text-sm text-ink-muted pretty md:col-span-5 md:col-start-8 md:self-end">
            Se confirma el cuero, el color del hilo, las medidas y la fecha de
            entrega por escrito. Solo entonces se marca el patrón sobre la
            piel.
          </p>
        </div>
      </section>
    </div>
  );
}
