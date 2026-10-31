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
    jenis: "agenda",
    tanggal: "2026-10-10",
    ringkasan: "Agenda akhir tahun Liburan bersama pemuda pemudi desa dibee.",
    gambar: "/berita-foto/camp.webp",
    isi: "Agenda liburan bersama ini untuk merayakan kesuksesan acara pada bulan agustus dan september kemarin, untuk info lebih lanjut tunggu postingan terbaru nanti.",
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
    judul: "Pemilihan Ketua Kartar Baru",
    jenis: "berita",
    tanggal: "2026-10-01",
    ringkasan: ".",
    gambar: "/kegiatan-foto/ketuakartar.jpeg",
    isi: "",
  },
  {
    id: 4,
    judul: "Rekrutmen Anggota Baru Karang Taruna 2026",
    jenis: "agenda",
    tanggal: "2026-09-09",
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
