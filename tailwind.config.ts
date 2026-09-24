import type { Config } from "tailwindcss";

/**
 * Bao — sistema de diseño.
 * Fuente única de verdad. `app/globals.css` deriva de aquí con theme().
 */

/** Materia: tierra cálida, cuero y metal envejecido. Sin blanco ni negro puros. */
const material = {
  bone: "#efe6d2",
  ivory: "#e6d4b8",
  parchment: "#d4bc94",
  sand: "#c4a07a",
  clay: "#b6795c",
  terracotta: "#a45d43",
  cognac: "#9a5830",
  burnt: "#6e3f2b",
  tobacco: "#3f281f",
  charcoal: "#241e1b",
  espresso: "#1c1410",
  pitch: "#100c0a",
  olive: "#454534",
  brass: "#7d6540",
  bronze: "#5c4734",
};

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...material,
        ink: {
          DEFAULT: material.espresso,
          muted: "#5a4636",
          faint: "#6d5844",
        },
        chalk: {
          DEFAULT: "#eadcc0",
          muted: "#b8a48a",
          faint: "#9a8670",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "Palatino", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },

      /**
       * label / micro — voz de taller (medidas, numeración).
       * d1–d5 — voz editorial. Cormorant tiene ascendentes altas:
       * el interlineado va más cerrado que en una grotesca.
       */
      fontSize: {
        label: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.16em" }],
        micro: ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.06em" }],
        xs: ["0.8125rem", { lineHeight: "1.65" }],
        sm: ["0.9375rem", { lineHeight: "1.65" }],
        base: ["1.0625rem", { lineHeight: "1.7" }],
        lead: [
          "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)",
          { lineHeight: "1.65" },
        ],
        d5: [
          "clamp(1.375rem, 1.25rem + 0.45vw, 1.625rem)",
          { lineHeight: "1.25", letterSpacing: "-0.01em" },
        ],
        d4: [
          "clamp(1.625rem, 1.4rem + 0.9vw, 2.25rem)",
          { lineHeight: "1.18", letterSpacing: "-0.015em" },
        ],
        d3: [
          "clamp(2rem, 1.55rem + 1.6vw, 3.25rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        d2: [
          "clamp(2.25rem, 1.6rem + 2.6vw, 4.25rem)",
          { lineHeight: "1.02", letterSpacing: "-0.025em" },
        ],
        d1: [
          "clamp(2.75rem, 1.5rem + 5vw, 6.5rem)",
          { lineHeight: "0.94", letterSpacing: "-0.03em" },
        ],
      },

      spacing: {
        gutter: "clamp(1.25rem, 0.7rem + 2.4vw, 4rem)",
        section: "clamp(5rem, 3rem + 8vw, 11rem)",
        "section-lg": "clamp(6.5rem, 3rem + 14vw, 16rem)",
      },

      maxWidth: {
        page: "1440px",
        wide: "1760px",
        text: "60ch",
        narrow: "42ch",
      },

      borderRadius: {
        DEFAULT: "1px",
        seam: "0px",
      },

      transitionTimingFunction: {
        craft: "cubic-bezier(0.22, 1, 0.36, 1)",
        material: "cubic-bezier(0.65, 0, 0.35, 1)",
      },

      transitionDuration: {
        "250": "250ms",
        "420": "420ms",
        "700": "700ms",
        "1100": "1100ms",
      },

      aspectRatio: {
        plate: "4 / 5",
        object: "3 / 4",
        bench: "4 / 3",
        frieze: "16 / 9",
        panorama: "21 / 9",
      },
    },
  },
  plugins: [],
};

export default config;
