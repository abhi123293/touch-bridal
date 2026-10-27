"use client";

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { useEffect, useState } from "react";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const aboutImages = [
  {
    src: "/images/about%20us.jpeg",
    alt: "The S Touch Signature Bridal Look",
  },
  {
    src: "/images/about%201.jpg",
    alt: "The S Touch Traditional Bridal Makeup",
  },
  {
    src: "/images/about%202.jpg",
    alt: "The S Touch Royal Bridal Styling",
  },
  {
    src: "/images/about%203.jpg",
    alt: "The S Touch Elegant Hair & Makeup",
  },
  {
    src: "/images/about%204.jpg",
    alt: "The S Touch Reception Look",
  },
  {
    src: "/images/about%205.jpg",
    alt: "The S Touch Classic Bridal Radiance",
  },
];

export default function AboutUs() {
  const [active, setActive] = useState(0);

  // Automatically cycles every 3.8 seconds with seamless cross-dissolve & continuous Ken Burns motion
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % aboutImages.length);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about-us"
      className="relative z-10 bg-transparent px-2 pb-2 sm:px-3 sm:pb-3 lg:px-4 lg:pb-4"
    >
      {/* Main Wide Horizontal Rectangular Container matching Hero card style */}
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[26px] sm:rounded-[34px] border border-[#3a2418]/[0.08] bg-[#f7f1e9] text-[#2d1b13] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)]">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
          
          {/* Left Side — About Us Content */}
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 md:px-14 lg:col-span-7 lg:py-16 xl:px-18 xl:py-20">
            {/* Elegant Sub-eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#a8663f]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8663f] sm:text-xs">
                Our Story &amp; Philosophy
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className={`${serifFont.className} mt-3 text-4xl font-normal tracking-tight text-[#2d1b13] sm:text-5xl lg:text-[54px] xl:text-6xl`}
            >
              About Us
            </h2>

            {/* Delicate Gold Accent Divider */}
            <div className="mt-4 mb-7 flex items-center gap-2">
              <span className="h-[1.5px] w-12 bg-[#b58750]" />
              <span className="h-1 w-1 rounded-full bg-[#b58750]" />
              <span className="h-[1px] w-20 bg-[#d8c3af]" />
            </div>

            {/* Body Content */}
            <div className="space-y-4 text-sm leading-relaxed text-[#4a3327] sm:text-[15px] sm:leading-7 lg:text-base lg:leading-8">
              <p>
                Welcome to The S Touch Bridal Makeover, where timeless elegance meets
                modern beauty and dedicated to making every bride feel beautiful,
                confident, and extraordinary on her most special day.
              </p>

              <p>
                Every brushstroke is crafted with love, every hairstyle is styled
                with precision, and every transformation is designed to make you shine
                with confidence.
              </p>

              <p>
                At The S Touch Bridal Makeover, we don&apos;t just create beautiful
                looks—we create unforgettable bridal moments, cherished memories,
                and the confidence to embrace your beauty.
              </p>

              {/* Highlighted Signature Accent */}
              <div className="relative my-6 rounded-2xl border-l-2 border-[#b58750] bg-[#f7efe4]/60 py-3.5 pl-5 pr-4">
                <p
                  className={`${serifFont.className} text-lg font-medium italic tracking-wide text-[#8b4a28] sm:text-xl md:text-[22px]`}
                >
                  &ldquo;Your dream look. Your timeless elegance. Our signature touch.&rdquo;
                </p>
              </div>

              <p>
                Let your beauty tell your story with The S Touch Bridal Makeover.
              </p>
            </div>
          </div>

          {/* Right Side — Bridal Image Panel with Ken Burns Effect (Seamless Edge-to-Edge) */}
          <div className="relative col-span-1 min-h-[420px] w-full overflow-hidden sm:min-h-[500px] md:min-h-[560px] lg:col-span-5 lg:min-h-full">
            {aboutImages.map((image, index) => {
              const isActive = index === active;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={image.src}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  {/* Ken Burns Animated Layer */}
                  <div
                    className={`relative h-full w-full ${
                      isActive
                        ? isEven
                          ? "animate-ken-burns-in"
                          : "animate-ken-burns-out"
                        : "scale-100"
                    }`}
                    style={{
                      transformOrigin: "top center",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority={index === 0}
                      className="object-cover object-top"
                      style={{ objectPosition: "top center" }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Soft luxury editorial overlay blending into left card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#2d1b13]/25 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#f7f1e9]/10 lg:via-transparent lg:to-transparent"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
