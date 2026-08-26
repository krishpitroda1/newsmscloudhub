"use client";

import { useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      quote:
        "SMSCloud Hub has been our trusted partner for wholesale SMS services for a year now. We're happy to have their flawless customer support and be sure that our messaging campaigns run smoothly, making them the obvious choice for the Best Wholesale SMS Provider award.",
      author: "Sertac Vardar",
      company: "Lexico Telecom",
      initials: "SV",
    },
    {
      quote:
        "SMSCloud Hub's marketing strategy is a breath of fresh air in today's digital landscape. Their emphasis on organic growth and genuine interactions reflects their dedication to building lasting relationships with their audience. It's evident that they understand the importance of authenticity in marketing, and it's paying off remarkably well for them.",
      author: "One Technologies",
      company: "One Technologies",
      initials: "OT",
    },
    {
      quote:
        "SMSCloud Hub is a young and vibrant organization, led by one of the most knowledgeable and experienced leaders in the industry, Mr. Ashish Bavishi. In addition to his deep industry insight, he is also one of the most humble and down-to-earth senior professionals I have had the pleasure of meeting. His leadership has instilled the same values and ideology across the entire team.",
      author: "NexG Enterprise",
      company: "NexG Platforms",
      initials: "NE",
    },
    {
      quote:
        "We've been particularly impressed by SMSCloud Hub's endeavors to give back to the community and effect positive change in society. Their initiatives supporting charitable endeavors, advocating diversity and inclusion, and striving for environmental sustainability highlight their dedication to social responsibility.",
      author: "Anish Thakore",
      company: "Buckbox",
      initials: "AT",
    },
    {
      quote:
        "I am extremely satisfied with the high quality and satisfactory results provided by SMSCloud Hub. Their overall support has been exceptional, meeting all the requirements outlined in the Service Level Agreement (SLA). The team has consistently delivered excellent service, going above and beyond to ensure our needs are met.",
      author: "Abrar Tariq",
      company: "Telintel",
      initials: "AT",
    },
    {
      quote:
        "We Tubelight Communication working with SMS Cloud Hub for a long time now, the routes, service and support have been constant and we see working with them successfully in the future as well.",
      author: "Praveen Singh",
      company: "Tubelight Communication",
      initials: "PS",
    },
    {
      quote:
        "I've been using SMSCloud hub for my bulk messaging needs for a while now and I can honestly say that it's the best provider out there. Their pricing is very competitive, their customer service is top-notch, and they are always willing to help out in any way they can. Plus, their software is reliable and easy to use.",
      author: "Ahsan Shaheen",
      company: "Pathfinder Technologies",
      initials: "AS",
    },
    {
      quote:
        "We have been working with SMSCloud Hub since more than a year now and the cooperation with their Commercial Team has been extremely successful. They immediately understand our needs and provide in a short time the optimal solution to our requests both in terms of service quality and costs.",
      author: "Antonio Catanzariti",
      company: "Imerald (FZE)",
      initials: "AC",
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
              Trusted by companies from all walk of business
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
