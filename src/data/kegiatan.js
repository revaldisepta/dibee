// ─────────────────────────────────────────────────────────────
// DATA KEGIATAN — cukup edit file INI saja.
// Otomatis dipakai di 3 tempat:
//   • Halaman Kegiatan        → kartu daftar + filter tahun
//   • Halaman Detail Kegiatan → foto utama + galeri (klik = zoom)
//   • Beranda                 → "Kegiatan Terbaru" (4 tanggal terbaru)

// Cara menambah kegiatan baru: salin satu blok { ... }, letakkan di mana saja,
// lalu ubah isinya.
//   - id      : angka unik, jangan sama dengan entri lain
//   - tanggal : format YYYY-MM-DD, contoh 2023-08-28
//   - foto    : gambar cover (kartu daftar + foto utama halaman detail)
//   - galeri  : foto tambahan di halaman detail
// ─────────────────────────────────────────────────────────────

export const semuaKegiatan = [
  {
    id: 1,
    judul: "Juara 2 Futsal Penuger Cup",
    tanggal: "2024-09-05",
    deskripsi:
      "Alhamdulillah atas pencapaian yang luar biasa untuk tim futsal Dibee fc yang telah berjuang dengan maksimal.",
    foto: "/kegiatan-foto/detail-kg/futsal4.jpeg",
    galeri: [
      "/kegiatan-foto/detail-kg/futsal1.jpeg",
      "/kegiatan-foto/detail-kg/futsal2.jpeg",
      "/kegiatan-foto/detail-kg/futsal3.jpeg",
      "/kegiatan-foto/detail-kg/dapil.jpeg",
    ],
  },
  {
    id: 2,
    judul: "Dibee fc launching jersey dan syukuran",
    tanggal: "2023-03-17",
    deskripsi:
      "Syukuran awal pembentukan tim sepak bola Desa Dibee DFC dan launching jersey baru.",
    foto: "/kegiatan-foto/detail-kg/dfc-blds.jpeg",
    galeri: [
      "/kegiatan-foto/detail-kg/dfc,blds2.jpeg",
      "/kegiatan-foto/detail-kg/dfc-blds3.jpeg",
      "/kegiatan-foto/detail-kg/dfc-blds4.jpeg",
      "/kegiatan-foto/detail-kg/dfc-blds5.jpeg",
    ],
  },
  {
    id: 3,
    judul: "Karnaval Desa Dibee 2023",
    tanggal: "2023-08-28",
    deskripsi:
      "Karnaval di desa dibee untuk memeriahkan bulan kemerdekaan indonesia 17 Agustus 1945.",
    foto: "/kegiatan-foto/karnaval2023/krv1.jpeg",
    galeri: [
      "/kegiatan-foto/karnaval2023/krv2.jpeg",
      "/kegiatan-foto/karnaval2023/krv3.jpeg",
      "/kegiatan-foto/karnaval2023/krv4.jpeg",
      "/kegiatan-foto/karnaval2023/krv5.jpeg",
      "/kegiatan-foto/karnaval2023/krv6.jpeg",
      "/kegiatan-foto/karnaval2023/krv7.jpeg",
      "/kegiatan-foto/karnaval2023/krv8.jpeg",
      "/kegiatan-foto/karnaval2023/krv9.jpeg",
      "/kegiatan-foto/karnaval2023/krv10.jpeg",
      "/kegiatan-foto/karnaval2023/krv11.jpeg",
      "/kegiatan-foto/karnaval2023/krv12.jpeg",
      "/kegiatan-foto/karnaval2023/krv13.jpeg",
      "/kegiatan-foto/karnaval2023/krv14.jpeg",
    ],
  },
  {
    id: 4,
    judul: "Lomba Sepak Bola antar RT",
    tanggal: "2023-08-10",
    deskripsi:
      "Lomba sepak bola berdaster antar RT untuk bapak-bapak dan anak muda desa dibee.",
    foto: "/kegiatan-foto/lomba-minsok/10.jpeg",
    galeri: [
      "/kegiatan-foto/lomba-minsok/1.jpeg",
      "/kegiatan-foto/lomba-minsok/2.jpeg",
      "/kegiatan-foto/lomba-minsok/3.jpeg",
      "/kegiatan-foto/lomba-minsok/4.jpeg",
      "/kegiatan-foto/lomba-minsok/5.jpeg",
      "/kegiatan-foto/lomba-minsok/6.jpeg",
      "/kegiatan-foto/lomba-minsok/7.jpeg",
      "/kegiatan-foto/lomba-minsok/8.jpeg",
      "/kegiatan-foto/lomba-minsok/9.jpeg",
      "/kegiatan-foto/lomba-minsok/11.jpeg",
      "/kegiatan-foto/lomba-minsok/12.jpeg",
      "/kegiatan-foto/lomba-minsok/13.jpeg",
      "/kegiatan-foto/lomba-minsok/16.jpeg",
    ],
  },
  {
    id: 5,
    judul: "Bazar dan Pameran UMKM",
    tanggal: "2023-04-05",
    deskripsi:
      "Pameran produk usaha kecil warga desa untuk mengenalkan potensi ekonomi lokal.",
    foto: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    galeri: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=75",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=75",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=75",
    ],
  },
];
