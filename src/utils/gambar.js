/**
 * Mengubah path gambar asli menjadi path thumbnail WebP.
 *
 * Contoh:
 *   /kegiatan-foto/futsal/futsal1.jpeg
 *   -> /kegiatan-foto/futsal/futsal1-thumb.webp
 *
 * Gambar eksternal (http/https) dibiarkan apa adanya.
 */
export function thumbSrc(src) {
  if (
    !src ||
    src.startsWith("//") ||
    /^https?:\/\//i.test(src) ||
    src.startsWith("data:")
  ) {
    return src;
  }

  if (src.endsWith("-thumb.webp")) {
    return src;
  }

  return src.replace(/\.(jpe?g|png|webp)$/i, "-thumb.webp");
}
