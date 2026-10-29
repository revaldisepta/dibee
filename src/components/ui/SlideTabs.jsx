export default function SlideTabs({ tabs, activeTab, onChange }) {
  return (
    <div
      className="flex w-full rounded-full border-2 border-[#171717] bg-white p-1"
      role="group"
      aria-label="Filter jenis berita"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            aria-pressed={isActive}
            className={`flex-1 rounded-full px-2 py-2.5 text-center text-xs font-semibold uppercase sm:py-3 sm:text-sm ${
              isActive
                ? "bg-[#6B1F2A] text-white"
                : "bg-white text-[#171717] hover:bg-[#F5F5F5]"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
