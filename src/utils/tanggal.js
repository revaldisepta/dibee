// ─────────────────────────────────────────────────────────────
// HELPER TANGGAL — format dan manipulasi tanggal
// ─────────────────────────────────────────────────────────────

export function formatTanggal(tanggalISO) {
  const tanggal = new Date(tanggalISO);
  if (Number.isNaN(tanggal.getTime())) return "-";
  return tanggal.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function tahunDari(tanggalISO) {
  const tanggal = new Date(tanggalISO);
  if (Number.isNaN(tanggal.getTime())) return "-";
  return tanggal.getFullYear();
}
