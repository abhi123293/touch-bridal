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


// Match the Hero and Featured Services palette
 // Dark coffee brown
const TITLE = "#8B4A28"; // Warm brown headings
const SPINE = "#9675BA";
const TEXT = "#716B73"; // Muted brown descriptions
const PAPER = "#F7F1E9"; // Shared cream background

type ArtworkType =
  | "personalized"
  | "bridal"
  | "detail"
  | "grooming"
  | "experience";

type Feature = {
  number: string;
  title: string;
  description: string;
  side: "left" | "right";
  artwork: ArtworkType;
};

const features: Feature[] = [
  {
    number: "01",
    title: "PERSONALISED BEAUTY",
    description:
      "Every look begins with your style, preferences, and the occasion you are celebrating.",
    side: "left",
    artwork: "personalized",
  },
  {
    number: "02",
    title: "BRIDAL & OCCASION LOOKS",
    description:
      "Explore makeup and styling ideas for weddings, receptions, and other special moments.",
    side: "right",
    artwork: "bridal",
  },
  {
    number: "03",
    title: "ATTENTION TO DETAIL",
    description:
      "Thoughtful finishing touches help bring your chosen beauty look together.",
    side: "left",
    artwork: "detail",
  },
  {
    number: "04",
    title: "BEAUTY & GROOMING",
    description:
      "Discover hair, skincare, facials, and grooming services to suit your needs.",
    side: "right",
    artwork: "grooming",
  },
  {
    number: "05",
    title: "A LOOK THAT FEELS LIKE YOU",
    description:
      "Share your ideas with us and explore a look that reflects your personality and occasion.",
    side: "left",
    artwork: "experience",
  },
];

/* Line illustration inside a pale pink circle */
function FeatureArtwork({
  type,
  enterFrom,
}: {
  type: ArtworkType;
  enterFrom: "left" | "right";
}) {
const line = SPINE;
const paper = "#F7F1E9";
const blush = "#D8B98F";
const accent = "#A8663F";

  return (
   <div
  className={`why-artwork why-enter-${enterFrom} w-[76px] shrink-0 md:w-[150px]`}
  aria-hidden="true"
>
      <svg
        viewBox="0 0 160 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full overflow-visible"
      >
        <circle cx="80" cy="73" r="56" fill="#E8DCCF" />
        <circle
          cx="80"
          cy="73"
          r="47"
         stroke="#C9AE94"
          strokeWidth="1.2"
          strokeDasharray="3 5"
        />

        {type === "personalized" && (
          <g stroke={line} strokeWidth="2.5" strokeLinecap="round">
            <path
              d="M58 63C58 48 68 40 80 40C92 40 102 48 102 63V76C102 91 93 101 80 101C67 101 58 91 58 76V63Z"
              fill={paper}
            />
            <path d="M69 66H70M90 66H91" strokeWidth="4" />
            <path d="M72 81C76 85 84 85 88 81" />
            <path d="M43 39L47 47L55 51L47 55L43 63L39 55L31 51L39 47Z" />
            <path d="M116 83L119 89L125 92L119 95L116 101L113 95L107 92L113 89Z" />
          </g>
        )}

        {type === "bridal" && (
          <g
            stroke={line}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M48 76L42 49L63 63L80 35L97 63L118 49L112 76Z"
              fill={paper}
            />
            <path d="M48 76H112V84H48Z" fill={blush} />
            <circle cx="80" cy="35" r="4" fill={accent} />
            <circle cx="42" cy="49" r="3" fill={accent} />
            <circle cx="118" cy="49" r="3" fill={accent} />
            <path d="M59 94H101M65 101H95" />
            <path d="M122 87L125 93L131 96L125 99L122 105L119 99L113 96L119 93Z" />
          </g>
        )}

        {type === "detail" && (
          <g
            stroke={line}
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M51 100L92 47C96 42 103 46 100 52L62 107Z"
              fill={paper}
            />
            <path d="M51 100L62 107L55 115L44 108Z" fill={blush} />
            <path d="M94 50L101 55" />
            <path d="M42 55L45 62L52 65L45 68L42 75L39 68L32 65L39 62Z" />
            <path d="M111 82L114 88L120 91L114 94L111 100L108 94L102 91L108 88Z" />
            <path d="M83 112H112" />
          </g>
        )}

        {type === "grooming" && (
          <g
            stroke={line}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M51 45L99 93" />
            <path d="M99 45L51 93" />
            <circle cx="45" cy="39" r="10" fill={paper} />
            <circle cx="105" cy="39" r="10" fill={paper} />
            <path d="M58 100L108 50" />
            <path d="M61 97L69 105M67 91L75 99M73 85L81 93M79 79L87 87" />
            <path d="M109 105L112 111L118 114L112 117L109 123L106 117L100 114L106 111Z" />
          </g>
        )}

        {type === "experience" && (
          <g
            stroke={line}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M80 99C72 92 49 76 49 61C49 43 71 39 80 56C89 39 111 43 111 61C111 76 88 92 80 99Z"
              fill={paper}
            />
            <path d="M67 71L76 80L94 60" />
            <path d="M40 84L43 90L49 93L43 96L40 102L37 96L31 93L37 90Z" />
            <path d="M118 36L121 42L127 45L121 48L118 54L115 48L109 45L115 42Z" />
          </g>
        )}
      </svg>
    </div>
  );
}

