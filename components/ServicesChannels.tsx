import Link from "next/link";

export default function ServicesChannels() {
  const channels = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
          <path
            d="M2 3h14v9H6l-3 3V3z"
            stroke="#04141A"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "A2P SMS & OTP",
      href: "/services/a2p-sms",
      description:
        "Direct-connect messaging for OTPs, transactional alerts, and global campaigns, routed over 0Hop and 1Hop paths with sub-second latency.",
      statValue: "98%",
      statLabel: "Read within 3 minutes",
      tag: "Direct Connectivity",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 2a7 7 0 00-6 10.6L2 16l3.6-1A7 7 0 109 2z"
            stroke="#04141A"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "WhatsApp for Business",
      href: "/services/whatsapp-business",
      description:
        "Automated, conversational engagement on the world's leading messaging app. Drive support automation, recovery flows, and verified notifications.",
      statValue: "2.5x",
      statLabel: "Conversions vs. traditional email",
      tag: "Conversational Commerce",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
          <path
            d="M4 3h3l1.5 4L7 8.5a10 10 0 005 5l1.5-1.5 4 1.5v3a1.5 1.5 0 01-1.6 1.5A15 15 0 013 4.6 1.5 1.5 0 014 3z"
            stroke="#04141A"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Voice & Voice OTP",
      href: "/services/voice-otp",
      description:
        "Tier-1 VoIP termination, SIP trunking, and voice pin generation backed by our high-capacity carrier network for agent operations.",
      statValue: "150+",
      statLabel: "Countries voice terminated",
      tag: "Tier-1 VoIP",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
          <rect
            x="2"
            y="2"
            width="6"
            height="6"
            rx="1.2"
            stroke="#04141A"
            strokeWidth="1.6"
          />
          <rect
            x="10"
            y="2"
            width="6"
            height="6"
            rx="1.2"
            stroke="#04141A"
            strokeWidth="1.6"
          />
          <rect
            x="2"
            y="10"
            width="6"
            height="6"
            rx="1.2"
            stroke="#04141A"
            strokeWidth="1.6"
          />
          <rect
            x="10"
            y="10"
            width="6"
            height="6"
            rx="1.2"
            stroke="#04141A"
            strokeWidth="1.6"
          />
        </svg>
      ),
      title: "Programmable CPaaS",
      href: "/services/cpaas-api",
      description:
        "One unified developer API across SMS, Voice, WhatsApp, and Email. Built to scale with high-throughput multi-channel logic.",
      statValue: "6+",
      statLabel: "Unified communication APIs",
      tag: "Developer Ready",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0A1220] relative">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
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
          <span className="eyebrow">Communication Channels</span>
          <span className="tr-line" />
        </div>

        <div className="max-w-[680px] mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            One platform, every channel that reaches your customer.
          </h2>
          <p className="text-[#8DA0C0] text-lg mt-4 leading-relaxed">
            From transactional OTPs to full conversational commerce, route messages
            through the channels your audience prefers over connections engineered end-to-end.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#22D3EE] hover:-translate-y-1 transition-all group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#22D3EE] flex items-center justify-center text-[#04141A] font-bold group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-wider uppercase bg-white/5 border border-white/10 text-[#8DA0C0] px-2.5 py-1 rounded-md">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-[#8DA0C0] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                <div className="flex items-baseline gap-2 font-mono">
                  <span className="text-2xl font-extrabold text-[#22D3EE]">
                    {card.statValue}
                  </span>
                  <span className="text-xs text-[#8DA0C0] leading-snug">
                    {card.statLabel}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#22D3EE] group-hover:underline flex items-center gap-1">
                  Explore Channel →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
