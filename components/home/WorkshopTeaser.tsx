import Link from "next/link";
import { photo } from "@/lib/content";
import { workshopHref, type Dictionary, type Locale } from "@/lib/i18n";
import { Plate } from "@/components/media/Plate";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WorkshopTeaser({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = dict.workshopTeaser;

  return (
    <section className="surface-paper bg-ivory py-section text-ink">
      <div className="shell grid items-center gap-y-14 md:grid-cols-12 md:gap-x-12">
        <div className="md:col-span-5">
          <SectionLabel index="06" className="text-ink-faint">
            {copy.label}
          </SectionLabel>

          <Reveal>
            <h2 className="mt-6 max-w-[14ch] font-display text-d3 font-light">
              {copy.title}
            </h2>
            <p className="mt-6 max-w-text text-lead text-ink-muted pretty">
              {copy.body}
            </p>

            <Link href={workshopHref(locale)} className="act act-outline mt-10">
              {dict.ui.viewWorkshop}
            </Link>
          </Reveal>
        </div>

        <Plate
          src={photo.tools.src}
          alt={dict.photoAlt.tools}
          ratio="square"
          sizes="(max-width: 768px) 100vw, 48vw"
          parallax={18}
          marks
          className="md:col-span-6 md:col-start-7"
          caption={copy.caption}
        />
      </div>
    </section>
  );
}
