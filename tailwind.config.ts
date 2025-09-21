// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Extendemos los colores
      colors: {
        'brand-dark': '#192A3E',
        'brand-accent': '#C09568',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7286',
        'border': '#E5E7EB',
      },
      // 2. Extendemos las fuentes
      fontFamily: {
        sans: ['var(--font-inter)'], // Fuente por defecto para el cuerpo
        serif: ['var(--font-playfair)'], // Fuente para los títulos
      },
    },
  },
  plugins: [
    typography,
  ],
};
export default config;