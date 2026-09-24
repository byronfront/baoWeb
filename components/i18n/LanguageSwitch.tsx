"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  locales,
  localeCookie,
  localeMeta,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";
import { useLocale } from "./LocaleProvider";

export function LanguageSwitch({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "chalk";
}) {
  const { locale, dict } = useLocale();
  const pathname = usePathname();
  const muted = tone === "chalk" ? "text-chalk-faint" : "text-ink-faint";
  const current = tone === "chalk" ? "text-chalk" : "text-ink";

  return (
    <nav aria-label={dict.nav.language} className={className}>
      <ul className="flex items-center gap-2.5 text-label uppercase">
        {locales.map((code) => {
          const active = code === locale;
          return (
            <li key={code}>
              <Link
                href={switchLocalePath(pathname, code)}
                hrefLang={code}
                aria-current={active ? "true" : undefined}
                lang={code}
                onClick={() => {
                  document.cookie = `${localeCookie}=${code};path=/;max-age=31536000;samesite=lax`;
                }}
                className={active ? current : `${muted} transition-opacity hover:opacity-100`}
              >
                {localeMeta[code as Locale].label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
