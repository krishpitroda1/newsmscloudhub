export default function DirectRouteComparison() {
  return (
    <section id="route" className="py-24 bg-[#0A1220] border-t border-white/10 relative">
      <div className="max-w-[1240px] mx-auto px-6">
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
          <span className="eyebrow">Direct Connectivity Edge</span>
          <span className="tr-line" />
        </div>

        <div className="max-w-[680px] mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Most aggregators resell hops. We connect direct.
          </h2>
          <p className="text-[#8DA0C0] text-lg mt-4 leading-relaxed">
            Every intermediary a message passes through creates latency, delivery risk, and margin inflation.
            Our direct 0Hop routes connect straight into destination network operators.
          </p>
        </div>

        <div className="bg-[#0F1B2E] border border-white/10 rounded-3xl p-6 lg:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
            {/* Multi-Hop Aggregator Card */}
            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.01] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-white">
                    Typical Aggregator
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#8DA0C0]">
                    Multi-Hop Reseller
                  </span>
                </div>

                <div className="flex items-center gap-2 my-6 py-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="h-[1px] flex-1 bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-[1px] flex-1 bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-400/80" />
                  <span className="h-[1px] flex-1 bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                </div>

                <ul className="space-y-3 text-sm text-[#8DA0C0]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Traffic resold across multiple intermediary hubs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Delayed or simulated Delivery Reports (DLR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Unpredictable pricing shifts and latency spikes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Grey-route vulnerabilities subject to sudden blocking</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* VS Divider Badge */}
            <div className="flex items-center justify-center py-2 lg:py-0">
              <span className="w-10 h-10 rounded-full border border-white/10 bg-[#13243A] text-xs font-mono font-bold text-[#8DA0C0] flex items-center justify-center">
                VS
              </span>
            </div>

            {/* SMSCloudHub 0Hop Card */}
            <div className="border border-[#22D3EE]/50 rounded-2xl p-6 bg-[#22D3EE]/[0.06] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    SMSCloudHub
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-[#22D3EE] text-[#04141A] font-bold">
                    0Hop Direct Connect
                  </span>
                </div>

                <div className="flex items-center gap-2 my-6 py-2">
                  <span className="w-3 h-3 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]" />
                  <span className="h-[2px] flex-1 bg-[#22D3EE]" />
                  <span className="w-3 h-3 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]" />
                </div>

                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-start gap-2">
                    <span className="text-[#22D3EE] font-bold">✓</span>
                    <span>Direct connection into destination mobile operator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22D3EE] font-bold">✓</span>
                    <span>Real-time delivery confirmations at 98.87% accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22D3EE] font-bold">✓</span>
                    <span>Transparent, direct operator rate structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22D3EE] font-bold">✓</span>
                    <span>Integrated SMSC Firewall to filter grey routes & fraud</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
