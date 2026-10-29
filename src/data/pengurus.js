// ─────────────────────────────────────────────────────────────
// DATA PENGURUS — cukup edit file INI saja.
// Tampil di halaman Struktur.
//   - id         : angka unik, jangan sama dengan entri lain
//   - nama       : nama lengkap pengurus
//   - jabatan    : jabatan di organisasi
//   - keterangan : penjelasan singkat tugas
//   - foto       : file di public/foto-pengurus/; kosongkan ("") jika belum ada
// ─────────────────────────────────────────────────────────────

export const daftarPengurus = [
  {
    id: 1,
    nama: "REVALDO WIDI PURWANTO",
    jabatan: "KETUA",
    keterangan:
      "Penanggung jawab umum dan pengarah seluruh kegiatan kepemudaan.",
    foto: "/foto-pengurus/kurt.jpg",
  },
  {
    id: 2,
    nama: "GALANG TIRTA",
    jabatan: "WAKIL KETUA",
    keterangan: "Pembantu umum ketua dan menggantikan ketua ketika tidak ada.",
    foto: "",
  },
  {
    id: 3,
    nama: "ANI",
    jabatan: "SEKRETARIS",
    keterangan: "Mengelola administrasi, surat-menyurat, dan arsip dokumen.",
    foto: "/foto-pengurus/avril lavigne.jpg",
  },
  {
    id: 4,
    nama: "NOVI",
    jabatan: "SEKRETARIS 2",
    keterangan: "Membantu sekretaris umum mengelola administrasi",
    foto: "",
  },
  {
    id: 5,
    nama: "RIVALDY SEPTA HERNANDA",
    jabatan: "BENDAHARA",
    keterangan: "Mengelola keuangan organisasi dan membuat laporan keuangan.",
    foto: "/foto-pengurus/GOAT.jpg",
  },
  {
    id: 6,
    nama: "INDAH AURA DARMA",
    jabatan: "BENDAHARA 2",
    keterangan:
      "Membantu bendahara umum mengelola keuangan dan membuat laporan keuangan",
    foto: "/foto-pengurus/RYUJIN.jpg",
  },
  {
    id: 7,
    nama: "YUSUF FADHILAH",
    jabatan: "SUMBER DAYA",
    keterangan: "Mengelola sumber daya yang ada di organisasi",
    foto: "",
  },
  {
    id: 8,
    nama: "DHAVA SEFTYAN MURIANTO",
    jabatan: "IPTEK",
    keterangan: "Mengelola Teknologi informasi dan komunikasi",
    foto: "/foto-pengurus/dhava.jpeg",
  },
];
