// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Importamos nuestros nuevos componentes
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Deylena Barboza | Asegurando tu Futuro en 🇪🇸, 🇺🇸 y 🇨🇴",
  description: "Especialistas en visas, residencias y ciudadanía. Hacemos tu proceso migratorio claro, seguro y exitoso en España, Estados Unidos y Colombia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white overflow-x-hidden antialiased`}>
        {/* El Header se renderizará en la parte superior */}
        <Header />
        
        {/* El contenido de cada página se renderizará aquí */}
        <main>{children}</main>

        {/* El Footer se renderizará en la parte inferior */}
        <Footer />

        {/* Banner de cookies */}
        <CookieBanner />
      </body>
    </html>
  );
}