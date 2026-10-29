
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Open_Sans, Cormorant_Garamond } from "next/font/google";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Replace these sample entries with genuine customer-approved reviews.
const reviews = [
  {
    id: "01",
    name: "Ananya R.",
    initial: "A",
    quote:
      "My bridal makeup was absolutely beautiful. The team understood exactly what I wanted and made my day extra special.",
  },
  {
    id: "02",
    name: "Meera S.",
    initial: "M",
    quote:
      "Wonderful experience from beginning to end. The makeup was elegant, comfortable, and lasted throughout my wedding.",
  },
  {
    id: "03",
    name: "Priya K.",
    initial: "P",
    quote:
      "Loved every detail of my makeover. The team was welcoming, professional, and incredibly talented.",
  },
  {
    id: "04",
    name: "Aaradhya N.",
    initial: "A",
    quote:
      "The hairstyle and makeup were exactly what I imagined. I felt confident and beautiful all day.",
  },
  {
    id: "05",
    name: "Diya M.",
    initial: "D",
    quote:
      "Beautiful work and a lovely team. They listened patiently and created the bridal look I had dreamed of.",
  },
];

function GoogleMark() {
  return (
    <span
      className="bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#EA4335] bg-clip-text font-sans text-[25px] font-bold leading-none text-transparent"
      aria-label="Google"
      title="Google"
    >
      G
    </span>
  );
}

function Stars() {
  return (
    <div
      className="text-[17px] leading-none tracking-[2px] text-[#fbbc04]"
      role="img"
      aria-label="5 out of 5 stars"
    >
      ★★★★★
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[number];
}) {
  return (
    <article className="group flex h-full min-h-[225px] flex-col rounded-[18px] border border-[#e8e1d8] bg-white p-4 shadow-[0_4px_16px_rgba(45,27,19,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c6a265]/60 hover:shadow-[0_10px_28px_rgba(45,27,19,0.10)] sm:min-h-[245px] sm:p-5">

      {/* Reviewer information */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e1d3c2] bg-[#eee4d7] text-sm font-semibold text-[#70472f]">
          {review.initial}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-[#292521]">
            {review.name}
          </p>

          <p className="mt-1 text-[11px] text-[#817a73]">
            Google Review
          </p>
        </div>

        <GoogleMark />
      </div>

      {/* Star rating */}
      <div className="mt-4">
        <Stars />
      </div>

      {/* Review text */}
      <p className="mt-3 flex-1 text-[12px] leading-[1.8] text-[#514941] sm:text-[13px]">
        {review.quote}
      </p>

      {/* Bottom accent */}
      <div className="mt-4 flex items-center justify-between border-t border-[#3a2418]/[0.08] pt-3">
        <span className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#9a8065]">
          Client Experience
        </span>

        <span
          className="text-sm text-[#c6a265] transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </article>
  );
}

export default function CustomerTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          section.querySelectorAll(".testimonial-reveal"),
          {
            y: 22,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={`${openSans.className} -mt-6 bg-transparent px-3 py-5 sm:-mt-10 sm:px-5 sm:py-8 lg:-mt-14 lg:px-8 lg:py-10`}
    >
      {/* SECTION WIDTH: 1320px */}
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="overflow-hidden rounded-[28px] border border-[#3a2418]/10 bg-[#faf7f0] px-4 py-8 sm:rounded-[36px] sm:px-7 sm:py-10 lg:px-10 lg:py-12">

          {/* MAIN HEADING */}
          <header className="testimonial-reveal mb-7 text-center sm:mb-9">
            <h2
              className={`${cormorant.className} text-4xl font-semibold leading-tight text-[#2d1b13] sm:text-5xl lg:text-[56px]`}
            >
              What Our Clients Say
            </h2>
          </header>

          {/* FIVE GOOGLE-STYLE REVIEW CARDS */}
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`testimonial-reveal lg:col-span-2 ${
                  index === 3
                    ? "lg:col-start-2"
                    : index === 4
                      ? "lg:col-start-4"
                      : ""
                }`}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* BOTTOM DETAIL */}
          <footer className="testimonial-reveal mt-8 flex items-center justify-center gap-3 sm:mt-10">
            <span className="h-px w-8 bg-[#c6a265]" />
            <span className="text-sm text-[#c6a265]" aria-hidden="true">
              ♥
            </span>
            <span className="h-px w-8 bg-[#c6a265]" />
          </footer>
        </div>
      </div>
    </section>
  );
}
