// src/app/politica-privacidad/page.tsx
import LegalPageLayout from "@/components/layout/LegalPageLayout";

const PoliticaDePrivacidadPage = () => {
  return (
    <LegalPageLayout title="Política de Privacidad">
      <h2>1. Recopilación de Información</h2>
      <p>Recopilamos información que nos proporcionas directamente, como cuando te pones en contacto a través de WhatsApp o solicitas una consulta. Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono y cualquier otro detalle que elijas proporcionar.</p>

      <h2>2. Uso de su Información</h2>
      <p>Usamos la información que recopilamos para:</p>
      <ul>
        <li>Proveer, mantener y mejorar nuestros servicios.</li>
        <li>Responder a tus comentarios, preguntas y solicitudes.</li>
        <li>Comunicarnos contigo sobre nuestros servicios y noticias.</li>
      </ul>

      <h2>3. Seguridad de los Datos</h2>
      <p>Tomamos medidas razonables para proteger la información sobre ti de la pérdida, el robo, el uso indebido y el acceso no autorizado, la divulgación, la alteración y la destrucción.</p>

      <h2>4. Derechos del Usuario</h2>
      <p>Dependiendo de tu jurisdicción, puedes tener ciertos derechos con respecto a tu información personal, como el derecho a acceder, corregir o eliminar los datos que tenemos sobre ti.</p>
    </LegalPageLayout>
  );
};

export default PoliticaDePrivacidadPage;