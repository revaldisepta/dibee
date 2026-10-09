import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Beranda from "./pages/Beranda";
import Struktur from "./pages/Struktur";
import Kegiatan from "./pages/Kegiatan";
import Berita from "./pages/Berita";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Beranda />} />
        <Route path="struktur" element={<Struktur />} />
        <Route path="kegiatan" element={<Kegiatan />} />
        <Route path="berita" element={<Berita />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;