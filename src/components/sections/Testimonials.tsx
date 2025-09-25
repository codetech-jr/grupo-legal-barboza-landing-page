// src/components/sections/Testimonials.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useEmblaCarousel from 'embla-carousel-react';

// Actualizamos la data con 4 testimonios clave
const testimonialsData = [
  {
    name: 'Jose Velandia - Residencia',
    location: 'Venezuela -> Estados Unidos',
    imageSrc: '/images/avatar-1.png', // Reemplaza con una foto de perfil
    rating: 5,
    quote: '¡LO APROBARON! Gracias a Dios y a usted. Le dije que usted tenía un ángel y mucha suerte para esto. ¡Muchas gracias de verdad, Dios la bendiga!',
  },
  {
    name: 'Deborah Brito - Residencia',
    location: 'Venezuela -> España',
    imageSrc: '/images/avatar-2.png',
    rating: 5,
    quote: 'Holaaa buenasss noches, ¡ya la tengo conmigo! Quería agradecerte por la ayuda. Ahora vamos por la nacionalidad.',
  },
  {
    name: 'Yescarly - Permiso de Trabajo',
    location: 'Venezuela -> Estados Unidos',
    imageSrc: '/images/avatar-2.png',
    rating: 5,
    quote: 'Hola Deylena buenos días, ¡salí corriendo al buzón a revisar y sí, ya llegó! Muchísimas gracias. Qué bien empezar el día de esta forma.',
  },
  {
    name: 'Santiago Montesdeoca - Permiso de Trabajo',
    location: 'Latinoamérica -> Estados Unidos',
    imageSrc: '/images/avatar-1.png',
    rating: 5,
    quote: 'Hola buen día. ¿Cómo está? Me llegó el permiso de trabajo. ¡Muchas gracias por todo, Dios la bendiga!',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {Array.from({ length: rating }).map((_, index) => (
      <StarIcon key={index} className="w-5 h-5 text-yellow-400" />
    ))}
  </div>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi]);

  return (
    <section ref={inViewRef} className="bg-brand-dark py-20 sm:py-24 overflow-hidden" id="testimonials">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-serif text-4xl font-bold text-[#C09568] sm:text-5xl">
            La Confianza de Nuestros Clientes
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Resultados reales que hablan por sí mismos. Cada caso es un compromiso.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4"> {/* Added negative margin to compensate for padding */}
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-4"> {/* Changed p-4 to pl-4 */}
                  <div className="flex flex-col h-full bg-gray-50 p-8 rounded-xl shadow-lg">
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="mt-4 text-text-secondary flex-grow">
                      <p>&quot;{testimonial.quote}&quot;</p>
                    </blockquote>
                    <footer className="mt-6 flex items-center">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image src={testimonial.imageSrc} alt={`Foto de ${testimonial.name}`} layout="fill" objectFit="cover" />
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-text-primary">{testimonial.name}</p>
                        <p className="text-sm text-text-secondary">{testimonial.location}</p>
                      </div>
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={scrollPrev} className="hidden lg:block absolute top-1/2 left-[-1rem] -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition z-10">
            <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
          </button>
          <button onClick={scrollNext} className="hidden lg:block absolute top-1/2 right-[-1rem] -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition z-10">
            <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-brand-accent scale-125' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;