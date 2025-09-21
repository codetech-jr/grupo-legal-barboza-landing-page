// src/components/sections/Faqs.tsx
'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
// 1. Importamos las herramientas de animación, incluyendo AnimatePresence
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- No hay cambios en la data ---
const faqsData = [
    {
    question: '¿Con qué tipo de clientes trabajan?',
    answer: 'Trabajamos tanto con particulares como con empresas. Nuestra experiencia abarca desde familias que buscan la reagrupación, hasta emprendedores que inician un negocio y grandes corporaciones que necesitan gestionar la movilidad internacional de sus empleados.',
    },
    {
    question: '¿Necesito estar en el país de destino para iniciar un proceso?',
    answer: 'No necesariamente. Muchos procesos, como la solicitud de visados o procesos consulares, se inician desde tu país de origen. Realizamos una evaluación inicial para determinar la estrategia óptima y guiarte sobre los pasos a seguir, estés donde estés.',
    },
    {
    question: '¿Cómo funcionan sus honorarios?',
    answer: 'Creemos en la total transparencia. Tras la consulta inicial, te proporcionamos una propuesta de honorarios fijos que cubre todo el proceso, sin sorpresas ni costes ocultos. Ofrecemos diferentes planes de pago para adaptarnos a tus necesidades.',
    },
    {
    question: '¿Cuánto tiempo puede tardar mi caso?',
    answer: 'La duración varía significativamente según el tipo de proceso y la jurisdicción. Durante la evaluación inicial, te daremos una estimación realista basada en nuestra experiencia y los plazos actuales de la administración correspondiente.',
    },
    {
    question: '¿Por qué elegirlos a ustedes en lugar de un despacho local?',
    answer: 'Nuestra principal ventaja es la visión global y la estrategia unificada. Si tu situación involucra múltiples países, te ahorramos la complejidad de coordinar con varios despachos. Somos tu único punto de contacto, asegurando una gestión coherente y sin fisuras de tu caso.',
    },
    {
    question: '¿Cuáles son sus métodos de pago?',
    answer: 'Aceptamos transferencias bancarias en dólares, euros o pesos colombianos, pagos a través de plataformas seguras como Zelle a una cuenta en Estados Unidos. Nuestro objetivo es facilitar el proceso de pago para que sea lo más cómodo posible para ti.',
    }
  ];

// 2. Definimos las variantes de animación de entrada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Faqs = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // 3. Configuramos useInView para la animación de entrada
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faqs" className="bg-gray-50 py-20 sm:py-24">
      {/* 4. Contenedor principal de la animación de entrada */}
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
            Preguntas Frecuentes
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-text-secondary">
            Resolvemos tus dudas más comunes para que puedas tomar la mejor decisión con total confianza.
          </p>
        </motion.div>

        {/* Lista de FAQs (Acordeón) */}
        <div className="mt-12 max-w-4xl mx-auto">
          {faqsData.map((faq, index) => (
            // 5. Animamos la entrada de cada pregunta
            <motion.div key={index} variants={itemVariants} className="border-b border-gray-200 py-6">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-bold text-text-primary">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openFaqIndex === index ? (
                    <MinusIcon className="w-6 h-6 text-[#C09568]" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-text-secondary" />
                  )}
                </span>
              </button>
              
              {/* 6. Usamos AnimatePresence para animar el abrir/cerrar de la respuesta */}
              <AnimatePresence initial={false}>
                {openFaqIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto', marginTop: '1rem' },
                      collapsed: { opacity: 0, height: 0, marginTop: '0rem' },
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-secondary">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Faqs;