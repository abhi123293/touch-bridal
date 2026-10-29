"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Open_Sans } from "next/font/google";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Replace this with your preferred central portrait image.
const featuredImage = "/servicesimg/beauty.jpg";

const reviews = [
  {
    id: "01",
    name: "Ananya R.",
    avatar: "A",
    quote:
      "My bridal makeup was absolutely beautiful. The team understood exactly what I wanted and made my day extra special.",
    position: "lg:col-start-1 lg:row-start-1",
  },
  {
    id: "02",
    name: "Meera S.",
    avatar: "M",
    quote:
      "Wonderful experience from beginning to end. The makeup was elegant, comfortable, and lasted throughout my wedding.",
    position: "lg:col-start-3 lg:row-start-1",
  },
  {
    id: "03",
    name: "Priya K.",
    avatar: "P",
    quote:
      "Loved every detail of my makeover. Everyone was welcoming, professional, and incredibly talented.",
    position: "lg:col-start-1 lg:row-start-2",
  },
  {
    id: "04",
    name: "Aaradhya N.",
    avatar: "A",
    quote:
      "The hairstyle and makeup were exactly what I had imagined. I felt confident and beautiful all day.",
    position: "lg:col-start-3 lg:row-start-2",
  },
  {
    id: "05",
    name: "Diya M.",
    avatar: "D",
    quote:
      "Beautiful work and such a lovely team. They listened patiently to my preferences and created my dream bridal look.",
    position: "lg:col-start-1 lg:row-start-3",
  },
  {
    id: "06",
    name: "Sneha P.",
    avatar: "S",
    quote:
      "The finish was flawless, and the whole experience felt special. I would happily recommend the studio.",
    position: "lg:col-start-3 lg:row-start-3",
  },
  {
    id: "07",
    name: "Nisha V.",
    avatar: "N",
    quote:
      "I loved how naturally beautiful my makeup looked. The team paid attention to every little detail.",
    position: "lg:col-start-1 lg:row-start-4",
  },
  {
    id: "08",
    name: "Aparna T.",
    avatar: "A",
    quote:
      "A wonderful makeover experience, friendly service, and a look that made me feel truly special.",
    position: "lg:col-start-3 lg:row-start-4",
  },
];

