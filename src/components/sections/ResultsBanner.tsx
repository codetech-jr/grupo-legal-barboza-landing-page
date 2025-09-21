// src/components/sections/ResultsBanner.tsx
'use client';

import { TrophyIcon, CheckBadgeIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
// 1. Importamos 'motion' de framer-motion
import { motion, Variants } from 'framer-motion';

const bannerStats = [
  {
    icon: <TrophyIcon className="w-12 h-12 text-[#e2c15c]" />,
    endValue: 1000,
    suffix: '+',
    label: 'Casos Exitosos',
  },
  {
    icon: <CheckBadgeIcon className="w-12 h-12 text-[#e2c15c]" />,
    endValue: 98,
    suffix: '%',
    label: 'Tasa de Aprobación',
  },
  {
    icon: <ClockIcon className="w-12 h-12 text-[#e2c15c]" />,
    endValue: 10,
    suffix: '+',
    label: 'Años de Experiencia',
  },
  {
    icon: <GlobeAltIcon className="w-12 h-12 text-[#e2c15c]" />,
    endValue: 3,
    suffix: '',
    label: 'Países de Expertise',
  },
];

// 2. Definimos nuestras variantes de animación consistentes
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

const ResultsBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // 3. Convertimos la sección en un componente 'motion' y le asignamos el ref
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bg-gradient-to-r from-brand-dark via-blue-900 to-brand-dark py-20 sm:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* 4. Animamos el bloque de texto como el primer hijo */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-serif text-4xl font-bold text-[#e2c15c] sm:text-5xl">
            Nuestros Resultados Hablan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Cifras que demuestran nuestro compromiso con la excelencia y el éxito de nuestros clientes.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {bannerStats.map((stat) => (
            // 5. Animamos cada una de las métricas de forma secuencial
            <motion.div
              key={stat.label}
              variants={itemVariants} // Aplicamos la animación de item
              className="flex flex-col items-center text-center"
            >
              {stat.icon}
              <p className="mt-4 text-5xl font-bold text-white">
                {/* La animación de CountUp se activa con 'inView', lo cual es perfecto */}
                {inView && <CountUp end={stat.endValue} duration={2.5} suffix={stat.suffix} />}
              </p>
              <p className="mt-2 text-base font-medium text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ResultsBanner;