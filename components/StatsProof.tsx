export default function StatsProof() {
  const stats = [
    {
      value: "98.87",
      unit: "%",
      label: "Accuracy Rate · Real-time DLR",
    },
    {
      value: "495",
      unit: "+",
      label: "Carriers & Enterprises Connected",
    },
    {
      value: "95.84",
      unit: "%",
      label: "Verified Client Satisfaction",
    },
    {
      value: "193",
      unit: "+",
      label: "Countries Live Direct Termination",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-[#0F1B2E]/60 py-10">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-1 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#22D3EE]/30 transition-colors"
            >
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22D3EE] tracking-tight">
                {item.value}
                <small className="text-xl sm:text-2xl text-[#8DA0C0] font-semibold ml-0.5">
                  {item.unit}
                </small>
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#8DA0C0] font-medium pt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
