import { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "../components/Lightbox";
import PageMeta from "../components/PageMeta";
import { semuaKegiatan } from "../data/kegiatan";
import { semuaBerita } from "../data/berita";
import { fotoGaleri } from "../data/galeri";
import { thumbSrc } from "../utils/gambar";
import { formatTanggal } from "../utils/tanggal";
import { urutkanTerbaru } from "../utils/urutkan";

// 4 kegiatan terbaru dari src/data/kegiatan.js — otomatis urut tanggal
const cuplikanKegiatan = urutkanTerbaru(semuaKegiatan).slice(0, 4);

// 4 berita terbaru dari src/data/berita.js — otomatis urut tanggal terbaru
const cuplikanBerita = urutkanTerbaru(semuaBerita).slice(0, 4);

function Beranda() {
  // State lightbox untuk galeri foto
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  function bukaLightbox(src, alt) {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }

  return (
    <div className="space-y-12 pb-12">
      <PageMeta title="Beranda" />

      {/* ======================== */}
      {/* 1. HERO / SAMBUTAN       */}
      {/* ======================== */}

      {/*
        ── CARA GANTI GAMBAR BACKGROUND ──
        Ganti URL di style={{ backgroundImage: "url(...)" }} di bawah
        dengan URL foto Anda, atau gunakan import:
          import fotoHero from "../assets/foto/hero.jpg";
        lalu: backgroundImage: `url(${fotoHero})`
      */}

      <section className="relative isolate min-h-[330px] overflow-hidden rounded-2xl bg-white">
        {/* Logo barong sebagai watermark */}
        <img
          src="/foto-pengurus/barong.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
          className="pointer-events-none absolute left-1/2 top-[44%]
               h-[98%] w-[98%] -translate-x-1/2 -translate-y-1/2
               object-contain opacity-[0.10]"
        />

        {/* Konten teks */}
        <div
          className="relative z-10 flex min-h-[370px]
                  flex-col justify-center px-6 py-8 sm:px-12"
        >
          <span className="editorial-label text-[#6B1F2A]">
            Organisasi Pemuda Pemudi
          </span>

          <h1
            className="mt-3 max-w-md text-3xl font-extrabold
                   leading-tight tracking-tight text-[#6B1F2A]
                   sm:text-5xl"
          >
            Karang Taruna
            <br />
            The Dibee
          </h1>

          <div
            className="mt-4 h-1 w-12 rounded-full
                    bg-[#6B1F2A]"
          />

          <p className="mt-3 text-xs font-medium text-gray-600 sm:text-sm">
            DIBEE BERSATU
          </p>

          <Link
            to="/tentang-kami"
            className="mt-2 inline-block text-xs font-medium text-[#6B1F2A] transition hover:underline"
          >
            Tentang Kami →
          </Link>
        </div>
      </section>

      {/* ======================================= */}
      {/* 2. KEGIATAN TERBARU — Horizontal Scroll */}
      {/* ======================================= */}
      <section>
        <div className="mb-6 space-y-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Kegiatan Terbaru
            </h2>
            <p className="text-sm text-gray-500">
              Klik kartu untuk melihat detail kegiatan
            </p>
          </div>
          <div className="">
            <Link
              to="/kegiatan"
              className="text-sm text-[#6B1F2A] font-semibold hover:text-[#171717] transition-colors duration-200"
            >
              Lihat semua →
            </Link>
          </div>
        </div>

        {/* Kontainer scroll horizontal */}
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide">
          {cuplikanKegiatan.map((kegiatan) => (
            <Link
              key={kegiatan.id}
              to={`/kegiatan/${kegiatan.id}`}
              className="group flex-shrink-0 w-64 sm:w-72 snap-start"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={thumbSrc(kegiatan.foto)}
                  alt={kegiatan.judul}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="mt-2 px-1">
                <span className="text-xs text-gray-500">
                  {formatTanggal(kegiatan.tanggal)}
                </span>
                <p className="text-sm font-semibold text-gray-800 mt-0.5 line-clamp-2">
                  {kegiatan.judul}
                </p>
              </div>
            </Link>
          ))}

          {/* Kartu "Lihat Semua" di ujung scroll */}
        </div>
      </section>

      {/* ===================================== */}
      {/* 3. BERITA & RENCANA — Horizontal Scroll */}
      {/* ===================================== */}
      <section>
        <div className="mb-6 space-y-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Berita & Rencana
            </h2>
            <p className="text-sm text-gray-500">
              Informasi terkini dari Karang Taruna The Dibee
            </p>
          </div>
          <div className="">
            <Link
              to="/berita"
              className="text-sm text-[#6B1F2A] font-semibold hover:text-[#171717] transition-colors duration-200"
            >
              Lihat semua →
            </Link>
          </div>
        </div>

        {/* Kontainer scroll horizontal */}
        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide">
          {cuplikanBerita.map((item) => (
            <Link
              key={item.id}
              to={`/berita/${item.id}`}
              className="group flex-shrink-0 w-64 sm:w-72 snap-start"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={thumbSrc(item.gambar)}
                  alt={item.judul}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="mt-2 px-1">
                <span className="text-xs text-gray-500">
                  {formatTanggal(item.tanggal)}
                </span>
                <p className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2">
                  {item.judul}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================= */}
      {/* 4. FOTO BERSAMA — Grid A      */}
      {/* ============================= */}
      <section>
        <div className="mb-6 space-y-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Galeri Foto</h2>
            <p className="text-sm text-gray-500">
              Momen kebersamaan Karang Taruna The Dibee
            </p>
          </div>
        </div>

        {/* Grid foto — setiap foto bisa diklik untuk buka lightbox */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {fotoGaleri.map((foto) => (
            <div key={foto.id}>
              <button
                type="button"
                className="block w-full overflow-hidden rounded-xl cursor-zoom-in"
                onClick={() =>
                  bukaLightbox(
                    foto.gambar,
                    foto.keterangan || "Foto Karang Taruna The Dibee"
                  )
                }
                aria-label={`Perbesar foto: ${foto.keterangan || "Foto Karang Taruna The Dibee"}`}
                title="Klik untuk memperbesar"
              >
                <img
                  src={thumbSrc(foto.gambar)}
                  alt={foto.keterangan || "Foto Karang Taruna The Dibee"}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition duration-500"
                />
              </button>
              {foto.keterangan && (
                <p className="text-xs text-gray-500 mt-2 px-1">
                  {foto.keterangan}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox untuk galeri foto */}
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={lightboxAlt}
          onClose={() => setLightboxSrc(null)}
        />
      )}

      {/* ================================ */}
      {/* 5. SEKRETARIAT & PETA LOKASI     */}
      {/* ================================ */}
      <section>
        <div className="mb-8 space-y-2">
          <span className="editorial-label text-[#6B1F2A]">Temukan Kami</span>
          <h2
            className="text-3xl font-extrabold text-[#171717]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Sekretariat &amp; Lokasi
          </h2>
          <p className="text-[#737373] text-sm leading-relaxed max-w-lg">
            Tempat berkumpul, berdiskusi, dan merancang kegiatan positif untuk
            masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Info Alamat */}
          <div className="bg-[#F5F5F5] border border-[#E5E5E5] rounded-2xl p-6 space-y-5">
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6B1F2A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#737373]">
                  Alamat
                </p>
                <p className="mt-1 text-sm font-medium text-[#171717] leading-relaxed">
                  Balai Warga / Sekretariat Karang Taruna, RT 03 / RW 02, Desa
                  Dibee, Kec. Kalitengah, Lamongan
                </p>
              </div>
            </div>
            <div className="h-px bg-[#E5E5E5]" />
            <a
              href="https://maps.google.com/?q=Dibee,+Kec.+Kalitengah,+Kabupaten+Lamongan,+Jawa+Timur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B1F2A] hover:text-[#171717] transition"
            >
              Buka di Google Maps
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ======================== */}
      {/* 6. MEDIA SOSIAL          */}
      {/* ======================== */}
      <section>
        <div className="mb-8 space-y-2">
          <span className="editorial-label text-[#6B1F2A]">
            Connect With Us
          </span>
          <h2
            className="text-3xl font-extrabold text-[#171717]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Ikuti Kami
          </h2>
          <p className="text-[#737373] text-sm leading-relaxed max-w-lg">
            Ikuti cerita, kegiatan, dan keseruan pemuda The Dibee melalui media
            sosial kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/the_dibee"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white border border-[#E5E5E5] rounded-2xl p-5 hover:border-[#6B1F2A] hover:shadow-md transition duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center group-hover:bg-[#6B1F2A]/10 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B1F2A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#737373]">
                Instagram
              </p>
              <p className="text-sm font-semibold text-[#171717] mt-0.5">
                @the_dibee
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B1F2A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-hover:opacity-100 transition flex-shrink-0"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@the.dibee"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white border border-[#E5E5E5] rounded-2xl p-5 hover:border-[#6B1F2A] hover:shadow-md transition duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center group-hover:bg-[#6B1F2A]/10 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#6B1F2A"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#737373]">
                TikTok
              </p>
              <p className="text-sm font-semibold text-[#171717] mt-0.5">
                the.dibee
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B1F2A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-hover:opacity-100 transition flex-shrink-0"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Beranda;
