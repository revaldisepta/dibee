import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import SlideTabs from "../components/ui/SlideTabs";
import { semuaBerita } from "../data/berita";
import { thumbSrc } from "../utils/gambar";
import { formatTanggal } from "../utils/tanggal";
import { urutkanTerbaru } from "../utils/urutkan";

function Berita() {
  const [filterAktif, setFilterAktif] = useState("semua");

  const tabsBerita = [
    { label: "Semua", value: "semua" },
    { label: "Berita", value: "berita" },
    { label: "Rencana", value: "rencana" },
  ];

  // Helper mengembalikan salinan yang sudah urut, lalu difilter jenisnya.
  const beritaTerfilter = urutkanTerbaru(semuaBerita).filter((item) => {
    if (filterAktif === "semua") return true;
    return item.jenis === filterAktif;
  });

  const labelFilter = filterAktif === "semua" ? "semua jenis" : filterAktif;

  return (
    <div className="space-y-8 pb-12">
      <PageMeta
        title="Berita & Rencana"
        description="Berita dan rencana kegiatan Karang Taruna The Dibee."
      />

      <p className="sr-only" aria-live="polite">
        Menampilkan {beritaTerfilter.length} berita untuk {labelFilter}.
      </p>

      {/* JUDUL */}
      <div>
        <p className="editorial-label mb-3 text-[#6B1F2A]">Berita dan Agenda</p>

        <h1 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
          Kabar &amp; Agenda.
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#737373] sm:text-base">
          Informasi terkini dan rencana ke depan dari Karang Taruna The Dibee.
        </p>
      </div>

      {/* TOMBOL FILTER */}
      <div>
        <SlideTabs
          tabs={tabsBerita}
          activeTab={filterAktif}
          onChange={setFilterAktif}
        />
      </div>

      {/* DAFTAR KARTU BERITA */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {beritaTerfilter.map((item) => (
          <Link
            key={item.id}
            to={`/berita/${item.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            {/* Gambar di atas */}
            <div className="overflow-hidden">
              <img
                src={thumbSrc(item.gambar)}
                alt={item.judul}
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Konten di bawah */}
            <div className="flex flex-1 flex-col p-5">
              {/* Label kategori */}
              <span className="self-start rounded-sm bg-[#6B1F2A]/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#6B1F2A]">
                {item.jenis}
              </span>

              <h2 className="mt-2 text-lg font-bold text-gray-900">
                {item.judul}
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                {formatTanggal(item.tanggal)}
              </p>

              <p className="line-clamp-3 mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                {item.ringkasan}
              </p>

              <span className="mt-4 text-sm font-semibold text-[#6B1F2A] group-hover:underline">
                Baca selengkapnya →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Berita;
