# Sitio Web Oficial de Grupo Legal Barboza

![Banner del Sitio](https://via.placeholder.com/1200x630.png?text=Sitio+Web+de+Grupo+Legal+Barboza) <!-- Reemplaza esto con una captura de pantalla de la sección Hero -->

Landing page moderna y profesional para el despacho de abogados Grupo Legal Barboza, especializado en derecho migratorio y servicios legales para **España 🇪🇸, EE. UU. 🇺🇸 y Colombia 🇨🇴**.

**➡️ Enlace al sitio en producción:** [www.grupolegalbarboza.com](https'://www.grupolegalbarboza.com) <!-- Reemplaza esto con tu dominio real cuando lo tengas -->

---

## ✨ Características Principales

-   **Diseño Totalmente Adaptable (Responsive):** Experiencia de usuario perfecta en móviles, tabletas y ordenadores de escritorio.
-   **Animaciones Profesionales:** Todas las secciones cuentan con animaciones de entrada fluidas y elegantes al hacer scroll, implementadas con **Framer Motion**.
-   **Componentes Interactivos:**
    -   Sliders dinámicos para el Hero y los Testimonios (`Embla Carousel`).
    -   Contadores animados para métricas de éxito (`React CountUp`).
    -   Banderas SVG de alta calidad para una identidad visual consistente (`React Country Flag`).
-   **Optimización para SEO:** Construido con **Next.js (App Router)** para un renderizado del lado del servidor (SSR) que garantiza una excelente indexación en buscadores.
-   **Experiencia de Usuario (UX):**
    -   Banner de consentimiento de cookies funcional que guarda la preferencia del usuario.
    -   Llamada a la acción (CTA) directa a WhatsApp para una conversión inmediata.
    -   Páginas legales dedicadas (`/terminos-servicio`, `/politica-privacidad`, etc.).

---

## 🎨 Stack Tecnológico

Este proyecto fue construido utilizando un stack tecnológico moderno y escalable:

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Librería de UI:** [React](https://react.dev/)
-   **Estilizado:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
-   **Plugins Adicionales:**
    -   `react-icons` para iconografía.
    -   `react-country-flag` para las banderas.
    -   `embla-carousel-react` para los sliders.
    -   `react-countup` y `react-intersection-observer` para animaciones al hacer scroll.
-   **Despliegue:** [Vercel](https://vercel.com/)

---

## 🚀 Cómo Empezar (Desarrollo Local)

Sigue estos pasos para levantar una copia del proyecto en tu máquina local.

### Prerrequisitos

-   Node.js (versión 18.x o superior)
-   npm o yarn

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/grupo-legal-barboza-web.git
    ```

2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd grupo-legal-barboza-web
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## 🛠️ Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

-   `npm run dev`: Inicia la aplicación en modo de desarrollo.
-   `npm run build`: Compila la aplicación para producción.
-   `npm run start`: Inicia un servidor de producción.
-   `npm run lint`: Ejecuta el linter para revisar la calidad del código.

---

## 📂 Estructura del Proyecto

La estructura de los componentes está organizada para ser intuitiva y escalable:

```
src/
├── app/                  # Rutas y páginas principales
├── components/
│   ├── layout/           # Componentes reutilizables (Header, Footer, etc.)
│   └── sections/         # Componentes de cada sección de la landing page
└── ...
```