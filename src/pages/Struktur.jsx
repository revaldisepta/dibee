import PageMeta from "../components/PageMeta";
import { daftarPengurus } from "../data/pengurus";
import { thumbSrc } from "../utils/gambar";

function Struktur() {
  return (
    <div className="space-y-8 pb-12">
      <PageMeta
        title="Struktur Kepengurusan"
        description="Struktur kepengurusan Karang Taruna The Dibee periode 2026–2029."
      />

      <header className="pt-0">
        <p className="editorial-label mb-3 text-[#6B1F2A]">
          Anomali di Balik Organisasi
        </p>

        <h1 className="text-3xl font-black leading-tight tracking-tight text-[#171717] sm:text-4xl">
          Struktur <span className="text-[#6B1F2A]">Kepengurusan</span>
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#737373] sm:text-base">
          Berbeda tanggung jawab, satu komitmen untuk tumbuh dan bergerak bersama.
        </p>

        <div className="mt-5">
          <span className="text-xs font-medium text-[#525252]">
            Periode 2026–2029
          </span>
        </div>
      </header>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6B1F2A]">
              Sosok Asli
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {daftarPengurus.map((orang, index) => (
            <article
              key={orang.id}
              className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#E5E5E5] bg-white transition duration-300 hover:border-[#6B1F2A]/40 hover:shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F5]">
                {orang.foto ? (
                  <img
                    src={thumbSrc(orang.foto)}
                    alt={`Foto ${orang.nama}`}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#F5F5F5]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6B1F2A]/10">
                      <span className="text-lg font-bold text-[#6B1F2A]">
                        {orang.nama
                          .split(" ")
                          .slice(0, 2)
                          .map((kata) => kata[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
                <h3 className="min-h-[2.5rem] break-words text-sm font-bold leading-snug text-[#171717] sm:text-base">
                  {orang.nama}
                </h3>

                <span className="inline-flex max-w-full items-center rounded-md text-[12px] font-semibold leading-tight text-[#6B1F2A] sm:text-xs">
                  {orang.jabatan}
                </span>

                <p className="text-xs leading-relaxed text-[#737373]">
                  {orang.keterangan}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Struktur;
