"use client";

import { useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      quote:
        "We have been working with SMSCloud Hub for more than a year now and the cooperation with their commercial team has been extremely successful — they understand our needs and provide the optimal solution quickly.",
      author: "Antonio Catanzariti",
      company: "Imerald (FZE)",
      initials: "AC",
    },
    {
      quote:
        "Choosing SMSCloud Hub as our aggregator was the best decision we made for our business. Their platform seamlessly connects us with multiple telecom operators, simplifying our messaging operations.",
      author: "Erasmus Okrut",
      company: "Intervas Limited",
      initials: "EO",
    },
    {
      quote:
        "The months we spent working with the SMSCloud organization were a great asset to our company. Even though they are a newer firm in the SMS industry, we have a solid working relationship and the business keeps expanding.",
      author: "Maryana Nasr",
      company: "Callync",
      initials: "MN",
    },
    {
      quote:
        "SMSCloud Hub provides one of the best school platforms we've seen, with 24/7 support in the Mozambican market, allowing our growth in the school software segment.",
      author: "Hugo Rebeiro",
      company: "Click Mobile",
      initials: "HR",
    },
    {
      quote:
        "We at Tubelight Communication have been working with SMSCloud Hub for a long time now — the routes, service and support have been constant, and we see this continuing successfully into the future.",
      author: "Praveen Singh",
      company: "Tubelight Communication",
      initials: "PS",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0A1220] border-t border-white/10 relative">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-2 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-[#22D3EE]" />
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted on both sides of the route.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-white/10 bg-[#0F1B2E] text-white flex items-center justify-center hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
              aria-label="Previous Testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 2L3 7l6 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/10 bg-[#0F1B2E] text-white flex items-center justify-center hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
              aria-label="Next Testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 2l6 5-6 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[340px] sm:w-[380px] bg-[#0F1B2E] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#22D3EE]/50 transition-colors shadow-lg"
            >
              <p className="text-sm text-[#F3F8FF] leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#22D3EE] text-[#04141A] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#8DA0C0]">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
