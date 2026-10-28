"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const galleryImages = [
  {
    src: "/images/bridal-01.jpg",
    alt: "Bridal portrait",
  },
  {
    src: "/images/bridal-02.jpg",
    alt: "Traditional bridal makeover",
  },
  {
    src: "/images/bridal-03.jpg",
    alt: "Bridal styling",
  },
  {
    src: "/images/bridal-04.jpg",
    alt: "Bridal beauty portrait",
  },
  {
    // Replace with /images/bridal-05.jpg when available
    src: "/images/bridal-01.jpg",
    alt: "Bridal gallery image five",
  },
  {
    // Replace with /images/bridal-06.jpg when available
    src: "/images/bridal-02.jpg",
    alt: "Bridal gallery image six",
  },
  {
    // Replace with /images/bridal-07.jpg when available
    src: "/images/bridal-03.jpg",
    alt: "Bridal gallery image seven",
  },
  {
    // Replace with /images/bridal-08.jpg when available
    src: "/images/bridal-04.jpg",
    alt: "Bridal gallery image eight",
  },
];

export default function BridalGalleryPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".bridal-gallery-text", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".bridal-collage-image", {
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-transparent px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="overflow-hidden rounded-[26px] bg-[#f7f1e9] p-5 font-sans sm:rounded-[34px] sm:p-8 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            {/* LEFT CONTENT — MATCHES THE OTHER SECTIONS */}

            <div className="bridal-gallery-text">
              <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#8b4a28] sm:text-xs">
                <span className="h-px w-8 bg-[#8b4a28]" />
                OUR BRIDAL GALLERY
              </span>

              <h2 className="max-w-[520px] text-3xl font-medium leading-[1.15] tracking-tight text-[#2d1b13] sm:text-4xl lg:text-[52px]">
                Every bride,
                <br />
                beautifully unique.
              </h2>

              <p className="mt-5 max-w-[430px] text-sm leading-7 text-[#6b5142] sm:text-base">
                Explore our bridal makeup and styling looks, thoughtfully
                created to celebrate your most special moments.
              </p>

              <Link
                href="/bridal-gallery"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2d1b13] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-[#f7f1e9] transition-colors duration-300 hover:bg-[#8b4a28]"
              >
                EXPLORE BRIDAL GALLERY
                <span className="text-base">↗</span>
              </Link>
            </div>

            {/* RIGHT SIDE — EIGHT-IMAGE EDITORIAL COLLAGE */}

            <div className="bridal-collage">
              <svg
                className="bridal-collage-svg"
                viewBox="0 0 700 900"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Eight-image bridal beauty gallery collage"
              >
                <defs>
                  {/* IMAGE 1 — LARGE TOP */}

                  <clipPath id="bridal-clip-top">
                    <path
                      d="
                        M 0 0
                        H 700
                        V 340
                        C 615 356, 535 348, 440 315
                        C 285 265, 135 186, 0 126
                        Z
                      "
                    />
                  </clipPath>

                  {/* IMAGE 2 — MIDDLE LEFT */}

                  <clipPath id="bridal-clip-left">
                    <path
                      d="
                        M 0 126
                        C 85 165, 174 211, 250 242
                        L 250 565
                        C 165 555, 78 543, 0 530
                        Z
                      "
                    />
                  </clipPath>

                  {/* IMAGE 3 — MIDDLE CENTRE */}

                  <clipPath id="bridal-clip-center">
                    <path
                      d="
                        M 250 242
                        C 326 270, 405 305, 475 330
                        L 475 625
                        C 400 606, 319 583, 250 565
                        Z
                      "
                    />
                  </clipPath>

                  {/* IMAGE 4 — MIDDLE RIGHT */}

                  <clipPath id="bridal-clip-right">
                    <path
                      d="
                        M 475 330
                        C 554 359, 630 391, 700 420
                        V 690
                        C 624 669, 545 647, 475 625
                        Z
                      "
                    />
                  </clipPath>

                  {/* IMAGE 5 — BOTTOM LEFT */}

                  <clipPath id="bridal-clip-bottom-one">
                    <path
                      d="
                        M 0 530
                        C 58 540, 118 550, 175 556
                        V 900
                        H 0
                        Z
                      "
                    />
                  </clipPath>

                  {/* IMAGE 6 — BOTTOM CENTRE-LEFT */}

                  <clipPath id="bridal-clip-bottom-two">
                    <path
                      d="
                        M 175 556
                        C 235 572, 294 590, 355 605
                        V 900
                        H 175
                        Z
                      "
                    />
                  </clipPath>

                  {/* IMAGE 7 — BOTTOM CENTRE-RIGHT */}

                  <clipPath id="bridal-clip-bottom-three">
                    <path
                      d="
                        M 355 605
                        C 414 620, 474 637, 530 650
                        V 900
                        H 355
                        Z
                      "
                    />
                  </clipPath>

                  {/* IMAGE 8 — BOTTOM RIGHT */}

                  <clipPath id="bridal-clip-bottom-four">
                    <path
                      d="
                        M 530 650
                        C 592 668, 649 690, 700 710
                        V 900
                        H 530
                        Z
                      "
                    />
                  </clipPath>
                </defs>

                {/* BOTTOM ROW — RENDERED FIRST */}

                <image
                  className="bridal-collage-image"
                  href={galleryImages[4].src}
                  x="0"
                  y="520"
                  width="175"
                  height="380"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#bridal-clip-bottom-one)"
                />

                <image
                  className="bridal-collage-image"
                  href={galleryImages[5].src}
                  x="175"
                  y="550"
                  width="180"
                  height="350"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#bridal-clip-bottom-two)"
                />

                <image
                  className="bridal-collage-image"
                  href={galleryImages[6].src}
                  x="355"
                  y="595"
                  width="175"
                  height="305"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#bridal-clip-bottom-three)"
                />

                <image
                  className="bridal-collage-image"
                  href={galleryImages[7].src}
                  x="530"
                  y="645"
                  width="170"
                  height="255"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#bridal-clip-bottom-four)"
                />

                {/* MIDDLE ROW — THREE IMAGES */}

                <image
                  className="bridal-collage-image"
                  href={galleryImages[1].src}
                  x="0"
                  y="120"
                  width="255"
                  height="455"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#bridal-clip-left)"
                />

                <image
                  className="bridal-collage-image"
                  href={galleryImages[2].src}
                  x="245"
                  y="235"
                  width="240"
                  height="395"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#bridal-clip-center)"
                />

                <image
                  className="bridal-collage-image"
                  href={galleryImages[3].src}
                  x="470"
                  y="325"
                  width="230"
                  height="390"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#bridal-clip-right)"
                />

                {/* LARGE TOP IMAGE */}

                <image
                  className="bridal-collage-image"
                  href={galleryImages[0].src}
                  x="0"
                  y="0"
                  width="700"
                  height="360"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#bridal-clip-top)"
                />

                {/* DARK DIVIDERS — EDITORIAL STYLE */}

                <g
                  fill="none"
                  stroke="#211c18"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  pointerEvents="none"
                >
                  <path
                    d="
                      M 0 126
                      C 135 186, 285 265, 440 315
                      C 535 348, 615 356, 700 340
                    "
                  />

                  <path
                    d="
                      M 250 242
                      L 250 565
                    "
                  />

                  <path
                    d="
                      M 475 330
                      L 475 625
                    "
                  />

                  <path
                    d="
                      M 0 530
                      C 78 543, 165 555, 250 565
                      C 319 583, 400 606, 475 625
                      C 545 647, 624 669, 700 690
                    "
                  />

                  <path d="M 175 556 V 900" />
                  <path d="M 355 605 V 900" />
                  <path d="M 530 650 V 900" />
                </g>
              </svg>

              {/* CENTRAL EDITORIAL TITLE */}

              <div className="bridal-collage-title" aria-hidden="true">
                <span>BRIDAL</span>
                <span className="bridal-collage-title-second">
                  BEAUTY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESPONSIVE COLLAGE STYLING */}

      <style jsx>{`
        .bridal-collage {
          position: relative;
          width: 100%;
          min-width: 0;
          aspect-ratio: 7 / 9;
          overflow: hidden;
          isolation: isolate;
          border-radius: 26px;
          background: #e8ddd1;
        }

        .bridal-collage-svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .bridal-collage-image {
          transition: opacity 0.5s ease;
        }

        .bridal-collage-title {
          position: absolute;
          top: 52%;
          left: 50%;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translate(-50%, -50%);
          color: #fffaf4;
          font-size: clamp(25px, 3.7vw, 46px);
          font-weight: 600;
          letter-spacing: 0.1em;
          line-height: 0.95;
          white-space: nowrap;
          text-align: center;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.4);
          pointer-events: none;
        }

        .bridal-collage-title-second {
          font-weight: 400;
          letter-spacing: 0.18em;
        }

        @media (min-width: 1024px) {
          .bridal-collage {
            border-radius: 28px;
          }
        }

        @media (max-width: 1023px) {
          .bridal-collage {
            aspect-ratio: 4 / 5;
          }

          .bridal-collage-title {
            font-size: clamp(30px, 6vw, 46px);
          }
        }

        @media (max-width: 640px) {
          .bridal-collage {
            aspect-ratio: 7 / 9;
            border-radius: 22px;
          }

          .bridal-collage-title {
            font-size: clamp(22px, 6vw, 32px);
            letter-spacing: 0.08em;
          }

          .bridal-collage-title-second {
            letter-spacing: 0.12em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bridal-collage-image {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}