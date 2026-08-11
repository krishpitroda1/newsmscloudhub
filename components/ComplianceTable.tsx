"use client";

import { useState } from "react";
import complianceData from "@/data/smsCompliancesData.json";

export default function ComplianceTable() {
  const [search, setSearch] = useState("");

  const filteredData = complianceData.filter((item) => {
    const q = search.toLowerCase();
    return item.country.toLowerCase().includes(q) || item.mcc.toLowerCase().includes(q);
  });

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8 relative max-w-md mx-auto md:mx-0">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by Country or MCC..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-[#0F1B2E] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
        />
      </div>

      {/* Data Table */}
      <div className="bg-[#0F1B2E] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#16253B] border-b border-white/10 text-[#22D3EE] font-mono text-sm uppercase tracking-wider">
                <th className="py-5 px-6 font-bold w-[25%]">Country</th>
                <th className="py-5 px-6 font-bold w-[15%]">MCC</th>
                <th className="py-5 px-6 font-bold">SMS Features & Regulations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm text-[#F3F8FF]">
              {filteredData.length > 0 ? (
                filteredData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-5 px-6 font-bold text-white align-top">
                      {row.country}
                    </td>
                    <td className="py-5 px-6 text-[#8DA0C0] font-mono align-top">
                      {row.mcc}
                    </td>
                    <td className="py-5 px-6 text-[#8DA0C0] leading-relaxed align-top">
                      {/* Render the HTML from the JSON securely */}
                      <div
                        className="text-[#8DA0C0] [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-1.5 last:[&>p]:mb-0 last:[&>ul]:mb-0"
                        dangerouslySetInnerHTML={{ __html: row.featuresHtml }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-gray-500">
                    No compliances found for "{search}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
