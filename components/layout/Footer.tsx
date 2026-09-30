"use client";

import Link from "next/link";
import { contact } from "@/lib/data";
import { catalogHref, contactHref, href, workshopHref } from "@/lib/i18n";
import { formatWhatsAppUrl } from "@/lib/format";
import { Lozenge, Ridge, Seal, Wordmark } from "@/components/brand/Ornament";
import { useLocale } from "@/components/i18n/LocaleProvider";

type FooterLink = { label: string; value: string; href: string; external?: boolean };

export function Footer() {
  const { locale, dict } = useLocale();

  const items = [
    { href: href(locale), label: dict.nav.home },
    { href: catalogHref(locale), label: dict.nav.pieces },
    { href: workshopHref(locale), label: dict.nav.workshop },
    { href: contactHref(locale), label: dict.nav.commission },
  ];

  const channels: FooterLink[] = [];

  if (contact.email) {
    channels.push({
      label: dict.ui.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    });
  }

  if (contact.whatsapp) {
    channels.push({
      label: dict.ui.whatsapp,
      value: contact.phone ?? contact.whatsapp,
      href: formatWhatsAppUrl(contact.whatsapp, dict.enquire.fallback),
      external: true,
    });
  }

  if (contact.instagram) {
    channels.push({
      label: dict.ui.instagram,
      value: `@${contact.instagram}`,
      href: `https://instagram.com/${contact.instagram.replace("@", "")}`,
      external: true,
    });
  }

  return (
    <footer className="on-dark surface-leather bg-pitch text-chalk">
      <div className="shell py-section">
        <Ridge className="text-chalk/18" />

        <div className="mt-16 grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <p className="max-w-[14ch] font-display text-d3 font-light italic leading-[1.05] text-chalk">
              {dict.ui.footerTag}
            </p>
            {contact.address && (
              <p className="mt-10 text-label uppercase text-chalk-muted">
                {contact.address}
              </p>
            )}
            <p className="mt-3 max-w-narrow text-sm text-chalk-muted">
              {dict.ui.footerVisit}
            </p>
          </div>

          <nav aria-label={dict.nav.footer} className="md:col-span-2 md:col-start-8">
            <p className="label text-chalk-faint">{dict.nav.index}</p>
            <ul className="mt-6">
              {items.map((item) => (
                <li key={item.href} className="seam-b seam-invert">
                  <Link
                    href={item.href}
                    className="block py-3 text-sm text-chalk-muted transition-colors duration-250 hover:text-chalk"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label text-chalk-faint">{dict.ui.workshop}</p>
            <ul className="mt-6">
              {channels.map(({ label, value, href: url, external }) => (
                <li key={label} className="seam-b seam-invert">
                  <a
                    href={url}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span className="text-micro uppercase tracking-[0.14em] text-chalk-faint">
                      {label}
                    </span>
                    <span className="text-sm text-chalk-muted transition-colors duration-250 group-hover:text-chalk">
                      {value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-8 border-t border-chalk/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark className="text-[0.78rem] text-chalk/75" />

          <p className="flex flex-wrap items-center gap-3 text-micro text-chalk-faint">
            <span>© {new Date().getFullYear()} Bao</span>
            <Lozenge className="h-[4px] w-[4px]" />
            <span>{dict.ui.footerLine}</span>
          </p>

          <Seal className="hidden h-9 w-9 text-chalk/22 sm:block" />
        </div>
      </div>
    </footer>
  );
}
