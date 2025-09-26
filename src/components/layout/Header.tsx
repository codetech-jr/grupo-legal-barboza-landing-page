// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, Variants } from 'framer-motion';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '#proceso', label: 'Nuestro Proceso' },
  { href: '#faqs', label: 'Preguntas' },
  { href: '#contacto', label: 'Contacto' },
];

// Variantes de animación para el menú móvil
const mobileMenuVariants: Variants = {
  hidden: { y: '-100%', transition: { duration: 0.4, ease: 'easeInOut' } },
  visible: { y: '0%', transition: { duration: 0.4, ease: 'easeInOut', staggerChildren: 0.1 } },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // 1. Estado para controlar la visibilidad del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  // 2. Efecto para bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Función de limpieza para reestablecer el scroll si el componente se desmonta
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className={`fixed top-0 z-100 w-full transition-all duration-300 ${
          scrolled || isMenuOpen // Hacemos el header sólido también si el menú está abierto
            ? 'bg-[#192A3E] shadow-md'
            : 'bg-[#192A3E]/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/">
            <Image src="/images/logo-1.png" alt="Logo de Deylena Barboza" width={100} height={65} priority />
          </Link>

          {/* Navegación de Escritorio */}
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.li key={link.href} whileHover={{ scale: 1.1, y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href={link.href} className="text-white hover:text-[#C09568] transition-colors duration-300">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* CTA de Escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+34637248183" className="font-medium text-white hover:text-[#C09568] transition-colors">+34 637 248 183</a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contacto" className="bg-[#C09568] text-white font-bold py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
                Agendar Consulta
              </Link>
            </motion.div>
          </div>

          {/* 3. Botón de Menú Hamburguesa para Móviles */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-white z-50 relative"
              aria-label="Toggle Menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence initial={false}>
                {isMenuOpen ? (
                  <motion.svg key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.3 }} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.3 }} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* 4. Menú Móvil Deslizable */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-brand-dark/95 backdrop-blur-lg z-40 pt-24" // pt-24 para dejar espacio al header
          >
            <div className="container mx-auto px-6 h-full">
              <motion.ul variants={mobileMenuVariants} className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={mobileLinkVariants}>
                    <Link
                      href={link.href}
                      onClick={closeMenu} // Cierra el menú al hacer clic
                      className="text-white text-3xl font-serif hover:text-[#C09568] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={mobileLinkVariants} className="pt-8">
                  <Link href="#contacto" onClick={closeMenu} className="bg-[#C09568] text-white font-bold py-3 px-8 rounded-md text-xl">
                    Agendar Consulta
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;