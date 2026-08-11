import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CloudSkool++ | SMSCloudHub",
  description: "Telecom training and certification platform for A2P SMS, SS7, SMPP, and CPaaS professionals. Online courses, labs, and industry-recognised certificates.",
};

export default function CloudSkoolPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-4xl mx-auto relative">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#8DA0C0] text-sm mb-8 hover:text-[#22D3EE] transition-colors">← All Services</Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/5 text-purple-400 text-xs font-mono tracking-widest uppercase mb-6">• Technology</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">CloudSkool<span className="text-[#22D3EE]">++</span></h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl leading-relaxed mb-10">The telecom industry's knowledge gap is real. CloudSkool++ is our training platform for A2P SMS professionals, carriers, and developers — covering SS7, SMPP, CPaaS architecture, firewall operations, and route management with hands-on labs and certifications.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Enrol Your Team →</Link>
          </div>
        </section>
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Course Catalogue</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[{icon:"📡",title:"SS7 Fundamentals",level:"Beginner",desc:"MAP, SCCP, MTP layers. How SMS traverses the SS7 signalling network."},
                {icon:"🔌",title:"SMPP Protocol Deep Dive",level:"Intermediate",desc:"Session management, bind types, TLVs, error codes, and throughput tuning."},
                {icon:"🛡️",title:"SMSC Firewall Operations",level:"Intermediate",desc:"Grey route detection, policy configuration, ML anomaly alerts, and incident response."},
                {icon:"⚙️",title:"CPaaS Architecture",level:"Advanced",desc:"Building CPaaS layers: APIs, routing engines, webhook delivery, and SLA management."},
                {icon:"📊",title:"A2P Route Management",level:"Intermediate",desc:"Bilateral agreements, quality scoring, DLR analysis, and route optimisation."},
                {icon:"🏆",title:"SMS Industry Certification",level:"All Levels",desc:"Industry-recognised certification exam covering A2P operations, compliance, and security."}].map(c => (
                <div key={c.title} className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">{c.icon}</span>
                    <span className="text-[10px] font-mono text-purple-400 border border-purple-400/30 rounded-full px-2 py-0.5">{c.level}</span>
                  </div>
                  <h3 className="font-bold mb-2">{c.title}</h3>
                  <p className="text-[#8DA0C0] text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-6 border-t border-white/5 text-center bg-[#0F1B2E]">
          <h2 className="text-2xl font-bold mb-3">Upskill your team in telecom tech</h2>
          <p className="text-[#8DA0C0] mb-6">Group licences available for operators, carriers, and enterprise messaging teams.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors">Get Group Access →</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
