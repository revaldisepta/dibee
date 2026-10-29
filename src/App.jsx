import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Struktur from "./pages/Struktur";
import Kegiatan from "./pages/Kegiatan";
import Berita from "./pages/Berita";
import DetailBerita from "./pages/DetailBerita";
import NotFound from "./pages/NotFound";
import DetailKegiatan from "./pages/DetailKegiatan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Beranda />} />
        <Route path="tentang-kami" element={<TentangKami />} />
        <Route path="struktur" element={<Struktur />} />
        <Route path="kegiatan" element={<Kegiatan />} />
        <Route path="kegiatan/:id" element={<DetailKegiatan />} />
        <Route path="berita" element={<Berita />} />
        <Route path="berita/:id" element={<DetailBerita />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
