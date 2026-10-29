"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

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
      className="relative w-full overflow-hidden rounded-[22px] sm:rounded-[30px] lg:rounded-[38px] bg-[#F5F0E8] border border-[#3A2921]/15 shadow-[0_20px_50px_rgba(28,18,15,0.12)] py-8 sm:py-10 lg:py-12 px-3 sm:px-6 lg:px-8 select-none"
    >
      {/* =========================================================================
          1. WARM IVORY & SOFT CREAM TEXTURED BACKGROUND
         ========================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,246,240,0.92)_0%,rgba(245,240,232,0.96)_55%,#EAE1D5_100%)]"
      />

      {/* =========================================================================
          2. DECORATIVE DIAGONAL CHAMPAGNE-GOLD CORNER SHAPES
         ========================================================================= */}
      {/* Top-Left Diagonal Corner Shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-36 w-36 sm:h-52 sm:w-52 lg:h-64 lg:w-64 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="corner-grad-tl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A66A" stopOpacity="0.28" />
              <stop offset="65%" stopColor="#C8A66A" stopOpacity="0.08" />
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
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      {/* Bottom-Right Diagonal Corner Shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 sm:h-52 sm:w-52 lg:h-64 lg:w-64 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="corner-grad-br" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#C8A66A" stopOpacity="0.28" />
              <stop offset="65%" stopColor="#C8A66A" stopOpacity="0.08" />
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
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1140px]">
        {/* =========================================================================
            3. THIN RECTANGULAR OUTLINE BEHIND THE COLLAGE
           ========================================================================= */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-2.5 sm:inset-5 lg:inset-6 z-0 border border-[#C8A66A]/35 rounded-[6px]"
        />

        {/* =========================================================================
            4. HEADER: Subtitle + Main Heading + Delicate Gold Divider
           ========================================================================= */}
        <div className="relative z-10 flex flex-col items-center text-center mb-6 sm:mb-8 lg:mb-9">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="h-px w-5 sm:w-7 bg-[#C8A66A]" />
            <span
              className={`${inter.className} text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.26em] text-[#C8A66A]`}
            >
              Choose a Perfect Service
            </span>
            <span className="h-px w-5 sm:w-7 bg-[#C8A66A]" />
          </div>

          {/* Main Heading */}
          <h2
            className={`${cormorant.className} mt-2 text-2xl font-normal tracking-tight text-[#1C120F] sm:text-3xl lg:text-[40px] leading-[1.12] drop-shadow-sm`}
          >
            Our Premium Services
          </h2>

          {/* Delicate Gold Accent Divider */}
          <div className="mt-3 flex items-center gap-1.5 sm:gap-2">
            <span className="h-[1.5px] w-8 sm:w-10 bg-[#C8A66A]" />
            <span className="h-1 w-1 rounded-full bg-[#C8A66A]" />
            <span className="h-[1px] w-12 sm:w-16 bg-[#C8A66A]/40" />
          </div>
        </div>

        {/* =========================================================================
            5. COMPACT PREMIUM SERVICE CARDS WITH INSIDE TEXTS
            - Scaled down heights & tighter spacing for a refined editorial feel
           ========================================================================= */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4.5">
          {/* -----------------------------------------------------------------------
              ROW 1, CARD 1: Bridal Makeup (Flagship Hero Card — 5 columns)
             ----------------------------------------------------------------------- */}
          <button
            type="button"
            onClick={onSelectBridalMakeup}
            aria-label="Bridal Makeup Services"
            className="group relative sm:col-span-2 lg:col-span-5 h-[270px] sm:h-[310px] lg:h-[350px] overflow-hidden rounded-[6px] sm:rounded-[8px] border border-[#3A2921]/15 bg-[#2B1C17] shadow-[0_10px_26px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-350 hover:border-[#C8A66A] hover:shadow-[0_16px_36px_rgba(200,166,106,0.25)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/bridal-makeup.jpg"
              alt="Bridal Makeup by S Touch Salon"
              className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Scrim Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-36 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent"
            />
            {/* Specular Top Sheen */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
            />
            {/* Inside Text */}
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
              <div>
                <span className="block text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                  Signature Makeover
                </span>
                <h3
                  className={`${cormorant.className} text-lg sm:text-xl lg:text-[22px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                >
                  Bridal Makeup
                </h3>
              </div>
              <span className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </span>
            </div>
          </button>

          {/* -----------------------------------------------------------------------
              ROW 1, CARD 2: Hair Services (4 columns)
             ----------------------------------------------------------------------- */}
          <button
            type="button"
            onClick={onSelectHairServices}
            aria-label="Hair Services"
            className="group relative sm:col-span-1 lg:col-span-4 h-[270px] sm:h-[310px] lg:h-[350px] overflow-hidden rounded-[6px] sm:rounded-[8px] border border-[#3A2921]/15 bg-[#2B1C17] shadow-[0_10px_26px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-350 hover:border-[#C8A66A] hover:shadow-[0_16px_36px_rgba(200,166,106,0.25)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/hair-services.jpg"
              alt="Hair Services & Treatments by S Touch Salon"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-36 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
              <div>
                <span className="block text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                  Couture Styling &amp; Spa
                </span>
                <h3
                  className={`${cormorant.className} text-lg sm:text-xl lg:text-[22px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                >
                  Hair Services
                </h3>
              </div>
              <span className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </span>
            </div>
          </button>

          {/* -----------------------------------------------------------------------
              ROW 1, CARD 3: Skin & Facial Services (3 columns)
             ----------------------------------------------------------------------- */}
          <button
            type="button"
            onClick={onSelectSkinFacial}
            aria-label="Skin & Facial Services"
            className="group relative sm:col-span-1 lg:col-span-3 h-[270px] sm:h-[310px] lg:h-[350px] overflow-hidden rounded-[6px] sm:rounded-[8px] border border-[#3A2921]/15 bg-[#2B1C17] shadow-[0_10px_26px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-350 hover:border-[#C8A66A] hover:shadow-[0_16px_36px_rgba(200,166,106,0.25)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/skin-facial.jpg"
              alt="Skin & Facial Services by S Touch Salon"
              className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-36 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
              <div>
                <span className="block text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                  Rejuvenation &amp; Glow
                </span>
                <h3
                  className={`${cormorant.className} text-lg sm:text-xl lg:text-[21px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                >
                  Skin &amp; Facial
                </h3>
              </div>
              <span className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </span>
            </div>
          </button>

          {/* -----------------------------------------------------------------------
              ROW 2, CARD 4: Beauty & Grooming Services (4 columns)
             ----------------------------------------------------------------------- */}
          <button
            type="button"
            onClick={onSelectBeautyGrooming}
            aria-label="Beauty & Grooming Services"
            className="group relative sm:col-span-1 lg:col-span-4 h-[220px] sm:h-[250px] lg:h-[280px] overflow-hidden rounded-[6px] sm:rounded-[8px] border border-[#3A2921]/15 bg-[#2B1C17] shadow-[0_10px_26px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-350 hover:border-[#C8A66A] hover:shadow-[0_16px_36px_rgba(200,166,106,0.25)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/beauty-grooming.jpg"
              alt="Beauty & Grooming Services by S Touch Salon"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
              <div>
                <span className="block text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                  Salon Rituals &amp; Polish
                </span>
                <h3
                  className={`${cormorant.className} text-base sm:text-lg lg:text-[20px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                >
                  Beauty &amp; Grooming
                </h3>
              </div>
              <span className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </span>
            </div>
          </button>

          {/* -----------------------------------------------------------------------
              ROW 2, CARD 5: Additional Services (4 columns)
             ----------------------------------------------------------------------- */}
          <button
            type="button"
            onClick={onSelectAdditionalServices}
            aria-label="Additional Services"
            className="group relative sm:col-span-1 lg:col-span-4 h-[220px] sm:h-[250px] lg:h-[280px] overflow-hidden rounded-[6px] sm:rounded-[8px] border border-[#3A2921]/15 bg-[#2B1C17] shadow-[0_10px_26px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-350 hover:border-[#C8A66A] hover:shadow-[0_16px_36px_rgba(200,166,106,0.25)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/preplating copy.jpg"
              alt="Additional Services - Saree Pre-Pleating"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
              <div>
                <span className="block text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                  Saree Pleating &amp; Folding
                </span>
                <h3
                  className={`${cormorant.className} text-base sm:text-lg lg:text-[20px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                >
                  Additional Services
                </h3>
              </div>
              <span className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </span>
            </div>
          </button>

          {/* -----------------------------------------------------------------------
              ROW 2, CARD 6: Appointment Enquiry (4 columns)
             ----------------------------------------------------------------------- */}
          <a
            href={WHATSAPP_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Appointment Enquiry via WhatsApp"
            className="group relative sm:col-span-2 lg:col-span-4 h-[220px] sm:h-[250px] lg:h-[280px] overflow-hidden rounded-[6px] sm:rounded-[8px] border border-[#3A2921]/15 bg-[#2B1C17] shadow-[0_10px_26px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-350 hover:border-[#C8A66A] hover:shadow-[0_16px_36px_rgba(200,166,106,0.25)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A] block"
          >
            <img
              src="/images/appointment.jpg"
              alt="Appointment Booking at S Touch Salon"
              className="h-full w-full object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
              <div>
                <span className="block text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                  Instant Consultation
                </span>
                <h3
                  className={`${cormorant.className} text-base sm:text-lg lg:text-[20px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                >
                  Appointment Enquiry
                </h3>
              </div>
              <span className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </span>
            </div>
          </a>

          {/* -----------------------------------------------------------------------
              ROW 3, CARD 7: Groom Makeup (6 columns)
             ----------------------------------------------------------------------- */}
          <a
            href={WHATSAPP_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Groom Makeup Enquiry"
            className="group relative sm:col-span-1 lg:col-span-6 h-[190px] sm:h-[220px] lg:h-[250px] overflow-hidden rounded-[6px] sm:rounded-[8px] border border-[#3A2921]/15 bg-[#2B1C17] shadow-[0_10px_26px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-350 hover:border-[#C8A66A] hover:shadow-[0_16px_36px_rgba(200,166,106,0.25)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A] block"
          >
            <img
              src="/images/Groom.jpg"
              alt="Groom Makeup by S Touch Salon"
              className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
              <div>
                <span className="block text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                  Royal Wedding Suite
                </span>
                <h3
                  className={`${cormorant.className} text-base sm:text-lg lg:text-[20px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                >
                  Groom Makeup
                </h3>
              </div>
              <span className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </span>
            </div>
          </a>

          {/* -----------------------------------------------------------------------
              ROW 3, CARD 8: Men's Services (6 columns)
             ----------------------------------------------------------------------- */}
          <a
            href={WHATSAPP_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Men's Services Enquiry"
            className="group relative sm:col-span-1 lg:col-span-6 h-[190px] sm:h-[220px] lg:h-[250px] overflow-hidden rounded-[6px] sm:rounded-[8px] border border-[#3A2921]/15 bg-[#2B1C17] shadow-[0_10px_26px_rgba(28,18,15,0.12)] text-left cursor-pointer transition-all duration-350 hover:border-[#C8A66A] hover:shadow-[0_16px_36px_rgba(200,166,106,0.25)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A] block"
          >
            <img
              src="/images/mens-services.jpg"
              alt="Men's Services & Grooming by S Touch Salon"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/60 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-4.5 flex items-end justify-between gap-2.5">
              <div>
                <span className="block text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A66A] mb-0.5">
                  Executive Salon Care
                </span>
                <h3
                  className={`${cormorant.className} text-base sm:text-lg lg:text-[20px] font-medium tracking-[0.02em] text-[#F5F0E8] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`}
                >
                  Men&apos;s Services
                </h3>
              </div>
              <span className="shrink-0 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#C8A66A]/20 border border-[#C8A66A]/50 text-[#C8A66A] shadow-sm backdrop-blur-md transition-all duration-300 group-hover:bg-[#C8A66A] group-hover:text-[#1C120F] group-hover:scale-105">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
