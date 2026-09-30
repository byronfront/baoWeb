"use client";

import { useEffect } from "react";
import { localeMeta, type Locale } from "@/lib/i18n";

export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].html;
  }, [locale]);

  return null;
}
