import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import JourneyTimeline from "@/components/JourneyTimeline";

export const metadata: Metadata = {
  title: "About SMSCloudHub — Direct-Route Messaging Infrastructure",
  description:
    "Learn how SMSCloudHub built a carrier-grade, direct-route messaging network connecting 525+ telcos across 185+ countries with zero intermediaries.",
};

const values = [
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    body: "Sub-2-second delivery on Tier-1 direct routes. Every millisecond matters when a bank OTP or a ride share code has to reach a customer in the moment.",
  },
  {
    icon: "🔒",
    title: "Security by Design",
    body: "SS7 intrusion detection, grey-route blocking, TLS 1.3 end-to-end encryption, and SMSC-level firewall policies hardened from day one, not bolted on after.",
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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">

        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden pt-16 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-3xl mx-auto text-center relative">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6">
              • Our Story
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6">
              Built for the{" "}
              <span className="text-[#22D3EE]">shortest path.</span>
              <br />Not the easiest one.
            </h1>
            <p className="text-base sm:text-lg text-[#8DA0C0] max-w-2xl mx-auto leading-relaxed">
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
                { label: "Direct telco connections", value: "525+" },
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

        {/* ─── Interactive Journey Timeline ─── */}
        <div className="border-t border-white/5">
          <JourneyTimeline />
        </div>

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

        {/* ─── Quality & Compliance Certification Showcase ─── */}
        <section className="py-20 px-6 border-t border-white/5 bg-[#071120]">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#0F1B2E] border border-[#22D3EE]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#22D3EE]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Certificate Image Preview */}
                <div className="relative group bg-[#060D17] p-3 rounded-2xl border border-white/10 shadow-xl flex items-center justify-center">
                  <img
                    src="/awards/iso-9001-2015-certificate.jpg"
                    alt="SMSCloudHub ISO 9001:2015 Quality Management System Certificate"
                    className="w-full h-auto max-h-[420px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-5 right-5 bg-[#22D3EE] text-[#04141A] text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    Official Certificate
                  </div>
                </div>

                {/* Certification Info */}
                <div className="space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE] text-xs font-mono font-bold uppercase tracking-widest">
                    <span>🛡️ Global Compliance & Quality</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    ISO 9001:2015 Certified Quality Management System
                  </h2>

                  <p className="text-[#8DA0C0] text-sm sm:text-base leading-relaxed">
                    SMSCLOUD HUB has been independently assessed by <strong className="text-white">QRO Certification</strong> and accredited by <strong className="text-white">EGAC & IAF</strong>, certifying our commitment to international quality management and operational excellence.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3 text-xs">
                      <span className="text-[#22D3EE] text-base">📌</span>
                      <div>
                        <span className="text-white font-bold block">Scope of Certification:</span>
                        <span className="text-[#8DA0C0]">Provision of A2P SMS Services, Communications Platform as a Service (CPaaS), Managed Services, and Technology Solutions.</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[#8DA0C0] block text-[10px] font-mono uppercase">Certificate No.</span>
                        <span className="text-[#22D3EE] font-mono font-bold text-sm">3050260702155Q</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[#8DA0C0] block text-[10px] font-mono uppercase">Validity</span>
                        <span className="text-white font-semibold">Jul 2026 – Jul 2029</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Office ─── */}
        <section className="py-20 px-6 border-t border-white/5 bg-[#0F1B2E]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Headquartered in USA & India. Connected Globally.</h2>
            <p className="text-[#8DA0C0] mb-10">
              Our presence spans the USA, India, Middle East, Southeast Asia, and Europe.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 items-stretch justify-center">
              <div className="bg-[#0A1220] border border-white/10 rounded-xl px-6 py-4 text-left">
                <p className="text-xs text-[#22D3EE] font-mono uppercase tracking-widest mb-1">USA Office</p>
                <p className="font-semibold">SMSCloudHub USA</p>
                <p className="text-[#8DA0C0] text-sm">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
              </div>
              <div className="bg-[#0A1220] border border-white/10 rounded-xl px-6 py-4 text-left">
                <p className="text-xs text-[#22D3EE] font-mono uppercase tracking-widest mb-1">India Head Office</p>
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
