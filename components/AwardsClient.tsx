"use client";

import { useState } from "react";

export interface AwardItem {
  id: string;
  title: string;
  awardedBy: string;
  subtitle?: string;
  year: string;
  image?: string;
  hasImage?: boolean;
  link?: string;
  badge?: string;
  colSpan?: string;
  category?: "award" | "media";
}

export const awards2026: AwardItem[] = [
  {
    id: "meucci-awards-2026",
    title: "Best Asian Provider & CSR Distinction",
    awardedBy: "4th Antonio Meucci Global Telco Awards 2026",
    subtitle: "Conferred on SMSCLOUD HUB for winning 1st place in the Category BEST ASIAN PROVIDER and 3rd place in 'EXEMPLARY' CORPORATE SOCIAL RESPONSIBILITY at the 4th Antonio Meucci Global Telco Awards '26",
    year: "2026",
    image: "/awards/meucci-awards-2026.png",
    hasImage: true,
    badge: "1st Place & High Distinction 2026",
    colSpan: "md:col-span-2",
    category: "award",
  },
  {
    id: "iso-9001-2015-cert",
    title: "ISO 9001:2015 Quality Management System Certification",
    awardedBy: "QRO Certification (EGAC & IAF Accredited)",
    subtitle: "Independently assessed and certified compliant for Provision of A2P SMS Services, Communications Platform as a Service (CPaaS), Managed Services, and Technology Solutions. Certificate No: 3050260702155Q (Valid thru July 2029).",
    year: "2026",
    image: "/awards/iso-9001-2015-certificate.jpg",
    hasImage: true,
    badge: "ISO 9001:2015 Certified",
    colSpan: "md:col-span-2",
    category: "award",
  },
];

export const awards2025: AwardItem[] = [
  {
    id: "silicon-india-2025",
    title: "Top 10 Best CPaaS Solution Startups 2025",
    awardedBy: "Silicon India (Startup City) Magazine",
    subtitle: "SMSCLOUD HUB: Redefining Enterprise Communications through its Secure, Scalable & Compliant CPaaS Suite",
    year: "2025",
    image: "/awards/silicon-india-cpaas-2025.png",
    hasImage: true,
    link: "https://startup.siliconindia.com/vendor/smscloud-hub-redefining-enterprise-communications-through-its-secure-scalable-compliant-cpaas-suite-cid-26120.html",
    badge: "In The Media — 2025",
    colSpan: "md:col-span-2",
    category: "media",
  },
  {
    id: "company-of-year-2025",
    title: "Company of The Year 2025",
    awardedBy: "The CEO Magazine",
    subtitle: "SMSCloud Hub: Architecting a Secure, Scalable Messaging Ecosystem for Global Enterprises and Carriers",
    year: "2025",
    image: "/awards/company-of-year-2025.png",
    hasImage: true,
    link: "https://www.theceo.in/magazine/company-of-the-year/smscloud-hub",
    badge: "Cover Feature — 2025",
    colSpan: "md:col-span-2",
    category: "media",
  },
  {
    id: "visionary-2025",
    title: "Visionary of the Year – 2025",
    awardedBy: "Forttuna Global Excellence Awards®",
    subtitle: "Judges Panel at Forttuna Global Excellence Awards® awarded Mr. Ashish Bavishi as Visionary of the Year – 2025",
    year: "2025",
    image: "/awards/visionary-2025.png",
    hasImage: true,
    badge: "Leadership Award",
    colSpan: "md:col-span-2",
    category: "award",
  },
  {
    id: "meucci-enterprise-2025",
    title: "Best Enterprise SMS Provider",
    awardedBy: "Antonio Meucci Global Telco Awards 2025",
    subtitle: "Excellence Award for winning 1st place in Best Enterprise SMS Provider category at Madrid, Spain",
    year: "2025",
    image: "/awards/meucci-awards-2025.png",
    hasImage: true,
    badge: "Excellence Award",
    colSpan: "md:col-span-1",
    category: "award",
  },
  {
    id: "meucci-csr-2025",
    title: "Exemplary CSR Company",
    awardedBy: "Antonio Meucci Global Telco Awards 2025",
    subtitle: "Honors Award for Exemplary Corporate Social Responsibility in Telecom",
    year: "2025",
    image: "/awards/meucci-awards-2025.png",
    hasImage: true,
    badge: "Honors Award",
    colSpan: "md:col-span-1",
    category: "award",
  },
  {
    id: "meucci-training-2025",
    title: "Exceptional Training Dept",
    awardedBy: "Antonio Meucci Global Telco Awards 2025",
    subtitle: "High-Distinction Award for Exceptional Training Department in Telecom Infrastructure",
    year: "2025",
    image: "/awards/meucci-awards-2025.png",
    hasImage: true,
    badge: "High Distinction",
    colSpan: "md:col-span-1",
    category: "award",
  },
  {
    id: "meucci-asia-2025",
    title: "Best Asia Provider",
    awardedBy: "Antonio Meucci Global Telco Awards 2025",
    subtitle: "High-Distinction Award for Best Asia Telecom & Messaging Provider",
    year: "2025",
    image: "/awards/meucci-awards-2025.png",
    hasImage: true,
    badge: "High Distinction",
    colSpan: "md:col-span-1",
    category: "award",
  },
];

