"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";
import { ArrowUpRight, Sparkles } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const WHATSAPP_ENQUIRY_URL =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch! I'd love to book an appointment.");

interface ServicesEditorialCollageProps {
  onSelectBridalMakeup?: () => void;
  onSelectHairServices?: () => void;
  onSelectBeautyGrooming?: () => void;
  onSelectSkinFacial?: () => void;
  onSelectAdditionalServices?: () => void;
}

export default function ServicesEditorialCollage({
  onSelectBridalMakeup,
  onSelectHairServices,
  onSelectBeautyGrooming,
  onSelectSkinFacial,
  onSelectAdditionalServices,
}: ServicesEditorialCollageProps = {}) {
  return (
    <section
      aria-label="Editorial Services Gallery"
      className="relative w-full overflow-hidden rounded-[26px] sm:rounded-[36px] lg:rounded-[48px] bg-[#F5F0E8] border border-[#3A2921]/15 shadow-[0_25px_70px_rgba(28,18,15,0.14)] py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 select-none"
    >
      {/* =========================================================================
          1. WARM IVORY & SOFT CREAM TEXTURED BACKGROUND WITH AMBIENT GLOW
         ========================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(252,249,244,0.95)_0%,rgba(245,240,232,0.98)_55%,#EAE1D5_100%)]"
      />

      {/* Soft Champagne Ambient Spotlight behind the Bento */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-full max-w-[900px] rounded-full bg-gradient-to-b from-[#C8A66A]/12 via-[#dfb76c]/06 to-transparent blur-[120px]"
      />

      {/* =========================================================================
          2. DECORATIVE DIAGONAL CHAMPAGNE-GOLD CORNER SHAPES
         ========================================================================= */}
      {/* Top-Left Diagonal Corner Shape with Double Hairline Contour */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-44 w-44 sm:h-64 sm:w-64 lg:h-80 lg:w-80 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="corner-grad-tl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A66A" stopOpacity="0.32" />
              <stop offset="65%" stopColor="#C8A66A" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#C8A66A" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 0,100" fill="url(#corner-grad-tl)" />
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            stroke="#C8A66A"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
          <line
            x1="0"
            y1="82"
            x2="82"
            y2="0"
            stroke="#C8A66A"
            strokeWidth="0.7"
            strokeOpacity="0.25"
          />
        </svg>
      </div>

      {/* Bottom-Right Diagonal Corner Shape with Double Hairline Contour */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 sm:h-64 sm:w-64 lg:h-80 lg:w-80 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="corner-grad-br" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#C8A66A" stopOpacity="0.32" />
              <stop offset="65%" stopColor="#C8A66A" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#C8A66A" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <polygon points="100,100 0,100 100,0" fill="url(#corner-grad-br)" />
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            stroke="#C8A66A"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
          <line
            x1="18"
            y1="100"
            x2="100"
            y2="18"
            stroke="#C8A66A"
            strokeWidth="0.7"
            strokeOpacity="0.25"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1240px]">
        {/* =========================================================================
            3. THIN RECTANGULAR OUTLINE BEHIND THE COLLAGE
           ========================================================================= */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 sm:inset-6 lg:inset-8 z-0 border border-[#C8A66A]/35 rounded-[10px]"
        />

        {/* =========================================================================
            4. HEADER: Eyebrow + Main Heading + Curated Subtitle + Gold Divider
           ========================================================================= */}
        <div className="relative z-10 flex flex-col items-center text-center mb-8 sm:mb-11 lg:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#1C120F]/[0.04] border border-[#C8A66A]/30 mb-2">
            <Sparkles className="h-3 w-3 text-[#C8A66A]" />
            <span
              className={`${inter.className} text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#A98955]`}
            >
              Choose a Perfect Service
            </span>
            <Sparkles className="h-3 w-3 text-[#C8A66A]" />
          </div>

          {/* Main Heading */}
          <h2
            className={`${cormorant.className} mt-1.5 text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-normal tracking-tight text-[#1C120F] leading-[1.08] drop-shadow-sm`}
          >
            Our Premium Services
          </h2>

          {/* Elegant Subtitle */}
          <p
            className={`${inter.className} mt-2.5 max-w-xl text-xs sm:text-sm font-normal text-[#2B1C17]/75 leading-relaxed tracking-wide`}
          >
            Bespoke bridal makeovers, couture styling, and rejuvenating therapies crafted with timeless elegance.
          </p>

          {/* Delicate Gold Accent Divider */}
          <div className="mt-4 flex items-center gap-2">
            <span className="h-[1.5px] w-10 sm:w-12 bg-[#C8A66A]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#C8A66A]" />
            <span className="h-[1px] w-16 sm:w-20 bg-[#C8A66A]/45" />
          </div>
        </div>

        {/* =========================================================================
            5. ARCHITECTURAL EDITORIAL BENTO GRID WITH INSIDE TEXTS
            - Tier 1: Grand Flagship Row (Bridal Hero 5-cols + Staggered 7-cols cluster)
            - Tier 2: Lower Suite (VIP Appointment Consultation + Men's & Groom Suite)
           ========================================================================= */}
        <div className="relative z-10 flex flex-col gap-4 sm:gap-5 lg:gap-6">
          {/* =======================================================================
              TIER 1: Grand Flagship Hero & Core Services (Balanced 12-col layout)
             ======================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch">
            {/* ---------------------------------------------------------------------
                CARD 1: Bridal Makeup (Flagship Hero — 5 Columns, Full-Height Anchor)
               --------------------------------------------------------------------- */}
            <div className="lg:col-span-5 flex">
              <button
                type="button"
                onClick={onSelectBridalMakeup}
                aria-label="Bridal Makeup Services"
                className="group relative w-full h-[380px] sm:h-[440px] lg:h-[496px] overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#dfb76c]/30 bg-[#2B1C17] shadow-[0_14px_35px_rgba(28,18,15,0.14)] text-left cursor-pointer transition-all duration-400 hover:border-[#C8A66A] hover:shadow-[0_22px_50px_rgba(200,166,106,0.3)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
              >
                <img
                  src="/images/imageee.jpg"
                  alt="Bridal Makeup by S Touch Salon"
                  className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Top Badge: Number & Category */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C120F]/70 border border-[#C8A66A]/45 backdrop-blur-md shadow-sm">
                  <span className={`${cormorant.className} text-xs sm:text-sm font-semibold text-[#dfb76c]`}>01</span>
                  <span className="h-2 w-px bg-[#C8A66A]/40" />
                  <span className={`${inter.className} text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5F0E8]`}>
                    Flagship Makeover
                  </span>
                </div>

                {/* Scrim Overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-44 sm:h-48 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/65 to-transparent transition-opacity duration-300"
                />

                {/* Specular Top Sheen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/70 to-transparent"
                />

                {/* Inside Text */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 flex items-end justify-between gap-3">
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C8A66A] mb-1">
                      Signature Studio Makeover
                    </span>
                    <h3
                      className={`${cormorant.className} text-2xl sm:text-3xl lg:text-[32px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                    >
                      Bridal Makeup
                    </h3>
                    <p className={`${inter.className} mt-1 text-xs text-[#EAE1D5]/80 font-normal`}>
                      5 Handcrafted Bridal &amp; Reception Looks
                    </p>
                  </div>

                  <span className="shrink-0 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-md backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(200,166,106,0.45)]">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.2]" />
                  </span>
                </div>
              </button>
            </div>

            {/* ---------------------------------------------------------------------
                RIGHT 7 COLUMNS: 4 Perfectly Interlocking Grid Cards (2 x 2)
               --------------------------------------------------------------------- */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
              {/* CARD 2: Hair Services (7 cols on sm, 7 cols on lg) */}
              <button
                type="button"
                onClick={onSelectHairServices}
                aria-label="Hair Services"
                className="group relative sm:col-span-7 h-[230px] sm:h-[240px] lg:h-[238px] overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#dfb76c]/30 bg-[#2B1C17] shadow-[0_12px_30px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-400 hover:border-[#C8A66A] hover:shadow-[0_18px_42px_rgba(200,166,106,0.26)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
              >
                <img
                  src="/images/hair-services.jpg"
                  alt="Hair Services & Rituals by S Touch Salon"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1C120F]/70 border border-[#C8A66A]/45 backdrop-blur-md">
                  <span className={`${cormorant.className} text-xs font-semibold text-[#dfb76c]`}>02</span>
                  <span className="h-2 w-px bg-[#C8A66A]/40" />
                  <span className={`${inter.className} text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F5F0E8]`}>
                    Couture Styling
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/60 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
                  <div>
                    <span className="block text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                      Hair Spa &amp; Texturing
                    </span>
                    <h3
                      className={`${cormorant.className} text-lg sm:text-xl lg:text-[22px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                    >
                      Hair Services
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                  </span>
                </div>
              </button>

              {/* CARD 3: Skin & Facial Services (5 cols on sm, 5 cols on lg) */}
              <button
                type="button"
                onClick={onSelectSkinFacial}
                aria-label="Skin & Facial Services"
                className="group relative sm:col-span-5 h-[230px] sm:h-[240px] lg:h-[238px] overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#dfb76c]/30 bg-[#2B1C17] shadow-[0_12px_30px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-400 hover:border-[#C8A66A] hover:shadow-[0_18px_42px_rgba(200,166,106,0.26)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
              >
                <img
                  src="/images/skin-facial.jpg"
                  alt="Skin & Facial Services by S Touch Salon"
                  className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1C120F]/70 border border-[#C8A66A]/45 backdrop-blur-md">
                  <span className={`${cormorant.className} text-xs font-semibold text-[#dfb76c]`}>03</span>
                  <span className="h-2 w-px bg-[#C8A66A]/40" />
                  <span className={`${inter.className} text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F5F0E8]`}>
                    Radiance
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/60 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
                  <div>
                    <span className="block text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                      Hydra &amp; Clinical
                    </span>
                    <h3
                      className={`${cormorant.className} text-lg sm:text-xl lg:text-[21px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                    >
                      Skin &amp; Facial
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                  </span>
                </div>
              </button>

              {/* CARD 4: Beauty & Grooming (5 cols on sm, 5 cols on lg) */}
              <button
                type="button"
                onClick={onSelectBeautyGrooming}
                aria-label="Beauty & Grooming Services"
                className="group relative sm:col-span-5 h-[230px] sm:h-[240px] lg:h-[238px] overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#dfb76c]/30 bg-[#2B1C17] shadow-[0_12px_30px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-400 hover:border-[#C8A66A] hover:shadow-[0_18px_42px_rgba(200,166,106,0.26)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
              >
                <img
                  src="/images/beauty-grooming.jpg"
                  alt="Beauty & Grooming Services by S Touch Salon"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1C120F]/70 border border-[#C8A66A]/45 backdrop-blur-md">
                  <span className={`${cormorant.className} text-xs font-semibold text-[#dfb76c]`}>04</span>
                  <span className="h-2 w-px bg-[#C8A66A]/40" />
                  <span className={`${inter.className} text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F5F0E8]`}>
                    Salon Rituals
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/60 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
                  <div>
                    <span className="block text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                      Care &amp; Polish
                    </span>
                    <h3
                      className={`${cormorant.className} text-lg sm:text-xl lg:text-[21px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                    >
                      Beauty &amp; Grooming
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                  </span>
                </div>
              </button>

              {/* CARD 5: Additional Services (7 cols on sm, 7 cols on lg) */}
              <button
                type="button"
                onClick={onSelectAdditionalServices}
                aria-label="Additional Services"
                className="group relative sm:col-span-7 h-[230px] sm:h-[240px] lg:h-[238px] overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#dfb76c]/30 bg-[#2B1C17] shadow-[0_12px_30px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-400 hover:border-[#C8A66A] hover:shadow-[0_18px_42px_rgba(200,166,106,0.26)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
              >
                <img
                  src="/images/preplating copy.jpg"
                  alt="Additional Services - Saree Pre-Pleating"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1C120F]/70 border border-[#C8A66A]/45 backdrop-blur-md">
                  <span className={`${cormorant.className} text-xs font-semibold text-[#dfb76c]`}>05</span>
                  <span className="h-2 w-px bg-[#C8A66A]/40" />
                  <span className={`${inter.className} text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F5F0E8]`}>
                    Saree Draping
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/60 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
                  <div>
                    <span className="block text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                      Pre-Pleating &amp; Box Folding
                    </span>
                    <h3
                      className={`${cormorant.className} text-lg sm:text-xl lg:text-[22px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                    >
                      Additional Services
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* =======================================================================
              TIER 2: Consultation Highlight & Men's Suite (Balanced 12-col layout)
             ======================================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch">
            {/* ---------------------------------------------------------------------
                CARD 6: Appointment Enquiry (Panoramic Consultation Feature — 6 cols)
               --------------------------------------------------------------------- */}
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Appointment Enquiry via WhatsApp"
              className="group relative sm:col-span-12 lg:col-span-6 h-[210px] sm:h-[230px] lg:h-[240px] overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#dfb76c]/35 bg-[#2B1C17] shadow-[0_12px_32px_rgba(28,18,15,0.14)] text-left cursor-pointer transition-all duration-400 hover:border-[#C8A66A] hover:shadow-[0_20px_46px_rgba(200,166,106,0.28)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A] block"
            >
              <img
                src="/images/appointment.jpg"
                alt="Appointment Booking at S Touch Salon"
                className="h-full w-full object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C120F]/70 border border-[#C8A66A]/45 backdrop-blur-md">
                <span className={`${cormorant.className} text-xs sm:text-sm font-semibold text-[#dfb76c]`}>06</span>
                <span className="h-2 w-px bg-[#C8A66A]/40" />
                <span className={`${inter.className} text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5F0E8]`}>
                  VIP Concierge
                </span>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/65 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                <div>
                  <span className="block text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                    Direct WhatsApp Booking
                  </span>
                  <h3
                    className={`${cormorant.className} text-xl sm:text-2xl lg:text-[24px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                  >
                    Appointment Enquiry
                  </h3>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C8A66A] text-[#1C120F] text-xs font-semibold tracking-wider shadow-md transition-all duration-300 group-hover:bg-[#dfb76c] group-hover:scale-105">
                  <span>Enquire</span>
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                </span>
              </div>
            </a>

            {/* ---------------------------------------------------------------------
                CARD 7: Groom Makeup (3 cols on lg, 6 cols on sm)
               --------------------------------------------------------------------- */}
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Groom Makeup Enquiry"
              className="group relative sm:col-span-6 lg:col-span-3 h-[210px] sm:h-[230px] lg:h-[240px] overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#dfb76c]/30 bg-[#2B1C17] shadow-[0_12px_30px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-400 hover:border-[#C8A66A] hover:shadow-[0_18px_42px_rgba(200,166,106,0.26)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A] block"
            >
              <img
                src="/images/Groom.jpg"
                alt="Groom Makeup by S Touch Salon"
                className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1C120F]/70 border border-[#C8A66A]/45 backdrop-blur-md">
                <span className={`${cormorant.className} text-xs font-semibold text-[#dfb76c]`}>07</span>
                <span className="h-2 w-px bg-[#C8A66A]/40" />
                <span className={`${inter.className} text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F5F0E8]`}>
                  Groom Suite
                </span>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/60 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-end justify-between gap-2.5">
                <div>
                  <span className="block text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                    Wedding Suite
                  </span>
                  <h3
                    className={`${cormorant.className} text-lg sm:text-xl lg:text-[21px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                  >
                    Groom Makeup
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                </span>
              </div>
            </a>

            {/* ---------------------------------------------------------------------
                CARD 8: Men's Services (3 cols on lg, 6 cols on sm)
               --------------------------------------------------------------------- */}
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Men's Services Enquiry"
              className="group relative sm:col-span-6 lg:col-span-3 h-[210px] sm:h-[230px] lg:h-[240px] overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#dfb76c]/30 bg-[#2B1C17] shadow-[0_12px_30px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-400 hover:border-[#C8A66A] hover:shadow-[0_18px_42px_rgba(200,166,106,0.26)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A] block"
            >
              <img
                src="/images/mens-services.jpg"
                alt="Men's Services & Grooming by S Touch Salon"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1C120F]/70 border border-[#C8A66A]/45 backdrop-blur-md">
                <span className={`${cormorant.className} text-xs font-semibold text-[#dfb76c]`}>08</span>
                <span className="h-2 w-px bg-[#C8A66A]/40" />
                <span className={`${inter.className} text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F5F0E8]`}>
                  Executive Salon
                </span>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/60 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-end justify-between gap-2.5">
                <div>
                  <span className="block text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                    Styling &amp; Beard Care
                  </span>
                  <h3
                    className={`${cormorant.className} text-lg sm:text-xl lg:text-[21px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                  >
                    Men&apos;s Services
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
