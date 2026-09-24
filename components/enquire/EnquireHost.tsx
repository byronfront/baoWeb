"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { contact } from "@/lib/data";
import { contactHref, fill } from "@/lib/i18n";
import { formatWhatsAppUrl } from "@/lib/format";
import { Lozenge } from "@/components/brand/Ornament";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { useEnquire } from "./EnquireContext";

const TOAST_KEY = "bao-enquire-toast";

export function EnquireHost() {
  const { locale, dict } = useLocale();
  const enquire = dict.enquire;
  const { state, openEnquire, closeEnquire } = useEnquire();
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(TOAST_KEY)) return;

    const timer = window.setTimeout(() => setToast(true), 16000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!state.open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEnquire();
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [state.open, closeEnquire]);

  const dismissToast = () => {
    sessionStorage.setItem(TOAST_KEY, "1");
    setToast(false);
  };

  const message = state.productName
    ? fill(enquire.product, { name: state.productName })
    : enquire.general;

  return (
    <>
      {toast && !state.open && (
        <div
          role="status"
          className="fixed inset-x-gutter bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-30 border border-espresso/15 bg-bone px-5 py-4 text-ink md:inset-x-auto md:bottom-8 md:right-gutter md:w-[22rem]"
        >
          <p className="text-label uppercase text-ink-faint">{enquire.toastTitle}</p>
          <p className="mt-2 text-sm text-ink-muted pretty">{enquire.toastBody}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="button"
              className="act act-solid"
              onClick={() => {
                dismissToast();
                openEnquire();
              }}
            >
              {enquire.cta}
            </button>
            <button type="button" className="act-quiet" onClick={dismissToast}>
              {enquire.toastDismiss}
            </button>
          </div>
        </div>
      )}

      {state.open && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute inset-0 bg-espresso/55"
            onClick={closeEnquire}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="encargo-titulo"
            className="surface-paper relative w-full max-w-lg border border-espresso/12 bg-bone px-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-ink sm:px-10 sm:py-10 sm:pb-10"
          >
            <p className="text-label uppercase text-ink-faint">{enquire.cta}</p>
            <h2
              id="encargo-titulo"
              className="mt-4 font-display text-d4 font-light"
            >
              {state.productName ?? enquire.modalTitle}
            </h2>
            <p className="mt-4 max-w-text text-sm text-ink-muted pretty">
              {enquire.modalLead}
            </p>

            <ul className="mt-8 seam-t">
              {contact.whatsapp && (
                <li className="seam-b">
                  <a
                    href={formatWhatsAppUrl(contact.whatsapp, message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 py-5"
                    onClick={closeEnquire}
                  >
                    <span className="font-display text-d5 font-light">
                      {enquire.modalWhatsApp}
                    </span>
                    <span className="flex items-center gap-2 text-micro uppercase text-ink-faint">
                      <Lozenge className="h-[4px] w-[4px]" />
                      {contact.phone ?? contact.whatsapp}
                    </span>
                  </a>
                </li>
              )}
              {contact.email && (
                <li className="seam-b">
                  <a
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(state.productName ? `${enquire.cta}: ${state.productName}` : enquire.cta)}&body=${encodeURIComponent(message)}`}
                    className="group flex items-baseline justify-between gap-4 py-5"
                    onClick={closeEnquire}
                  >
                    <span className="font-display text-d5 font-light">
                      {enquire.modalEmail}
                    </span>
                    <span className="text-micro text-ink-faint">{contact.email}</span>
                  </a>
                </li>
              )}
            </ul>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={contactHref(locale, "escribir")}
                className="act-quiet"
                onClick={closeEnquire}
              >
                {enquire.modalContact}
              </Link>
              <button type="button" className="text-label uppercase text-ink-faint" onClick={closeEnquire}>
                {dict.nav.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function EnquireButton({
  productName,
  className = "act act-solid",
  children,
}: {
  productName?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { openEnquire } = useEnquire();
  const { dict } = useLocale();

  return (
    <button
      type="button"
      className={className}
      onClick={() => openEnquire(productName)}
    >
      {children ?? dict.enquire.cta}
    </button>
  );
}
