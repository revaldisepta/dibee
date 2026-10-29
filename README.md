# Rancangan Website Karang Taruna

Ringkasan keputusan, fitur, data, keamanan, dan tahapan pengerjaan. Dokumen ini berstatus **rancangan** dan masih bisa direvisi sebelum coding dimulai.

## Daftar Isi

1. [Ringkasan proyek](#1-ringkasan-proyek)
2. [Keputusan yang sudah diambil](#2-keputusan-yang-sudah-diambil)
3. [Halaman dan fitur](#3-halaman-dan-fitur)
4. [Struktur data](#4-struktur-data)
5. [Status draft dan terbit](#5-status-draft-dan-terbit)
6. [Peran pengguna](#6-peran-pengguna)
7. [Teknologi](#7-teknologi)
8. [Foto dan penyimpanan](#8-foto-dan-penyimpanan)
9. [Keamanan](#9-keamanan)
10. [Privasi](#10-privasi)
11. [Agar bisa dicari di Google](#11-agar-bisa-dicari-di-google)
12. [Tahapan pengerjaan](#12-tahapan-pengerjaan)
13. [Pengujian keamanan sebelum dipakai](#13-pengujian-keamanan-sebelum-dipakai)
14. [Belum diputuskan dan hal yang perlu diverifikasi](#14-belum-diputuskan-dan-hal-yang-perlu-diverifikasi)

---

## 1. Ringkasan proyek

| Aspek | Keterangan |
|---|---|
| Jenis organisasi | Karang Taruna |
| Tujuan | Website profil dan dokumentasi kegiatan organisasi |
| Pengunjung | Hanya melihat (baca saja) |
| Pengelola | Beberapa admin, sebagian bukan programmer |
| Anggaran | Rp0 untuk saat ini |
| Tujuan pribadi | Belajar React hingga deploy dan muncul di Google |
| Target waktu | Tidak ada tenggat, murni belajar |
| Perkiraan volume | Sekitar 6-7 kegiatan per tahun, sekitar 10 foto per kegiatan (kurang lebih 70 foto per tahun) |

---

## 2. Keputusan yang sudah diambil

| Topik | Keputusan |
|---|---|
| Menu LPJ | **Dibatalkan** (struktur data tetap bisa ditambah nanti) |
| Fitur cetak | **Tidak ada** |
| Tombol bagikan | **Tidak ada** (orang tetap bisa menyalin alamat halaman sendiri) |
| Riwayat periode struktur organisasi | **Tidak ada** |
| Berita dan rencana | **Digabung** menjadi satu jenis konten dengan penanda jenis |
| Status konten | **Draft dan Terbit** |
| Jumlah admin | **Lebih dari satu**, minimal dua |
| Domain | **Ditunda**, memakai alamat gratis dari penyedia hosting |
| Google | Tetap menjadi tujuan, dan **tidak perlu bayar** |

---

## 3. Halaman dan fitur

### 3.1 Halaman publik (hanya melihat)

| Halaman | Isi |
|---|---|
| **Beranda** | Logo, teks tentang organisasi, foto, kegiatan terbaru, kontak/lokasi |
| **Struktur organisasi** | Gambar bagan bertingkat, lalu kartu per orang (foto, nama, jabatan, keterangan) |
| **Kegiatan** | Daftar kegiatan dengan **filter tahun**. Klik satu kegiatan untuk membuka halaman detail berisi galeri foto |
| **Berita / Rencana** | Satu halaman untuk pengumuman dan rencana ke depan, diurutkan berdasarkan tanggal |

Fitur untuk pengunjung saat ini: **ganti tahun** pada halaman Kegiatan. Fitur tambahan (pencarian, galeri) boleh menyusul, struktur data dirancang agar mudah ditambah.

### 3.2 Panel admin (setelah login)

| Menu | Fungsi |
|---|---|
| Profil organisasi | Ubah logo, teks tentang, foto beranda, kontak, media sosial |
| Anggota / struktur | Tambah, ubah, hapus orang, atur urutan, unggah gambar bagan |
| Kegiatan | CRUD kegiatan, unggah banyak foto sekaligus, atur foto sampul dan urutan foto |
| Berita / rencana | CRUD, pilih jenis, atur tanggal |
| Akun (khusus Admin) | Undang dan kelola editor/admin |

Tambahan di semua menu konten: **status Draft/Terbit** dan **konfirmasi sebelum hapus**.

### 3.3 Keputusan desain tampilan

- Mayoritas pengunjung diperkirakan memakai HP dan koneksi yang kadang lambat, jadi tampilan **mobile-first**.
- Daftar memakai gambar kecil (thumbnail), gambar penuh dimuat hanya saat dibuka.

---

## 4. Struktur data

| Data | Isi utama |
|---|---|
| **Profil organisasi** (satu baris) | nama, logo, teks tentang, foto, kontak, media sosial, gambar bagan |
| **Anggota** | nama, jabatan, foto, keterangan, urutan tampil |
| **Kegiatan** | judul, tanggal, deskripsi, foto sampul, status, waktu terbit |
| **Foto kegiatan** | milik satu kegiatan: file gambar, keterangan, urutan |
| **Berita / rencana** | judul, jenis, tanggal, isi, gambar, status, waktu terbit |
| **Peran pengguna** | akun mana yang menjadi Editor atau Admin |

Catatan:
- Satu kegiatan memiliki banyak foto (hubungan satu-ke-banyak), sehingga database berbentuk tabel (SQL) cocok.
- **Filter tahun** diambil dari tanggal kegiatan, tidak perlu kolom tahun tersendiri.
- Setiap baris mencatat siapa yang membuat, siapa yang mengubah terakhir, dan kapan.

---

## 5. Status draft dan terbit

### 5.1 Arti status

| Status | Artinya | Dilihat oleh |
|---|---|---|
| **Draft** | Masih disiapkan | Hanya Editor dan Admin |
| **Terbit** | Final dan dipublikasikan | Semua orang |
| **Diarsipkan** (opsional) | Disembunyikan dari daftar, tidak dihapus | Hanya Editor dan Admin |

### 5.2 Siklus

```
Draft  →  Terbit  →  Diarsipkan
  ↑          │            │
  └──────────┴────────────┘     (bisa ditarik kembali ke Draft)

Hapus = ditandai "terhapus" dulu (soft delete), bukan langsung dihilangkan
```

### 5.3 Aturan standar

- Konten baru **otomatis Draft**.
- Syarat sebelum terbit (divalidasi di database, bukan hanya formulir): judul, tanggal, dan foto sampul terisi.
- Waktu terbit dicatat otomatis.
- Nilai status dibatasi pada daftar yang diizinkan.
- Hapus berarti **soft delete**; penghapusan permanen dilakukan terpisah dan sengaja.
- Formulir admin menyediakan dua tombol: **Simpan sebagai draft** dan **Terbitkan**.

### 5.4 Peringatan penting

Menyaring draft hanya di React **tidak aman**, karena data draft sudah terkirim ke browser pengunjung dan terlihat di DevTools. Penyaringan wajib dilakukan oleh **aturan di database**, sehingga draft tidak pernah sampai ke pengunjung.

---

## 6. Peran pengguna

| Peran | Hak |
|---|---|
| **Pengunjung** (tanpa login) | Hanya membaca konten berstatus Terbit |
| **Editor** | Membuat dan mengubah konten, menyimpan sebagai Draft |
| **Admin** | Semua hak Editor, plus menerbitkan, menarik, menghapus, dan mengelola akun |

Catatan:
- Mulai dengan satu peran Admin bila terasa rumit, tetapi rancang tabelnya agar peran mudah ditambah.
- **Peran tidak boleh disimpan di data yang bisa diubah pengguna sendiri.** Simpan di tabel khusus yang hanya bisa ditulis dari sisi server, supaya Editor tidak bisa mengangkat dirinya menjadi Admin.

### Matriks akses per tabel

| Tabel | Pengunjung | Editor | Admin |
|---|---|---|---|
| Profil organisasi, anggota | Baca semua | Ubah | Ubah |
| Kegiatan, berita | Baca **hanya yang Terbit dan belum dihapus** | Baca semua, buat, ubah | Semua, termasuk terbitkan dan hapus |
| Foto kegiatan | Baca **hanya jika kegiatan induknya Terbit** | Tambah, ubah | Semua |
| Peran dan akun | Tidak ada akses | Tidak ada | Kelola |

---

## 7. Teknologi

| Kebutuhan | Pilihan | Alasan |
|---|---|---|
| Tampilan | **React** (Vite) + React Router | Paling mudah dipelajari |
| Database, login, penyimpanan gambar | **Supabase** | Tiga kebutuhan dalam satu layanan, ada paket gratis, cocok untuk data berelasi, aturan akses ditulis di database |
| Hosting | Static hosting gratis (Cloudflare Pages / Netlify / Vercel) | Aman, murah, mudah |
| Domain | Ditunda | Anggaran Rp0 |

Alternatif yang dipertimbangkan: **headless CMS** (panel admin sudah jadi). Lebih cepat untuk admin non-teknis, tetapi tidak melatih pembuatan CRUD sendiri, jadi tidak dipilih.

### Trade-off React biasa (SPA)

- Google bisa mengindeksnya, tetapi kurang andal dan lebih lambat dibanding halaman biasa.
- Pratinjau tautan di WhatsApp tidak menampilkan judul dan gambar per kegiatan.
- Jalur yang dipilih: **mulai dengan React + Vite**, dan pindah ke **Next.js** nanti bila butuh SEO dan pratinjau tautan yang lebih baik.

---

## 8. Foto dan penyimpanan

| Kondisi | Ukuran per foto | Per tahun (sekitar 70 foto) |
|---|---|---|
| Foto HP langsung diunggah | sekitar 3-5 MB | sekitar 200-350 MB |
| Setelah dikecilkan dan dikompres | sekitar 200-400 KB | sekitar 15-30 MB |

Standar yang diterapkan:

| Aspek | Aturan |
|---|---|
| Siapa yang boleh mengunggah | Hanya Editor/Admin yang login |
| Jenis file | Hanya gambar (JPEG, PNG, WebP) |
| Ukuran | Dibatasi, dikompres di browser sebelum unggah (sekitar 1600 px sisi terpanjang) |
| Nama file | Acak (UUID), bukan nama asli |
| Metadata lokasi (EXIF) | Terhapus saat diperkecil |
| Daftar isi folder | Publik tidak boleh melihat daftar seluruh file |
| Tampilan | Thumbnail di daftar, lazy loading |
| Saat kegiatan dihapus permanen | File fotonya ikut dihapus (hindari file yatim) |

**Foto saat Draft:**
- **Praktis:** penyimpanan publik dengan nama acak. Cukup untuk tahap awal.
- **Paling ketat:** foto Draft di penyimpanan privat, dipindah ke publik saat diterbitkan, admin melihatnya lewat tautan sementara. Bisa menjadi peningkatan di tahap akhir.

---

## 9. Keamanan

Acuan: OWASP, dengan risiko utama *Broken Access Control*.

### 9.1 Prinsip dasar

| Prinsip | Artinya |
|---|---|
| Deny by default | Semua ditolak, izin diberikan satu per satu |
| Least privilege | Akun hanya diberi hak minimal |
| Penegakan di server | Aturan ada di database, bukan di React |
| Defense in depth | Beberapa lapis pertahanan |

### 9.2 Aturan database (Row Level Security)

- Aktifkan RLS di **setiap tabel**, termasuk tabel baru yang ditambah belakangan.
- Pisahkan izin baca dan tulis.
- Aturan foto harus memeriksa status kegiatan induknya.
- Batasi kolom yang bisa diubah (Editor tidak boleh mengubah status menjadi Terbit sendiri).

### 9.3 Akun admin

- Pendaftaran publik **dimatikan**; akun dibuat lewat undangan.
- **2FA wajib** untuk semua Editor dan Admin.
- Password panjang dan unik, disimpan di password manager.
- Email **milik organisasi**, bukan email pribadi satu orang.
- **Minimal dua Admin**, dengan prosedur pemulihan akses tercatat.
- Pembatasan percobaan login, sesi dengan batas waktu.
- Tinjau akun secara berkala; cabut akun yang tidak dipakai.

### 9.4 Aplikasi React

| Aturan | Alasan |
|---|---|
| Hanya kunci yang **boleh publik** ada di kode | Semua isi bundle frontend bisa dilihat siapa saja |
| Kunci rahasia tidak pernah di frontend | Kunci ini melewati semua aturan RLS |
| Penjaga rute `/admin` hanya kenyamanan tampilan | Keamanan sebenarnya di database |
| Tidak memakai `dangerouslySetInnerHTML` | Mencegah XSS |
| Validasi input di formulir **dan** di database | Database adalah penjaga terakhir |
| Konfirmasi sebelum hapus dan sebelum terbitkan | Mengurangi salah klik |

### 9.5 Jejak dan pemulihan

- Catat pembuat dan pengubah terakhir pada setiap baris.
- Pertimbangkan audit log sederhana (siapa menerbitkan, menarik, menghapus apa).
- **Cadangan berkala** (database dan foto) di luar layanan utama, dan uji pemulihannya.

### 9.6 Hosting dan akun pendukung

- HTTPS aktif, header keamanan, Cloudflare di depan bila memungkinkan.
- 2FA di GitHub, hosting, Supabase, email, dan Search Console.
- Dependabot dan `npm audit` untuk memantau pustaka rentan.
- File `.env` tidak masuk repository; rahasia diatur lewat dashboard hosting.
- Perlindungan branch utama dan pemindaian secret di GitHub.
- Jika kelak memakai domain sendiri: 2FA, domain lock, auto-renew, bersihkan DNS yang tidak terpakai.

### 9.7 Jika website terlanjur disusupi (misalnya konten judol)

1. Batasi dampak (halaman maintenance atau matikan sementara).
2. Ganti semua kredensial.
3. Cari pintu masuknya sebelum membersihkan.
4. Pulihkan dari cadangan yang bersih.
5. Perkuat pertahanan, lalu ajukan peninjauan ulang di Search Console bila ada peringatan.

---

## 10. Privasi

- Minta **persetujuan** pengurus sebelum nama dan fotonya dipajang.
- Jangan tampilkan nomor HP pribadi, alamat rumah, atau NIK.
- Pilih foto kegiatan dengan hati-hati, **terutama yang memuat anak-anak**.
- Siapkan cara menurunkan foto bila ada yang keberatan (fitur tarik ke Draft membantu).
- Prinsip ini sejalan dengan UU Perlindungan Data Pribadi di Indonesia. Ini bukan nasihat hukum.

---

## 11. Agar bisa dicari di Google

- Muncul di Google itu **gratis**; yang berbayar hanya iklan.
- Domain sendiri **tidak wajib** untuk diindeks. Alamat gratis seperti `nama.pages.dev` bisa didaftarkan ke Google Search Console (verifikasi lewat tag atau file HTML).
- Langkah: daftar Search Console, buat `sitemap.xml`, periksa `robots.txt` dan pastikan tidak ada `noindex` yang terbawa, lalu minta pengindeksan halaman penting.
- Dasar SEO: judul dan deskripsi unik per halaman, struktur heading rapi, gambar bermakna dengan teks alternatif, halaman cepat dan ramah ponsel.
- Harapan realistis: muncul saat orang mencari **nama organisasinya**. Muncul untuk kata umum seperti "karang taruna" sulit dan tidak bisa dijamin. Prosesnya butuh beberapa hari sampai minggu.
- Pantau rutin: Search Console (Security issues) dan pencarian `site:alamatanda` untuk mendeteksi konten asing.

---

## 12. Tahapan pengerjaan

| Tahap | Isi | Yang dipelajari |
|---|---|---|
| **0** | Perkuat dasar JavaScript (immutability, array method, `?.`, `??`), lalu 2-3 latihan React kecil (counter, to-do list, filter daftar) | Komponen, props, state |
| **1** | Semua halaman publik dengan **data contoh di dalam kode**, termasuk filter tahun dan galeri | Routing, list, state, komponen |
| **2** | **Deploy** ke alamat gratis, daftar Search Console, kirim sitemap | Deploy, DNS/hosting dasar, SEO dasar |
| **3** | Pindahkan data ke Supabase, website **membaca** dari database (dengan aturan RLS dasar) | Fetch data, loading, error |
| **4** | Login admin, panel admin, **CRUD** teks, peran Editor/Admin, status Draft/Terbit | Autentikasi, form, keamanan |
| **5** | Unggah foto (kompresi, banyak file, urutan), hapus file bersama datanya | Penyimpanan file |
| **6** | Konfirmasi hapus, soft delete, audit log sederhana, cadangan, uji keamanan, penyempurnaan | Penyempurnaan |

Deploy ditaruh di Tahap 2 supaya proses pengindeksan Google (yang butuh waktu) bisa dimulai lebih awal.

### Kebiasaan belajar yang disarankan

Ketik sendiri potongan kecilnya, jalankan, dan pastikan bisa menjelaskan tiap baris sebelum lanjut. Bantuan AI paling berguna sebagai penjelas, bukan sebagai pengetik seluruh kode.

---

## 13. Pengujian keamanan sebelum dipakai

Uji dari sudut pandang penyerang, tanpa lewat tampilan React:

| Uji | Hasil yang benar |
|---|---|
| Buka daftar kegiatan tanpa login | Hanya yang Terbit |
| Minta langsung data Draft lewat API tanpa login | Kosong atau ditolak |
| Coba menambah, mengubah, atau menghapus tanpa login | Ditolak |
| Login sebagai Editor, coba menerbitkan atau menghapus | Ditolak |
| Editor mencoba mengubah peran dirinya | Ditolak |
| Unggah file non-gambar atau terlalu besar | Ditolak |
| Akses foto dari kegiatan yang masih Draft | Tidak bisa |
| Daftar seluruh file di penyimpanan tanpa login | Ditolak |

Ulangi setiap kali menambah tabel atau mengubah aturan.

---

## 14. Belum diputuskan dan hal yang perlu diverifikasi

### Belum diputuskan

- Apakah memakai dua peran (Editor dan Admin) sejak awal atau satu peran dulu.
- Foto Draft: penyimpanan publik dengan nama acak (praktis) atau privat (ketat).
- Perlu tidaknya status Diarsipkan, tanggal terbit terjadwal, dan pratinjau draft.
- Isi beranda: slideshow, kegiatan terbaru, peta lokasi.
- Pindah ke Next.js nanti atau tetap React + Vite.

### Perlu diverifikasi di dokumentasi resmi sebelum membangun

- Batas paket gratis Supabase (kuota penyimpanan, kebijakan proyek yang lama tidak aktif) dan penyedia hosting yang dipilih.
- Nama dan perilaku kunci publik/rahasia di Supabase.
- Cara kerja penyimpanan privat dan tautan sementara.
- Konfigurasi routing SPA di hosting yang dipilih (agar refresh halaman tidak menghasilkan 404).

### Catatan jujur

Tidak ada sistem yang 100% aman. Tujuan rancangan ini adalah membuat penyalahgunaan sulit, terdeteksi, dan bisa dipulihkan. Kebijakan layanan pihak ketiga dapat berubah, jadi dokumen ini perlu ditinjau ulang saat implementasi.
