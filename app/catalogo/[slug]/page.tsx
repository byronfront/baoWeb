import { redirect } from "next/navigation";
import { products } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function LegacyProduct({ params }: Props) {
  const { slug } = await params;
  redirect(`/es/catalog/${slug}/`);
}
