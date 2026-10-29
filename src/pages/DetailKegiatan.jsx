import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Lightbox from "../components/Lightbox";
import PageMeta from "../components/PageMeta";
import { semuaKegiatan } from "../data/kegiatan";
import { thumbSrc } from "../utils/gambar";
import { formatTanggal } from "../utils/tanggal";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

function DetailKegiatan() {
  const { id } = useParams();
  const kegiatan = semuaKegiatan.find((k) => k.id === Number(id));

  // State lightbox: null = tertutup, { src, alt } = terbuka
  const [lightbox, setLightbox] = useState(null);

  if (!kegiatan) {
    return (
      <div className="text-center py-24">
        <PageMeta title="Kegiatan Tidak Ditemukan" />
        <h1 className="text-3xl font-bold text-gray-800">
          Kegiatan tidak ditemukan
        </h1>
        <Link
          to="/kegiatan"
          className="mt-6 inline-block text-[#6B1F2A] hover:underline font-semibold"
        >
          ← Kembali ke Kegiatan
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <PageMeta
        title={kegiatan.judul}
        description={kegiatan.deskripsi}
        image={kegiatan.foto}
        type="article"
      />

      {/* Lightbox — hanya tampil jika lightbox berisi gambar */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Tombol kembali */}
      <Link
        to="/kegiatan"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#6B1F2A] font-medium transition"
      >
        ← Kembali ke Daftar Kegiatan
      </Link>

      {/* Foto utama — klik untuk buka lightbox */}
      <button
        type="button"
        className="block w-full overflow-hidden rounded-2xl shadow-md cursor-zoom-in"
        onClick={() => setLightbox({ src: kegiatan.foto, alt: kegiatan.judul })}
        aria-label={`Perbesar foto: ${kegiatan.judul}`}
        title="Klik untuk memperbesar"
      >
        <ImageWithSkeleton
          src={kegiatan.foto}
          alt={kegiatan.judul}
          className="w-full h-72 sm:h-96 object-cover hover:scale-105 transition duration-500"
          skeletonClassName="h-72 sm:h-96"
          loading="eager"
          decoding="async"
        />
      </button>

      {/* Judul & Deskripsi */}
      <div>
        <span className="text-sm text-gray-500 font-medium">
          {formatTanggal(kegiatan.tanggal)}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
          {kegiatan.judul}
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed text-lg">
          {kegiatan.deskripsi}
        </p>
      </div>

      {/* Galeri foto — setiap gambar bisa diklik untuk buka lightbox */}
      {kegiatan.galeri.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Galeri Foto</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {kegiatan.galeri.map((urlFoto, index) => {
              const altFoto = `${kegiatan.judul} foto ${index + 1}`;

              return (
                <button
                  key={`${urlFoto}-${index}`}
                  type="button"
                  className="block w-full overflow-hidden rounded-xl cursor-zoom-in"
                  onClick={() => setLightbox({ src: urlFoto, alt: altFoto })}
                  aria-label={`Perbesar ${altFoto}`}
                  title="Klik untuk memperbesar"
                >
                  <ImageWithSkeleton
                    src={thumbSrc(urlFoto)}
                    alt={altFoto}
                    className="w-full h-40 object-cover hover:scale-105 transition duration-500"
                    skeletonClassName="h-40"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="border-t border-gray-200 pt-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Kegiatan Lainnya
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {semuaKegiatan
            .filter((item) => item.id !== kegiatan.id)
            .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
            .slice(0, 3)
            .map((item) => (
              <Link key={item.id} to={`/kegiatan/${item.id}`} className="group">
                <ImageWithSkeleton
                  src={thumbSrc(item.foto)}
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

export default DetailKegiatan;
