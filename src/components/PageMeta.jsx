import { useEffect } from "react";

const NAMA_SITUS = "Karang Taruna The Dibee";
const DESKRIPSI_DEFAULT =
  "Website resmi Karang Taruna The Dibee, Desa Dibee, Kecamatan Kalitengah, Lamongan. Informasi kegiatan, berita, dan rencana organisasi.";
const GAMBAR_DEFAULT = "/og-image.jpg";

function pasangMeta(atribut, kunci, isi) {
  if (!isi) return;

  let elemen = document.head.querySelector(`meta[${atribut}="${kunci}"]`);

  if (!elemen) {
    elemen = document.createElement("meta");
    elemen.setAttribute(atribut, kunci);
    document.head.appendChild(elemen);
  }

  elemen.setAttribute("content", isi);
}

/**
 * Mengatur title, description, Open Graph, Twitter Card, dan canonical
 * sesuai halaman yang sedang dibuka.
 *
 * Catatan: tag ini diubah lewat JavaScript. Google bisa membacanya,
 * tetapi pratinjau WhatsApp/Facebook tetap memakai tag statis di index.html.
 */
export default function PageMeta({
  title,
  description = DESKRIPSI_DEFAULT,
  image = GAMBAR_DEFAULT,
  type = "website",
}) {
  useEffect(() => {
    const judulLengkap = title ? `${title} — ${NAMA_SITUS}` : NAMA_SITUS;
    const gambarAbsolut = new URL(image, window.location.origin).href;
    const urlHalaman = `${window.location.origin}${window.location.pathname}`;

    document.title = judulLengkap;

    pasangMeta("name", "description", description);

    pasangMeta("property", "og:title", judulLengkap);
    pasangMeta("property", "og:description", description);
    pasangMeta("property", "og:type", type);
    pasangMeta("property", "og:image", gambarAbsolut);
    pasangMeta("property", "og:url", urlHalaman);
    pasangMeta("property", "og:site_name", NAMA_SITUS);
    pasangMeta("property", "og:locale", "id_ID");

    pasangMeta("name", "twitter:card", "summary_large_image");
    pasangMeta("name", "twitter:title", judulLengkap);
    pasangMeta("name", "twitter:description", description);
    pasangMeta("name", "twitter:image", gambarAbsolut);

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", urlHalaman);
  }, [title, description, image, type]);

  return null;
}
