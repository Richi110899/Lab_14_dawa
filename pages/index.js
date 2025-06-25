// Importa el componente 'Head' de Next.js, que permite insertar contenido dentro del <head> del HTML
import Head from "next/head";

// Componente principal de la página, que se exporta por defecto
export default function Home() {
  return (
    <>
      {/* Head permite agregar metaetiquetas y título a la página */}
      <Head>
        {/* Título que aparecerá en la pestaña del navegador */}
        <title>Mi Sitio Optimizado - Home</title>

        {/* Meta descripción que ayuda al SEO (aparece en los resultados de búsqueda) */}
        <meta
          name="description"
          content="Aprende sobre optimización SEO y rendimiento en Next.js."
        />

        {/* Palabras clave relevantes para buscadores */}
        <meta name="keywords" content="Next.js, SEO, optimización web" />

        {/* Metaetiquetas para Open Graph (para compartir en redes sociales como Facebook) */}
        <meta property="og:title" content="Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Descubre técnicas avanzadas para mejorar tu web con Next.js."
        />

        {/* Imagen que se mostrará cuando se comparta la página en redes sociales */}
        <meta property="og:image" content="/images/seo-image.png" />

        {/* Tipo de contenido (en este caso, un sitio web) */}
        <meta property="og:type" content="website" />
      </Head>

      {/* Contenido visible de la página */}
      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
    </>
  );
}
