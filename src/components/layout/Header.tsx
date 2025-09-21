// src/components/layout/Header.tsx
'use client'; // Framer Motion requiere que el componente sea de cliente

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// 1. Importamos 'motion' y los hooks de scroll de Framer Motion
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '#proceso', label: 'Nuestro Proceso' },
  { href: '#faqs', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
];

const Header = () => {
  // 2. Estado para controlar si el usuario ha hecho scroll
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // 3. Hook que se ejecuta cuando el valor de scrollY cambia
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Si el usuario ha bajado más de 10px, cambiamos el estado
    setScrolled(latest > 10);
  });

  return (
    // 4. Reemplazamos <header> por <motion.header> y aplicamos clases dinámicas
    // Cuando 'scrolled' es true, el fondo es blanco opaco con sombra.
    // Cuando es false, es semi-transparente con un efecto blur.
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Estado inicial: arriba y oculto
      animate={{ y: 0, opacity: 1 }} // Estado final: en su posición y visible
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#192A3E] shadow-md'
          : 'bg-[#192A3E]/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <Link href="/">
          <Image
            src="/images/logo-1.png"
            alt="Logo de Deylena Barboza"
            width={80}
            height={45}
            priority
          />
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              // 5. Animación de hover en cada enlace
              <motion.li
                key={link.href}
                whileHover={{ scale: 1.1, y: -2 }} // Efecto de escala y subida
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link href={link.href} className="text-white hover:text-[#C09568] transition-colors duration-300">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+34123456789" className="font-medium text-white hover:text-[#C09568] transition-colors">
            +34 637 248 183
          </a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contacto"
              className="bg-[#C09568] text-white font-bold py-2 px-6 rounded-md hover:opacity-90 transition-opacity"
            >
              Agendar Consulta
            </Link>
          </motion.div>
        </div>

        <div className="md:hidden">
          <button className="text-text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </motion.header>
  );
};

export default Header;