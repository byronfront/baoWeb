import Image from "next/image";
import Link from "next/link";
import { hero, photo } from "@/lib/content";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Ridge } from "@/components/brand/Ornament";

/**
 * Apertura en folio.
 *
 * Escritorio: el texto vive en un panel de cuero; la fotografía ocupa
 * el resto del viewport, sin degradado encima.
 * Móvil: primero el titular a pantalla completa; la foto es una lámina
 * propia, debajo. No es el escritorio apilado.
 */
export function Hero() {
  return (
    <section className="on-dark bg-espresso text-chalk">
      <div className="grid md:min-h-[100svh] md:grid-cols-12">
        <div className="surface-leather relative flex min-h-[78svh] flex-col justify-end px-gutter pb-12 pt-24 md:col-span-5 md:min-h-[100svh] md:justify-between md:pb-16 md:pt-36 lg:col-span-5">
          <p className="hidden text-label uppercase text-chalk-muted md:block">
            {hero.kicker}
          </p>

          <Reveal variant="none" className="md:mt-auto">
            <p className="text-label uppercase text-chalk-muted md:hidden">
              {hero.kicker}
            </p>

            <h1 className="mt-6 font-display text-d1 font-light md:mt-0">
              {hero.lines.map((line, i) => (
                <span
                  key={line}
                  className={`reveal block ${
                    i === hero.lines.length - 1 ? "italic text-sand" : ""
                  }`}
                  style={
                    {
                      "--reveal-delay": `${i * 140}ms`,
                      paddingLeft: i === 0 ? 0 : `${i * 0.12}em`,
                    } as React.CSSProperties
                  }
                >
                  {line}
                </span>
              ))}
            </h1>

            <div
              className="reveal mt-12 max-w-[34ch]"
              style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
            >
              <p className="text-sm leading-relaxed text-chalk-muted pretty">
                {hero.body}
              </p>
            </div>

            <div
              className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
              style={{ "--reveal-delay": "560ms" } as React.CSSProperties}
            >
              <Link href="/catalogo" className="act act-solid w-full sm:w-auto">
                Ver las piezas
              </Link>
              <Link href="/taller" className="act-quiet">
                Entrar al taller
              </Link>
            </div>
          </Reveal>

          <div className="mt-16 flex items-end justify-between gap-6 md:mt-20">
            <p className="text-label tabular-nums text-chalk-faint">
              {hero.coord}
            </p>
            <p className="text-label uppercase text-chalk-faint">{hero.place}</p>
          </div>
        </div>

        <div className="relative aspect-[4/5] md:col-span-7 md:aspect-auto md:min-h-[100svh]">
          <Parallax strength={32}>
            <Image
              src={photo.heroWorkshop.src}
              alt={photo.heroWorkshop.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-[42%_78%]"
            />
          </Parallax>

          <p className="spine pointer-events-none absolute bottom-10 right-6 hidden text-chalk/45 md:block">
            {hero.place} · Taller
          </p>
        </div>
      </div>

      <div className="px-gutter">
        <Ridge className="text-chalk/15" />
      </div>
    </section>
  );
}
