import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { Hero } from "@/components/home/Hero";
import { Banco } from "@/components/home/Banco";
import { Manifesto } from "@/components/home/Manifesto";
import { Materials } from "@/components/home/Materials";
import { Process } from "@/components/home/Process";
import { Patina } from "@/components/home/Patina";
import { WorkshopTeaser } from "@/components/home/WorkshopTeaser";
import { Enquiry } from "@/components/home/Enquiry";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Banco locale={locale} dict={dict} />
      <Manifesto dict={dict} />
      <Materials dict={dict} />
      <Process dict={dict} />
      <Patina dict={dict} />
      <WorkshopTeaser locale={locale} dict={dict} />
      <Enquiry locale={locale} dict={dict} />
    </>
  );
}
