import Link from "next/link";
import { contactHref, type Dictionary, type Locale } from "@/lib/i18n";
import { Ridge } from "@/components/brand/Ornament";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EnquireButton } from "@/components/enquire/EnquireHost";

export function Enquiry({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const enquiry = dict.enquiry;

  return (
    <section className="on-dark surface-leather bg-tobacco py-section text-chalk">
      <div className="shell">
        <Ridge className="text-chalk/16" />

        <div className="mt-16 grid gap-y-12 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-7">
            <SectionLabel index="07" className="text-chalk-muted">
              {enquiry.label}
            </SectionLabel>

            <Reveal>
              <h2 className="mt-6 max-w-[12ch] font-display text-d2 font-light">
                {enquiry.title}
              </h2>
              <p className="mt-8 max-w-text text-lead text-chalk-muted pretty">
                {enquiry.body}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="md:col-span-4 md:col-start-9 md:self-end">
            <div className="flex flex-col items-start gap-6">
              <EnquireButton className="act act-solid w-full sm:w-auto" />
              <Link href={contactHref(locale, "escribir")} className="act-quiet">
                {dict.enquire.write}
              </Link>
            </div>

            <p className="mt-10 border-t border-chalk/12 pt-5 text-micro text-chalk-muted">
              {enquiry.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
