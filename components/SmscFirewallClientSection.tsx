"use client";

import { useState } from "react";
import Link from "next/link";
import SmscFirewallCallback from "@/components/SmscFirewallCallback";

export default function SmscFirewallClientSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToCallback = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("firewall-callback-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
        <div className="max-w-4xl mx-auto relative">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors"
          >
            ← All Services
          </Link>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs font-mono tracking-widest uppercase mb-6">
              • Operator & MNO Solution
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            SMSC <span className="text-[#22D3EE]">Firewall</span>
          </h1>

          <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">
            Protect your SMSC from unauthorized access, grey-route bypass, and SS7/SMPP fraud. We deliver a carrier-grade firewall solution featuring real-time monetization controls and guaranteed revenue protection.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-[#22D3EE]/20 cursor-pointer"
            >
              📞 Request Callback
            </button>

            <a
              href="#firewall-callback-section"
              onClick={scrollToCallback}
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Protect Your Network ↓
            </a>
          </div>
        </div>
      </section>

      {/* ─── Security & Monetization Section ─── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Security & Features</h2>
            <ul className="space-y-4">
              {[
                "Protects SMSC from unauthorized access and potential attacks",
                "Controls the flow of data into and out of the SMSC",
                "Traffic Filtering & Content Inspection",
                "Authentication, Authorization & Encryption",
                "Ensures the reliability and security of SMS messages",
                "Helps prevent potential security breaches",
                "SS7 MAP & SMPP v3.4 deep packet inspection",
                "Real-time grey-route blocking and monetization rules",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm">
                  <span className="text-[#22D3EE] mt-0.5 font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Monetization & Guarantee</h2>
            <div className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 space-y-4">
              <p className="text-[#8DA0C0] text-sm leading-relaxed">
                Unlike standard security appliances, our SMSC Firewall is designed not just to protect, but to turn lost revenue from grey routes into realized profit.
              </p>
              <div className="flex items-start gap-3 pt-4 border-t border-white/10">
                <span className="text-2xl">🤝</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Monetary Guarantee</h4>
                  <p className="text-xs text-[#8DA0C0] leading-relaxed">
                    We are open to discuss the monetary guarantee for our Firewall through mutual discussion with Operators.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F1B2E] border border-amber-400/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <h4 className="font-bold text-white text-sm">Dedicated Operator Desk</h4>
              </div>
              <p className="text-xs text-[#8DA0C0] leading-relaxed">
                Need an immediate consultation or technical briefing with our SMSC security engineers? Request a dedicated callback below.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-2.5 bg-amber-400/10 border border-amber-400/40 text-amber-400 font-mono font-bold text-xs rounded-xl hover:bg-amber-400 hover:text-black transition-colors cursor-pointer"
              >
                Schedule Operator Callback →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dedicated Callback Form Section ─── */}
      <section id="firewall-callback-section" className="py-20 px-6 border-t border-white/5 bg-[#070E1B]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase">
              • Direct Telecom Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Request Your SMSC Firewall Callback
            </h2>
            <p className="text-[#8DA0C0] text-sm max-w-xl mx-auto">
              Our telecom engineers will analyze your network topology and discuss revenue recovery options. Guaranteed callback within 4 business hours.
            </p>
          </div>

          <SmscFirewallCallback />
        </div>
      </section>

      {/* Modal Dialog */}
      <SmscFirewallCallback
        isModal={true}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
