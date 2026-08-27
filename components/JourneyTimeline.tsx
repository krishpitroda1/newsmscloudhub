"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type MilestoneCategory = "foundation" | "award" | "event";

export interface TimelineItem {
  id: string;
  year: string;
  date: string;
  tag: string;
  category: MilestoneCategory;
  title: string;
  description: string;
  isFinale?: boolean;
  align: "left" | "right";
}

const timelineData: TimelineItem[] = [
  // 2022
  {
    id: "m-2022-1",
    year: "2022",
    date: "May 2022",
    tag: "Foundation",
    category: "foundation",
    title: "Where it all began",
    description:
      "SMSCloud Hub is born with one goal: make business messaging more **reliable, accessible and globally connected**. The journey starts in A2P SMS, built on quality and long-term relationships.",
    align: "left",
  },
  {
    id: "m-2022-2",
    year: "2022",
    date: "2022",
    tag: "Foundation",
    category: "foundation",
    title: "Building the foundation",
    description:
      "We begin developing dependable carrier routes and strengthening technical capabilities — laying the groundwork for a global wholesale messaging business.",
    align: "right",
  },
  // 2023
  {
    id: "m-2023-1",
    year: "2023",
    date: "2023",
    tag: "Award",
    category: "award",
    title: "Entering the global telecom arena",
    description:
      "SMSCloud Hub steps onto the international stage, nominated and shortlisted at the **Antonio Meucci Global Telco Awards** among established names in messaging.",
    align: "left",
  },
  {
    id: "m-2023-2",
    year: "2023",
    date: "2023",
    tag: "Award",
    category: "award",
    title: "Three high-distinction recognitions",
    description:
      "A defining early moment — **Best Enterprise SMS Provider**, **Unstoppable Warriors / Best Cloud Solution**, and **Leading Male Telco Professional** for Ashish Bavishi. Proof that a young enterprise provider could compete globally.",
    align: "right",
  },
  // 2024
  {
    id: "m-2024-1",
    year: "2024",
    date: "2024",
    tag: "Growth",
    category: "foundation",
    title: "From provider to solution partner",
    description:
      "Our capabilities expand across **Enterprise Messaging, A2P SMS, CPaaS, SMSC Firewall** and managed messaging services — positioning SMSCloud Hub as a broader communication technology partner.",
    align: "left",
  },
  {
    id: "m-2024-2",
    year: "2024",
    date: "2024",
    tag: "Award",
    category: "award",
    title: "Recognition for excellence & responsibility",
    description:
      "**Most Valuable Telecom Solution Provider** (Corporate Connect) and **Best CSR Company in Telecom** — growth measured in innovation and responsibility, not just business.",
    align: "right",
  },
  {
    id: "m-2024-3",
    year: "2024",
    date: "Sept 2024 · Madrid",
    tag: "Event",
    category: "event",
    title: "Connecting with the global telecom community",
    description:
      "SMSCloud Hub joins the ecosystem around the **Antonio Meucci Global Telco Awards** at Hotel Meliá Castilla — meeting carriers, aggregators and industry leaders.",
    align: "left",
  },
  {
    id: "m-2024-4",
    year: "2024",
    date: "Oct 2024",
    tag: "Initiative",
    category: "foundation",
    title: "Exploring the future with AI — Ai1K",
    description:
      "Launch of **Ai1K**, exploring AI's impact on enterprise communication — engaging **1,000+ students across 100+ colleges** in India.",
    align: "right",
  },
  // 2025
  {
    id: "m-2025-1",
    year: "2025",
    date: "2025 · Madrid",
    tag: "Event",
    category: "event",
    title: "Going global at WWC25",
    description:
      "At **Wholesale World Congress 2025**, we showcase Enterprise Messaging & CPaaS capabilities, meeting international carriers and technology partners.",
    align: "left",
  },
  {
    id: "m-2025-2",
    year: "2025",
    date: "2025",
    tag: "Award",
    category: "award",
    title: "A year of recognition",
    description:
      "The **Excellence Award for Best Enterprise SMS Provider** at the Antonio Meucci Global Telco Awards 2025, plus additional recognitions across multiple categories.",
    align: "right",
  },
  {
    id: "m-2025-3",
    year: "2025",
    date: "2025",
    tag: "Award",
    category: "award",
    title: "Visionary of the Year",
    description:
      "Ashish Bavishi is honoured as **Visionary of the Year 2025** at the Forttuna Global Excellence Awards — recognising the leadership behind the journey.",
    align: "left",
  },
  {
    id: "m-2025-4",
    year: "2025",
    date: "2025",
    tag: "Milestone",
    category: "foundation",
    title: "A global messaging ecosystem",
    description:
      "From a young messaging venture to a global technology company — connectivity across **150+ countries**, with **1,000+ enterprises and carriers** onboard.",
    align: "right",
  },
  // 2026
  {
    id: "m-2026-1",
    year: "2026",
    date: "2026",
    tag: "Growth",
    category: "foundation",
    title: "Beyond SMS. Beyond borders.",
    description:
      "The vision evolves — from A2P SMS and wholesale messaging to **CPaaS, WhatsApp, RCS, Voice, Email, SMSC Firewall** and AI-powered security infrastructure.",
    align: "left",
  },
  {
    id: "m-2026-2",
    year: "2026",
    date: "2026",
    tag: "Award",
    category: "award",
    title: "International recognition continues",
    description:
      "Nominations at the Antonio Meucci Global Telco Awards for **Best Enterprise Messaging Platform, Best CPaaS & OTT Implementation, Best Asian Provider** and **Exemplary Corporate Responsibility**.",
    align: "right",
  },
  {
    id: "m-2026-3",
    year: "2026",
    date: "16–18 Sept 2026 · Madrid",
    tag: "WWC26",
    category: "event",
    title: "We return to Madrid",
    description:
      "SMSCloud Hub participates in **Wholesale World Congress 2026** — continuing a journey that began in May 2022. This time, as a growing global communication technology partner.",
    isFinale: true,
    align: "left",
  },
];