function FeatureCopy({ feature }: { feature: Feature }) {
  return (
   <div
  className={`why-copy why-enter-${feature.side} w-full max-w-[330px] text-left ${
    feature.side === "left" ? "md:text-right" : ""
  }`}
>
      <h3
       className="text-[26px] leading-[1.02] tracking-[0.01em] md:text-[clamp(26px,2.5vw,34px)]"
        style={{ color: TITLE }}
      >
        {feature.title}
      </h3>

      <p
       className="mt-2 text-[12px] font-light leading-[1.65] md:text-[13px]"
        style={{ color: TEXT }}
      >
        {feature.description}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

 useGSAP(
  () => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const section = sectionRef.current;

      if (!section) return;

      const heading = section.querySelector(".why-section-heading");
      const timeline = section.querySelector(".why-timeline");

      // Heading fades and moves upward into view.
      if (heading) {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              end: "bottom 12%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Centre strip reveals vertically.
      const spine = section.querySelector(".why-timeline-spine");

      if (spine && timeline) {
        gsap.fromTo(
          spine,
          {
            scaleY: 0,
            opacity: 0,
            transformOrigin: "top center",
          },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timeline,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Animate each row independently.
      const rows = section.querySelectorAll<HTMLElement>(".why-row");

      rows.forEach((row) => {
        const leftItems = row.querySelectorAll(".why-enter-left");
        const rightItems = row.querySelectorAll(".why-enter-right");
        const number = row.querySelector(".why-number");

        const scrollTrigger = {
          trigger: row,
          start: "top 88%",
          end: "bottom 12%",
          toggleActions: "play reverse play reverse" as const,
        };

        // Left content enters from the left.
        if (leftItems.length) {
          gsap.fromTo(
            leftItems,
            {
              x: -55,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger,
            }
          );
        }

        // Right content and circles enter from the right.
        if (rightItems.length) {
          gsap.fromTo(
            rightItems,
            {
              x: 55,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger,
            }
          );
        }

        // Numbers fade and scale into place.
        if (number) {
          gsap.fromTo(
            number,
            {
              opacity: 0,
              scale: 0.8,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger,
            }
          );
        }
      });
    });

    return () => mm.revert();
  },
  { scope: sectionRef }
);

  
return (
  <section
    ref={sectionRef}
    className={`${openSans.className} relative -mt-4 bg-transparent px-2 pt-2 pb-6 sm:-mt-19 sm:px-3 sm:pt-3 sm:pb-8 lg:px-4`}
  >
    <div className="mx-auto w-full max-w-[1320px]">
      <div className="overflow-hidden border border-[#DDD5DF] bg-[#F1EDF7] p-4 sm:p-6 lg:p-8">

        {/* SECTION INTRO */}
        <div className="why-section-heading mx-auto mb-10 w-full max-w-[1000px] text-center md:mb-12">
          <span className="inline-flex items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-[#8D6CA3]">
            <span className="inline-block h-px w-7 bg-[#8D6CA3]" />
            WHY CHOOSE TOUCH
            <span className="inline-block h-px w-7 bg-[#8D6CA3]" />
          </span>

          <h2 className="mt-4 text-center text-[clamp(2.3rem,5.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-tight text-[#29252D]">
            Beauty deserves a
            <br />
            Personal Touch
          </h2>

          <p className="mt-4 text-sm font-normal leading-7 text-[#77717B]">
            Every detail matters when it comes to feeling your best.
          </p>
        </div>

        {/* SPINE TOP CAP AND LOGO — DESKTOP */}
        <div className="hidden md:block" aria-hidden="true">
          <div className="mx-auto h-7 w-[102px] bg-[#8D6CA3]" />

          <p className="py-3 text-center text-lg font-semibold tracking-[0.3em] text-[#8D6CA3]">
            TOUCH
          </p>
        </div>

        {/* NUMBERED TIMELINE */}
        <div className="why-timeline relative isolate pb-7">

          {/* Timeline spine */}
          <div
            aria-hidden="true"
            className="why-timeline-spine absolute inset-y-0 left-[20px] z-0 w-1 md:left-1/2 md:w-[102px] md:-translate-x-1/2"
            style={{ backgroundColor: "#8D6CA3" }}
          />

          {features.map((feature) => {
            const copyOnLeft = feature.side === "left";

            return (
              <article
                key={feature.number}
                className="why-row relative z-10 grid grid-cols-[44px_minmax(0,1fr)] items-center gap-y-2 border-t border-[#8D6CA3]/15 py-6 first:border-t-0 md:min-h-[130px] md:grid-cols-[minmax(0,1fr)_102px_minmax(0,1fr)] md:gap-y-0 md:border-0 md:py-0"
              >

                {/* NUMBER */}
                <div
                  className="why-number col-start-1 row-span-2 row-start-1 flex h-[54px] w-11 items-center justify-center self-center rounded-r-xl text-base font-semibold text-white md:col-start-2 md:row-span-1 md:h-auto md:w-auto md:self-stretch md:rounded-none md:bg-transparent md:text-[clamp(34px,3.6vw,52px)]"
                  style={{ backgroundColor: "#8D6CA3" }}
                >
                  {feature.number}
                </div>

                {/* TEXT */}
                <div
                  className={`col-start-2 row-start-1 flex min-w-0 items-center justify-start pl-3.5 md:row-start-1 ${
                    copyOnLeft
                      ? "md:col-start-1 md:justify-end md:pl-0 md:pr-8"
                      : "md:col-start-3 md:justify-start md:pl-8"
                  }`}
                >
                  <FeatureCopy feature={feature} />
                </div>

                {/* ILLUSTRATION */}
                <div
                  className={`col-start-2 row-start-2 flex min-w-0 items-center justify-start pl-3.5 md:row-start-1 ${
                    copyOnLeft
                      ? "md:col-start-3 md:justify-start md:pl-8"
                      : "md:col-start-1 md:justify-end md:pl-0 md:pr-8"
                  }`}
                >
                  <FeatureArtwork
                    type={feature.artwork}
                    enterFrom={feature.side === "left" ? "right" : "left"}
                  />
                </div>

              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
}