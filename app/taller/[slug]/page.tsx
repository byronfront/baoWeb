import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkshopNote, workshopNotes } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EnquireButton } from "@/components/enquire/EnquireHost";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workshopNotes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getWorkshopNote(slug);
  if (!note) return { title: "Nota no encontrada" };

  return {
    title: note.title,
    description: note.excerpt,
    openGraph: {
      title: note.title,
      description: note.excerpt,
      images: [{ url: note.photo.src, alt: note.photo.alt }],
    },
  };
}

export default async function WorkshopNotePage({ params }: Props) {
  const { slug } = await params;
  const note = getWorkshopNote(slug);
  if (!note) notFound();

  const others = workshopNotes.filter((item) => item.slug !== note.slug);

  return (
    <article className="surface-paper bg-bone text-ink">
      <header className="shell pb-8 pt-8 md:pb-12 md:pt-12">
        <Link href="/taller" className="act-quiet">
          Bitácora
        </Link>
        <p className="mt-8 text-micro uppercase tracking-[0.12em] text-ink-faint">
          {note.dateLabel}
        </p>
        <h1 className="mt-4 max-w-[16ch] font-display text-d2 font-light">
          {note.title}
        </h1>
      </header>

      <div className="relative aspect-[4/5] w-full bg-tobacco sm:aspect-[16/9] md:min-h-[52vh]">
        <Image
          src={note.photo.src}
          alt={note.photo.alt}
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
            <Link href="/taller" className="act-quiet">
              Más notas
            </Link>
          </div>
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <SectionLabel className="text-ink-faint">También</SectionLabel>
          <ul className="mt-6 seam-t">
            {others.map((item) => (
              <li key={item.slug} className="seam-b">
                <Link href={`/taller/${item.slug}`} className="block py-4">
                  <p className="text-micro uppercase text-ink-faint">{item.dateLabel}</p>
                  <p className="mt-1 font-display text-d5 font-light">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