export const awards2024: AwardItem[] = [
  {
    id: "corporate-connect-2024",
    title: "Most Valuable Telecom Solution Provider",
    awardedBy: "Corporate Connect",
    subtitle: "Corporate Connect announced SMSCloud Hub as The Most Valuable Telecom Solution Provider in 2024 with Certificate of Appreciation",
    year: "2024",
    image: "/awards/corporate-connect-2024.png",
    hasImage: true,
    badge: "Most Valuable Provider",
    colSpan: "md:col-span-2",
    category: "award",
  },
  {
    id: "global-connectivity-asia-pacific-2024",
    title: "Best Asia-Pacific Connectivity Provider",
    awardedBy: "Global Connectivity Awards 2024",
    subtitle: "Nominated among top global telecom leaders as Best Asia-Pacific Connectivity Provider in Global Connectivity Awards 2024",
    year: "2024",
    image: "/awards/global-connectivity-asia-pacific-2024.png",
    hasImage: true,
    badge: "Connectivity Award 2024",
    colSpan: "md:col-span-2",
    category: "award",
  },
  {
    id: "meucci-enterprise-2024",
    title: "Best Enterprise SMS Provider",
    awardedBy: "Antonio Meucci Global Telco Awards 2024",
    subtitle: "Recognized as Best Enterprise SMS Provider at Madrid, Spain",
    year: "2024",
    image: "/awards/meucci-awards-2024.png",
    hasImage: true,
    badge: "Top 3 Finalist & Award",
    colSpan: "md:col-span-1",
    category: "award",
  },
  {
    id: "meucci-csr-2024",
    title: "Exemplary CSR Company",
    awardedBy: "Antonio Meucci Global Telco Awards 2024",
    subtitle: "Honored for Exemplary Corporate Social Responsibility in Telecom",
    year: "2024",
    image: "/awards/meucci-awards-2024.png",
    hasImage: true,
    badge: "Exemplary CSR",
    colSpan: "md:col-span-1",
    category: "award",
  },
  {
    id: "meucci-leading-male-2024",
    title: "Leading Male Telco Professional",
    awardedBy: "Antonio Meucci Global Telco Awards 2024",
    subtitle: "Ashish Bavishi recognized as Leading Male Telco Professional",
    year: "2024",
    image: "/awards/meucci-awards-2024.png",
    hasImage: true,
    badge: "Leadership Recognition",
    colSpan: "md:col-span-2",
    category: "award",
  },
];

