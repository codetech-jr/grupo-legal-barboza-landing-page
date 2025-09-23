// src/components/sections/TrustBar.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// 1. Importa el SVG como un componente de React. La ruta debe ser relativa a la raíz del proyecto.
import AbaLogo from '/images/aba-logo.svg';

// 2. Estructura de datos flexible para manejar PNGs y SVGs
const logosData = [
  {
    name: 'American Immigration Lawyers Association',
    src: '/images/aila-logo.png', // Este es un PNG
    Component: null,
  },
  {
    name: 'Ilustre Colegio de Abogados de Madrid',
    src: '/images/icam-logo.png', // Este es un PNG
    Component: null,
  },
  {
    name: 'Colegio de Abogados de USA (American Bar Association)',
    src: null, // No usamos 'src' para el SVG
    Component: AbaLogo, // Usamos la propiedad 'Component' para el SVG
  },
  {
    name: 'Consejo Superior de la Judicatura de Colombia',
    src: '/images/rama-judicial-logo.png', // Este es un PNG
    Component: null,
  },
];

// --- Variantes de animación (sin cambios) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const TrustBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-white py-16 sm:py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 lg:px-8"
      >
        <motion.h2 variants={itemVariants} className="text-center text-lg font-semibold leading-8 text-text-primary">
          Acreditados y Reconocidos por Entidades de Confianza en los Tres Países
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 lg:mx-0 lg:max-w-none"
        >
          {logosData.map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
              className="flex justify-center col-span-1"
              title={logo.name}
            >
              {/* 3. Lógica de renderizado condicional */}
              {logo.Component ? (
                // Si es un componente (nuestro SVG), lo renderizamos.
                <logo.Component className="h-16 w-auto text-gray-600" />
              ) : logo.src ? (
                // Si es un PNG/JPG, usamos <Image>.
                <Image 
                  width={160}
                  height={64}
                  src={logo.src}
                  alt={logo.name}
                  className="w-40 h-auto object-contain"
                />
              ) : (
                // Si no hay nada, mostramos el placeholder.
                <div className="w-40 h-16 bg-gray-100 rounded-lg border border-dashed border-gray-300" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TrustBar;