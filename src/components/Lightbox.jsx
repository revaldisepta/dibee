import { useEffect, useRef } from "react";

/**
 * Komponen Lightbox — menampilkan gambar penuh di tengah layar
 *
 * Props:
 * - src   : URL gambar yang ingin ditampilkan
 * - alt   : teks alternatif gambar
 * - onClose : fungsi yang dipanggil untuk menutup lightbox
 */
function Lightbox({ src, alt, onClose }) {
  const closeButtonRef = useRef(null);
  const onCloseRef = useRef(onClose);

  // Simpan versi terbaru onClose agar effect di bawah tidak perlu dipasang ulang.
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    // Fokus ke tombol tutup dan kunci scroll halaman.
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onCloseRef.current();
      }

      // Hanya ada satu elemen fokus di dialog ini, jadi Tab tetap di tombol tutup.
      if (e.key === "Tab") {
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;

      // Kembalikan fokus ke gambar/tombol yang membuka lightbox.
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overscroll-contain bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Pratinjau gambar"
      onClick={onClose}
    >
      {/* Tombol tutup (X) di pojok kanan atas */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-xl font-bold text-white/80 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        aria-label="Tutup pratinjau"
      >
        ✕
      </button>

      {/* Gambar — klik gambar TIDAK menutup lightbox (stopPropagation) */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        decoding="async"
        draggable={false}
        className="max-h-[90vh] max-w-full cursor-default rounded-xl object-contain shadow-2xl"
        style={{ userSelect: "none" }}
      />
    </div>
  );
}

export default Lightbox;
