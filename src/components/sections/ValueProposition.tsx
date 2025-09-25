// src/components/sections/ValueProposition.tsx
'use client'; 

import Image from 'next/image';
import { GlobeEuropeAfricaIcon, LinkIcon, UsersIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
// 1. Importamos 'motion' de framer-motion
import { motion, Variants } from 'framer-motion';

const benefits = [
  { icon: <GlobeEuropeAfricaIcon className="w-8 h-8 text-[#C09568]" />, title: 'Experiencia Transfronteriza', description: 'Profundo conocimiento de los matices legales en EE. UU., España y Colombia, con más de 10 años de experiencia combinada.'},
  { icon: <LinkIcon className="w-8 h-8 text-[#C09568]" />, title: 'Estrategia Unificada', description: 'Un único punto de contacto para tu viaje legal internacional, coordinando todos los aspectos de tu caso de forma eficiente.'},
  { icon: <UsersIcon className="w-8 h-8 text-[#C09568]" />, title: 'Equipo Global', description: 'Acceso a expertos legales dedicados en cada país, con conocimiento específico de las regulaciones locales.'},
];

// 2. Definimos las variantes de la animación para reutilizarlas
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


const ValueProposition = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <section id="por-que-elegirnos" className="bg-white py-20 sm:py-24">
      {/* 3. Asignamos el 'ref' aquí y lo convertimos en un contenedor de animación */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // La animación se activa con 'inView'
        className="container mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 4. Envolvemos la imagen en un 'motion.div' y le aplicamos las variantes */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/deylena-1.jpg"
              alt="Abogada Deylena Barboza"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105 object-top"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* 5. No es necesario envolver este div porque los elementos internos se animarán individualmente */}
          <div className="flex flex-col justify-center">
            <motion.h2 variants={itemVariants} className="font-serif text-4xl font-bold text-text-primary sm:text-5xl">
              Una Firma, Tres Países.
              <br />
              Una Experiencia Legal sin Fronteras.
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-lg text-text-secondary">
              Navegamos la complejidad legal internacional con expertise local en cada jurisdicción para ofrecerte un camino claro y seguro hacia tus objetivos.
            </motion.p>

            {/* 6. El 'ul' ya es un 'motion element' por ser hijo del contenedor principal */}
            <ul className="mt-10 space-y-8">
              {benefits.map((benefit) => (
                // Convertimos cada 'li' en un 'motion.li' para que se anime de forma escalonada
                <motion.li variants={itemVariants} key={benefit.title} className="flex items-start">
                  <div className="flex-shrink-0 bg-[#C09568]/10 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-text-primary">{benefit.title}</h3>
                    <p className="mt-1 text-text-secondary">{benefit.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            {/* 7. Convertimos el contenedor de las métricas en un 'motion.div' */}
            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-4 text-center">
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-[#C09568]">
                  {inView && <CountUp end={1000} duration={2.5} suffix="+" />}
                </p>
                <p className="text-sm font-medium text-text-secondary mt-1">Casos Exitosos</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-[#C09568]">
                  {inView && <CountUp end={98} duration={2.5} suffix="%" />}
                </p>
                <p className="text-sm font-medium text-text-secondary mt-1">Tasa de Éxito</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-[#C09568]">24/7</p>
                <p className="text-sm font-medium text-text-secondary mt-1">Soporte</p>
              </div>

            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValueProposition;