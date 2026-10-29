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

// TODO: replace with the link to your Google reviews page.
const reviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Touch Bridal Makeover Studio, 215 B Sargunaveethi, Nagercoil, Tamil Nadu, India",
  );

// Replace these sample entries with genuine customer-approved reviews.
// Layout: the first review is the middle card, the next two stack on the right.
const reviews = [
  {
    id: "01",
    name: "Ananya R.",
    initial: "A",
    service: "Bridal Makeup",
    quote:
      "My bridal makeup was absolutely beautiful. The team understood exactly what I wanted and made my day extra special.",
  },
  {
    id: "02",
    name: "Meera S.",
    initial: "M",
    service: "Wedding Look",
    quote:
      "Wonderful experience from beginning to end. The makeup was elegant, comfortable, and lasted throughout my wedding.",
  },
  {
    id: "03",
    name: "Priya K.",
    initial: "P",
    service: "Hair & Makeup",
    quote:
      "Loved every detail of my makeover. The team was welcoming, professional, and incredibly talented.",
  },
  {
  id: "04",
  name: "Aaradhya N.",
  initial: "A",
  service: "Wedding Styling",
  quote:
    "The hairstyle and makeup were exactly what I imagined. I felt confident and beautiful all day.",
},
];

function Stars() {
  return (
    <div
      className="text-[15px] leading-none tracking-[3px] text-[#f5a623]"
      role="img"
      aria-label="5 out of 5 stars"
    >
      ★★★★★
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="rounded-[18px] border border-[#3a2418]/[0.06] bg-white p-6 shadow-[0_14px_40px_-18px_rgba(45,27,19,0.22)] sm:p-7">
      <Stars />

      <p className="mt-4 text-[13px] leading-[1.85] text-[#6b6159] sm:text-sm">
        {review.quote}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e1d3c2] bg-[#eee4d7] text-xs font-semibold text-[#70472f]">
          {review.initial}
        </div>

        <p className="text-xs font-semibold text-[#292521]">{review.name}</p>

        <span className="h-3.5 w-px bg-[#3a2418]/20" aria-hidden="true" />

        <p className="text-[11px] font-medium text-[#8b4a28]">
          {review.service}
        </p>
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
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

const middleColumn = reviews.slice(0, 2);
const rightColumn = reviews.slice(2, 4);

  return (
    <section
      ref={sectionRef}
      className={`${openSans.className} -mt-6 bg-transparent px-3 py-5 sm:-mt-10 sm:px-5 sm:py-8 lg:-mt-14 lg:px-8 lg:py-10`}
    >
      {/* SECTION WIDTH: 1320px */}
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="overflow-hidden rounded-[28px] border border-[#3a2418]/10 bg-[#faf7f0] px-5 py-12 sm:rounded-[36px] sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.05fr_1.05fr] lg:gap-8 xl:gap-10">
            {/* LEFT: HEADING */}
            <div className="testimonial-reveal">
              <p className="text-[20px] font-semibold tracking-[0.12em] text-[#8b4a28]">
                Testimonial
              </p>

              
<h2
  className={`${cormorant.className} mt-3 text-3xl font-semibold leading-[1.12] text-[#2d1b13] sm:text-4xl lg:text-[42px]`}
>
  What our clients say about us
</h2>


              <p className="mt-4 max-w-[290px] text-xs leading-6 text-[#7a6d63] sm:text-[13px]">
                Heartfelt words from our brides and clients, shared in their own
                voice.
              </p>

              {/* <a
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#eee1ca] px-5 py-2.5 text-[11px] font-semibold text-[#8b4a28] transition-colors duration-300 hover:bg-[#8b4a28] hover:text-white"
              >
                View all testimonials
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ›
                </span>
              </a> */}
            </div>

            {/* MIDDLE: ONE REVIEW */}
           {/* MIDDLE: TWO STACKED REVIEWS */}
<div className="flex flex-col gap-5">
  {middleColumn.map((review) => (
    <div key={review.id} className="testimonial-reveal">
      <ReviewCard review={review} />
    </div>
  ))}
</div>

            {/* RIGHT: TWO STACKED REVIEWS */}
            <div className="flex flex-col gap-5">
              {rightColumn.map((review) => (
                <div key={review.id} className="testimonial-reveal">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}