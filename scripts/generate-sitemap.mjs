import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { semuaKegiatan } from "../src/data/kegiatan.js";
import { semuaBerita } from "../src/data/berita.js";

const SITE_URL = process.env.SITE_URL?.replace(/\/$/, "");

if (!SITE_URL) {
  console.warn(
    "SITE_URL belum diset — sitemap dilewati.\n" +
      "Set env SITE_URL saat build/deploy, contoh (PowerShell):\n" +
      '  $env:SITE_URL="https://domain-anda"; npm run sitemap'
  );
  process.exit(0);
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const rute = [
  "/",
  "/struktur",
  "/kegiatan",
  "/berita",
  ...semuaKegiatan.map((kegiatan) => `/kegiatan/${kegiatan.id}`),
  ...semuaBerita.map((berita) => `/berita/${berita.id}`),
];

const daftarUrl = rute
  .map((url) => `  <url><loc>${SITE_URL}${url}</loc></url>`)
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${daftarUrl}
</urlset>
`;

fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);

fs.writeFileSync(
  path.join(root, "public", "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`
);

console.log(`sitemap.xml dibuat: ${rute.length} URL`);
console.log(`robots.txt diperbarui: ${SITE_URL}/sitemap.xml`);
