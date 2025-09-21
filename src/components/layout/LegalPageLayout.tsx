// src/components/layout/LegalPageLayout.tsx
'use client';
import { motion } from 'framer-motion';

// Este componente recibe un título y el contenido (children)
const LegalPageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white"
    >
      <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-text-primary sm:text-5xl">{title}</h1>
          <p className="mt-4 text-text-secondary">Última actualización: 20 de Septiembre de 2025</p>
          {/* La clase 'prose' de Tailwind Typography formatea todo el texto de adentro */}
          <div className="mt-12 prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LegalPageLayout;