const BASE_URL = "https://mi-sitio.com"; // Definimos la URL base del sitio

export default async function handler(req, res) {
  // Función que maneja la petición API
  const urls = ["/", "/blog", "/contacto"]; // Array con las rutas a incluir en el sitemap

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n
    ${urls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}\n
  </urlset>`; // Generamos el contenido XML del sitemap con las URLs completas

  res.setHeader("Content-Type", "text/xml"); // Indicamos que la respuesta es XML
  res.write(sitemap); // Enviamos el sitemap en la respuesta
  res.end(); // Finalizamos la respuesta
}
