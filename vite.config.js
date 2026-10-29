import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = process.env.SITE_URL?.replace(/\/$/, "");

/**
 * Saat build/deploy, isi env SITE_URL agar og:image, og:url, dan canonical
 * di index.html memakai URL absolut. Tanpa env ini, build tetap berjalan
 * dengan path relatif seperti biasa.
 */
function siteUrlPlugin() {
  return {
    name: "site-url",
    transformIndexHtml(html) {
      if (!siteUrl) return html;

      return html
        .replaceAll(
          'content="/og-image.jpg"',
          `content="${siteUrl}/og-image.jpg"`
        )
        .replace(
          "</head>",
          `  <link rel="canonical" href="${siteUrl}/" />\n` +
            `    <meta property="og:url" content="${siteUrl}/" />\n` +
            "  </head>"
        );
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
});
