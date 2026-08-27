export default function TrustReliability() {
  const pillars = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.5l5.5 2v4c0 3.7-2.4 6.3-5.5 7-3.1-.7-5.5-3.3-5.5-7v-4L8 1.5z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
      title: "Fraud & Grey-Route Filtering",
      description:
        "Our SMSC Firewall inspects traffic in real time, blocking SIM-box bypass, spam, and unmonetized grey routes before they reach your network path.",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 8l3 3 9-9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "SLA-Backed Uptime & Scale",
      description:
        "99.95% platform availability with burstable capacity up to 1,000 TPS, engineered for carrier grade duty cycles and mission critical OTPs.",
    },
  ];

  return (
    <section id="reliability" className="py-12 sm:py-20 lg:py-24 bg-[#0A1220] border-t border-white/10 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
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
          <span className="eyebrow">Enterprise Reliability</span>
          <span className="tr-line" />
        </div>

        <div className="max-w-[680px] mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Carrier grade by design, not by exception.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0F1B2E] border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col space-y-3 sm:space-y-4 hover:border-[#22D3EE]/60 transition-all"
            >
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[#22D3EE]">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white pt-1 sm:pt-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#8DA0C0] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
