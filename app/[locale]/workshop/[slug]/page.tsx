import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkshopNote, workshopNotes } from "@/lib/content";
import {
  getDictionary,
  isLocale,
  locales,
  workshopHref,
} from "@/lib/i18n";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EnquireButton } from "@/components/enquire/EnquireHost";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    workshopNotes.map((note) => ({ locale, slug: note.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const meta = getWorkshopNote(slug);
  const note = meta ? dict.notes[meta.slug] : undefined;
  if (!note) return { title: dict.ui.noteNotFound };

  return {
    title: note.title,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      images: meta ? [{ url: meta.photo.src, alt: note.title }] : undefined,
    },
  };
}

export default async function WorkshopNotePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const meta = getWorkshopNote(slug);
  if (!meta) notFound();
  const note = dict.notes[meta.slug];

  const others = workshopNotes.filter((item) => item.slug !== meta.slug);

  return (
    <article className="surface-paper bg-bone text-ink">
      <header className="shell pb-8 pt-8 md:pb-12 md:pt-12">
        <Link href={workshopHref(locale)} className="act-quiet">
          {dict.ui.log}
        </Link>
        <p className="mt-8 text-micro uppercase tracking-[0.12em] text-ink-faint">
          {note.dateLabel}
        </p>
        <h1 className="mt-4 max-w-[16ch] font-display text-d2 font-light">
          {note.title}
        </h1>
      </header>

      <div className="relative aspect-[4/5] w-full overflow-hidden bg-tobacco sm:aspect-[16/9] md:min-h-[52vh]">
        <Image
          src={meta.photo.src}
          alt={note.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="shell grid gap-x-12 gap-y-12 py-section md:grid-cols-12">
        <div className="max-w-text md:col-span-7">
          {note.body.split("\n\n").map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lead text-ink-muted pretty first:mt-0">
              {paragraph}
            </p>
          ))}

          <div className="mt-12 flex flex-col items-start gap-5">
            <EnquireButton />
            <Link href={workshopHref(locale)} className="act-quiet">
              {dict.ui.moreNotes}
            </Link>
          </div>
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <SectionLabel className="text-ink-faint">{dict.ui.also}</SectionLabel>
          <ul className="mt-6 seam-t">
            {others.map((item) => {
              const other = dict.notes[item.slug];
              return (
                <li key={item.slug} className="seam-b">
                  <Link href={workshopHref(locale, item.slug)} className="block py-4">
                    <p className="text-micro uppercase text-ink-faint">{other.dateLabel}</p>
                    <p className="mt-1 font-display text-d5 font-light">{other.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </article>
  );
}
