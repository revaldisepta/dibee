import {Link} from "react-router-dom";

function Berita() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Berita dan Rencana</h1>
      <div className="mt-4 flex gap-4">
        <Link to="/struktur" className="text-blue-600 underline hover:text-blue-800">
          Struktur
        </Link>
        <Link to="/kegiatan" className="text-blue-600 underline hover:text-blue-800">
          Kegiatan
        </Link>
      </div>
    </div>
  );
}

export default Berita;