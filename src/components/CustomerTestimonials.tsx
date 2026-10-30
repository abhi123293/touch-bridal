"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Inter_Tight, Cormorant_Garamond } from "next/font/google";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const interTight = Inter_Tight({
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

const reviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Touch Bridal Makeover Studio, 215 B Sargunaveethi, Nagercoil, Tamil Nadu, India",
  );

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
  {
  id: "05",
  name: "Nisha V.",
  initial: "N",
  service: "Bridal Styling",
  quote:
    "The team made me feel so comfortable and special. My bridal look was beautiful, and I received so many compliments on my wedding day.",
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

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[number];
}) {
  return (
    <article className="flex h-full min-h-[190px] flex-col justify-between rounded-[18px] border border-[#3a2418]/[0.06] bg-white p-5 shadow-[0_14px_40px_-18px_rgba(45,27,19,0.18)] sm:p-6 lg:p-7">
      <div>
        <Stars />

       <p className="mt-4 text-[15px] leading-[1.8] text-black sm:text-base lg:text-[17px]">
  {review.quote}
</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e1d3c2] bg-[#eee4d7] text-xs font-semibold text-[#70472f]">
          {review.initial}
        </div>

        <p className="text-xs font-semibold text-[#292521]">
          {review.name}
        </p>

        <span
          className="hidden h-3.5 w-px bg-[#3a2418]/20 sm:block"
          aria-hidden="true"
        />

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

  return (
    <section
      ref={sectionRef}
      className={`${interTight.className} -mt-6 bg-transparent px-3 py-5 sm:-mt-10 sm:px-5 sm:py-8 lg:-mt-14 lg:px-8 lg:py-10`}
    >
      {/* SECTION WIDTH: 1320px */}
      <div className="mx-auto w-full max-w-[1320px]">
        {/* WHITE SECTION BACKGROUND — KEEP AS IS */}
        <div className="overflow-hidden  bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
          {/* CENTERED SECTION HEADING */}
          <div className="testimonial-reveal mx-auto mb-8 w-full max-w-[760px] text-center sm:mb-10 lg:mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black sm:text-xs">
              Testimonials
            </p>

           <h2
  className={`${cormorant.className} mt-3 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.08] text-[#25232A]`}
>
  What our clients say{" "}
  <span className="text-[#8D6CA3]">
    about us
  </span>
</h2>

            <p className="mx-auto mt-4 max-w-[520px] text-xs leading-6 text-[#7a6d63] sm:text-sm">
              Heartfelt words from our brides and clients, shared in their own
              voice.
            </p>
          </div>

          {/* MASONRY-STYLE REVIEW CARDS */}
     
<div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-5">

  {/* CARD 1 — WIDE TOP LEFT */}
  <div className="testimonial-reveal lg:col-span-2  ">
    <ReviewCard review={reviews[0]} />
  </div>

  {/* CARD 2 — TOP MIDDLE */}
  <div className="testimonial-reveal lg:col-span-1">
    <ReviewCard review={reviews[1]} />
  </div>

  {/* CARD 3 — TALL RIGHT */}
  <div className="testimonial-reveal lg:col-span-1 lg:row-span-2">
    <ReviewCard review={reviews[2]} />
  </div>

  {/* CARD 4 — WIDE BOTTOM LEFT */}
  <div className="testimonial-reveal lg:col-span-2">
    <ReviewCard review={reviews[3]} />
  </div>

  {/* CARD 5 — FILL THE EMPTY SPACE */}
  <div className="testimonial-reveal lg:col-span-1">
    <ReviewCard review={reviews[4]} />
  </div>

</div>

          {/* GOOGLE REVIEWS CTA */}

        </div>
      </div>
    </section>
  );
}