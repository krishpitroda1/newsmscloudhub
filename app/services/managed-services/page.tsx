import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed Services for Telecom & Messaging Hubs | SMSCloudHub",
  description: "End-to-end turnkey managed services for Operators: 24x7 Support, L1 & L2 Support, Rates & Routing, Procurement, Invoicing & Disputes.",
};

const operationalPillars = [
  {
    icon: "🎧",
    title: "L1 & L2 Support",
    subtitle: "Tiered Technical Operations",
    description: "Dedicated first and second-tier support desk handling subscriber delivery queries, route validation, ticket triage, and rapid issue resolution before L3 escalation.",
    highlights: ["24x7 Ticket Triage", "SLA-Backed First Response", "Direct L3 & Operator Escalation Path"],
  },
  {
    icon: "🧭",
    title: "Rates & Routing",
    subtitle: "Least-Cost & Quality Optimization",
    description: "Continuous monitoring of route quality, dynamic Least-Cost Routing (LCR) adjustments, automated rate sheet ingestion, and instant price change notifications.",
    highlights: ["Automated Rate Sheet Parsing", "Dynamic Quality-Based Routing", "Margin Protection Controls"],
  },
  {
    icon: "🌐",
    title: "Procurement",
    subtitle: "Wholesale & Carrier Sourcing",
    description: "Strategic carrier interconnect sourcing, bilateral SMS & voice agreement negotiations, benchmark traffic audits, and high-quality direct route acquisition.",
    highlights: ["Bilateral Traffic Sourcing", "Interconnect Onboarding", "Quality & Capacity Benchmarking"],
  },
  {
    icon: "🧾",
    title: "Invoicing & Disputes",
    subtitle: "Financial Reconciliation",
    description: "End-to-end billing management, monthly CDR traffic reconciliation, credit note issuance, and rapid resolution of billing disputes with partner networks.",
    highlights: ["Monthly CDR Reconciliation", "Dispute Resolution Desk", "Credit Note & Statement Audits"],
  },
  {
    icon: "⚡",
    title: "24 X 7 Support",
    subtitle: "Round-the-Clock NOC Monitoring",
    description: "Uninterrupted 24/7/365 Network Operations Center (NOC) surveillance, automated anomaly alerts, uptime enforcement, and proactive threat mitigation.",
    highlights: ["24x7x365 NOC Surveillance", "Automated Anomaly Detection", "99.99% Availability Guarantee"],
  },
];

const fullScopeList = [
  "Regular monitoring of messaging hubs for optimal performance and sub-second latency",
  "Detection of potential network anomalies, delivery drops, and proactive issue resolution",
  "Perform necessary system maintenance to keep infrastructure running at peak throughput",
  "Full L1 & L2 technical operational support with guaranteed SLA response windows",
  "Routing management & automated rate notification processing for global routes",
  "Direct alert notification and seamless coordination with L3 engineering & operator stakeholders",
  "Regular software upgrades, security patch deployment, and vulnerability hardening",
  "Comprehensive carrier procurement, route sourcing, and bilateral volume negotiations",
  "Monthly billing reconciliation, dispute resolution, and CDR traffic audit reports",
  "24 x 7 x 365 dedicated NOC team maintaining high availability and zero operational burden",
];

export default function ManagedServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
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
                • Operator & Carrier Managed Ops
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Managed <span className="text-[#22D3EE]">Services</span>
            </h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-8">
              We support Operators and MNOs with end-to-end professional and technical operations for messaging hubs. From 24x7 NOC monitoring and L1/L2 support to rates, routing, procurement, and invoicing — our expert International Messaging team ensures your infrastructure runs optimally.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors"
              >
                Engage Managed Ops Team →
              </Link>
              <a
                href="#operational-pillars"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Explore Service Scope ↓
              </a>
            </div>
          </div>
        </section>

        {/* ─── 5 Key Operational Pillars ─── */}
        <section id="operational-pillars" className="py-20 px-6 border-t border-white/5 bg-[#070E1B]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase">
                • Operational Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Turnkey Messaging Hub Operations
              </h2>
              <p className="text-[#8DA0C0] text-sm max-w-2xl mx-auto">
                Offload technical, commercial, and administrative operational overhead to our dedicated telecom specialists.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {operationalPillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-[#0F1B2E] border border-white/10 hover:border-[#22D3EE]/40 rounded-2xl p-6 transition-all hover:translate-y-[-2px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl p-2.5 rounded-xl bg-[#0A1220] border border-white/5">{p.icon}</span>
                      <span className="text-[10px] font-mono text-[#22D3EE] border border-[#22D3EE]/30 rounded-full px-2.5 py-0.5 uppercase tracking-widest">
                        Core Service
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                    <p className="text-xs font-mono text-[#22D3EE] mb-3">{p.subtitle}</p>
                    <p className="text-[#8DA0C0] text-xs leading-relaxed mb-6">{p.description}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {p.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-[11px] text-[#F3F8FF]">
                        <span className="text-[#22D3EE] font-bold">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* 24x7 NOC Feature Highlight Card */}
              <div className="bg-gradient-to-br from-[#0F2530] to-[#0F1B2E] border border-[#22D3EE]/30 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22D3EE]/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-[#22D3EE] animate-ping" />
                    <span className="font-mono text-xs text-[#22D3EE] uppercase tracking-widest font-bold">
                      24 x 7 SLA Guarantee
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Zero Operational Burden</h3>
                  <p className="text-xs text-[#8DA0C0] leading-relaxed mb-6">
                    Our 24x7 NOC team operates as an extension of your engineering staff, taking complete ownership of day-to-day messaging hub management.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="w-full py-3 bg-[#22D3EE] text-[#04141A] font-bold text-xs rounded-xl text-center hover:bg-white transition-colors"
                >
                  Contact Managed Operations →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Detailed Service Scope Checklist ─── */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_340px] gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-3">Comprehensive Service Scope</h2>
              <p className="text-sm text-[#8DA0C0] mb-8">
                Everything required to maintain carrier-grade reliability, continuous monetization, and optimal network performance.
              </p>
              <ul className="space-y-4">
                {fullScopeList.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[#8DA0C0] text-sm">
                    <span className="text-[#22D3EE] mt-0.5 font-bold shrink-0">✓</span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Secure & Up-to-date</h3>
                <p className="text-[#8DA0C0] text-xs leading-relaxed">
                  We handle all regular software upgrades and security patches to ensure that your messaging hubs are always up-to-date and protected against emerging vulnerabilities.
                </p>
              </div>

              <div className="bg-[#0F1B2E] border border-amber-400/20 rounded-2xl p-6 space-y-3">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                  • Technical SLA
                </span>
                <h4 className="font-bold text-white text-base">L1, L2 & Escalation Desk</h4>
                <p className="text-xs text-[#8DA0C0] leading-relaxed">
                  Fast response times guaranteed for ticket resolution, route testing, and rate updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Bottom CTA ─── */}
        <section className="py-16 px-6 border-t border-white/5 text-center bg-[#0F1B2E]">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Ready to streamline your messaging operations?</h2>
            <p className="text-[#8DA0C0] text-sm">
              Let our International Messaging team take care of L1/L2 support, rates & routing, procurement, invoicing, and 24x7 monitoring.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors"
              >
                Contact International Messaging Team →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