// Helper to render bold text in markdown-style (**text**)
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function JourneyTimeline() {
  const [activeFilter, setActiveFilter] = useState<"all" | MilestoneCategory>("all");
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const [spineHeight, setSpineHeight] = useState(0);

  const timelineRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filteredItems = timelineData.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  // Group items by year for year markers (latest year first)
  const years = Array.from(new Set(filteredItems.map((item) => item.year))).sort((a, b) => b.localeCompare(a));

  // Scroll spine progress computation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      if (totalHeight === 0) return;

      const scrolled = Math.min(
        Math.max(windowHeight * 0.5 - rect.top, 0),
        totalHeight
      );
      const pct = (scrolled / totalHeight) * 100;
      setSpineHeight(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [filteredItems]);

  // IntersectionObserver for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(nodeRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [filteredItems]);

  return (
    <section className="relative overflow-hidden bg-[#0A1220] text-[#F3F8FF] py-20 px-4 sm:px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40 hero-grid-pattern" />

      <div className="relative z-10 max-w-[1080px] mx-auto">
        {/* Section Header */}
        <div className="max-w-[880px] mx-auto text-center mb-16">
          <div className="eyebrow-pill mb-6">
            <span className="dot" />
            <span>Our Journey · 2022 — 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            From foundational excellence <br />
            <span className="text-[#22D3EE] text-cyan-glow">
              to a global messaging ecosystem
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#8DA0C0] max-w-[680px] mx-auto leading-relaxed">
            Four years of building trusted messaging infrastructure — one route, one
            carrier relationship, one recognition at a time. From SMSCloud Hub&apos;s
            first day to Wholesale World Congress 2026 in Madrid.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-y border-white/10 max-w-[840px] mx-auto">
            <div className="p-4 text-center">
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#22D3EE]">
                4+
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#8DA0C0] mt-1">
                Years of Growth
              </div>
            </div>
            <div className="p-4 text-center md:border-l md:border-white/10">
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#22D3EE]">
                150+
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#8DA0C0] mt-1">
                Countries Connected
              </div>
            </div>
            <div className="p-4 text-center border-t md:border-t-0 border-white/10 md:border-l md:border-white/10">
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#22D3EE]">
                1,000+
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#8DA0C0] mt-1">
                Enterprises &amp; Carriers
              </div>
            </div>
            <div className="p-4 text-center border-t md:border-t-0 border-white/10 md:border-l md:border-white/10">
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#22D3EE]">
                10+
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#8DA0C0] mt-1">
                Industry Recognitions
              </div>
            </div>
          </div>

          {/* Category Filters / Legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                activeFilter === "all"
                  ? "bg-[#22D3EE] text-[#04141A] shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  : "bg-white/5 text-[#8DA0C0] hover:text-white border border-white/10"
              }`}
            >
              All Milestones ({timelineData.length})
            </button>
            <button
              onClick={() => setActiveFilter("foundation")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                activeFilter === "foundation"
                  ? "bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]"
                  : "bg-white/5 text-[#8DA0C0] hover:text-white border border-white/10"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
              Company Milestone
            </button>
            <button
              onClick={() => setActiveFilter("award")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                activeFilter === "award"
                  ? "bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]"
                  : "bg-white/5 text-[#8DA0C0] hover:text-white border border-white/10"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              Award &amp; Recognition
            </button>
            <button
              onClick={() => setActiveFilter("event")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                activeFilter === "event"
                  ? "bg-[#10B981]/20 text-[#10B981] border border-[#10B981]"
                  : "bg-white/5 text-[#8DA0C0] hover:text-white border border-white/10"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              Global Event Participation
            </button>
          </div>
        </div>

        {/* Interactive Timeline Spine & Cards */}
        <div ref={timelineRef} className="relative mt-12 pb-16">
          {/* Vertical Spine Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 z-0">
            <div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#22D3EE] via-[#3B82F6] to-[#F59E0B] transition-all duration-150 ease-out"
              style={{ height: `${spineHeight}%` }}
            />
          </div>

          {/* Timeline Nodes grouped by year */}
          {years.map((year) => {
            const yearItems = filteredItems.filter((item) => item.year === year);
            return (
              <div key={year} className="mb-8">
                {/* Year Marker Pill */}
                <div className="relative text-center my-10 z-10">
                  <span className="inline-block px-5 py-1.5 rounded-full bg-[#0F1B2E] border border-[#22D3EE]/40 text-[#22D3EE] font-mono text-sm font-bold tracking-widest shadow-lg">
                    {year}
                  </span>
                </div>

                {/* Items for this year */}
                <div className="space-y-8">
                  {yearItems.map((item) => {
                    const isVisible = visibleItems[item.id];
                    const isRight = item.align === "right";

                    // Tag Badge Styling
                    let tagBadge = "bg-[#22D3EE]/15 text-[#22D3EE] border-[#22D3EE]/30";
                    let dotColor = "border-[#22D3EE] bg-[#0A1220]";
                    let dotGlow = "shadow-[0_0_12px_rgba(34,211,238,0.6)]";

                    if (item.category === "award") {
                      tagBadge = "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30";
                      dotColor = "border-[#F59E0B] bg-[#0A1220]";
                      dotGlow = "shadow-[0_0_12px_rgba(245,158,11,0.6)]";
                    } else if (item.category === "event") {
                      tagBadge = "bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30";
                      dotColor = "border-[#10B981] bg-[#0A1220]";
                      dotGlow = "shadow-[0_0_12px_rgba(16,185,129,0.6)]";
                    }

                    if (item.isFinale) {
                      tagBadge = "bg-[#F43F5E]/20 text-[#F43F5E] border-[#F43F5E]/40 font-bold animate-pulse";
                      dotColor = "border-[#F43F5E] bg-[#0A1220]";
                      dotGlow = "shadow-[0_0_20px_rgba(244,63,94,0.8)]";
                    }

                    return (
                      <div
                        key={item.id}
                        data-id={item.id}
                        ref={(el) => {
                          nodeRefs.current[item.id] = el;
                        }}
                        className={`relative flex flex-col md:flex-row items-center w-full min-h-[140px] transition-all duration-700 ease-out ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        {/* Center Dot Node */}
                        <div
                          className={`absolute left-[20px] md:left-1/2 top-7 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-20 transition-transform duration-300 ${dotColor} ${
                            isVisible ? `scale-125 ${dotGlow}` : ""
                          } ${item.isFinale ? "w-6 h-6 animate-pulse" : ""}`}
                        />

                        {/* Horizontal Connector Line */}
                        <div
                          className={`hidden md:block absolute top-[34px] w-9 h-[2px] bg-white/20 z-10 ${
                            isRight ? "left-1/2" : "right-1/2"
                          }`}
                        />

        {/* Content Card Side */}
                        <div
                          className={`w-full md:w-1/2 pl-9 md:pl-0 ${
                            isRight
                              ? "md:ml-auto md:pl-10 lg:pl-12 text-left"
                              : "md:mr-auto md:pr-10 lg:pr-12 md:text-right"
                          }`}
                        >
                          <div
                            className={`p-4 sm:p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                              item.isFinale
                                ? "bg-gradient-to-br from-[#1E293B] via-[#0F1B2E] to-[#1E1B4B] border-[#F43F5E]/50 shadow-[0_0_30px_rgba(244,63,94,0.15)]"
                                : "bg-[#0F1B2E] border-white/10 hover:border-[#22D3EE]/50 hover:bg-[#13243A]/80 shadow-xl"
                            }`}
                          >
                            {/* Card Date & Tag */}
                            <div
                              className={`flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-wider ${
                                isRight ? "justify-start" : "md:justify-end justify-start"
                              }`}
                            >
                              <span className="text-[#8DA0C0] font-medium">
                                {item.date}
                              </span>
                              <span
                                className={`px-2.5 py-0.5 rounded-full border text-[10px] font-semibold ${tagBadge}`}
                              >
                                {item.tag}
                              </span>
                            </div>

                            {/* Card Title */}
                            <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                              {item.title}
                            </h3>

                            {/* Card Description */}
                            <p className="text-sm text-[#8DA0C0] leading-relaxed">
                              {renderFormattedText(item.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Footer Finale */}
        <div className="mt-20 text-center max-w-[760px] mx-auto pt-12 border-t border-white/10">
          <div className="w-16 h-1 bg-gradient-to-r from-[#22D3EE] to-[#F59E0B] mx-auto mb-8 rounded-full" />
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug mb-4">
            Four years. One vision. <br />
            <span className="text-[#22D3EE]">A global journey.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8DA0C0] font-mono uppercase tracking-wide max-w-xl mx-auto leading-relaxed mb-8">
            From early foundations to Madrid — from SMS to CPaaS — from a startup to a
            global messaging ecosystem. And the journey has only just begun.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary px-8 py-3.5 rounded-full text-sm font-bold shadow-lg inline-flex items-center gap-2"
          >
            Connect With Our Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
