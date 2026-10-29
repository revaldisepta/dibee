import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

function TentangKami() {
  return (
    <div className="space-y-12 pb-12">
      <PageMeta
        title="Tentang Kami"
        description="Profil, visi, misi, dan peran Karang Taruna The Dibee dalam membangun masyarakat Desa Dibee."
      />

      {/* Header */}
      <header className="pt-0">
        <p className="editorial-label mb-3 text-[#6B1F2A]">
          Karang Taruna Desa Dibee
        </p>

        <h1 className="text-3xl font-black leading-tight tracking-tight text-[#171717] sm:text-4xl">
          Tentang
          <span className="block text-[#6B1F2A]">Kami.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#737373] sm:text-base">
          Organisasi kepemudaan yang bergerak untuk membangun desa melalui
          kegiatan positif, kekeluargaan, dan kemandirian.
        </p>
      </header>

      {/* Profil */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#171717]">Profil Organisasi</h2>
        <div className="space-y-3 text-sm leading-7 text-[#525252]">
          <p>
            <strong className="font-semibold text-[#171717]">
              Karang Taruna The Dibee
            </strong>{" "}
            adalah organisasi kepemudaan tingkat desa yang berada di Desa Dibee,
            Kecamatan Kalitengah, Kabupaten Lamongan, Jawa Timur.
          </p>
          <p>
            Kami terdiri dari pemuda dan pemudi yang memiliki semangat untuk
            berkontribusi dalam pembangunan desa, baik melalui kegiatan sosial,
            budaya, olahraga, maupun pemberdayaan masyarakat.
          </p>
          <p>
            Dengan semboyan{" "}
            <strong className="font-semibold">DIBEE BERSATU</strong>, kami
            percaya bahwa kebersamaan dan gotong royong adalah kunci untuk
            menciptakan perubahan positif di lingkungan sekitar.
          </p>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#171717]">Visi & Misi</h2>

        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-bold text-[#6B1F2A]">Visi</h3>
            <p className="text-sm leading-7 text-[#525252]">
              Menjadi wadah kepemudaan yang solid, kreatif, dan mandiri dalam
              mendukung pembangunan Desa Dibee yang maju, sejahtera, dan
              berbudaya.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-[#6B1F2A]">Misi</h3>
            <ul className="space-y-2 text-sm leading-7 text-[#525252]">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B1F2A]" />
                <span>
                  Menyelenggarakan kegiatan sosial, budaya, dan olahraga yang
                  melibatkan seluruh elemen masyarakat.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B1F2A]" />
                <span>
                  Membangun solidaritas dan semangat gotong royong di kalangan
                  pemuda pemudi Desa Dibee.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B1F2A]" />
                <span>
                  Memberdayakan potensi pemuda melalui pelatihan, diskusi, dan
                  kolaborasi dengan berbagai pihak.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B1F2A]" />
                <span>
                  Menjadi mitra pemerintah desa dalam program pembangunan dan
                  pemberdayaan masyarakat.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Peran di Masyarakat */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[#171717]">
          Peran di Masyarakat
        </h2>
        <div className="space-y-3 text-sm leading-7 text-[#525252]">
          <p>
            Karang Taruna The Dibee aktif dalam berbagai kegiatan yang berdampak
            langsung bagi masyarakat, antara lain:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B1F2A]" />
              <span>
                Mengadakan lomba dan perayaan untuk mempererat kebersamaan
                warga.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B1F2A]" />
              <span>
                Menyelenggarakan bazar UMKM untuk mendukung usaha kecil lokal.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B1F2A]" />
              <span>
                Menggelar kegiatan olahraga seperti turnamen futsal dan voli.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B1F2A]" />
              <span>
                Berpartisipasi dalam gotong royong dan kerja bakti lingkungan.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6B1F2A]" />
              <span>
                Mengusulkan dan melaksanakan program infrastruktur ringan
                seperti pemasangan lampu jalan.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA ke Struktur */}
      <section className="rounded-2xl border border-[#E5E5E5] bg-[#F9F2F3] p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#171717]">
          Ingin tahu siapa yang memimpin kami?
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#525252]">
          Lihat struktur kepengurusan periode 2026–2029 dan peran masing-masing
          pengurus.
        </p>
        <Link
          to="/struktur"
          className="mt-4 inline-block rounded-lg bg-[#6B1F2A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#171717]"
        >
          Lihat Struktur Kepengurusan →
        </Link>
      </section>
    </div>
  );
}

export default TentangKami;
