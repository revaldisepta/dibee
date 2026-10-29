import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center py-16 text-center sm:py-24">
      <PageMeta
        title="Halaman Tidak Ditemukan"
        description="Halaman yang Anda cari tidak ditemukan."
      />

      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B1F2A]">
        404
      </p>

      <h1 className="mt-3 text-3xl font-black text-gray-900">
        Halaman tidak ditemukan
      </h1>

      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        Tautan yang Anda buka mungkin sudah dipindahkan, salah ketik, atau tidak
        pernah ada.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center rounded-xl bg-[#6B1F2A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#541722]"
        >
          ← Kembali ke Beranda
        </Link>

        <Link
          to="/kegiatan"
          className="inline-flex items-center rounded-xl border border-[#6B1F2A]/30 px-5 py-2.5 text-sm font-semibold text-[#6B1F2A] transition hover:bg-[#6B1F2A]/5"
        >
          Lihat Kegiatan
        </Link>

        <Link
          to="/berita"
          className="inline-flex items-center rounded-xl border border-[#6B1F2A]/30 px-5 py-2.5 text-sm font-semibold text-[#6B1F2A] transition hover:bg-[#6B1F2A]/5"
        >
          Berita &amp; Rencana
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
