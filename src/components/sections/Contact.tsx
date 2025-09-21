// src/components/sections/Contact.tsx
'use client';

import { PhoneIcon } from '@heroicons/react/24/outline';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// 1. Importamos el icono de WhatsApp
import { FaWhatsapp } from 'react-icons/fa';

const contactDetails = [
  {
    country: 'España',
    icon: <PhoneIcon className="w-6 h-6 text-[#C09568]" />,
    info: '+34 637 248 183',
  },
  {
    country: 'Colombia',
    icon: <PhoneIcon className="w-6 h-6 text-[#C09568]" />,
    info: '+57 312 219 5691',
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 2. Preparamos el enlace de WhatsApp (igual que antes)
  const phoneNumber = '34637248183';
  const message = encodeURIComponent(
    'Hola Deylena, he visitado tu página web y me gustaría solicitar una consulta sobre mis opciones legales.'
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="contacto" className="bg-white py-20 sm:py-24 overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda: Información (Se mantiene como antes) */}
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-4xl font-bold text-text-primary sm:text-5xl">
              ¿Listo/a para dar el <span className="text-[#C09568]">Siguiente Paso</span>?
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              Cuéntanos tu situación. Un experto de nuestro equipo se pondrá en contacto para analizar tus opciones y diseñar la estrategia legal perfecta para tu caso.
            </p>
            <div className="mt-10 space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.country}>
                  <h3 className="font-bold text-lg text-text-primary">{detail.country}</h3>
                  <div className="flex items-center mt-2">
                    {detail.icon}
                    <span className="ml-3 text-text-secondary">{detail.info}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* === SECCIÓN CORREGIDA === */}
          {/* Columna Derecha: Reemplazamos el formulario con el CTA de WhatsApp */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 p-8 rounded-xl shadow-lg h-full flex flex-col items-center justify-center text-center"
          >
            <h2 className="font-serif text-3xl font-bold text-text-primary">
              ¿Tienes una pregunta? Obtén una <span className="text-[#C09568]">respuesta en minutos</span>.
            </h2>
            <p className="mt-4 text-text-secondary">
               No dejes que las dudas te detengan. Inicia una conversación directa con nuestro equipo de expertos ahora mismo. La primera consulta es <span className="text-[#C09568]">gratuita y sin compromiso.</span>
            </p>
            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center 
                  px-8 py-4 
                  bg-[#C09568] text-white 
                  font-bold text-lg 
                  rounded-lg shadow-lg 
                  hover:opacity-90 
                  transition-opacity
                  transform hover:scale-105 
                "
              >
                <FaWhatsapp className="w-7 h-7 mr-3" />
                Chatea con nosotros en WhatsApp
              </a>
            </div>
          </motion.div>
          {/* === FIN DE LA SECCIÓN CORREGIDA === */}

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;