// src/components/layout/CookieBanner.tsx
'use client'; // Este componente necesita interactuar con el estado y el navegador

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  // Estado para controlar la visibilidad del banner
  const [showBanner, setShowBanner] = useState(false);

  // useEffect se ejecuta solo en el lado del cliente, después de que la página carga
  useEffect(() => {
    // Verificamos si el usuario ya ha dado su consentimiento previamente
    const consent = localStorage.getItem('cookie_consent');
    // Si no hay registro de consentimiento ('null'), mostramos el banner
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  // Función para manejar la aceptación o rechazo
  const handleConsent = () => {
    // Guardamos la elección en el localStorage del navegador para no volver a preguntar
    localStorage.setItem('cookie_consent', 'true');
    // Ocultamos el banner con una animación
    setShowBanner(false);
  };

  return (
    // AnimatePresence permite la animación de salida del componente
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: '100%' }} // Empieza fuera de la pantalla, abajo
          animate={{ y: '0%' }}   // Se desliza hacia arriba a su posición
          exit={{ y: '100%' }}    // Se desliza hacia abajo al salir
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed bottom-0 left-0 right-0 bg-brand-dark text-white p-5 z-50 shadow-lg"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4  bg-[#192A3E]/95 backdrop-blur-sm p-4 rounded-md">
            <p className="text-sm text-center md:text-left">
              Este sitio web utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.
              <Link href="/politica-cookies" className="font-bold underline hover:text-[#C09568] ml-2">
                Leer más
              </Link>
            </p>
            <div className="flex-shrink-0 flex items-center gap-4">
              <button
                onClick={handleConsent}
                className="bg-gray-600 hover:bg-gray-700 text-white text-sm font-bold py-2 px-4 rounded-md transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={handleConsent}
                className="bg-[#C09568] hover:opacity-90 text-white text-sm font-bold py-2 px-4 rounded-md transition-opacity"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;