import { redirect } from "next/navigation";
import { workshopNotes } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workshopNotes.map((note) => ({ slug: note.slug }));
}

export default async function LegacyNote({ params }: Props) {
  const { slug } = await params;
  redirect(`/es/workshop/${slug}/`);
}