export default function CustomerTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = section.querySelectorAll(".testimonial-reveal");

        gsap.fromTo(
          items,
          {
            y: 26,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
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
      className={`${openSans.className} bg-transparent px-3 py-5 sm:px-5 sm:py-8 lg:px-8 lg:py-10`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="overflow-hidden rounded-[28px] border border-[#3a2418]/[0.06] bg-[#f5f0ec] px-4 pb-6 pt-10 sm:rounded-[36px] sm:px-7 sm:pb-9 sm:pt-12 lg:px-9 lg:pb-10 lg:pt-14">

          {/* SECTION HEADING */}

          <header className="testimonial-reveal text-center">
            <span className="inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-[#8b4a28] sm:text-xs">
              <span className="h-px w-7 bg-[#c7a66e]" />
              YOUR KIND WORDS
              <span className="h-px w-7 bg-[#c7a66e]" />
            </span>

            <h2 className="mt-4 font-serif text-[clamp(3.2rem,8vw,6.5rem)] italic leading-[0.95] tracking-[-0.055em] text-[#201c1b]">
              Thank You!
            </h2>

            <div className="mt-4 inline-block border-y border-[#d7b778] bg-[#eee1ca]/70 px-3 py-1.5 sm:px-5">
              <p className="text-xs font-medium tracking-wide text-[#654c35] sm:text-base">
                For your trust &amp; support
              </p>
            </div>

            <p className="mx-auto mt-4 max-w-[510px] text-xs leading-6 text-[#736761] sm:text-sm">
              Every kind word means the world to us. Thank you for allowing us
              to be a part of your beautiful moments.
            </p>

            <div
              className="mt-2 text-xl text-[#c9a35d]"
              aria-hidden="true"
            >
              ♥
            </div>
          </header>

          {/* MAIN REVIEW LAYOUT: 4 LEFT + PORTRAIT + 4 RIGHT */}

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-5 lg:min-h-[680px] lg:grid-cols-[minmax(0,1fr)_minmax(230px,0.9fr)_minmax(0,1fr)] lg:grid-rows-4 lg:gap-x-5 lg:gap-y-3 xl:gap-x-7">

            {/* CENTRAL PORTRAIT */}

            <div className="testimonial-reveal relative order-first h-[430px] overflow-hidden rounded-[24px] bg-[#e4d7ce] shadow-sm sm:col-span-2 sm:h-[540px] lg:col-span-1 lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:h-full lg:min-h-[680px] lg:rounded-[28px]">
              <img
                src={featuredImage}
                alt="Bridal makeover portrait"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Image overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#211914]/65 via-transparent to-[#211914]/5" />

              {/* Brand text */}

              <div className="absolute left-0 right-0 top-5 text-center">
                <span className="inline-block rounded-full border border-white/40 bg-black/10 px-4 py-2 text-[9px] font-medium tracking-[0.24em] text-white backdrop-blur-sm sm:text-[10px]">
                  TOUCH BRIDAL
                </span>
              </div>

              {/* Bottom message */}

              <div className="absolute bottom-5 left-4 right-4 text-center sm:bottom-7">
                <p className="font-serif text-3xl italic text-white sm:text-4xl">
                  Beautifully you.
                </p>

                <p className="mt-2 text-[9px] tracking-[0.22em] text-white/85 sm:text-[10px]">
                  EVERY BRIDE. EVERY BEAUTIFUL STORY.
                </p>
              </div>
            </div>

            {/* ALL EIGHT REVIEW CARDS */}

            {reviews.map((review) => (
              <article
                key={review.id}
                className={`testimonial-reveal group relative flex min-h-[150px] flex-col justify-between rounded-[18px] border border-[#33251d]/[0.07] bg-white/90 p-3.5 shadow-[0_5px_18px_rgba(44,30,20,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,30,20,0.11)] sm:min-h-[158px] sm:p-4 lg:col-span-1 lg:min-h-0 lg:p-3.5 xl:p-4 ${review.position}`}
              >
                {/* Reviewer details */}

                <div>
                  <div className="flex items-center gap-2.5">
                    {/* Avatar placeholder */}

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dfc7ac] bg-[#eee0d1] text-sm font-semibold text-[#714b32]">
                      {review.avatar}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[11px] font-semibold text-[#282321] sm:text-xs">
                        {review.name}
                      </p>

                      <p className="mt-0.5 text-[9px] text-[#817873] sm:text-[10px]">
                        Google Review
                      </p>
                    </div>

                    {/* Google-style mark */}

                    <span
                      className="shrink-0 font-sans text-xl font-bold text-[#4285f4]"
                      aria-label="Google"
                      title="Google"
                    >
                      G
                    </span>
                  </div>

                  {/* Stars */}

                  <div
                    className="mt-2 text-[15px] leading-none tracking-[0.08em] text-[#eab52f]"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>

                  {/* Review text */}

                  <p className="mt-2 text-[11px] leading-[1.55] text-[#514740] sm:text-xs">
                    {review.quote}
                  </p>
                </div>

                {/* Bottom label */}

                <div className="mt-2 flex items-center justify-between border-t border-[#3a2418]/[0.08] pt-2">
                  <span className="text-[8px] font-medium tracking-[0.12em] text-[#9a7960]">
                    CLIENT EXPERIENCE
                  </span>

                  <span
                    className="text-xs text-[#c6a265] transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* BOTTOM TRUST NOTE */}

          <footer className="testimonial-reveal mt-7 flex flex-col items-center justify-center gap-3 text-center sm:mt-9">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9ae94]" />

              <span className="text-sm text-[#c19a54]" aria-hidden="true">
                ♥
              </span>

              <span className="h-px w-8 bg-[#c9ae94]" />
            </div>

            <p className="max-w-[500px] text-[9px] font-medium leading-5 tracking-[0.13em] text-[#8b796b] sm:text-[10px]">
              THANK YOU FOR MAKING US PART OF YOUR MOST BEAUTIFUL MOMENTS
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}