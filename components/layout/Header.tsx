"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { catalogHref, contactHref, href, workshopHref } from "@/lib/i18n";
import { Lozenge, Ridge, Wordmark } from "@/components/brand/Ornament";
import { LanguageSwitch } from "@/components/i18n/LanguageSwitch";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function Header() {
  const { locale, dict } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const home = href(locale);
  const isHome = pathname === home || pathname === `${home}/`;
  const floating = isHome && !scrolled && !menuOpen;
  const tone = floating || menuOpen ? "chalk" : "ink";

  const items = [
    { href: catalogHref(locale), label: dict.nav.pieces },
    { href: workshopHref(locale), label: dict.nav.workshop },
    { href: contactHref(locale), label: dict.nav.commission },
  ];

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
        <div className="shell flex h-[4.25rem] items-center justify-between gap-4 md:h-[5.25rem]">
          <Link
            href={home}
            aria-label={dict.nav.homeAria}
            className="transition-opacity duration-250 hover:opacity-65"
          >
            <Wordmark className="text-[0.72rem] md:text-[0.8rem]" />
          </Link>

          <nav
            aria-label={dict.nav.primary}
            className="hidden items-center gap-11 md:flex"
          >
            {items.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative py-1 text-label uppercase"
                >
                  <span className={active ? "" : "opacity-65 group-hover:opacity-100"}>
                    {item.label}
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
              href={contactHref(locale, "escribir")}
              className="act-quiet ml-1 opacity-70 hover:opacity-100"
            >
              <Lozenge className="h-[5px] w-[5px]" />
              {dict.nav.write}
            </Link>

            <LanguageSwitch tone={tone} className="ml-2" />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitch tone={tone} />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              className="-mr-2 px-2 py-2 text-label uppercase"
            >
              {menuOpen ? dict.nav.close : dict.nav.menu}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} pathname={pathname} />

      {!isHome && <div aria-hidden className="h-[4.25rem] md:h-[5.25rem]" />}
    </>
  );
}

function MobileMenu({ open, pathname }: { open: boolean; pathname: string }) {
  const { locale, dict } = useLocale();

  const items = [
    { href: catalogHref(locale), label: dict.nav.pieces },
    { href: workshopHref(locale), label: dict.nav.workshop },
    { href: contactHref(locale), label: dict.nav.commission },
  ];

  return (
    <div
      id="menu-movil"
      role="dialog"
      aria-modal="true"
      aria-label={dict.nav.menu}
      hidden={!open}
      className={[
        "on-dark surface-leather fixed inset-0 z-40 flex-col bg-espresso text-chalk md:hidden",
        open ? "flex" : "hidden",
      ].join(" ")}
    >
      <div className="h-[4.25rem] shrink-0" />

      <nav
        aria-label={dict.nav.primary}
        className="shell flex flex-1 flex-col justify-center"
      >
        <ul>
          {items.map((item, i) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href} className="seam-b seam-invert">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="flex items-baseline gap-6 py-6"
                >
                  <span className="text-label tabular-nums text-chalk-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-d3 font-light">{item.label}</span>
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
          <p className="max-w-narrow whitespace-pre-line text-micro text-chalk-muted">
            {dict.ui.mobileNote}
          </p>
          <Link href={contactHref(locale, "escribir")} className="act-quiet shrink-0">
            {dict.nav.write}
          </Link>
        </div>
      </div>
    </div>
  );
}
