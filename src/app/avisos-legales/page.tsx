// src/app/avisos-legales/page.tsx
import React from "react";
import LegalPageLayout from "@/components/layout/LegalPageLayout";

const AvisosLegalesPage = () => {
  return (
    <LegalPageLayout title="Avisos Legales">
      
      <h2>1. Información del Titular del Sitio Web</h2>
      <p>De acuerdo con la legislación vigente, se informa que este sitio web es propiedad de Deylena Barboza, con domicilio profesional en Travesía doctor Sánchez 1. Madrid. España. 28018 y correo electrónico de contacto grupolegalbarboza@gmail.com.</p>

      <h2>2. Objeto</h2>
      <p>El presente aviso legal regula el uso del sitio web grupolegalbarboza.com. La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.</p>

      <h2>3. Propiedad Intelectual e Industrial</h2>
      <p>Todos los derechos de propiedad intelectual e industrial del sitio web y de sus contenidos (textos, imágenes, diseños, etc.) son propiedad del titular del sitio web o, en su caso, de terceros. Queda expresamente prohibida la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de este sitio web con fines comerciales.</p>
    </LegalPageLayout>
  );
};

export default AvisosLegalesPage;