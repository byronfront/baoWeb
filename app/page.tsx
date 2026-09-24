import { Hero } from "@/components/home/Hero";
import { Banco } from "@/components/home/Banco";
import { Manifesto } from "@/components/home/Manifesto";
import { Materials } from "@/components/home/Materials";
import { Process } from "@/components/home/Process";
import { Patina } from "@/components/home/Patina";
import { WorkshopTeaser } from "@/components/home/WorkshopTeaser";
import { Enquiry } from "@/components/home/Enquiry";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Banco />
      <Manifesto />
      <Materials />
      <Process />
      <Patina />
      <WorkshopTeaser />
      <Enquiry />
    </>
  );
}
