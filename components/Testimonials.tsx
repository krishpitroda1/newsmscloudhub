"use client";

import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
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
              className="w-11 h-11 rounded-full border border-white/15 bg-[#0F1B2E] text-white flex items-center justify-center hover:border-[#22D3EE] hover:text-[#22D3EE] hover:bg-[#22D3EE]/10 transition-all shadow-md active:scale-95"
              aria-label="Previous Testimonial Slide"
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
              className="w-11 h-11 rounded-full border border-white/15 bg-[#0F1B2E] text-white flex items-center justify-center hover:border-[#22D3EE] hover:text-[#22D3EE] hover:bg-[#22D3EE]/10 transition-all shadow-md active:scale-95"
              aria-label="Next Testimonial Slide"
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

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="w-full shrink-0 px-1 sm:px-2"
              >
                <div className="bg-gradient-to-br from-[#0F1B2E] to-[#0A1220] border border-white/10 hover:border-[#22D3EE]/50 rounded-3xl p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between min-h-[300px] transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/30 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="font-mono text-xs text-[#8DA0C0]">
                        0{idx + 1} / 0{testimonials.length}
                      </span>
                    </div>

                    <p className="text-base sm:text-xl text-[#F3F8FF] leading-relaxed italic font-normal pt-2">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-2xl bg-[#22D3EE] text-[#04141A] font-mono font-extrabold text-sm flex items-center justify-center shrink-0 shadow-lg">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {item.author}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#8DA0C0]">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-[#22D3EE] shadow-[0_0_10px_#22D3EE]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
