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

const WHATSAPP_RENTAL_JEWELS_URL =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch! I'd love to enquire about Rental Jewels.");

interface ServicesEditorialCollageProps {
  onSelectBridalMakeup?: () => void;
  onSelectHairServices?: () => void;
  onSelectBeautyGrooming?: () => void;
  onSelectSkinFacial?: () => void;
  onSelectAdditionalServices?: () => void;
  onSelectMensServices?: () => void;
  onSelectGroomMakeup?: () => void;
}

export default function ServicesEditorialCollage({
  onSelectBridalMakeup,
  onSelectHairServices,
  onSelectBeautyGrooming,
  onSelectSkinFacial,
  onSelectAdditionalServices,
  onSelectMensServices,
  onSelectGroomMakeup,
}: ServicesEditorialCollageProps = {}) {
  return (
    <section
      aria-label="Editorial Services Gallery"
      className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,#2f1c13_0%,#20120b_52%,#140a05_100%)] border border-[#dfb76c]/30 shadow-[0_30px_90px_rgba(15,7,4,0.75)] pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 lg:pb-8 px-3 sm:px-6 lg:px-8 select-none rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]"
    >
      {/* =========================================================================
          1. WARM IVORY BACKGROUND WITH DIAGONAL CHAMPAGNE-GOLD CORNERS
             (Exact reference: solid diagonal triangles at Top-Left & Bottom-Right)
         ========================================================================= */}
      {/* Subtle Warm Amber Ambient Spotlight in Center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-full max-w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#dfb76c]/12 via-[#8b4a28]/10 to-transparent blur-[120px] z-0"
      />

      {/* Top-Left Champagne-Gold Corner Shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="goldCornerTL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdf0d5" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#dfb76c" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#8b4a28" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2f1c13" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 0,100" fill="url(#goldCornerTL)" />
        </svg>
      </div>

      {/* Bottom-Right Champagne-Gold Corner Shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="goldCornerBR" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#fdf0d5" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#dfb76c" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#8b4a28" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2f1c13" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="100,100 0,100 100,0" fill="url(#goldCornerBR)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1160px]">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 pt-1">
          <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3">
            <span className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#dfb76c]" />
            <span className={`${inter.className} text-[10.5px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#dfb76c]`}>
              Choose a Perfect Service
            </span>
            <span className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#dfb76c]" />
          </div>
          <h2 className={`${cormorant.className} mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-normal tracking-wide text-[#F5F0E8]`}>
            Our Premium Services
          </h2>
        </div>

        {/* =========================================================================
            DESKTOP & TABLET EDITORIAL COLLAGE (Strict replica of uploaded reference)
            - Proportional 1000 x 1280 coordinate stage
            - Thin rectangular outline running behind the collage
            - Cursive "Love" script in upper-right open space
            - Editorial philosophy block in lower-left
            - All 8 service frames with inside text + micro-accents
           ========================================================================= */}
        <div className="relative hidden md:block w-full h-[880px] lg:h-[950px] xl:h-[990px] z-10">
          {/* -----------------------------------------------------------------------
              THE THIN RECTANGULAR OUTLINE
              (Exact reference: runs from top-left behind center image, across to right,
               down right edge, and across bottom behind lower images)
             ----------------------------------------------------------------------- */}
          <svg
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 w-full h-full z-0"
          >
            {/* Main outlined rectangular contour */}
            <path
              d="M 175 140 H 955 V 830 H 465"
              fill="none"
              stroke="#dfb76c" strokeWidth="1.6" strokeOpacity="0.45"
            />
          </svg>

          {/* -----------------------------------------------------------------------
              FRAME 1 (Upper-Left Image): Additional Services
              (Exact reference: medium landscape image on left, below top edge)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[7%] top-[17%] w-[28%] h-[21.5%] z-10"
          >
            <button
              type="button"
              onClick={onSelectAdditionalServices}
              aria-label="Additional Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/preplating copy.jpg"
                alt="Additional Services - Saree Pre-Pleating"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-1.5">
                <div>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Additional Services
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] group-hover:border-[#dfb76c] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2] transition-colors duration-200" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 2 (Top Center Hero): Bridal Makeup
              (Exact reference: tall vertical image near upper-middle, breaks top line)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[34.5%] top-[2%] w-[27%] h-[36.5%] z-20"
          >
            <button
              type="button"
              onClick={onSelectBridalMakeup}
              aria-label="Bridal Makeup Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/40 bg-[#1e110a] shadow-[0_14px_36px_rgba(0,0,0,0.7)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_16px_45px_rgba(223,183,108,0.3)] focus:outline-none"
            >
              <img
                src="/images/imageee.jpg"
                alt="Bridal Makeup by S Touch Salon"
                className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F]/95 via-[#1C120F]/45 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2">
                <div>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Bridal Makeup
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] group-hover:border-[#dfb76c] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2] transition-colors duration-200" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 3 (Middle-Left Image): Skin & Facial Services
              (Exact reference: medium portrait/square directly below Frame 1)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[3.5%] top-[38.8%] w-[24%] h-[26%] z-15"
          >
            <button
              type="button"
              onClick={onSelectSkinFacial}
              aria-label="Skin & Facial Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/skin-facial.jpg"
                alt="Skin & Facial Services by S Touch Salon"
                className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-22 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-1.5">
                <div>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Skin &amp; Facial
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] group-hover:border-[#dfb76c] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2] transition-colors duration-200" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 4 (Center Main Centerpiece): Appointment Enquiry
              (Exact reference: large center photo, flush below Frame 2 & beside Frame 3)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[27%] top-[38.8%] w-[35%] h-[26%] z-10"
          >
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Appointment Enquiry via WhatsApp"
              className="group relative block w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/appointment.jpg"
                alt="Appointment Booking at S Touch Salon"
                className="h-full w-full object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2">
                <div>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Appointment Enquiry
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] group-hover:border-[#dfb76c] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2] transition-colors duration-200" />
                </span>
              </div>
            </a>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 5 (Right Column - Top Item): Beauty & Grooming
              (Exact reference: right side, below the "Love" cursive script)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[62.5%] top-[23%] w-[21.5%] h-[19%] z-10"
          >
            <button
              type="button"
              onClick={onSelectBeautyGrooming}
              aria-label="Beauty & Grooming Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/beauty-grooming.jpg"
                alt="Beauty & Grooming Services by S Touch Salon"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                <div>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Beauty &amp; Grooming
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] group-hover:border-[#dfb76c] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                  <ArrowUpRight className="h-2.5 w-2.5 stroke-[2.2] transition-colors duration-200" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 6 (Right Column - Middle Item): Groom Makeup
              (Exact reference: directly below Frame 5)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[62.5%] top-[42.5%] w-[21.5%] h-[26%] z-10"
          >
            <button
              type="button"
              onClick={onSelectGroomMakeup}
              aria-label="Groom Makeup"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/Groom.jpg"
                alt="Groom Makeup by S Touch Salon"
                className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-1.5">
                <div>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Groom Makeup
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] group-hover:border-[#dfb76c] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2] transition-colors duration-200" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 7 (Far Right - Overlapping the Outline): Hair Services
              (Exact reference: narrow vertical photo breaking the right border line)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[84%] top-[33%] w-[16.5%] h-[20%] z-20"
          >
            <button
              type="button"
              onClick={onSelectHairServices}
              aria-label="Hair Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/35 bg-[#1e110a] shadow-[0_12px_32px_rgba(0,0,0,0.65)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/hair-services.jpg"
                alt="Hair Services & Rituals by S Touch Salon"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 flex items-end justify-between gap-1">
                <div>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Hair Services
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] group-hover:border-[#dfb76c] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                  <ArrowUpRight className="h-2.5 w-2.5 stroke-[2] transition-colors duration-200" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 8 (Bottom Center - Left): Men's Services
              (Exact reference: vertical portrait below centerpiece, breaks bottom line)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[26%] top-[65%] w-[20.5%] h-[29.5%] z-20"
          >
            <button
              type="button"
              onClick={onSelectMensServices}
              aria-label="Men's Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/35 bg-[#1e110a] shadow-[0_12px_32px_rgba(0,0,0,0.65)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/mens-services.jpg"
                alt="Men's Services by S Touch Salon"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-22 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-1.5">
                <div>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Men&apos;s Services
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] group-hover:border-[#dfb76c] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2] transition-colors duration-200" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 9 (Bottom Center - Right): Rental Jewels
              (Exact reference: right beside bottom-center portrait, below centerpiece)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[47%] top-[65%] w-[15.5%] h-[26%] z-15"
          >
            <a
              href={WHATSAPP_RENTAL_JEWELS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rental Jewels Enquiry via WhatsApp"
              className="group relative block w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/rental jewels.jpg"
                alt="Rental Jewels by S Touch Salon"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                <div>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Rental Jewels
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] group-hover:border-[#dfb76c] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                  <ArrowUpRight className="h-2.5 w-2.5 stroke-[2] transition-colors duration-200" />
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* =========================================================================
            MOBILE EDITORIAL LAYOUT (< md)
            - Responsive 2-column editorial magazine collage
            - Retains the exact aesthetic: cursive "Love", thin outline, inside texts
           ========================================================================= */}
        <div className="relative md:hidden flex flex-col gap-5 z-10 pt-0 pb-2 px-1">
          {/* Mobile Collage Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Card 1: Bridal Makeup (Tall Full-Width) */}
            <div className="col-span-2">
              <button
                type="button"
                onClick={onSelectBridalMakeup}
                aria-label="Bridal Makeup"
                className="group relative w-full h-[360px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/imageee.jpg"
                  alt="Bridal Makeup"
                  className="h-full w-full object-cover object-[center_15%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2">
                  <div>
                    <h3 className={`${cormorant.className} text-[15px] sm:text-base font-medium text-[#F5F0E8] leading-tight`}>
                      Bridal Makeup
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                    <ArrowUpRight className="h-3.5 w-3.5 transition-colors duration-200" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 2: Additional Services */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectAdditionalServices}
                aria-label="Additional Services"
                className="group relative w-full h-[210px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/preplating copy.jpg"
                  alt="Additional Services"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                  <div>
                    <h3 className={`${cormorant.className} text-[15px] sm:text-base font-medium text-[#F5F0E8] leading-tight`}>
                      Additional Services
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                    <ArrowUpRight className="h-2.5 w-2.5 transition-colors duration-200" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 3: Groom Makeup */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectGroomMakeup}
                aria-label="Groom Makeup"
                className="group relative w-full h-[210px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/Groom.jpg"
                  alt="Groom Makeup"
                  className="h-full w-full object-cover object-[center_18%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                  <div>
                    <h3 className={`${cormorant.className} text-[15px] sm:text-base font-medium text-[#F5F0E8] leading-tight`}>
                      Groom Makeup
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                    <ArrowUpRight className="h-2.5 w-2.5 transition-colors duration-200" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 4: Skin & Facial */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectSkinFacial}
                aria-label="Skin & Facial"
                className="group relative w-full h-[210px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/skin-facial.jpg"
                  alt="Skin & Facial"
                  className="h-full w-full object-cover object-[center_25%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                  <div>
                    <h3 className={`${cormorant.className} text-[15px] sm:text-base font-medium text-[#F5F0E8] leading-tight`}>
                      Skin &amp; Facial
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                    <ArrowUpRight className="h-2.5 w-2.5 transition-colors duration-200" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 5: Beauty & Grooming */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectBeautyGrooming}
                aria-label="Beauty & Grooming"
                className="group relative w-full h-[210px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/beauty-grooming.jpg"
                  alt="Beauty & Grooming"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                  <div>
                    <h3 className={`${cormorant.className} text-[15px] sm:text-base font-medium text-[#F5F0E8] leading-tight`}>
                      Beauty &amp; Grooming
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                    <ArrowUpRight className="h-2.5 w-2.5 transition-colors duration-200" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 6: Appointment Enquiry (Panoramic) */}
            <div className="col-span-2">
              <a
                href={WHATSAPP_ENQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Appointment Enquiry"
                className="group relative w-full h-[220px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/appointment.jpg"
                  alt="Appointment Enquiry"
                  className="h-full w-full object-cover object-[center_45%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-2">
                  <div>
                    <h3 className={`${cormorant.className} text-[15px] sm:text-base font-medium text-[#F5F0E8] leading-tight`}>
                      Appointment Enquiry
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C8A66A] text-[#1C120F] text-xs font-semibold">
                    <span>Enquire</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </div>

            {/* Card 7: Hair Services */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectHairServices}
                aria-label="Hair Services"
                className="group relative w-full h-[185px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/hair-services.jpg"
                  alt="Hair Services"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2 flex items-end justify-between gap-1">
                  <div>
                    <h3 className={`${cormorant.className} text-[15px] sm:text-base font-medium text-[#F5F0E8] leading-tight`}>
                      Hair Services
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                    <ArrowUpRight className="h-2.5 w-2.5 transition-colors duration-200" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 8: Men's Services */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectMensServices}
                aria-label="Men's Services"
                className="group relative w-full h-[185px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/mens-services.jpg"
                  alt="Men's Services"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2 flex items-end justify-between gap-1">
                  <div>
                    <h3 className={`${cormorant.className} text-[15px] sm:text-base font-medium text-[#F5F0E8] leading-tight`}>
                      Men&apos;s Services
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dfb76c] group-hover:text-[#1C120F] hover:!bg-[#dfb76c] hover:!text-[#1C120F]">
                    <ArrowUpRight className="h-2.5 w-2.5 transition-colors duration-200" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 9: Rental Jewels */}
            <div className="col-span-2">
              <a
                href={WHATSAPP_RENTAL_JEWELS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rental Jewels Enquiry via WhatsApp"
                className="group relative w-full h-[210px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/rental jewels.jpg"
                  alt="Rental Jewels"
                  className="h-full w-full object-cover object-[center_30%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-22 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-2">
                  <div>
                    <h3 className={`${cormorant.className} text-[15px] sm:text-base font-medium text-[#F5F0E8] leading-tight`}>
                      Rental Jewels
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C8A66A] text-[#1C120F] text-xs font-semibold">
                    <span>Enquire</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
