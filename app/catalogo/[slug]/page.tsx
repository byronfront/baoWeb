import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function LegacyProduct({ params }: Props) {
  const { slug } = await params;
  redirect(`/es/catalog/${slug}`);
}
