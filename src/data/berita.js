// ─────────────────────────────────────────────────────────────
// DATA BERITA & RENCANA — cukup edit file INI saja.
// Otomatis dipakai di 3 tempat:
//   • Halaman Berita      → kartu daftar + filter jenis
//   • Halaman Detail      → gambar utama + isi lengkap
//   • Beranda             → "Berita & Rencana" (4 terbaru)
//
// Cara menambah berita: salin satu blok { ... }, taruh di atas, ubah isinya.
//   - jenis   : "berita" atau "rencana" (huruf kecil)
//   - tanggal : format YYYY-MM-DD, contoh: 2026-09-08
//   - ringkasan : teks singkat untuk kartu daftar
//   - isi       : teks lengkap untuk halaman detail
//   - gambar  : simpan file foto sendiri di folder: public/berita-foto/
// ─────────────────────────────────────────────────────────────

export const semuaBerita = [
  {
    id: 1,
    judul: "Liburan Here We Go",
    jenis: "rencana",
    tanggal: "2026-10-10",
    ringkasan: "Agenda akhir tahun Liburan bersama pemuda pemudi desa dibee.",
    gambar: "/berita-foto/camp.webp",
    isi: "Agenda liburan bersama ini untuk merayakan kesuksesan acara pada bulan agustus dan september kemarin, rencananya pemuda pemudi atau warga desa dibee yang ingin ikut meramaikan liburan dengan tujuan utama yaitu camp di pantai.",
  },
  {
    id: 2,
    judul: "Lomba 17 Agustus untuk anak-anak desa Dibee",
    jenis: "berita",
    tanggal: "2026-08-23",
    ringkasan:
      "untuk memeriahkan bulan kemerdekaan pemuda pemudi desa dibee mengadakan lomba untuk anak-anak.",
    gambar: "/berita-foto/poster lomba.jpeg",
    isi: "Lomba akan diselenggarakan di balai desa dibee pukul 19.00 habis isya sampai selesai.",
  },
  {
    id: 3,
    judul: "Rencana Pemasangan Lampu Jalan RT 03",
    jenis: "rencana",
    tanggal: "2026-10-01",
    ringkasan:
      "Karang Taruna mengajukan proposal pemasangan 5 titik lampu jalan di wilayah RT 03 kepada pemerintah desa.",
    gambar:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    isi: "Merespons keluhan warga mengenai minimnya penerangan jalan di wilayah RT 03, Karang Taruna The Dibee mengambil inisiatif untuk menyusun proposal pemasangan lampu jalan. Proposal yang sudah disusun mencakup 5 titik lokasi strategis yang rawan gelap, estimasi biaya, serta sumber dana yang diajukan melalui Dana Desa. Proposal telah diserahkan kepada Kepala Desa dan sedang dalam proses persetujuan.",
  },
  {
    id: 4,
    judul: "Keberhasilan Bazar UMKM: Omset Capai Rp 15 Juta",
    jenis: "berita",
    tanggal: "2026-08-22",
    ringkasan:
      "Bazar UMKM yang diselenggarakan selama 2 hari berhasil menghasilkan omset total Rp 15 juta dari 20 stan peserta.",
    gambar:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    isi: "Bazar dan Pameran UMKM yang digelar selama dua hari pada 20-21 Agustus 2026 resmi ditutup dengan catatan yang sangat membanggakan. Dari 20 stan peserta yang terdiri dari warga desa dengan usaha rumahan, total omset yang berhasil terkumpul mencapai Rp 15 juta. Produk terlaris meliputi makanan olahan, kerajinan tangan, dan tanaman hias. Karang Taruna berencana mengadakan event serupa dengan skala lebih besar pada tahun depan.",
  },
  {
    id: 5,
    judul: "Rekrutmen Anggota Baru Karang Taruna 2026",
    jenis: "rencana",
    tanggal: "2026-11-01",
    ringkasan:
      "Pendaftaran anggota baru dibuka untuk pemuda-pemudi usia 13-40 tahun warga Desa Dibee.",
    gambar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    isi: "Karang Taruna The Dibee membuka pendaftaran anggota baru periode 2026-2027. Rekrutmen ini terbuka untuk seluruh pemuda-pemudi warga Desa Dibee berusia 13 hingga 40 tahun. Calon anggota baru dapat mendaftarkan diri langsung ke sekretariat setiap malam Minggu, atau menghubungi pengurus lewat WhatsApp. Anggota baru akan mendapatkan seragam, kartu anggota, dan langsung dilibatkan dalam kegiatan terdekat.",
  },

  // ── CONTOH entri baru (salin blok di bawah, taruh di paling atas) ──
  // {
  //   id: 6,                        // ganti dengan angka unik
  //   judul: "Judul Berita Baru",
  //   jenis: "berita",              // "berita" atau "rencana"
  //   tanggal: "2026-12-01",        // format YYYY-MM-DD
  //   ringkasan: "Ringkasan singkat untuk kartu daftar.",
  //   gambar: "/berita-foto/nama-file.jpeg",
  //   isi: "Isi lengkap berita untuk halaman detail.",
  // },
];
