export default function CompetitorEdge() {
  const competitorBenchmarks = [
    {
      competitor: "Monty Mobile Benchmark",
      focus: "Intelligent Routing & Fraud Protection",
      advantage:
        "Like top MNO monetization leaders, SMSCloudHub integrates dynamic routing with an active SMSC Firewall, eliminating SIM-box abuse and grey routes in real-time.",
    },
    {
      competitor: "GMS Benchmark",
      focus: "Enterprise Omnichannel & SLA Uptime",
      advantage:
        "Delivering Tier-1 enterprise messaging across SMS, WhatsApp, and Voice with 99.95% uptime guarantees, direct DLR tracking, and high-throughput processing.",
    },
    {
      competitor: "Qoolize Benchmark",
      focus: "Wholesale Connectivity Management",
      advantage:
        "Transparent carrier interconnects and direct operator pricing models without hidden aggregator markups or extra reseller hops.",
    },
    {
      competitor: "Sama Telecom & Macropyre Benchmark",
      focus: "GSMA Hubbing & CPaaS APIs",
      advantage:
        "Global GSMA-compliant 0Hop SMS hubbing paired with unified, programmable REST & SMPP APIs for seamless developer adoption.",
    },
  ];

  return (
    <section id="competitors" className="py-12 sm:py-20 lg:py-24 bg-[#0F1B2E]/60 border-t border-white/10 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="trace-rule">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 8h5l2-2 2 2h3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="2" cy="8" r="1.3" fill="currentColor" />
            <circle cx="14" cy="8" r="1.3" fill="currentColor" />
          </svg>
          <span className="eyebrow">Industry Standard & Excellence</span>
          <span className="tr-line" />
        </div>

        <div className="max-w-[720px] mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Engineered to set the standard in global CPaaS & Telecom Messaging.
          </h2>
          <p className="text-[#8DA0C0] text-base sm:text-lg mt-3 sm:mt-4 leading-relaxed">
            Benchmarked against leading global telecom messaging hubs and CPaaS platforms — combining carrier-grade fraud defense, direct operator connections, and developer-first APIs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {competitorBenchmarks.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-4 sm:p-6 relative hover:border-[#22D3EE]/50 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-[#22D3EE] uppercase tracking-wider font-bold">
                  {item.focus}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono bg-white/5 border border-white/10 text-[#8DA0C0] px-2 py-0.5 rounded">
                  {item.competitor}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#F3F8FF] leading-relaxed">
                {item.advantage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
