import { NavLink, Link } from "react-router-dom";

const tautanNavigasi = [
  { to: "/", label: "Beranda", end: true },
  { to: "/struktur", label: "Struktur" },
  { to: "/kegiatan", label: "Kegiatan" },
  { to: "/berita", label: "Berita" },
];

function Navbar() {
  const linkClass = ({ isActive }) =>
    `flex min-h-10 shrink-0 items-center whitespace-nowrap border-b-2 px-2 text-sm transition-colors duration-200 sm:px-3 ${
      isActive
        ? "border-[#6B1F2A] font-semibold text-[#6B1F2A]"
        : "border-transparent text-gray-600 hover:bg-[#F9F2F3] hover:text-[#6B1F2A]"
    }`;

  return (
    <nav
      aria-label="Navigasi utama"
      className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm"
    >
      <div className="mx-auto flex min-h-[44px] w-full max-w-6xl items-center justify-between px-4 sm:min-h-[48px] sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center py-1">
          <img
            src="/logo/thedibee-transparent.png"
            alt="Logo The Dibee"
            className="h-10 w-auto object-contain sm:h-11"
          />
        </Link>

        <div className="flex items-stretch gap-0 overflow-x-auto scrollbar-hide sm:gap-2">
          {tautanNavigasi.map((tautan) => (
            <NavLink
              key={tautan.to}
              to={tautan.to}
              end={tautan.end}
              className={linkClass}
            >
              {tautan.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
