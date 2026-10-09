import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "font-bold text-blue-600" : "text-gray-700";

  return (
    <nav className="flex gap-4 bg-white px-6 py-4 shadow">
      <NavLink to="/" className={linkClass} end>
        Beranda
      </NavLink>
      <NavLink to="/struktur" className={linkClass}>
        Struktur
      </NavLink>
      <NavLink to="/kegiatan" className={linkClass}>
        Kegiatan
      </NavLink>
      <NavLink to="/berita" className={linkClass}>
        Berita
      </NavLink>
    </nav>
  );
}

export default Navbar;