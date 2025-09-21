// src/components/sections/Services.tsx
'use client'; 

import { useState } from 'react';
import {
  ShieldCheckIcon, AcademicCapIcon, BriefcaseIcon, WifiIcon, ClipboardDocumentListIcon, TruckIcon,
  ArrowPathIcon, UserGroupIcon, BuildingLibraryIcon, GlobeAltIcon, ScaleIcon, DocumentCheckIcon,
} from '@heroicons/react/24/outline';
import ReactCountryFlag from 'react-country-flag';
// 1. Importamos las herramientas de animación
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- Datos de servicios y pestañas (sin cambios) ---
const servicesData = {
  spain: [
    { icon: <ShieldCheckIcon className="w-10 h-10 text-[#C09568]" />, title: 'Asilos', description: 'Protección internacional para personas en situación de vulnerabilidad.'},
    { icon: <DocumentCheckIcon className="w-10 h-10 text-[#C09568]" />, title: 'Arraigos', description: 'Regularización por circunstancias excepcionales (social, laboral, familiar).'},
    { icon: <AcademicCapIcon className="w-10 h-10 text-[#C09568]" />, title: 'Visado de Estudiante', description: 'Permisos para estudios superiores, investigación y prácticas.'},
    { icon: <BriefcaseIcon className="w-10 h-10 text-[#C09568]" />, title: 'Residencias de Trabajo', description: 'Permisos por cuenta ajena y propia para profesionales y emprendedores.'},
    { icon: <WifiIcon className="w-10 h-10 text-[#C09568]" />, title: 'Visado de Nómada Digital', description: 'Residencia para trabajadores en remoto de empresas extranjeras.'},
    { icon: <ClipboardDocumentListIcon className="w-10 h-10 text-[#C09568]" />, title: 'Recursos Administrativos', description: 'Impugnación de decisiones administrativas y defensa de tus derechos.'},
    { icon: <TruckIcon className="w-10 h-10 text-[#C09568]" />, title: 'Gestión en Tráfico', description: 'Infracciones, procedimientos y homologación de permisos de conducir.'},
  ],
  usa: [
    { icon: <ShieldCheckIcon className="w-10 h-10 text-[#C09568]" />, title: 'Asilos', description: 'Representación en procesos de asilo afirmativo y defensivo.'},
    { icon: <ArrowPathIcon className="w-10 h-10 text-[#C09568]" />, title: 'Ajustes de Estatus', description: 'Proceso para obtener la Green Card sin salir de los Estados Unidos.'},
    { icon: <BriefcaseIcon className="w-10 h-10 text-[#C09568]" />, title: 'Permisos de Trabajo', description: 'Autorización de Empleo (EAD) para diversas categorías migratorias.'},
    { icon: <DocumentCheckIcon className="w-10 h-10 text-[#C09568]" />, title: 'Remoción de Condiciones', description: 'Peticiones para remover las condiciones de la residencia permanente.'},
    { icon: <GlobeAltIcon className="w-10 h-10 text-[#C09568]" />, title: 'Visa EB-2 por Interés Nacional', description: 'Residencia para profesionales con habilidades excepcionales (NIW).'},
    { icon: <UserGroupIcon className="w-10 h-10 text-[#C09568]" />, title: 'Visa U y VAWA', description: 'Protección para víctimas de crímenes y violencia doméstica.'},
    { icon: <BuildingLibraryIcon className="w-10 h-10 text-[#C09568]" />, title: 'Procesos Consulares', description: 'Gestión de visas de inmigrante a través de embajadas y consulados.'},
  ],
  colombia: [
    { icon: <ScaleIcon className="w-10 h-10 text-[#C09568]" />, title: 'Procesos Penales', description: 'Defensa y representación en todas las etapas del proceso penal.'},
    { icon: <UserGroupIcon className="w-10 h-10 text-[#C09568]" />, title: 'Procesos de Familia', description: 'Asesoría en divorcios, custodia, alimentos y sucesiones.'},
    { icon: <TruckIcon className="w-10 h-10 text-[#C09568]" />, title: 'Tránsito', description: 'Representación legal en accidentes de tránsito y procedimientos.'},
  ],
};
type Country = 'spain' | 'usa' | 'colombia';
const tabs: { key: Country; label: string; countryCode: string }[] = [
  { key: 'spain', label: 'España', countryCode: 'ES' },
  { key: 'usa', label: 'Estados Unidos', countryCode: 'US' },
  { key: 'colombia', label: 'Colombia', countryCode: 'CO' },
];

// 2. Definimos las variantes de animación
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<Country>('spain');
  
  // 3. Configuramos el observer para disparar la animación al hacer scroll
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="servicios" className="bg-brand-dark py-20 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="font-serif text-4xl font-bold text-[#C09568] sm:text-5xl">
            Servicios Legales a la Medida de tu Destino
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Expertise especializado en cada jurisdicción para garantizar el mejor resultado en tu proceso legal.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1, transition: { delay: 0.4 } } : {}}
          className="mt-12 flex justify-center space-x-2 sm:space-x-4"
        >
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold rounded-md transition-colors duration-300 ${activeTab === tab.key ? 'bg-[#C09568] text-white shadow-lg' : 'bg-white text-text-secondary hover:bg-gray-200'}`}>
              <ReactCountryFlag countryCode={tab.countryCode} svg className="mr-2" aria-hidden="true" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* 4. El 'key' es crucial aquí. Fuerza a Framer Motion a re-animar al cambiar de pestaña */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Se anima tan pronto como se monta (al cambiar de tab)
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData[activeTab].map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="mt-4 font-serif text-xl font-bold text-text-primary">{service.title}</h3>
              <p className="mt-2 text-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 5. Eliminamos la animación CSS antigua y el componente dividido. Ahora es más limpio.
export default Services;