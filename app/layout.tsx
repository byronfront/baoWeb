import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EnquireProvider } from "@/components/enquire/EnquireContext";
import { EnquireHost } from "@/components/enquire/EnquireHost";

/**
 * Dos voces.
 * Cormorant Garamond — serif de libro, contraste antiguo. Titulares y relato.
 * IBM Plex Sans — grotesca arquitectónica. Interfaz, medidas y precios.
 */
const display = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#1c1410",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tudominio.com"),
  title: {
    default: "Bao | Marroquinería de taller, hecha a mano en Medellín",
    template: "%s | Bao",
  },
  description:
    "Carteras, cinturones y accesorios cortados y cosidos a mano en cuero curtido al vegetal. Punto de silla, latón macizo y lotes pequeños. Taller en Medellín, Colombia.",
  keywords: [
    "marroquinería artesanal",
    "cuero curtido al vegetal",
    "cosido a mano",
    "carteras de cuero",
    "cinturones de cuero",
    "Medellín",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Bao",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col bg-bone font-sans">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-gutter focus:top-4 focus:z-[100] focus:bg-espresso focus:px-5 focus:py-3 focus:text-label focus:uppercase focus:text-chalk"
        >
          Saltar al contenido
        </a>
        <EnquireProvider>
          <Header />
          <main id="contenido" className="flex-1">
            {children}
          </main>
          <Footer />
          <EnquireHost />
        </EnquireProvider>
      </body>
    </html>
  );
}
