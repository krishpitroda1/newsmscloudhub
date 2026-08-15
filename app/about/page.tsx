import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About SMSCloudHub — Direct-Route Messaging Infrastructure",
  description:
    "Learn how SMSCloudHub built a carrier-grade, direct-route messaging network connecting 495+ telcos across 193 countries with zero intermediaries.",
};

const values = [
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    body: "Sub-2-second delivery on Tier-1 direct routes. Every millisecond matters when a bank OTP or a ride-share code has to reach a customer in the moment.",
  },
  {
    icon: "🔒",
    title: "Security by Design",
    body: "SS7 intrusion detection, grey-route blocking, TLS 1.3 end-to-end encryption, and SMSC-level firewall policies — hardened from day one, not bolted on after.",
  },
  {
    icon: "🌐",
    title: "Radical Transparency",
    body: "Real-time DLR dashboards, per-network latency graphs, and SLA credit reports accessible 24/7. No black-box routing. No surprises on your invoice.",
  },
  {
    icon: "📈",
    title: "Scale Without Limits",
    body: "From 10,000 to 10 billion messages. Our distributed SMSC cluster auto-scales horizontally, so your peak-season campaigns never hit a ceiling.",
  },
];

const milestones = [
  { year: "2018", label: "Founded in Ahmedabad, India. First direct SS7 link established with an Indian national operator." },
  { year: "2019", label: "Expanded to 40+ countries. Launched SMPP & HTTP APIs for enterprise customers in BFSI and OTT." },
  { year: "2021", label: "Crossed 1 billion messages delivered. Launched AI-powered route optimiser, cutting failed delivery rate by 34%." },
  { year: "2023", label: "Achieved 495+ direct telco connections. Launched WhatsApp Business API aggregator tier and SMSC Firewall." },
  { year: "2025", label: "185+ countries, 98.87% DLR accuracy. Opened operations in the Middle East, SEA, and Latin America." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">

        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-3xl mx-auto text-center relative">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">
              • Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Built for the{" "}
              <span className="text-[#22D3EE]">shortest path.</span>
              <br />Not the easiest one.
            </h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl mx-auto leading-relaxed">
              SMSCloudHub was founded with a single conviction: every message deserves a direct route. No multi-hop relays, no opaque aggregators, no compromises on delivery quality. We built our own carrier-grade network to prove it.
            </p>
          </div>
        </section>

        {/* ─── Mission & Vision ─── */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-[#8DA0C0] leading-relaxed text-lg">
                To eliminate every unnecessary hop between sender and recipient — delivering messages faster, more reliably, and more transparently than any intermediary ever could. We connect the world's enterprises, carriers, and developers to mobile subscribers through owned SS7 interconnects, direct SMSC peering, and AI-optimised routing logic.
              </p>
            </div>
            <div className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-8 space-y-6">
              {[
                { label: "Direct telco connections", value: "495+" },
                { label: "Countries covered", value: "185+" },
                { label: "DLR accuracy", value: "98.87%" },
                { label: "Uptime SLA", value: "99.95%" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between items-center border-b border-white/5 last:border-0 pb-4 last:pb-0">
                  <span className="text-[#8DA0C0] text-sm">{s.label}</span>
                  <span className="text-[#22D3EE] font-mono font-bold text-xl">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Timeline ─── */}
        <section className="py-20 px-6 border-t border-white/5 bg-[#0F1B2E]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14">A Decade of Direct Routes</h2>
            <div className="relative pl-8 border-l-2 border-[#22D3EE]/30 space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-[#22D3EE] border-4 border-[#0F1B2E]" />
                  <p className="font-mono text-[#22D3EE] text-sm font-bold mb-1">{m.year}</p>
                  <p className="text-[#8DA0C0] leading-relaxed">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Core Values ─── */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Drives Us</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 hover:border-[#22D3EE]/40 transition-colors">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-[#8DA0C0] text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Office ─── */}
        <section className="py-20 px-6 border-t border-white/5 bg-[#0F1B2E]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Headquartered in India. Connected Globally.</h2>
            <p className="text-[#8DA0C0] mb-10">
              Our engineering and operations teams are based in Ahmedabad, Gujarat, with commercial presence across the Middle East, Southeast Asia, and Europe.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="bg-[#0A1220] border border-white/10 rounded-xl px-6 py-4 text-left">
                <p className="text-xs text-[#22D3EE] font-mono uppercase tracking-widest mb-1">Head Office</p>
                <p className="font-semibold">B-614, World Trade Tower</p>
                <p className="text-[#8DA0C0] text-sm">Off SG Highway, Makarba, Ahmedabad – 380051, Gujarat, India</p>
              </div>
              <div className="bg-[#0A1220] border border-white/10 rounded-xl px-6 py-4 text-left">
                <p className="text-xs text-[#22D3EE] font-mono uppercase tracking-widest mb-1">Contact</p>
                <p className="font-semibold">(+91) 99244 94266</p>
                <p className="text-[#8DA0C0] text-sm">info@smscloudhub.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-6 border-t border-white/5 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take the direct route?</h2>
          <p className="text-[#8DA0C0] mb-8">Talk to our team and get your first route live in under 48 hours.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors"
          >
            Get in Touch →
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
