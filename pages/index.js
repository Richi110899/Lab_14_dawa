// Importa la función dynamic de Next.js para carga dinámica de componentes
import dynamic from "next/dynamic";

// Define un componente que se cargará dinámicamente sin renderizado en el servidor (ssr: false)
const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false, // Desactiva renderizado en servidor para este componente
});

// Componente principal de la página Home
export default function Home() {
  return (
    <>
      {/* Título visible en la página */}
      <h1>Bienvenido</h1>

      {/* Inserta el componente cargado dinámicamente */}
      <DynamicComponent />
    </>
  );
}
