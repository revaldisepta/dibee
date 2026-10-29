import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");
const ekstensiGambar = /\.(jpe?g|png|webp)$/i;
const namaDilewati = new Set(["og-image.jpg"]);

function cariGambar(direktori) {
  return fs.readdirSync(direktori, { withFileTypes: true }).flatMap((entri) => {
    const lokasi = path.join(direktori, entri.name);

    if (entri.isDirectory()) {
      return cariGambar(lokasi);
    }

    if (!entri.isFile() || !ekstensiGambar.test(entri.name)) {
      return [];
    }

    if (entri.name.endsWith("-thumb.webp") || namaDilewati.has(entri.name)) {
      return [];
    }

    return [lokasi];
  });
}

const daftarGambar = cariGambar(publicDir);
let jumlahDibuat = 0;
let jumlahDilewati = 0;

for (const sumber of daftarGambar) {
  const tujuan = sumber.replace(ekstensiGambar, "-thumb.webp");
  const sudahAda = fs.existsSync(tujuan);

  if (sudahAda) {
    const waktuSumber = fs.statSync(sumber).mtimeMs;
    const waktuThumbnail = fs.statSync(tujuan).mtimeMs;

    if (waktuThumbnail >= waktuSumber) {
      jumlahDilewati += 1;
      continue;
    }
  }

  await sharp(sumber)
    .rotate()
    .resize({ width: 600, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(tujuan);

  jumlahDibuat += 1;
  console.log(`✓ ${path.relative(publicDir, tujuan)}`);
}

console.log(
  `Selesai: ${jumlahDibuat} thumbnail dibuat, ${jumlahDilewati} sudah ada.`
);
