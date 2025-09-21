// src/app/politica-cookies/page.tsx
import LegalPageLayout from "@/components/layout/LegalPageLayout";

const PoliticaCookiesPage = () => {
  return (
    <LegalPageLayout title="Política de Cookies">

      <h2>1. ¿Qué son las Cookies?</h2>
      <p>Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.</p>

      <h2>2. Cookies Utilizadas en este Sitio Web</h2>
      <p>Siguiendo las directrices de las agencias de protección de datos, procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.</p>
      <ul>
        <li>
          <strong>Cookies técnicas:</strong> Son aquellas imprescindibles para el funcionamiento del sitio web. Por ejemplo, las que gestionan la sesión de un usuario.
        </li>
        <li>
          <strong>Cookies de análisis:</strong> Este sitio web puede utilizar Google Analytics o Vercel Analytics para recopilar información anónima, como el número de visitantes del sitio o las páginas más populares. Mantener esta cookie nos ayuda a mejorar nuestra web.
        </li>
      </ul>

      <h2>3. Desactivación o Eliminación de Cookies</h2>
      <p>En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando. Le recomendamos consultar la ayuda de su navegador para más información.</p>
    </LegalPageLayout>
  );
};

export default PoliticaCookiesPage;