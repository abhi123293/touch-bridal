"use client";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function BridalGallerySection() {
  return (
    <section
      aria-label="Bridal Gallery"
      className="relative flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center overflow-hidden bg-[#F5F0E8] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36 select-none"
    >
      {/* 1. Subtle Champagne Gold Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] sm:w-[650px] rounded-full bg-gradient-to-b from-[#C8A66A]/15 via-[#A98955]/08 to-transparent blur-[120px]"
      />

      {/* 2. Soft Ivory / Warm Cream Gradient Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,240,232,0.6)_0%,rgba(234,225,213,0.4)_60%,rgba(245,240,232,0.95)_100%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
        {/* Exact Heading: Display only "Bridal Gallery" */}
        <h1
          className={`${cormorant.className} relative z-10 text-center text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[76px] font-normal tracking-[0.025em] text-[#1C120F] leading-none drop-shadow-[0_2px_10px_rgba(28,18,15,0.06)]`}
        >
          Bridal Gallery
        </h1>

        {/* Arched Bridal Image Container */}
        {/*
          - Tall portrait aspect ratio approximately 3:4
          - Distinctive semicircular arched top (rounded-t-full / rounded-t-[9999px])
          - Straight vertical sides and clean bottom edge (rounded-b-none)
          - Prominent desktop width (380–450px)
          - Sits connectedly overlapping slightly beneath the heading
        */}
        <div className="relative z-0 -mt-3 sm:-mt-5 lg:-mt-7 w-[300px] sm:w-[360px] md:w-[400px] lg:w-[430px] xl:w-[440px] aspect-[3/4] max-w-[90vw]">
          <div className="relative h-full w-full overflow-hidden rounded-t-[9999px] rounded-b-none border border-[#C8A66A]/30 bg-[#2B1C17] shadow-[0_25px_60px_-15px_rgba(28,18,15,0.18)]">
            <img
              src="/images/gallery.jpg"
              alt="Bridal Gallery by Touch Salon"
              className="h-full w-full object-cover object-[60%_top] transition-transform duration-700 ease-out hover:scale-[1.02]"
              loading="eager"
            />

            {/* Subtle specular gold rim sheen along the top arch */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#C8A66A]/20 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
