const currentYear = 2026;

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#6B1F2A] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-bold tracking-wide">
            Karang Taruna The Dibee
          </p>
          <p className="mt-1 text-xs text-white/80">
            DIBEE BERSATU · Desa Dibee, Kec. Kalitengah, Lamongan
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 text-center text-[11px] text-white/70 sm:px-6 lg:px-8">
          © {currentYear} Karang Taruna The Dibee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
