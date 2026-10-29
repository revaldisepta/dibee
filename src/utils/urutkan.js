function nilaiWaktu(tanggalISO) {
  const waktu = new Date(tanggalISO).getTime();
  return Number.isNaN(waktu) ? 0 : waktu;
}

/**
 * Mengembalikan salinan array yang diurutkan dari tanggal terbaru.
 * Array asli tidak diubah (tidak dimutasi).
 */
export function urutkanTerbaru(daftar) {
  return [...daftar].sort(
    (a, b) => nilaiWaktu(b.tanggal) - nilaiWaktu(a.tanggal)
  );
}
