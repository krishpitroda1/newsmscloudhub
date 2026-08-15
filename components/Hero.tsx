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
            <div className="inline-flex max-w-full">
              <span className="eyebrow-pill max-w-full flex-wrap sm:flex-nowrap">
                <span className="dot shrink-0" />
                <span className="truncate sm:whitespace-normal">Global A2P Messaging Network — 185+ Countries</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              <span className="block">Every message.</span>
              <span className="block text-[#22D3EE] text-cyan-glow">
                The shortest path.
              </span>
              <span className="block">To a person.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#8DA0C0] max-w-[50ch] leading-relaxed">
              SMSCloudHub links enterprises, carriers, and mobile operators over direct,
              AI-routed connections — SMS, WhatsApp, Voice, and CPaaS — engineered for
              carrier-grade reliability worldwide.
            </p>

            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3.5 pt-2">
              <Link href="/contact" className="btn btn-primary text-sm sm:text-base group text-center justify-center">
                Get Your Route
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link href="/services" className="btn btn-ghost text-sm sm:text-base text-center justify-center">
                See the Network
              </Link>
            </div>

            <div className="pt-2 flex items-center gap-2.5 text-xs sm:text-sm text-[#8DA0C0]">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse shrink-0" />
              <span>
                Powering delivery for{" "}
                <strong className="font-mono text-white text-sm sm:text-base font-bold">
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
