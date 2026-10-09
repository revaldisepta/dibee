import { Link } from "react-router-dom";

function Beranda() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Beranda</h1>
      <div className="mt-4">
        <p>Mau lihat struktur atau kegiatan?</p>
        <div className="mt-2 flex gap-4">
          <Link to="/struktur" className="text-blue-600 underline">
            Struktur
          </Link>
          <Link to="/kegiatan" className="text-blue-600 underline">
            Kegiatan
          </Link>
        </div>
      </div>
    </div>
  )}
    export default Beranda;