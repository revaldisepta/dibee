import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Mengembalikan halaman ke atas setiap kali path berubah.
 * Jika ada hash (#), biarkan browser yang menggulir ke elemen tujuan.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
