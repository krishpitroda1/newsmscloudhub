"use client";

import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote:
        "SMSCloud Hub has been our trusted partner for wholesale SMS services for a year now. We're happy to have their flawless customer support and be sure that our messaging campaigns run smoothly, making them the obvious choice for the Best Wholesale SMS Provider award.",
      author: "Sertac Vardar",
      company: "Lexico Telecom",
      category: "Best Wholesale SMS Provider",
      initials: "SV",
    },
    {
      quote:
        "SMSCloud Hub's marketing strategy is a breath of fresh air in today's digital landscape. Their emphasis on organic growth and genuine interactions reflects their dedication to building lasting relationships with their audience. It's evident that they understand the importance of authenticity in marketing, and it's paying off remarkably well for them.",
      author: "One Technologies",
      company: "One Technologies",
      category: "Authentic Growth & Marketing",
      initials: "OT",
    },
    {
      quote:
        "SMSCloud Hub is a young and vibrant organization, led by one of the most knowledgeable and experienced leaders in the industry, Mr. Ashish Bavishi. In addition to his deep industry insight, he is also one of the most humble and down-to-earth senior professionals I have had the pleasure of meeting. His leadership has instilled the same values and ideology across the entire team.",
      author: "NexG Enterprise",
      company: "NexG Platforms",
      category: "Visionary Industry Leadership",
      initials: "NE",
    },
    {
      quote:
        "We've been particularly impressed by SMSCloud Hub's endeavors to give back to the community and effect positive change in society. Their initiatives supporting charitable endeavors, advocating diversity and inclusion, and striving for environmental sustainability highlight their dedication to social responsibility.",
      author: "Anish Thakore",
      company: "Buckbox",
      category: "Social Responsibility & CSR",
      initials: "AT",
    },
    {
      quote:
        "I am extremely satisfied with the high quality and satisfactory results provided by SMSCloud Hub. Their overall support has been exceptional, meeting all the requirements outlined in the Service Level Agreement (SLA). The team has consistently delivered excellent service, going above and beyond to ensure our needs are met.",
      author: "Abrar Tariq",
      company: "Telintel",
      category: "Exceptional SLA & Support",
      initials: "AT",
    },
    {
      quote:
        "We Tubelight Communication working with SMS Cloud Hub for a long time now, the routes, service and support have been constant and we see working with them successfully in the future as well.",
      author: "Praveen Singh",
      company: "Tubelight Communication",
      category: "Constant Route Reliability",
      initials: "PS",
    },
    {
      quote:
        "I've been using SMSCloud hub for my bulk messaging needs for a while now and I can honestly say that it's the best provider out there. Their pricing is very competitive, their customer service is top-notch, and they are always willing to help out in any way they can. Plus, their software is reliable and easy to use.",
      author: "Ahsan Shaheen",
      company: "Pathfinder Technologies",
      category: "Top-notch Bulk Messaging",
      initials: "AS",
    },
    {
      quote:
        "We have been working with SMSCloud Hub since more than a year now and the cooperation with their Commercial Team has been extremely successful. They immediately understand our needs and provide in a short time the optimal solution to our requests both in terms of service quality and costs.",
      author: "Antonio Catanzariti",
      company: "Imerald (FZE)",
      category: "Best Asia Provider Award",
      initials: "AC",
    },
  ];

  // Double array for seamless infinite scrolling
  const infiniteTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0A1220] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-2 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-[#22D3EE] animate-ping" />
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What industry leaders say about SMSCloudHub
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-white/15 bg-[#0F1B2E] text-white flex items-center justify-center hover:border-[#22D3EE] hover:text-[#22D3EE] hover:bg-[#22D3EE]/10 transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <svg className="w-5 h-5" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 2L3 7l6 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-white/15 bg-[#0F1B2E] text-white flex items-center justify-center hover:border-[#22D3EE] hover:text-[#22D3EE] hover:bg-[#22D3EE]/10 transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Next Testimonials"
            >
              <svg className="w-5 h-5" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 2l6 5-6 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Continuous Infinite Loop Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {infiniteTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0"
            >
              <div className="bg-gradient-to-br from-[#0F1B2E] to-[#0A1220] border border-white/10 hover:border-[#22D3EE]/50 rounded-3xl p-7 sm:p-8 shadow-2xl relative flex flex-col justify-between h-full min-h-[290px] transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/30 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#F3F8FF] leading-relaxed italic font-normal pt-1">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-5 mt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-2xl bg-[#22D3EE] text-[#04141A] font-mono font-extrabold text-xs flex items-center justify-center shrink-0 shadow-lg">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {item.author}
                    </h4>
                    <p className="text-xs text-[#8DA0C0]">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
