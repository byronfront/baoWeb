import Link from "next/link";
import { contact } from "@/lib/data";
import { nav } from "@/lib/content";
import { formatWhatsAppUrl } from "@/lib/format";
import { Lozenge, Ridge, Seal, Wordmark } from "@/components/brand/Ornament";

type FooterLink = { label: string; value: string; href: string; external?: boolean };

export function Footer() {
  const channels: FooterLink[] = [];

  if (contact.email) {
    channels.push({
      label: "Correo",
      value: contact.email,
      href: `mailto:${contact.email}`,
    });
  }

  if (contact.whatsapp) {
    channels.push({
      label: "WhatsApp",
      value: contact.phone ?? contact.whatsapp,
      href: formatWhatsAppUrl(contact.whatsapp),
      external: true,
    });
  }

  if (contact.instagram) {
    channels.push({
      label: "Instagram",
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
              Objetos que envejecen bien.
            </p>
            {contact.address && (
              <p className="mt-10 text-label uppercase text-chalk-muted">
                {contact.address}
              </p>
            )}
            <p className="mt-3 max-w-narrow text-sm text-chalk-muted">
              Se trabaja por encargo. Escribí antes de venir.
            </p>
          </div>

          <nav aria-label="Navegación del pie" className="md:col-span-2 md:col-start-8">
            <p className="label text-chalk-faint">Índice</p>
            <ul className="mt-6">
              <li className="seam-b seam-invert">
                <Link
                  href="/"
                  className="block py-3 text-sm text-chalk-muted transition-colors duration-250 hover:text-chalk"
                >
                  Inicio
                </Link>
              </li>
              {nav.map(({ href, label }) => (
                <li key={href} className="seam-b seam-invert">
                  <Link
                    href={href}
                    className="block py-3 text-sm text-chalk-muted transition-colors duration-250 hover:text-chalk"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label text-chalk-faint">Taller</p>
            <ul className="mt-6">
              {channels.map(({ label, value, href, external }) => (
                <li key={label} className="seam-b seam-invert">
                  <a
                    href={href}
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
            <span>Cortado, cosido y bruñido a mano</span>
          </p>

          <Seal className="hidden h-9 w-9 text-chalk/22 sm:block" />
        </div>
      </div>
    </footer>
  );
}
