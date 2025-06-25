const BASE_URL = "https://lab-14-dawa.vercel.app";

export default async function handler(req, res) {
  const urls = ["/", "/blog", "/contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n
    ${urls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}\n
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
