import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Awards & Recognition | SMSCloudHub",
  description: "Industry recognition, awards, and accolades won by SMSCloudHub for delivering excellent telecom and CPaaS solutions.",
};

const awards2025 = [
  {
    title: "Company of The Year",
    awardedBy: "CEO Magazine",
    image: "/awards/company-of-year-2025.jpg", // Placeholder
    colSpan: "md:col-span-2"
  },
  {
    title: "Visionary of the Year",
    awardedBy: "Forttuna Global Excellence Awards® (Mr. Ashish Bavishi)",
    image: "/awards/visionary-2025.jpg",
    colSpan: "md:col-span-2"
  },
  {
    title: "Best Enterprise SMS Provider",
    awardedBy: "Antonio Meucci Global Telco Awards",
    image: "/awards/meucci-enterprise-2025.jpg",
    colSpan: "md:col-span-1"
  },
  {
    title: "Exemplary CSR Company",
    awardedBy: "Antonio Meucci Global Telco Awards",
    image: "/awards/meucci-csr-2025.jpg",
    colSpan: "md:col-span-1"
  },
  {
    title: "Exceptional Training Dept",
    awardedBy: "Antonio Meucci Global Telco Awards",
    image: "/awards/meucci-training-2025.jpg",
    colSpan: "md:col-span-1"
  },
  {
    title: "Best Asia Provider",
    awardedBy: "Antonio Meucci Global Telco Awards",
    image: "/awards/meucci-asia-2025.jpg",
    colSpan: "md:col-span-1"
  },
];

const awards2024 = [
  {
    title: "Most Valuable Telecom Solution Provider",
    awardedBy: "Corporate Connect",
    image: "/awards/corporate-connect-2024.jpg",
  },
  {
    title: "Best Enterprise SMS Provider",
    awardedBy: "Antonio Meucci Global Telco Awards",
    image: "/awards/meucci-enterprise-2024.jpg",
  },
  {
    title: "Exemplary CSR Company",
    awardedBy: "Antonio Meucci Global Telco Awards",
    image: "/awards/meucci-csr-2024.jpg",
  },
  {
    title: "Leading Male Telco Professional",
    awardedBy: "Antonio Meucci Global Telco Awards",
    image: "/awards/meucci-leading-male-2024.jpg",
  },
];

const awards2023 = [
  {
    title: "Best Enterprise SMS Provider",
    awardedBy: "Antonio Meucci Global Telco Awards",
    image: "/awards/meucci-enterprise-2023.jpg",
  },
  {
    title: "Leading Male Telco Professional",
    awardedBy: "Antonio Meucci Global Telco Awards",
    image: "/awards/meucci-leading-male-2023.jpg",
  },
  {
    title: "Unstoppable Warriors",
    awardedBy: "Special High Distinction",
    image: "/awards/meucci-unstoppable-2023.jpg",
  },
];

export default function AwardsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0A1220] text-[#F3F8FF] min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-16 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,211,238,0.1),transparent)]" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6">
              Industry <span className="text-[#22D3EE]">Recognition</span>
            </h1>
            <p className="text-base sm:text-xl text-[#8DA0C0] leading-relaxed max-w-2xl mx-auto">
              Our commitment to delivering secure, scalable, and Carrier Grade Messaging platforms has earned SMSCloud Hub prestigious awards across the globe.
            </p>
          </div>
        </section>

        {/* 2025 Awards */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="text-[#22D3EE]">2025</span> Awards & Highlights
              <div className="h-px bg-white/10 flex-1"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {awards2025.map((award, i) => (
                <div key={i} className={`group bg-[#0F1B2E] border border-white/5 rounded-2xl overflow-hidden hover:border-[#22D3EE]/30 transition-all duration-300 ${award.colSpan || "col-span-1"}`}>
                  <div className="aspect-[4/3] bg-[#16253B] flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for actual Award Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2E] via-transparent to-transparent opacity-80 z-10" />
                    <span className="text-5xl opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-transform duration-500">🏆</span>
                    <span className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#8DA0C0] text-center z-20 border border-dashed border-[#8DA0C0]/30 rounded p-2 bg-[#0F1B2E]/50 backdrop-blur-sm">
                      Image Upload Pending: <br/> {award.image.split('/').pop()}
                    </span>
                  </div>
                  <div className="p-6 relative z-20">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#22D3EE] transition-colors">{award.title}</h3>
                    <p className="text-sm text-[#8DA0C0]">{award.awardedBy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2024 Awards */}
        <section className="py-16 px-6 bg-[#0B1526]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="text-[#22D3EE]">2024</span> Triumphs
              <div className="h-px bg-white/10 flex-1"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {awards2024.map((award, i) => (
                <div key={i} className="group bg-[#0F1B2E] border border-white/5 rounded-2xl overflow-hidden hover:border-[#22D3EE]/30 transition-all duration-300">
                  <div className="aspect-[4/3] bg-[#16253B] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2E] via-transparent to-transparent opacity-80 z-10" />
                    <span className="text-5xl opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-transform duration-500">🏅</span>
                  </div>
                  <div className="p-6 relative z-20 -mt-6">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#22D3EE] transition-colors">{award.title}</h3>
                    <p className="text-sm text-[#8DA0C0]">{award.awardedBy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2023 Awards */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="text-[#22D3EE]">2023</span> Milestones
              <div className="h-px bg-white/10 flex-1"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards2023.map((award, i) => (
                <div key={i} className="group bg-[#0F1B2E] border border-white/5 rounded-2xl overflow-hidden hover:border-[#22D3EE]/30 transition-all duration-300">
                  <div className="p-6 relative z-20">
                     <span className="text-4xl mb-4 block opacity-50">🎖️</span>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#22D3EE] transition-colors">{award.title}</h3>
                    <p className="text-sm text-[#8DA0C0]">{award.awardedBy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
