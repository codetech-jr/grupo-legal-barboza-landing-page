// src/components/layout/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';
// 1. Importamos las herramientas de animación
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// --- No hay cambios en la data ---
const quickLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que-elegirnos', label: 'Sobre Nosotros' },
  { href: '#proceso', label: 'Nuestro Proceso' },
  { href: '#testimonios', label: 'Testimonios' },
];

const supportLinks = [
  { href: '#contacto', label: 'Contacto' },
  { href: '/faqs', label: 'Preguntas Frecuentes' },
  { href: '/politica-privacidad', label: 'Política de Privacidad' },
  { href: '/terminos-servicio', label: 'Términos de Servicio' },
];

const offices = [
  { country: 'España', phone: '+34 91 123 4567' },
  { country: 'Colombia', phone: '+57 312 219 5691' },
];

const socialMedia = [
  { href: 'https://www.instagram.com/grupolegalbarboza', icon: <FaInstagram /> },
  { href: 'http://www.tiktok.com/@grupolegalbarboza', icon: <FaTiktok /> },
  { href: 'http://wa.me/34637248183', icon: <FaWhatsapp /> },
];

  const linkContainerClasses = "hover:text-white transition-colors duration-200 inline-flex items-center group";
  const linkTextClasses = "pb-0.5 border-b border-transparent group-hover:border-[#718096] transition-colors duration-200";

// 2. Definimos las variantes de animación
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

const Footer = () => {
  // 3. Configuramos useInView para detectar el footer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Se activa pronto al ser el final de la página
  });

  return (
    // 4. Convertimos el footer en un componente 'motion' y le asignamos el ref
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bg-brand-dark text-gray-300 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Columna 1: Logo, Descripción y Redes Sociales */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo-2.png" alt="Logo Deylena Barboza en blanco" width={200} height={80} />
            </Link>
            <p className="mt-4 text-sm">
              Expertos en derecho migratorio internacional. Te acompañamos en cada paso de tu proceso migratorio.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              {socialMedia.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white bg-white/10 hover:bg-[#C09568] p-3 rounded-full transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2: Enlaces Rápidos y Soporte */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-white tracking-wider">Enlaces Rápidos</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {quickLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="hover:text-[#C09568] transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white tracking-wider">Soporte</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {supportLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="hover:text-[#C09568] transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Columna 3: Nuestras Oficinas */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-white tracking-wider">Nuestras Oficinas</h3>
            <div className="mt-4 space-y-4 text-sm">
              {offices.map(office => (
                <div key={office.country}>
                  <p className="font-semibold text-[#C09568]">{office.country}</p>
                  <p>{office.phone}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sub-Footer: Copyright y enlaces legales */}
      <motion.div variants={itemVariants} className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Deylena Barboza. Todos los derechos reservados.</p>
          <p className="text-center text-neutral-400 text-sm pt-2 md:pt-3">
            Created by <Link href="https://www.codetechjr.com/" target="_blank" rel="noopener noreferrer" className={linkContainerClasses}><span className={linkTextClasses}>Codetech Junior</span><MdOutlineArrowOutward className="ml-1 w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity"/></Link>.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/avisos-legales" className="hover:text-white">Avisos Legales</Link>
            <Link href="/politica-cookies" className="hover:text-white">Política de Cookies</Link>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;