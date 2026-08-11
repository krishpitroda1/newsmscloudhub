import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "0Hop Direct SS7 Connectivity | SMSCloudHub",
  description: "Eliminate multi-hop routing. SMSCloudHub establishes direct SS7 and SMPP interconnects with your SMSC for zero-intermediary A2P message delivery.",
};

export default function ZeroHopPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-mono tracking-widest uppercase mb-6">• Operator</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">0Hop <span className="text-[#22D3EE]">Direct Connectivity</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">Every aggregator in the route is a hop that adds latency, failure risk, and cost. SMSCloudHub establishes a direct SS7 or SMPP interconnect with your SMSC — eliminating every intermediary. Zero hops. Zero hidden margins. Full transparency.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Establish Direct Route →</Link>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">What 0Hop Means</h2>
              <ul className="space-y-4">
                {["Direct SS7 MAP peering with your SMSC","Direct SMPP v3.4 bind — no relay node in between","Bilateral DLR exchange in real time","Dedicated throughput allocation (no shared capacity)","Grey-route immunity — traffic never touches uncontrolled nodes","Transparent per-route pricing, no margin stacking","Latency measured in milliseconds, not seconds","Separate test & production SMPP environments"].map(f => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm"><span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">0Hop vs Multi-Hop</h2>
              <div className="space-y-3">
                {[{label:"Delivery hops",zhop:"1 (direct)",multi:"2 – 4 intermediaries"},
                  {label:"Avg latency",zhop:"< 2 seconds",multi:"5 – 15 seconds"},
                  {label:"Grey route risk",zhop:"None",multi:"High (uncontrolled nodes)"},
                  {label:"DLR accuracy",zhop:"98.87%",multi:"85 – 94%"},
                  {label:"Pricing clarity",zhop:"Per-route itemised",multi:"Blended, opaque"}].map(r => (
                  <div key={r.label} className="grid grid-cols-3 gap-2 border-b border-white/5 pb-3 text-sm">
                    <span className="text-[#8DA0C0]">{r.label}</span>
                    <span className="text-[#22D3EE] font-semibold">{r.zhop}</span>
                    <span className="text-white/40">{r.multi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-white/5 text-center bg-[#0F1B2E]">
          <h2 className="text-2xl font-bold mb-3">Build a direct route to your subscribers</h2>
          <p className="text-[#8DA0C0] mb-6">Our interconnect team can establish a live SS7 or SMPP link with your SMSC in 48–72 hours.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Contact Interconnect Team →</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
