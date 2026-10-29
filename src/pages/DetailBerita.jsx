import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Lightbox from "../components/Lightbox";
import PageMeta from "../components/PageMeta";
import { semuaBerita } from "../data/berita";
import { formatTanggal } from "../utils/tanggal";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function DetailBerita() {
  const { id } = useParams();
  const berita = semuaBerita.find((b) => b.id === Number(id));

  // State lightbox: null = tertutup, string URL = terbuka
  const [lightboxSrc, setLightboxSrc] = useState(null);

  if (!berita) {
    return (
      <div className="text-center py-24">
        <PageMeta title="Berita Tidak Ditemukan" />
        <h1 className="text-3xl font-bold text-gray-800">
          Berita tidak ditemukan
        </h1>
        <Link
          to="/berita"
          className="mt-6 inline-block text-blue-600 hover:underline font-semibold"
        >
          ← Kembali ke Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      <PageMeta
        title={berita.judul}
        description={berita.ringkasan}
        image={berita.gambar}
        type="article"
      />

      {/* Lightbox */}
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={berita.judul}
          onClose={() => setLightboxSrc(null)}
        />
      )}

      {/* Tombol kembali */}
      <Link
        to="/berita"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#6B1F2A] font-medium transition"
      >
        ← Kembali ke Berita &amp; Rencana
      </Link>

      {/* Foto utama — klik untuk buka lightbox */}
      <button
        type="button"
        className="block w-full overflow-hidden rounded-2xl shadow-md cursor-zoom-in"
        onClick={() => setLightboxSrc(berita.gambar)}
        aria-label={`Perbesar foto: ${berita.judul}`}
        title="Klik untuk memperbesar"
      >
        <ImageWithSkeleton
          src={berita.gambar}
          alt={berita.judul}
          className="w-full h-72 sm:h-96 object-cover hover:scale-105 transition duration-500"
          skeletonClassName="h-72 sm:h-96"
          loading="eager"
          decoding="async"
        />
      </button>

      {/* Badge jenis, judul, tanggal */}
      <div>
        <span
          className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            berita.jenis === "berita"
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {berita.jenis}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
          {berita.judul}
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          {formatTanggal(berita.tanggal)}
        </p>
      </div>

      {/* Isi artikel */}
      <div className="border-t border-gray-100 pt-6">
        <p className="text-gray-700 leading-relaxed text-lg">{berita.isi}</p>
      </div>

      <div className="border-t border-gray-200 pt-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Berita Lainnya
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {semuaBerita
            .filter(
              (item) => item.id !== berita.id && item.jenis === berita.jenis
            )
            .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
            .slice(0, 3)
            .map((item) => (
              <Link key={item.id} to={`/berita/${item.id}`} className="group">
                <ImageWithSkeleton
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-32 object-cover rounded-lg"
                  skeletonClassName="w-full h-32 rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {formatTanggal(item.tanggal)}
                </p>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#6B1F2A] line-clamp-2">
                  {item.judul}
                </h3>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DetailBerita;
