import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why SMSCloudHub — Direct Routes, Proven Results",
  description:
    "Discover why enterprises and operators choose SMSCloudHub over Monty Mobile, GMS, Qoolize, Sama Telecom, and Macropyre. Direct SS7, AI routing, 99.95% uptime SLA.",
};

const comparisonRows = [
  {
    feature: "Global Reach",
    smsch: "185+ countries",
    others: "Varies by provider",
  },
  {
    feature: "Platform Capacity",
    smsch: "Up to 1,000 TPS burstable capacity",
    others: "Varies by provider",
  },
  {
    feature: "Route Selection",
    smsch: "AI-based Route Selection & Testing",
    others: "Varies by provider",
  },
  {
    feature: "Routing",
    smsch: "LCR & QBR-based routing with fallback",
    others: "Varies by provider",
  },
  {
    feature: "Uptime",
    smsch: "99.95% uptime, backed by SLA",
    others: "Varies by provider",
  },
  {
    feature: "Route Quality",
    smsch: "Global routes with AI-based testing",
    others: "Varies by provider",
  },
  {
    feature: "Cloud Platform",
    smsch: "Cloud-based, no CAPEX",
    others: "Varies by provider",
  },
  {
    feature: "SMS Termination",
    smsch: "Global A2P SMS delivery",
    others: "Varies by provider",
  },
  {
    feature: "Coverage",
    smsch: "157+ countries listed on the website",
    others: "Varies by provider",
  },
  {
    feature: "Security",
    smsch: "Advanced encryption",
    others: "Varies by provider",
  },
  {
    feature: "Scalability",
    smsch: "Scalable messaging platform",
    others: "Varies by provider",
  },
];

const advantages = [
  {
    icon: "🔗",
    title: "Zero Intermediary Hops",
    body: "Most aggregators — including large players like Monty Mobile and GMS — route through 2 to 4 intermediary networks before your message reaches the recipient's SMSC. Each hop adds latency, failure risk, and margin. SMSCloudHub eliminates every hop with owned SS7 direct connections.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Route Optimisation",
    body: "Our routing engine continuously monitors per-network DLR rates, delivery times, and error codes across all 300+ operator connections. It automatically shifts traffic away from degraded routes in real time — something no legacy aggregator architecture can match at this speed.",
  },
  {
    icon: "🛡️",
    title: "Carrier-Grade SMSC Firewall",
    body: "Unlike Qoolize and Macropyre who rely on upstream firewall services, SMSCloudHub operates its own SMSC-layer inspection engine. Every inbound message is validated against ML anomaly models, sender reputation databases, and operator-specific allowlists before it touches your network.",
  },
  {
    icon: "📊",
    title: "Real-Time Delivery Intelligence",
    body: "Our dashboard surfaces per-country, per-operator delivery rates, latency percentiles, and error distributions — live, not in daily CSV exports. You get the same visibility our NOC team uses, 24/7.",
  },
  {
    icon: "🌍",
    title: "193-Country Owned Network",
    body: "Sama Telecom and other regional specialists cover 40–80 countries with leased capacity. SMSCloudHub's 193-country footprint is built on direct interconnects and bilateral peering agreements — not resold routes with unknown quality guarantees.",
  },
  {
    icon: "⚖️",
    title: "Compliance Built In",
    body: "ISO 27001 information security management, GDPR-compliant data handling, TCPA-aware routing for North America, and DND registry integration for India. Legal and compliance teams at your enterprise won't need to audit our processes — we've already done it for you.",
  },
];

const slaItems = [
  { label: "Platform availability", value: "99.95%" },
  { label: "Tier-1 delivery latency", value: "< 2s" },
  { label: "DLR receipt accuracy", value: "98.87%" },
  { label: "Credit-back on breach", value: "10× pro-rata" },
  { label: "Incident response SLA", value: "< 15 min" },
  { label: "NOC coverage", value: "24/7/365" },
];

export default function WhyUsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">

        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden pt-16 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-3xl mx-auto text-center relative">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6">
              • Why SMSCloudHub
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6">
              The route matters.<br />
              <span className="text-[#22D3EE]">Ours is shorter.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#8DA0C0] max-w-2xl mx-auto leading-relaxed">
              The global A2P messaging market is full of aggregators stacking hops between your API call and your customer&apos;s handset. We built SMSCloudHub specifically to eliminate every one of them.
            </p>
          </div>
        </section>

        {/* ─── Advantages Grid ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Six reasons operators and enterprises switch to us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {advantages.map((a) => (
                <div key={a.title} className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-[#22D3EE]/40 transition-colors">
                  <div className="text-3xl mb-3">{a.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{a.title}</h3>
                  <p className="text-[#8DA0C0] text-sm leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 border-t border-white/5 bg-[#0F1B2E]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
              SMSCloud Hub — Built for Global Messaging
            </h2>
            <p className="text-center text-[#22D3EE] font-mono text-xs sm:text-sm font-semibold mb-6 sm:mb-10 tracking-wide uppercase">
              Smart Routing • Global Reach • Scalable Infrastructure
            </p>
            {/* Mobile Scroll Indicator */}
            <div className="md:hidden text-xs text-[#8DA0C0] font-mono mb-2 flex items-center justify-between px-1">
              <span className="text-[#22D3EE]">← Swipe to scroll comparison table →</span>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A1220] text-left">
                    <th className="px-6 py-4 text-[#8DA0C0] font-mono text-xs uppercase tracking-widest">Feature</th>
                    <th className="px-6 py-4 text-[#22D3EE] font-mono text-xs uppercase tracking-widest">SMSCloudHub</th>
                    <th className="px-6 py-4 text-[#8DA0C0] font-mono text-xs uppercase tracking-widest">Typical Aggregators</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={`border-t border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                      <td className="px-6 py-4 text-[#F3F8FF]">{row.feature}</td>
                      <td className="px-6 py-4 text-[#22D3EE] font-semibold flex items-center gap-2">
                        <span className="text-green-400">✓</span> {row.smsch}
                      </td>
                      <td className="px-6 py-4 text-[#8DA0C0]">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── SLA ─── */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">SLA Commitments — In Writing</h2>
            <p className="text-center text-[#8DA0C0] mb-10">We don't offer best-effort. Every SMSCloudHub contract includes contractual SLA guarantees backed by service credits.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {slaItems.map((item) => (
                <div key={item.label} className="bg-[#0F1B2E] border border-white/10 rounded-xl p-5 text-center">
                  <p className="text-3xl font-mono font-extrabold text-[#22D3EE] mb-1">{item.value}</p>
                  <p className="text-[#8DA0C0] text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-6 border-t border-white/5 text-center bg-[#0F1B2E]">
          <h2 className="text-3xl font-bold mb-4">See the difference for yourself</h2>
          <p className="text-[#8DA0C0] mb-8">Run a parallel delivery test against your current provider. We'll show you the numbers side by side.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors"
          >
            Request a Benchmark Test →
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