export const awards2023: AwardItem[] = [
  {
    id: "carrier-community-voice-2023",
    title: "BEST Voice Service Innovation",
    awardedBy: "Carrier Community Global Awards",
    subtitle: "Global Carrier Awards 2023 | 18 October 2023 | London, UK (Shortlisted)",
    year: "2023",
    image: "/awards/carrier-community-voice-innovation-2023.png",
    hasImage: true,
    badge: "Carrier Community Global Awards",
    colSpan: "md:col-span-2",
    category: "award",
  },
  {
    id: "meucci-enterprise-2023",
    title: "Best Enterprise SMS Provider",
    awardedBy: "Antonio Meucci Global Telco Awards 2023",
    subtitle: "MoreThan160 Presents The Antonio Meucci Global Telco Awards 2023",
    year: "2023",
    image: "/awards/meucci-awards-2023.png",
    hasImage: true,
    badge: "Meucci Award 2023",
    colSpan: "md:col-span-1",
    category: "award",
  },
  {
    id: "meucci-leading-male-2023",
    title: "Leading Male Telco Professional",
    awardedBy: "Antonio Meucci Global Telco Awards 2023",
    subtitle: "Ashish Bavishi awarded Leading Male Telco Professional",
    year: "2023",
    image: "/awards/meucci-awards-2023.png",
    hasImage: true,
    badge: "Leadership Award",
    colSpan: "md:col-span-1",
    category: "award",
  },
  {
    id: "meucci-unstoppable-2023",
    title: "Unstoppable Warriors",
    awardedBy: "Antonio Meucci Global Telco Awards 2023",
    subtitle: "Special High Distinction Award as the Unstoppable Warriors",
    year: "2023",
    image: "/awards/meucci-awards-2023.png",
    hasImage: true,
    badge: "High Distinction",
    colSpan: "md:col-span-2",
    category: "award",
  },
];

