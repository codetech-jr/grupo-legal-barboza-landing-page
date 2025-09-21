// src/components/sections/Process.tsx
'use client';

import React from 'react';
import { DocumentTextIcon, CheckCircleIcon, ChatBubbleBottomCenterTextIcon, DevicePhoneMobileIcon, LanguageIcon, ClockIcon } from '@heroicons/react/24/outline';
// 1. Importamos las herramientas de animación
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- No hay cambios en la data ---
const processSteps = [
  {
    stepNumber: '1',
    title: 'Evaluación Global del Caso',
    description: 'Iniciamos con una consulta integral para entender tu situación y objetivos, analizando todas las variables legales relevantes.',
    details: {
      icon: <ClockIcon className="w-5 h-5 mr-2 text-[#C09568]" />,
      text: 'Duración: 60-90 minutos',
    },
  },
  {
    stepNumber: '2',
    title: 'Estrategia Legal a Medida',
    description: 'Diseñamos un plan claro y específico para cada país, gestionando toda la documentación necesaria con precisión y eficiencia.',
    details: {
      icon: <DocumentTextIcon className="w-5 h-5 mr-2 text-[#C09568]" />,
      text: 'Plan 100% personalizado',
    },
  },
  {
    stepNumber: '3',
    title: 'Ejecución y Soporte',
    description: 'Te representamos con diligencia y te damos soporte continuo hasta la resolución exitosa de tu caso en cada jurisdicción.',
    details: {
      icon: <CheckCircleIcon className="w-5 h-5 mr-2 text-[#C09568]" />,
      text: 'Representación completa',
    },
  },
];

const processBenefits = [
    {
        icon: <ChatBubbleBottomCenterTextIcon className="w-10 h-10 mx-auto text-[#C09568]"/>, // mx-auto para centrarlo
        title: "Comunicación Transparente",
        description: "Actualizaciones regulares sobre el progreso de tu caso."
    },
    {
        icon: <DevicePhoneMobileIcon className="w-10 h-10 mx-auto text-[#C09568]"/>,
        title: "Acceso Digital",
        description: "Portal del cliente para seguimiento en tiempo real."
    },
    {
        icon: <LanguageIcon className="w-10 h-10 mx-auto text-[#C09568]"/>,
        title: "Soporte Multiidioma",
        description: "Atención en español, inglés y otros idiomas."
    },
]

// 2. Definimos las variantes de animación (pueden ser las mismas para consistencia)
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


const Process = () => {
  // 3. Configuramos el hook 'useInView'
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="proceso" className="bg-gray-50 py-20 sm:py-24 overflow-hidden">
      {/* 4. Asignamos el ref al contenedor principal y lo convertimos a 'motion.div' */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 lg:px-8"
      >
        {/* Título y Subtítulo animados */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="font-serif text-4xl font-bold text-text-primary sm:text-5xl">
            Tu Camino al Éxito, Simplificado
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary">
            Un proceso claro y transparente diseñado para maximizar tus posibilidades de éxito en cada etapa.
          </p>
        </motion.div>

        {/* Pasos Principales */}
        <motion.div variants={itemVariants} className="relative mt-16">
            {/* Línea conectora decorativa */}
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden md:flex items-center"
            >
              <div className="w-full border-t-2 border-dashed border-gray-300" />
            </div>

            <div className="relative grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12">
                {processSteps.map((step) => (
                    // 5. Animamos cada paso del proceso individualmente
                    <motion.div 
                        key={step.title}
                        variants={itemVariants} // Cada paso usará la animación de item
                        className="text-center bg-gray-50 px-4"
                    >
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C09568] text-white shadow-lg ring-8 ring-gray-50">
                            <span className="font-bold text-3xl">{step.stepNumber}</span>
                        </div>
                        <h3 className="mt-6 font-serif text-xl font-bold text-text-primary">{step.title}</h3>
                        <p className="mt-2 text-text-secondary">{step.description}</p>
                        <div className="mt-4 inline-flex items-center bg-[#C09568]/10 px-4 py-2 rounded-full">
                            {step.details.icon}
                            <span className="text-sm font-medium text-[#C09568]">{step.details.text}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* Beneficios Adicionales */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {processBenefits.map(benefit => (
                // 6. Animamos cada tarjeta de beneficio
                <motion.div 
                    key={benefit.title}
                    variants={itemVariants} // Cada beneficio usará la misma animación de item
                    className="text-center bg-white p-6 rounded-xl shadow-md"
                >
                    {benefit.icon}
                    <h3 className="mt-4 text-lg font-bold text-text-primary">{benefit.title}</h3>
                    <p className="mt-1 text-text-secondary">{benefit.description}</p>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Process;