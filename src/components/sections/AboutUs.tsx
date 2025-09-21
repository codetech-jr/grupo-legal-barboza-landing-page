// src/components/sections/AboutUs.tsx
'use client';

import Image from 'next/image';
import { ExclamationTriangleIcon, LightBulbIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
// 1. Importamos las herramientas necesarias
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clientChallenges = [
  'Procedimientos jurídicos y administrativos complejos',
  'Conflictos civiles y familiares',
  'Asesoramiento legal en transacciones importantes (inmobiliarias, herencias)',
  'Defensa de derechos frente a terceros o entidades gubernamentales',
  'Miedo e incertidumbre en torno a los procesos legales',
];

// 2. Reutilizamos las mismas variantes de animación para mantener consistencia
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

const AboutUs = () => {
  // 3. Configuramos el hook 'useInView' para detectar cuándo el componente es visible
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación solo se ejecuta una vez
    threshold: 0.1,    // Se activa cuando el 10% del componente es visible
  });

  return (
    <section id="sobre-nosotros" className="bg-brand-dark py-20 sm:py-24 overflow-hidden">
      {/* 4. Convertimos el contenedor principal en un componente 'motion' */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 lg:px-8"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 5. Animamos la imagen */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/deylena-2.jpg"
              alt="Fundadora Deylena Barboza"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          {/* 6. Animamos el bloque de texto de la introducción */}
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-4xl font-bold text-[#C09568] sm:text-5xl">
              Sobre nosotros
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Fundado por Deylena Barboza, abogada venezolana con más de 10 años de experiencia, Grupo Legal Barboza se compromete a ofrecer soluciones legales integrales adaptadas a las necesidades únicas de cada cliente.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Nuestro equipo de abogados especializados opera en España, Estados Unidos y Colombia, brindando asesoramiento experto tanto a particulares como a empresas.
            </p>
          </motion.div>
        </div>

        {/* 7. La animación en cascada del contenedor principal afectará a esta sección también */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {/* Animamos la primera tarjeta */}
          <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center">
              <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />
              <h3 className="ml-3 font-serif text-2xl font-bold text-text-primary">
                Lo que enfrentan nuestros clientes
              </h3>
            </div>
            <p className="mt-4 text-text-secondary">
              Muchos clientes acuden a nosotros tras intentar resolver sus problemas por sí solos o por confusión sobre la legislación aplicable. Algunos problemas comunes incluyen:
            </p>
            {/* 8. (Detalle extra) Animamos la lista para que cada item aparezca secuencialmente */}
            <motion.ul 
              variants={containerVariants} // Usamos containerVariants para el efecto 'stagger' en los 'li'
              className="mt-6 space-y-3"
            >
              {clientChallenges.map((challenge, index) => (
                <motion.li variants={itemVariants} key={index} className="flex items-start">
                  <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#C09568] mt-1" />
                  <span className="ml-3 text-text-secondary">{challenge}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Animamos la segunda tarjeta */}
          <motion.div variants={itemVariants} className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
             <div className="flex items-center">
              <LightBulbIcon className="w-8 h-8 text-yellow-400" />
              <h3 className="ml-3 font-serif text-2xl font-bold text-text-primary">
                Nuestra Solución
              </h3>
            </div>
            <p className="mt-4 text-text-secondary">
              <strong className="text-text-primary">Soluciones legales a medida. Sólido soporte legal.</strong>
              <br />
              Nuestro equipo multidisciplinario ofrece estrategias integrales, atención personalizada y excelencia técnica. Guiamos a nuestros clientes en cada fase del proceso legal, garantizando claridad, eficiencia y tranquilidad.
            </p>
            <p className="mt-4 text-text-secondary">
              No solo solucionamos problemas legales, sino que brindamos estabilidad, confianza y resultados que importan.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;