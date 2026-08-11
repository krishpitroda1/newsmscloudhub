import Link from "next/link";
import CircuitCanvas from "./CircuitCanvas";

export default function Hero() {
  return (
    <section className="relative pt-12 lg:pt-16 pb-12 overflow-hidden bg-hero-pattern">
      <div className="absolute inset-0 pointer-events-none hero-grid-pattern opacity-30" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Call To Action */}
          <div className="space-y-6 text-left">
            <span className="eyebrow-pill">
              <span className="dot" />
              Global A2P Messaging Network — 193+ Countries
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              <span className="block">Every message.</span>
              <span className="block text-[#22D3EE] text-cyan-glow">
                The shortest path.
              </span>
              <span className="block">To a person.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#8DA0C0] max-w-[50ch] leading-relaxed">
              SMSCloudHub links enterprises, carriers, and mobile operators over direct,
              AI-routed connections — SMS, WhatsApp, Voice, and CPaaS — engineered for
              carrier-grade reliability worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#contact" className="btn btn-primary text-base group">
                Get Your Route
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link href="#services" className="btn btn-ghost text-base">
                See the Network
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs sm:text-sm text-[#8DA0C0]">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
              <span>
                Powering delivery for{" "}
                <strong className="font-mono text-white text-base font-bold">
                  495+
                </strong>{" "}
                telcos, carriers & enterprises worldwide
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Network Graphic */}
          <div className="relative">
            <CircuitCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
