"use client";

import { useEffect, useState } from "react";

export default function FooterCertifications() {
  const [visitorCount, setVisitorCount] = useState<number>(17530);

  useEffect(() => {
    // Subtle realistic visitor increment simulation on load
    const storedCount = localStorage.getItem("smscloudhub_visitors");
    let baseCount = 17530;
    if (storedCount) {
      baseCount = parseInt(storedCount, 10);
    } else {
      localStorage.setItem("smscloudhub_visitors", "17530");
    }
    setVisitorCount(baseCount);

    const interval = setInterval(() => {
      setVisitorCount((prev) => {
        const next = prev + 1;
        localStorage.setItem("smscloudhub_visitors", next.toString());
        return next;
      });
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 my-8 border-t border-b border-gray-800/80 space-y-7 text-left">
      {/* ─── Row 1: Badges Grid (W3C HTML 4.01, W3C CSS, WCAG 2.1 AA, SSL SECURED, ISI CERTIFIED) ─── */}
      <div className="flex flex-wrap items-center gap-3">
        {/* W3C HTML 4.01 Badge */}
        <div className="inline-flex items-center h-8 rounded overflow-hidden border border-amber-500/50 shadow-md hover:scale-[1.03] transition-transform select-none cursor-default">
          <div className="bg-white px-2.5 h-full flex items-center justify-center border-r border-amber-400">
            <span className="font-extrabold text-[#005A9C] text-xs font-sans tracking-tighter">W3C</span>
          </div>
          <div className="bg-[#FFC845] px-2.5 h-full flex items-center gap-1.5 font-bold text-black text-xs font-sans">
            <span>HTML 4.01</span>
            <svg className="w-3.5 h-3.5 text-[#C00000] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" stroke="#C00000" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* W3C CSS Badge */}
        <div className="inline-flex items-center h-8 rounded overflow-hidden border border-amber-500/50 shadow-md hover:scale-[1.03] transition-transform select-none cursor-default">
          <div className="bg-white px-2.5 h-full flex items-center justify-center border-r border-amber-400">
            <span className="font-extrabold text-[#005A9C] text-xs font-sans tracking-tighter">W3C</span>
          </div>
          <div className="bg-[#FFC845] px-2.5 h-full flex items-center gap-1.5 font-bold text-black text-xs font-sans">
            <span>CSS</span>
            <svg className="w-3.5 h-3.5 text-[#C00000] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" stroke="#C00000" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* WCAG 2.1 AA Badge */}
        <div className="inline-flex items-center h-8 px-3 rounded bg-[#0066B2] text-white font-extrabold text-xs tracking-wider border border-blue-400/30 shadow-md hover:scale-[1.03] transition-transform select-none cursor-default">
          <span>WCAG 2.1 AA</span>
        </div>

        {/* SSL SECURED Badge */}
        <div className="inline-flex items-center h-8 rounded overflow-hidden border border-blue-500/50 shadow-md hover:scale-[1.03] transition-transform select-none cursor-default">
          <div className="bg-[#0066CC] px-2.5 h-full flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-[#FFD700]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
          </div>
          <div className="bg-white px-2.5 h-full flex flex-col justify-center text-left leading-tight">
            <span className="font-black text-[9px] text-black tracking-wider uppercase">SSL</span>
            <span className="font-extrabold text-[8px] text-gray-800 tracking-tight uppercase">SECURED</span>
          </div>
        </div>

        {/* ISI CERTIFIED (BIS / ISI Standard) Badge */}
        <div className="inline-flex items-center h-8 rounded overflow-hidden border border-red-600/50 shadow-md hover:scale-[1.03] transition-transform select-none cursor-default">
          <div className="bg-[#B71C1C] px-2 h-full flex items-center justify-center border-r border-red-800">
            <div className="flex flex-col items-center leading-none">
              <span className="font-black text-[11px] text-white tracking-tighter italic font-serif">iSi</span>
              <div className="w-full h-[1.5px] bg-white mt-[0.5px]"></div>
            </div>
          </div>
          <div className="bg-[#FFF8E1] px-2.5 h-full flex items-center gap-1.5 font-extrabold text-[#780016] text-xs font-sans">
            <span>ISI CERTIFIED</span>
            <svg className="w-3.5 h-3.5 text-[#2E7D32]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* ─── Row 2: Find Us on Google & Total Visitors Counter ─── */}
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        {/* Find Us on Google Pill Button */}
        <a
          href="https://www.google.com/search?q=smscloudhub"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF7A00] via-[#FF9500] to-[#FFB300] text-white font-bold text-sm md:text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
        >
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
            {/* Google G Logo SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </div>
          <span className="drop-shadow-sm">Find Us on Google</span>
        </a>

        {/* Total Visitors Counter Pill */}
        <div className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-[#0A162B] border border-blue-900/60 shadow-xl backdrop-blur-md select-none hover:border-cyan-500/40 transition-colors">
          <span className="text-gray-300 text-sm font-medium">Total Visitors :</span>
          <span className="text-white font-mono font-extrabold text-xl md:text-2xl tracking-wider text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
            {visitorCount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* ─── Row 3: MSME & DPIIT Government Registration Card ─── */}
      <div className="pt-1">
        <div className="rounded-xl border border-blue-800/60 bg-[#071328]/95 p-4 md:p-5 shadow-2xl flex items-center gap-3.5 sm:gap-4 w-full max-w-full sm:max-w-lg hover:border-cyan-400/50 transition-colors">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-amber-500/40 flex flex-col items-center justify-center p-1 shrink-0 shadow-md">
            {/* National Emblem / Lion Capital SVG */}
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#7B4019]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C9.24 2 7 4.24 7 7c0 1.6.76 3.03 1.95 3.96C6.54 12.06 5 14.83 5 18h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.17-1.54-5.94-3.95-7.04C16.24 10.03 17 8.6 17 7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
              <circle cx="12" cy="7" r="1.5" fill="#B8860B"/>
            </svg>
            <span className="font-extrabold text-[7px] text-[#002B49] tracking-tighter uppercase mt-0.5">MSME</span>
          </div>
          <div className="space-y-0.5 text-left min-w-0">
            <div className="text-white font-bold text-sm md:text-base tracking-wide flex items-center gap-2 truncate">
              <span>MSME Registered Company</span>
            </div>
            <div className="text-cyan-400 font-mono text-xs font-semibold tracking-wider truncate">
              UDYAM-GJ-01-0628463
            </div>
            <div className="text-gray-400 text-xs font-medium truncate">
              DPIIT: IN-0626-9489YW <span className="text-gray-600">|</span> Startup Founder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
