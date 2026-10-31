import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { semuaKegiatan } from "../data/kegiatan";
import { thumbSrc } from "../utils/gambar";
import { formatTanggal, tahunDari } from "../utils/tanggal";
import { urutkanTerbaru } from "../utils/urutkan";

function Kegiatan() {
  const daftarTahun = [
    ...new Set(semuaKegiatan.map((k) => tahunDari(k.tanggal))),
  ]
    .filter((tahun) => tahun !== null)
    .sort((a, b) => b - a);

  const [tahunAktif, setTahunAktif] = useState("semua");
  const [dropdownTerbuka, setDropdownTerbuka] = useState(false);

  const dropdownRef = useRef(null);
  const filterButtonRef = useRef(null);

  useEffect(() => {
    function handleClickLuar(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownTerbuka(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key !== "Escape") return;

      if (filterButtonRef.current?.getAttribute("aria-expanded") === "true") {
        setDropdownTerbuka(false);
        filterButtonRef.current.focus();
      }
    }

    document.addEventListener("mousedown", handleClickLuar);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickLuar);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const kegiatanTerFilter = urutkanTerbaru(semuaKegiatan).filter(
    (k) => tahunAktif === "semua" || tahunDari(k.tanggal) === tahunAktif
  );

  const labelFilter =
    tahunAktif === "semua" ? "Semua tahun" : String(tahunAktif);

  function pilihTahun(nilai) {
    setTahunAktif(nilai);
    setDropdownTerbuka(false);
    filterButtonRef.current?.focus();
  }

  return (
    <div className="space-y-8 pb-12">
      <PageMeta
        title="Kegiatan"
        description="Dokumentasi kegiatan Karang Taruna The Dibee. Filter kegiatan berdasarkan tahun."
      />

      <p className="sr-only" aria-live="polite">
        Menampilkan {kegiatanTerFilter.length} kegiatan untuk {labelFilter}.
      </p>

      {/* JUDUL */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
           <p className="editorial-label mb-3 text-[#6B1F2A]">
            Dokumentasi & Aktivitas
          </p>

          <h1 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
            Rekam Jejak
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#737373] sm:text-base">
            Setiap langkah menyimpan cerita. Setiap tindakan meninggalkan arti bagi Desa Dibee.
          </p>
        </div>

        {/* TOMBOL FILTER DROPDOWN */}
        <div className="relative" ref={dropdownRef}>
          <button
            ref={filterButtonRef}
            type="button"
            aria-expanded={dropdownTerbuka}
            aria-controls="filter-tahun"
            onClick={() => setDropdownTerbuka((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-4 py-2.5 text-sm font-semibold text-[#171717] shadow-sm transition-none hover:border-[#6B1F2A]/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="10" y1="18" x2="14" y2="18" />
            </svg>

            {labelFilter}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={dropdownTerbuka ? "rotate-180" : ""}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* MENU DROPDOWN */}
          {dropdownTerbuka && (
            <div
              id="filter-tahun"
              className="absolute left-0 z-10 mt-2 w-52 overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-lg sm:left-auto sm:right-0"
            >
              <button
                type="button"
                onClick={() => pilihTahun("semua")}
                aria-pressed={tahunAktif === "semua"}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-sm ${
                  tahunAktif === "semua"
                    ? "bg-[#6B1F2A]/10 font-semibold text-[#6B1F2A]"
                    : "text-[#525252] hover:bg-[#F5F5F5]"
                }`}
              >
                Semua tahun
                {tahunAktif === "semua" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>

              <div className="h-px bg-[#E5E5E5]" />

              {daftarTahun.map((tahun) => (
                <button
                  key={tahun}
                  type="button"
                  onClick={() => pilihTahun(tahun)}
                  aria-pressed={tahunAktif === tahun}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-sm ${
                    tahunAktif === tahun
                      ? "bg-[#6B1F2A]/10 font-semibold text-[#6B1F2A]"
                      : "text-[#525252] hover:bg-[#F5F5F5]"
                  }`}
                >
                  {tahun}

                  {tahunAktif === tahun && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* DAFTAR KARTU KEGIATAN */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {kegiatanTerFilter.map((kegiatan) => (
          <Link
            key={kegiatan.id}
            to={`/kegiatan/${kegiatan.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-sm transition hover:border-[#6B1F2A]/30 hover:shadow-md"
          >
            <div className="overflow-hidden">
              <img
                src={thumbSrc(kegiatan.foto)}
                alt={kegiatan.judul}
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-medium text-[#737373]">
                {formatTanggal(kegiatan.tanggal)}
              </span>

              <h2 className="mt-1 text-lg font-bold text-[#171717]">
                {kegiatan.judul}
              </h2>

              <p className="line-clamp-3 mt-2 flex-1 text-sm leading-relaxed text-[#737373]">
                {kegiatan.deskripsi}
              </p>

              <span className="mt-4 text-sm font-semibold text-[#6B1F2A] group-hover:underline">
                Lihat detail →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Kegiatan;
