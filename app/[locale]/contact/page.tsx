import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contact } from "@/lib/data";
import { photo } from "@/lib/content";
import { getDictionary, isLocale } from "@/lib/i18n";
import { formatWhatsAppUrl } from "@/lib/format";
import { Plate } from "@/components/media/Plate";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Ridge, Lozenge } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";
import { EnquireButton } from "@/components/enquire/EnquireHost";
import { CommissionPieces } from "@/components/contact/CommissionPieces";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.contact.title, description: dict.contact.description };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="surface-paper bg-bone text-ink">
      <div className="shell grid gap-x-12 gap-y-10 pb-section pt-8 md:grid-cols-12 md:gap-y-16 md:pt-10">
        <div className="order-1 md:col-span-7 md:self-end md:pb-4">
          <SectionLabel className="text-ink-faint">{dict.contact.title}</SectionLabel>
          <h1 className="mt-6 max-w-[12ch] font-display text-d2 font-light md:text-d1">
            {dict.contact.heading[0]}
            <br />
            <span className="italic text-burnt">{dict.contact.heading[1]}</span>
          </h1>
          <p className="mt-8 max-w-text text-lead text-ink-muted pretty">
            {dict.contact.lead}
          </p>
        </div>

        <Plate
          src={photo.stitching.src}
          alt={dict.photoAlt.stitching}
          ratio="object"
          sizes="(max-width: 768px) 100vw, 34vw"
          priority
          marks
          className="order-3 md:order-2 md:col-span-4 md:col-start-9"
        />

        <div id="encargo" className="order-2 scroll-mt-28 md:order-3 md:col-span-6">
          <p className="text-label uppercase text-ink-faint">{dict.enquire.cta}</p>
          <h2 className="mt-4 font-display text-d4 font-light">
            {dict.contact.commissionTitle}
          </h2>
          <p className="mt-5 max-w-text text-sm text-ink-muted pretty">
            {dict.contact.commissionLead}
          </p>
          <p className="mt-4 max-w-text text-sm text-ink-faint pretty">
            {dict.contact.piecesLead}
          </p>
          <CommissionPieces />
          <EnquireButton className="act act-solid mt-8 w-full sm:w-auto" />
        </div>

        <div
          id="escribir"
          className="order-2 scroll-mt-28 md:order-3 md:col-span-5 md:col-start-8"
        >
          <p className="text-label uppercase text-ink-faint">{dict.enquire.write}</p>
          <h2 className="mt-4 font-display text-d4 font-light">
            {dict.contact.writeTitle}
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {contact.whatsapp && (
              <a
                href={formatWhatsAppUrl(contact.whatsapp, dict.enquire.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="act act-solid w-full sm:w-auto"
              >
                {dict.ui.whatsapp}
              </a>
            )}
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="act act-outline w-full sm:w-auto">
                {dict.ui.email}
              </a>
            )}
          </div>
          <ul className="mt-8 seam-t" aria-label={dict.ui.writeWays}>
            {contact.whatsapp && (
              <Reveal as="li" className="seam-b">
                <a
                  href={formatWhatsAppUrl(contact.whatsapp, dict.enquire.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-y-1 py-6"
                >
                  <span className="text-micro uppercase text-ink-faint">
                    {dict.ui.whatsapp}
                  </span>
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
                  <span className="text-micro uppercase text-ink-faint">
                    {dict.ui.email}
                  </span>
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
                  <span className="text-micro uppercase text-ink-faint">
                    {dict.ui.instagram}
                  </span>
                  <span className="font-display text-d5 font-light">
                    @{contact.instagram}
                  </span>
                </a>
              </Reveal>
            )}
            {contact.address && (
              <Reveal as="li" delay={210} className="seam-b">
                <div className="grid gap-y-1 py-6">
                  <span className="text-micro uppercase text-ink-faint">
                    {dict.ui.workshop}
                  </span>
                  <span className="font-display text-d5 font-light">
                    {contact.address}
                  </span>
                  <span className="text-micro text-ink-faint">
                    {dict.ui.appointmentOnly}
                  </span>
                </div>
              </Reveal>
            )}
          </ul>
        </div>
      </div>

      <section className="shell pb-section">
        <Ridge className="text-espresso/15" />
        <p className="mt-12 max-w-[28ch] font-display text-d4 font-light italic">
          {dict.contact.closing}
        </p>
      </section>
    </div>
  );
}