export default function AwardsClient() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "media" | "award">("all");

  const openLightbox = (award: AwardItem) => {
    if (award.hasImage && award.image) {
      setSelectedAward(award);
    }
  };

  const closeLightbox = () => {
    setSelectedAward(null);
  };

  return (
    <div className="relative">
      {/* Lightbox Modal */}
      {selectedAward && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0F1B2E] border border-[#22D3EE]/30 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-[#8DA0C0] hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors z-20 text-xl font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-3/5 relative bg-[#060D17] rounded-xl overflow-hidden border border-white/10 p-2 group flex items-center justify-center">
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="w-full h-auto object-contain max-h-[60vh] rounded-lg"
                />
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-between space-y-4">
                <div>
                  {selectedAward.badge && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-mono font-semibold mb-3">
                      {selectedAward.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight">
                    {selectedAward.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#22D3EE] mb-3">
                    {selectedAward.awardedBy} ({selectedAward.year})
                  </p>
                  {selectedAward.subtitle && (
                    <p className="text-sm text-[#8DA0C0] leading-relaxed border-l-2 border-[#22D3EE]/40 pl-3 py-1 mb-4 italic bg-white/5 rounded-r">
                      &ldquo;{selectedAward.subtitle}&rdquo;
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  {selectedAward.link && (
                    <a
                      href={selectedAward.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-[#22D3EE] hover:bg-[#1bb8d0] text-[#04141A] font-bold py-3 px-5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                    >
                      <span>Read Feature Article</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}

                  <button
                    onClick={closeLightbox}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="max-w-6xl mx-auto mb-10 px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
              activeFilter === "all"
                ? "bg-[#22D3EE] text-[#04141A] shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                : "bg-[#0F1B2E] text-[#8DA0C0] hover:text-white border border-white/10"
            }`}
          >
            All Recognitions ({awards2026.length + awards2025.length + awards2024.length + awards2023.length})
          </button>
          <button
            onClick={() => setActiveFilter("media")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 transition-all ${
              activeFilter === "media"
                ? "bg-[#22D3EE] text-[#04141A] shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                : "bg-[#0F1B2E] text-[#8DA0C0] hover:text-white border border-white/10"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
            In The Media & Press
          </button>
          <button
            onClick={() => setActiveFilter("award")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 transition-all ${
              activeFilter === "award"
                ? "bg-[#22D3EE] text-[#04141A] shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                : "bg-[#0F1B2E] text-[#8DA0C0] hover:text-white border border-white/10"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            Industry Awards
          </button>
        </div>
      </div>

      {/* 2026 Section */}
      {(activeFilter === "all" || awards2026.some((a) => a.category === activeFilter)) && (
        <section className="py-12 px-6 bg-[#0B1526]/80 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center gap-4 text-white">
              <span className="text-[#22D3EE] font-mono">2026</span> Global Telco & Compliance Recognitions
              <div className="h-px bg-gradient-to-r from-white/15 to-transparent flex-1" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {awards2026
                .filter((a) => activeFilter === "all" || a.category === activeFilter)
                .map((award) => (
                  <AwardCard key={award.id} award={award} onOpen={openLightbox} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* 2025 Section */}
      {(activeFilter === "all" || awards2025.some((a) => a.category === activeFilter)) && (
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center gap-4 text-white">
              <span className="text-[#22D3EE] font-mono">2025</span> Awards & Media Coverage
              <div className="h-px bg-gradient-to-r from-white/15 to-transparent flex-1" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {awards2025
                .filter((a) => activeFilter === "all" || a.category === activeFilter)
                .map((award) => (
                  <AwardCard key={award.id} award={award} onOpen={openLightbox} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* 2024 Section */}
      {(activeFilter === "all" || awards2024.some((a) => a.category === activeFilter)) && (
        <section className="py-12 px-6 bg-[#0B1526]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center gap-4 text-white">
              <span className="text-[#22D3EE] font-mono">2024</span> Triumphs
              <div className="h-px bg-gradient-to-r from-white/15 to-transparent flex-1" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {awards2024
                .filter((a) => activeFilter === "all" || a.category === activeFilter)
                .map((award) => (
                  <AwardCard key={award.id} award={award} onOpen={openLightbox} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* 2023 Section */}
      {(activeFilter === "all" || awards2023.some((a) => a.category === activeFilter)) && (
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center gap-4 text-white">
              <span className="text-[#22D3EE] font-mono">2023</span> Global Recognition
              <div className="h-px bg-gradient-to-r from-white/15 to-transparent flex-1" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {awards2023
                .filter((a) => activeFilter === "all" || a.category === activeFilter)
                .map((award) => (
                  <AwardCard key={award.id} award={award} onOpen={openLightbox} />
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function AwardCard({
  award,
  onOpen,
}: {
  award: AwardItem;
  onOpen: (award: AwardItem) => void;
}) {
  return (
    <div
      className={`group bg-[#0F1B2E] border border-white/10 rounded-2xl overflow-hidden hover:border-[#22D3EE]/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 flex flex-col justify-between ${
        award.colSpan || "col-span-1"
      }`}
    >
      <div>
        {/* Card Header Media Container */}
        <div
          onClick={() => award.hasImage && onOpen(award)}
          className={`aspect-[16/9] sm:aspect-[4/3] bg-[#060D17] relative overflow-hidden flex items-center justify-center ${
            award.hasImage ? "cursor-pointer" : ""
          }`}
        >
          {award.hasImage && award.image ? (
            <>
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2E] via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Click to expand overlay button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                <span className="bg-[#22D3EE] text-[#04141A] text-xs font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  View Full Photo
                </span>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#122238] to-[#0A1220]">
              <span className="text-4xl mb-2 opacity-30 group-hover:scale-110 group-hover:opacity-60 transition-transform duration-500">
                🏆
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8DA0C0]/60">
                Official Recognition
              </span>
            </div>
          )}

          {award.badge && (
            <span className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-[#0F1B2E]/90 border border-[#22D3EE]/40 text-[#22D3EE] text-[10px] font-mono font-bold backdrop-blur-md shadow-md">
              {award.badge}
            </span>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-lg font-extrabold mb-1 text-white group-hover:text-[#22D3EE] transition-colors leading-snug">
            {award.title}
          </h3>
          <p className="text-sm font-medium text-[#22D3EE]/90 mb-2">
            {award.awardedBy}
          </p>

          {award.subtitle && (
            <p className="text-xs text-[#8DA0C0] line-clamp-3 leading-relaxed mt-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
              {award.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-white/5">
        {award.hasImage ? (
          <button
            onClick={() => onOpen(award)}
            className="text-xs font-bold text-[#22D3EE] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>View Image</span>
            <span>→</span>
          </button>
        ) : (
          <span className="text-[11px] font-mono text-[#8DA0C0]/60">
            Award Verified
          </span>
        )}

        {award.link && (
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-white bg-[#22D3EE]/20 hover:bg-[#22D3EE] hover:text-[#04141A] px-3 py-1.5 rounded-lg border border-[#22D3EE]/40 transition-all flex items-center gap-1"
          >
            <span>Read Article</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
