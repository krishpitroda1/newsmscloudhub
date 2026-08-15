import Link from "next/link";

export default function RoleSolutions() {
  const roles = [
    {
      eyebrow: "Enterprise",
      title: "Reach & Engage Customers",
      items: [
        { label: "WhatsApp for Business API", href: "/services/whatsapp-business" },
        { label: "High-Volume A2P SMS & OTP", href: "/services/a2p-sms" },
        { label: "Digital Marketing & Transformation", href: "/services/digital-marketing" },
        { label: "Programmable CPaaS APIs", href: "/services/cpaas-api" },
      ],
    },
    {
      eyebrow: "Carrier",
      title: "Wholesale Interconnect",
      items: [
        { label: "Global A2P SMS Hubbing", href: "/services/a2p-hubbing" },
        { label: "Tier-1 Voice Termination", href: "/services/sip-trunk-voice" },
        { label: "International Virtual DIDs", href: "/services/virtual-did" },
        { label: "0Hop Carrier Peering", href: "/services/0hop-connectivity" },
      ],
    },
    {
      eyebrow: "MNO & MVNO",
      title: "Monetize & Protect Networks",
      items: [
        { label: "0Hop Direct SMS Connectivity", href: "/services/0hop-connectivity" },
        { label: "Managed Messaging Services", href: "/services/managed-services" },
        { label: "Real-Time SMSC Firewall", href: "/services/smsc-firewall" },
        { label: "Operator VAS Monetization", href: "/services/vas-solutions" },
      ],
    },
    {
      eyebrow: "Technology",
      title: "Build & Integrate Easily",
      items: [
        { label: "CloudSkool++ Platform", href: "/services/cloudskool" },
        { label: "Developer CPaaS SDKs", href: "/services/cpaas-api" },
        { label: "CloudContactCenter (CCC)", href: "/services/cloud-contact-center" },
        { label: "Custom SMPP & HTTP Gateways", href: "/services/cpaas-platform" },
      ],
    },
  ];

  return (
    <section id="roles" className="py-24 bg-[#0A1220] border-t border-white/10 relative">
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
          <span className="eyebrow">Solutions By Role</span>
          <span className="tr-line" />
        </div>

        <div className="max-w-[760px] mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Connecting Operators, Carriers and Enterprises through the right technology, routes and solutions.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#22D3EE]/60 transition-all group"
            >
              <div>
                <span className="font-mono text-xs text-[#22D3EE] uppercase tracking-wider font-bold">
                  {role.eyebrow}
                </span>

                <h3 className="text-xl font-bold text-white mt-2 mb-6">
                  {role.title}
                </h3>

                <ul className="space-y-1">
                  {role.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-2.5 border-t border-white/5 text-sm text-[#8DA0C0] hover:text-[#22D3EE] transition-colors group/item"
                      >
                        <span>{item.label}</span>
                        <span className="opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-[#22D3EE]">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
