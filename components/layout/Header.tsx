"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, enquire } from "@/lib/content";
import { Lozenge, Ridge, Wordmark } from "@/components/brand/Ornament";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const floating = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-colors duration-420 ease-craft",
          floating
            ? "on-dark border-b border-chalk/10 text-chalk"
            : "border-b border-espresso/10 bg-bone text-ink",
          menuOpen ? "on-dark border-transparent bg-transparent text-chalk" : "",
        ].join(" ")}
      >
        <div className="shell flex h-[4.25rem] items-center justify-between md:h-[5.25rem]">
          <Link
            href="/"
            aria-label="Bao — inicio"
            className="transition-opacity duration-250 hover:opacity-65"
          >
            <Wordmark className="text-[0.72rem] md:text-[0.8rem]" />
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-11 md:flex"
          >
            {nav.map(({ href, label }) => {
              const active =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className="group relative py-1 text-label uppercase"
                >
                  <span className={active ? "" : "opacity-65 group-hover:opacity-100"}>
                    {label}
                  </span>
                  <span
                    aria-hidden
                    className={[
                      "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current transition-transform duration-420 ease-craft",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </Link>
              );
            })}

            <Link
              href="/contacto#escribir"
              className="act-quiet ml-1 opacity-70 hover:opacity-100"
            >
              <Lozenge className="h-[5px] w-[5px]" />
              {enquire.write}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            className="-mr-2 px-2 py-2 text-label uppercase md:hidden"
          >
            {menuOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} pathname={pathname} />

      {!isHome && <div aria-hidden className="h-[4.25rem] md:h-[5.25rem]" />}
    </>
  );
}

function MobileMenu({ open, pathname }: { open: boolean; pathname: string }) {
  return (
    <div
      id="menu-movil"
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
      hidden={!open}
      className={[
        "on-dark surface-leather fixed inset-0 z-40 flex-col bg-espresso text-chalk md:hidden",
        open ? "flex" : "hidden",
      ].join(" ")}
    >
      <div className="h-[4.25rem] shrink-0" />

      <nav
        aria-label="Navegación principal"
        className="shell flex flex-1 flex-col justify-center"
      >
        <ul>
          {nav.map(({ href, label }, i) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <li key={href} className="seam-b seam-invert">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className="flex items-baseline gap-6 py-6"
                >
                  <span className="text-label tabular-nums text-chalk-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-d3 font-light">{label}</span>
                  {active && (
                    <Lozenge className="h-2 w-2 self-center text-sand" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="shell shrink-0 pb-10">
        <Ridge className="mb-7 text-chalk/20" />
        <div className="flex items-end justify-between gap-6">
          <p className="max-w-narrow text-micro text-chalk-muted">
            Taller en Medellín.
            <br />
            Se hace por encargo, en lotes pequeños.
          </p>
          <Link href="/contacto#escribir" className="act-quiet shrink-0">
            {enquire.write}
          </Link>
        </div>
      </div>
    </div>
  );
}
