// src/components/sections/TrustBar.tsx
'use client'; // Necesario para los hooks y Framer Motion

import React from 'react';
import Image from 'next/image';
// 1. Importamos las herramientas necesarias
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const logosData = [
  { name: 'American Immigration Lawyers Association', src: '/images/aila-logo.png' },
  { name: 'Ilustre Colegio de Abogados de Madrid', src: '/images/icam-logo.png' },
  { name: 'Colegio de Abogados de USA (American Bar Association)', src: '/images/aba-logo.png' },
  { name: 'Consejo Superior de la Judicatura de Colombia', src: '/images/csj-logo.png' },
];

// 2. Definimos las variantes para la animación escalonada
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Cada logo aparecerá 0.2s después del anterior
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // Empieza invisible y 20px abajo
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

const TrustBar = () => {
  // 3. Configuramos el Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación solo se ejecuta una vez
    threshold: 0.1,    // Se dispara cuando el 10% del elemento es visible
  });

  return (
    // 4. Asignamos el 'ref' a la sección principal
    <section ref={ref} className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* 5. Animamos el título para que aparezca suavemente */}
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center text-lg font-semibold leading-8 text-text-primary"
        >
          Acreditados y Reconocidos por Entidades de Confianza en los Tres Países
        </motion.h2>

        {/* 6. Usamos motion.div para el contenedor de los logos y aplicamos las variantes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 lg:mx-0 lg:max-w-none"
        >
          {logosData.map((logo) => (
            // 7. Cada logo individual es un 'motion.div' que usará las variantes de 'item'
            <motion.div
              key={logo.name}
              variants={itemVariants}
              className="flex justify-center col-span-1"
              title={logo.name}
            >
              {logo.src ? (
                <Image 
                  width={160}
                  height={64}
                  src={logo.src}
                  alt={logo.name}
                  className="w-40 h-auto object-contain"
                />
              ) : (
                <div className="w-40 h-16 bg-gray-100 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Logo Próximamente</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;