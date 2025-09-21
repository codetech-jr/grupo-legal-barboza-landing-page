// src/components/sections/HeroSlider.tsx
'use client'; 

import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, Variants } from 'framer-motion';

const slidesData = [
  { country: 'España', countryCode: 'ES', imageUrl: '/images/espana.png' },
  { country: 'USA', countryCode: 'US', imageUrl: '/images/estados-unidos.png' },
  { country: 'Colombia', countryCode: 'CO', imageUrl: '/images/colombia.png' },
];

// 1. Hacemos el retraso entre animaciones un poco más rápido para que las palabras fluyan mejor
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // TypeScript ahora sabe que esto es válido dentro de 'Variants'
    }
  },
};

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full h-[115vh] text-white" ref={emblaRef}>
      <div className="embla__container h-full">
        {slidesData.map((slide, index) => (
          <div
            key={slide.country}
            className="embla__slide relative flex items-center justify-center h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <motion.div
              className="relative z-10 text-center p-4"
              variants={containerVariants}
              initial="hidden"
              animate={index === activeIndex ? 'visible' : 'hidden'} 
            >
              {/* 2. El H1 ahora es un contenedor normal. Los 'motion.span' de adentro
                  serán los hijos directos que el 'motion.div' de arriba animará. */}
              <h1
                className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold drop-shadow-lg flex items-center justify-center flex-wrap" // Añadimos flex-wrap para responsividad
              >
                {/* 3. Dividimos el título en palabras y creamos un 'motion.span' para cada una */}
                {"Asegurando tu Futuro en".split(" ").map((word, i) => (
                  <motion.span
                    key={`${slide.country}-word-${i}`}
                    variants={itemVariants}
                    className="inline-block mr-3 md:mr-4" // Añadimos un margen para separar las palabras
                  >
                    {word}
                  </motion.span>
                ))}
                {/* 4. La palabra del país también es un 'motion.span' para que entre en la secuencia */}
                <motion.span
                  variants={itemVariants}
                  className="inline-block text-[#e2c15c]"
                >
                  {slide.country}
                </motion.span>
              </h1>

              {/* El resto de los elementos se animarán después de las palabras del título */}
              <motion.p
                variants={itemVariants}
                className="max-w-3xl mx-auto mt-4 text-lg md:text-xl drop-shadow-md"
              >
                Especialistas en visas, residencias y ciudadanía. Hacemos tu proceso migratorio claro, seguro y exitoso.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <a
                  href="#contacto"
                  className="mt-8 inline-block bg-[#C09568] text-white font-bold text-lg py-3 px-10 rounded-md hover:opacity-90 transition-opacity"
                >
                  Evaluar mi Caso Ahora
                </a>
              </motion.div>

            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;