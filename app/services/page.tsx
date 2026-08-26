import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — A2P SMS, WhatsApp, Voice & CPaaS | SMSCloudHub",
  description:
    "Explore SMSCloudHub's full product suite: A2P SMS & OTP, WhatsApp Business API, Voice Termination, CPaaS APIs, SMSC Firewall, and 0Hop direct connectivity for operators.",
};

const services = [
  {
    icon: "💬",
    category: "Enterprise",
    title: "A2P SMS & OTP Delivery",
    desc: "Transactional and promotional SMS delivered over direct SS7 interconnects to 150+ countries. Sub-2-second latency SLA on Tier-1 routes. Supports long codes, short codes, and alphanumeric sender IDs. DLR receipts in real time via webhook or SMPP.",
    specs: ["SMPP v3.4 & HTTP REST API", "TLS 1.3 encrypted transport", "98.87% average DLR accuracy", "Throughput: up to 10,000 TPS per account"],
    href: "/services/a2p-sms",
  },
  {
    icon: "💚",
    category: "Enterprise",
    title: "WhatsApp Business API",
    desc: "Verified official BSP (Business Solution Provider) access to the WhatsApp Business Platform. Send rich media, interactive buttons, and template messages at scale. Manage agent conversations, chatbots, and notifications from a single API.",
    specs: ["Official Meta BSP access", "Rich media: image, video, document", "Interactive list & reply buttons", "Green tick verification support"],
    href: "/services/whatsapp-business",
  },
  {
    icon: "📈",
    category: "Enterprise",
    title: "Digital Marketing & Transformation",
    desc: "Targeted digital marketing campaigns, customer engagement automation, brand transformation strategies, and analytics to elevate multi-channel reach and conversions.",
    specs: ["Omnichannel campaign automation", "Audience segmentation & targeting", "Conversion tracking & ROI reporting", "Enterprise digital growth strategy"],
    href: "/services/digital-marketing",
  },
  {
    icon: "📞",
    category: "Enterprise",
    title: "Voice Termination & Cloud OTP",
    desc: "Carrier-grade voice termination for A2Z global calling and Voice OTP delivery. Automated TTS calls with customisable voice, language, and retry logic. Ideal when SMS delivery is blocked or the end-user is in a Wi-Fi-only environment.",
    specs: ["SIP & H.323 termination", "50+ language TTS engine", "Configurable retry & timeout", "Real-time CDR reporting"],
    href: "/services/voice-otp",
  },
  {
    icon: "⚙️",
    category: "Developer",
    title: "CPaaS REST APIs",
    desc: "A unified communications-platform-as-a-service layer exposing SMS, WhatsApp, Voice, and Verification through a single REST API. SDKs for Python, Node.js, PHP, Java, and .NET. Sandbox environment included for zero-risk integration testing.",
    specs: ["REST + Webhook architecture", "SDKs: Node, Python, PHP, Java, .NET", "Sandbox & production environments", "OpenAPI 3.0 documentation"],
    href: "/services/cpaas-api",
  },
  {
    icon: "🛡️",
    category: "Operator",
    title: "SMSC Firewall & Grey Route Protection",
    desc: "Protect your subscribers from spam, phishing, and fraudulent A2P traffic. Our SMSC firewall inspects every message at the SS7 layer using ML-based anomaly detection, keyword filtering, and sender reputation scoring. Stop revenue leakage from grey routes.",
    specs: ["Real-time SS7 traffic inspection", "ML-based anomaly & fraud detection", "Configurable keyword & sender rules", "Revenue leakage reporting dashboard"],
    href: "/services/smsc-firewall",
  },
  {
    icon: "🔗",
    category: "Operator / Carrier",
    title: "0Hop Direct Connect",
    desc: "Bypass every intermediary aggregator. SMSCloudHub establishes direct SS7 and SMPP interconnects with your SMSC, eliminating latency from multi-hop routing and giving you unmatched delivery speed, grey-route immunity, and transparent billing.",
    specs: ["Direct SS7 & SMPP peering", "Zero intermediary hops", "Dedicated throughput allocation", "Real-time bilateral DLR exchange"],
    href: "/services/0hop-connectivity",
  },
];

const categoryColors: Record<string, string> = {
  Enterprise: "text-[#22D3EE] border-[#22D3EE]/30 bg-[#22D3EE]/5",
  Developer: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  Operator: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  "Operator / Carrier": "text-amber-400 border-amber-400/30 bg-amber-400/5",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF]">

        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden pt-28 pb-20 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />
          <div className="max-w-3xl mx-auto text-center relative">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-xs font-mono tracking-widest uppercase mb-6">
              • Product Suite
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Every channel.{" "}
              <span className="text-[#22D3EE]">One direct network.</span>
            </h1>
            <p className="text-lg text-[#8DA0C0] max-w-2xl mx-auto leading-relaxed">
              From transactional OTPs to enterprise WhatsApp campaigns — SMSCloudHub's product suite is built on owned infrastructure, not resold capacity. Choose the channels your customers use. Trust the routes we built.
            </p>
          </div>
        </section>

        {/* ─── Services Grid ─── */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-7 flex flex-col gap-4 hover:border-[#22D3EE]/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.06)] transition-all group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-3xl">{svc.icon}</span>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${categoryColors[svc.category]}`}>
                    {svc.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold group-hover:text-[#22D3EE] transition-colors">{svc.title}</h2>
                <p className="text-[#8DA0C0] text-sm leading-relaxed flex-1">{svc.desc}</p>
                <ul className="space-y-1.5 border-t border-white/5 pt-4">
                  {svc.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-xs text-[#8DA0C0]">
                      <span className="text-[#22D3EE] mt-0.5">✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  href={svc.href}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#22D3EE] hover:gap-2 transition-all"
                >
                  Request access →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Integration Banner ─── */}
        <section className="py-16 px-6 border-t border-white/5 bg-[#0F1B2E]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Go live in under 48 hours</h2>
            <p className="text-[#8DA0C0] mb-8 max-w-xl mx-auto">
              Our onboarding team handles SS7 provisioning, API key generation, and test message validation. You focus on the product. We handle the pipes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[#22D3EE] text-[#04141A] font-bold rounded-full hover:bg-white transition-colors"
              >
                Start Integration →
              </Link>
              <a
                href="mailto:info@smscloudhub.com"
                className="px-8 py-3.5 bg-transparent text-white border border-white/20 font-bold rounded-full hover:border-white transition-colors"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
